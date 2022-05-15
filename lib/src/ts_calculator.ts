type Add = (a: number, b: number) => number;
export const add: Add = (a, b) => +a + +b;

type Multiply = (a: number, b: number) => number;
export const multiply: Multiply = (a, b) => +a * +b;