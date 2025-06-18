import './app.css';

import {
  isRouteErrorResponse,
  Links,
  type LinksFunction,
  type LoaderFunctionArgs,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';

import { getLanguageSession, getThemeSession } from './.server/services/session.service';
import type { Route } from './+types/root';
import Footer from './components/footer';
import Header from './components/header';
import TestHeader from './components/test-header';
import { LanguageProvider } from './hooks/use-language';
import { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from './hooks/use-theme';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const [{ getLanguage }, { getTheme }] = await Promise.all([
    getLanguageSession(request),
    getThemeSession(request),
  ]);
  const url = new URL(request.url);
  const isTest = url.pathname.includes('quest');
  return { lang: getLanguage(), ssrTheme: getTheme(), isTest };
};

export const links: LinksFunction = () => {
  return [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
    },
  ];
};

export const App = ({ lang, ssrTheme, isTest }: Route.ComponentProps['loaderData']) => {
  const [theme] = useTheme();

  return (
    <html lang={lang} className={theme ?? ''} data-theme={theme ?? ''}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(ssrTheme)} />
        <Links />
      </head>
      <body>
        {isTest ? <TestHeader /> : <Header />}

        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {!isTest && <Footer />}
      </body>
    </html>
  );
};

export default function AppWithProviders({ loaderData }: Route.ComponentProps) {
  const { lang, ssrTheme, isTest } = loaderData;

  return (
    <LanguageProvider specifiedLanguage={lang} languageAction="/api/language">
      <ThemeProvider specifiedTheme={ssrTheme} themeAction="/api/theme">
        <App {...loaderData} />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export const ErrorBoundary = ({ error }: Route.ErrorBoundaryProps) => {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="container mx-auto p-4 pt-16">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
};
