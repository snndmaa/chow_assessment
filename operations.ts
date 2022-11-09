class Operate{
    input1: number
    input2: number
    action: string

    
    constructor(input1:number, input2:number, action:string){
        this.input1 = input1
        this.input2 = input2
        this.action = action
    }

    private calculate(){
        try{
            const result = eval(`${this.input1} ${this.action} ${this.input2}`)
            return result
        }
        catch(error){
            return 'Invalid Input. Please try again!'
        }
    }

    public checker(){
        const result = this.calculate()

        if (result === Infinity){
            return console.log('Undefined Behaviour')
        }
        if (result > 105 || result < -105){
            return console.log('Integer Overflow')
        }
        else{
            return console.log(result)
        }

    }
}
export default Operate