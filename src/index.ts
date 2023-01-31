const numbtn = document.getElementsByClassName("btn-num")!;
const screenRes = document.getElementById("s-result")! as HTMLInputElement;
const screenInput = document.getElementById("s-input")! as HTMLInputElement;
const equalBtn = document.getElementById("btn-equal")! as HTMLInputElement;
const acBtn = document.getElementById("btn-ac")! as HTMLInputElement;
const remBtn = document.getElementById("btn-c")!;
const btnEqual = document.getElementById('btn-equal')!;
const btnExp = document.getElementsByClassName('btn-exp')!;
//----------------------------------------------------------------------------------------------------------------------------------------
class Calculator {
    private total: number = 0;
    private expressionReg =  /\+|\-|\*|\//;
    private expression!: string;
    //----------
    private num1!: number;
    private num2!: number;
    //-----------
    public get totalResult(): string {
        return JSON.stringify(this.total)
    }
    //-----------------------------------------------------------------------------------------------------------------------------------------
    constructor(input: string) {
        const numbers = input.split(this.expressionReg)
        const operation = input.match(this.expressionReg)!        
        this.num1 = +numbers[0];
        this.num2 = +numbers[1];
        this.expression = operation[0];
      //  -----------
        switch (this.expression) {
            case "+":
                this._calcAdd(this.num1, this.num2)
                break;
            case "-":
                this._calcSub(this.num1, this.num2)
                break;
            case "*":
                this._calcMult(this.num1, this.num2)
                break;
            case "/":
                this._calcDiv(this.num1, this.num2)
                break;
            default:
                break;
        }
    }
    //-----------------------------------------------------------------------------------------------------------------------------------------
    private _calcAdd(n1: number, n2: number): void {
        this.total = n1 + n2
    }
    //-----------------------------------------------------------------------------------------------------------------------------------------
    private _calcSub(n1: number, n2: number): void {
        this.total = n1 - n2
    }
    //-----------------------------------------------------------------------------------------------------------------------------------------
    private _calcMult(n1: number, n2: number): void {
        this.total = n1 * n2
    }
    //-----------------------------------------------------------------------------------------------------------------------------------------
    private _calcDiv(n1: number, n2: number): void {
        this.total = n1 / n2
    }
    //-----------------------------------------------------------------------------------------------------------------------------------------
}
for (const num of numbtn) {
    num.addEventListener('click', () => {
        screenInput.value += num.value
    })
}

for (const exp of btnExp) {
    exp.addEventListener('click' ,()=>{
        screenInput.value += exp.value
    })
    
}

//-----------------------------------------------------------------------------------------------------------------------------------------
remBtn.addEventListener('click', sliceNum)

function sliceNum(): void {
    screenInput.value = screenInput.value.toString().slice(0, -1)
}
//-----------------------------------------------------------------------------------------------------------------------------------------

acBtn.addEventListener('click',clearCalc)

function clearCalc() {
    screenRes.value = '0' ;
    screenInput.value = '';
}
btnEqual.addEventListener('click',calculation)

function calculation() {    
    let result = new Calculator(screenInput.value);
    screenRes.value = result.totalResult
    // console.log("result" , result.totalResult);   
}
//-----------------------------------------------------------------------------------------------------------------------------------------
