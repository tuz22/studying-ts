/* class에서 타입 지정 */

class Person {
    name: string;
    constructor(x: string) {
        this.name = x;
    }
    함수(x: string) {
        console.log(x);
    }
}
// Person.prototype.함수 = function () {};

let 사람1 = new Person('kim');
let 사람2 = new Person('Lee');
사람1.함수('안녕');

// ---- 문제 ----
// 1. Car 클래스를 만들고 싶습니다.
// - { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.
// - 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다.
// - model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요.
/* 
    ex)
    let car1 = new Car('소나타', 3000)
    console.log(car1) //콘솔창 출력결과는 { model : '소나타', price : 3000 }
    console.log(car1.tax()) //콘솔창 출력결과는 300 
*/

class Car {
    model: string;
    price: number;
    constructor(a: string, b: number) {
        this.model = a;
        this.price = b;
    }
    tax(): number {
        return this.price * 0.1;
    }
}
let car1 = new Car('소나타', 3000);
console.log(car1); //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()); //콘솔창 출력결과는 300

// 2. class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.
// - object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면
// - 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고
// - 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.
// - class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 그리고 타입도 지정합시다.
/* 
    ex)
    let obj = new Word('kim', 3, 5, 'park');
    console.log(obj.num) //[3,5]
    console.log(obj.str) //['kim', 'park'] 
*/
class Word {
    num;
    str;
    constructor(...param: (number | string)[]) {
        let 숫자들: number[] = [];
        let 문자들: string[] = [];

        param.forEach((i) => {
            if (typeof i === 'string') {
                문자들.push(i);
            } else {
                숫자들.push(i);
            }
        });
        this.num = 숫자들;
        this.str = 문자들;
    }
}
let obj = new Word('kim', 3, 4, 'lee');
console.log(obj.num); // [3,5]
console.log(obj.str); // ['kim', 'park']
