export function AddNumbers(num1: number , num2:number) {
    return function (target: Function) {
        target.prototype.sum = num1 + num2;
    }
}