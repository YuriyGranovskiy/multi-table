export class ExampleResult {
    constructor(left: number, right: number, result: number, time: number){
        this.leftFunctor = left;
        this.rightFunctor = right;
        this.result = result;
        this.time = time;
        this.isCorrect = result == left * right;
        this.isLong = time > 5000;
    }

    leftFunctor: number;
    rightFunctor: number;
    result: number;
    isCorrect: boolean;
    time: number;
    isLong: boolean;
}