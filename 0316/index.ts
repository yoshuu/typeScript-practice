// type Point = {
//   x: number;
//   y: number;
// };

// function printCoord(pt: Point) {
//   console.log("The cordinate's x value is " + pt.x);
//   console.log("The cordinate's y value is " + pt.y);
// }

// printCoord({
//   x: 100,
//   y: 100,
// });

// 疑惑的點 type跟interface的差別

// interface Point {
//   x: number;
//   y: number;
// }

// function printCoord(pt: Point) {
//   console.log("apple " + pt.x);
//   console.log("apple " + pt.y);
// }

// printCoord({
//   x: 100,
//   y: 100,
// });

// function consoleName(): void {
//   console.log(
//     "appleappleapealperlpefqehiugwhgiupw4gbuwripgnweginuwegowegnewvniuvw4ghwegotiuewhtwethueiw"
//   );
// }

// let dodo: void = undefined;

// let icancode = "vic";

// icancode = "aaa";

// let wgatIsThis;
// let randomNumber = Math.random();


// let a :number[]= [1,2,3,4]

// const data: [string, number] = ['1',1]    

// enum apple{
//   a = 1,
//   b = 2,
//   c = 3
// }

// console.log(apple.a)


// interface index{
// [index:number]:number
// }

// const index: index = [1, 2, 3, 4, 5]

// let x: number = index[1]


// let apple: string | number;

// apple = 10;
// apple = '10'

// function apple():never{
//   throw new Error('123');
// }

// const a: [number, number] = [10, 10]

// const [x, y] = a;

// const num = 123
// let mutable = num * 456
// console.log(num);
// mutabe =(num+1)/2

type HiNever = string & number

const ary = [];