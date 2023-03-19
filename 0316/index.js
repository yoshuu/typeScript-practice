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
var apple;
(function (apple) {
    apple[apple["a"] = 1] = "a";
    apple[apple["b"] = 2] = "b";
    apple[apple["c"] = 3] = "c";
})(apple || (apple = {}));
console.log(apple.a);
