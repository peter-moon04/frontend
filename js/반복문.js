//for 반복문
for (let i = 2; i < 9999999; i *= 2) {
    console.log('지금 현재 i는', i, '입니다');
}

// while 반복문 (조건이 참인 동안 반복)
let j = 0;
while (j < 10) {
    console.log('지금 현재 j는', j, '입니다');
    j++;
}

// do-while 반복문 (최소 한번은 실행됨)
let k = 0;
do {
    console.log('지금 현재 k는', k, '입니다');
    k++;
} while (k < 10);

const person = {
    john: {
        age: 29,
        job: 'developer',
        sex: 'man',
        height: 180,
    },
    jane: {
        age: 25,
        job: 'designeer',
        sex: 'girl',
        height: 170,
    },
    mike: {
        age: 35,
        job: 'manager',
        sex: 'man',
        height: 175,
    },
};

// for (i in person) {
//     if (person[i].age < 30 && person[i].sex === 'girl') {
//         console.log('30살 미만의 여자', i);
//     }
// }

for (i in person) {
    for (j in person[i]) {
        if (person[i].age < 30) {
            if (person[i]['sex'] === 'girl') {
                console.log('30살 미만의 여자:', i);
            }
        }
    }
}