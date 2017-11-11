// 객체생성방법1. new Object();

var obj = new Object();
console.log(typeof obj);
console.log(obj.constructor === Object);

obj.name = 'aaa';
obj.age = '123';
console.log(obj);

// string, bool, number 예외적으로
var s = new Object('str');
console.log(s);

// 1번방법은 위와같은 예외가 있어서 절대 사용하지 않는다.
////////////////////////////////////////////////////////////////////

// 객체생성방법2. 리터럴방식 var a = 5; 가장많이 사용.
var obj2 = {
    name : 'aaa',
    age : 123
};
console.log(typeof obj2);
console.log(obj2.constructor === Object);
console.log(obj2);

// 어떨때 사용할까?
// 1. namespace 모듈화
// 2. option값
/////////////////////////////////////////////////////////////////////

// 객체생성방법3. 생성자함수 new ...이것도 많이 사용
// var 하고 무조건 대문자로 시작. .... 대문자로 시작하혹 this가 나오면 생성자 함수구나~ 하고 생각하면 된다
// 붕어빵틀(생성자함수) 하나를 잘 만들어놓으면 => 붕어빵

var Person = function(name){ // 지금의 name은 아무의미 없어요.
    this.name = name // this = Person 나 자신
};
// 생성자함수는 new로 만들어야되요.
var p1 = new Person('철수');
var p2 = new Person('민수');
var p3 = new Person('영희');

console.log(p1.name);
console.log(p2.name);
console.log(p3.name);
/////////////////////////////////////////////////////////////////////

// 객체의 추가,갱신,삭제,탐색
var obj3 = {};
obj3.name = 'asd'; //추가
obj3.name = 'asd22'; //갱신
//객체는 없는 값은 추가를하고 있는값은 갱신을 합니다.
obj3.age = 2000;
console.log(obj3);
console.log('age를 삭제할거에요');
delete obj3.age;
console.log(obj3);

obj3.age = 3000;
obj3.temp = 'empty';
//탐색 (for in사용)
var key;
for(key in obj3){
    console.log("key : " + key  + ", vlaeu :" + obj3[key]);
}

// 접근 2가지 방법(. / [])
var obj4 = {
    "first-name" : "go",
    "second-name" : "seok jin"
};
// console.log(obj.first-name); 은 -를 연산자(빼기)로 인식하기 떄문에 아래와 같이 사용해야한다.
console.log(obj["first-name"]);

// for in 방지
for(key in obj3) {
    if(obj3.hasOwnProperty(key)){
        console.log("key : " + key  + ", vlaeu :" + obj3[key]);
    }
}

// 생성자 함수는 new

var p5 = Person('바보');
console.log(p5); // 아무것도 안만들어져요. 객체 x

// new를 강제롸하는 패턴
var Person = function(name){
    if(!(this instanceof Person)){ //!(this가 Pearson을 통해서 만들어진거니?)
        return new Person(name);
    }
    this.name = name;
};
var p6 = new Person('바보바보');
console.log(p6);