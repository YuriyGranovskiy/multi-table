export class Task {
    constructor(left: number, right: number){
        this.leftFunctor = left;
        this.rightFunctor = right;
    }

    leftFunctor: number;
    rightFunctor: number;
}