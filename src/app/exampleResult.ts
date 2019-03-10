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

    getPrettyTime() : string {
        let seconds = Math.floor(this.time / 1000);
        let milliseconds = ("00" + (this.time % 1000)).slice(-3);
        
        return seconds + "s " + milliseconds + "ms";
    }
}