// interface Counter {
//     (start: number): string;
//     interval: number;
//     reset(): void;
// }

// function getCounter(): Counter {
//     let counter = <Counter>function (start: number) { };
//     counter.interval = 123;
//     counter.reset = function () { };
//     return counter;
// }

// let c = getCounter();
// c(10);
// c.reset();
// c.interval = 5.0;
interface AdditionalFunction {
  (input1: number, input2: number): number;
  (input1: string, input2: number): number;
  (input1: number, input2: string): number;
  (input1: string, input2: string): number;
}
const adFn: AdditionalFunction = function (input1, input2): number {
  return 10;
};
