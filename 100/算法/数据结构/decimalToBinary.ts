import Stack from './Stack'

const decimalToBinary = (decNumber) => {
    const stack = new Stack()
    let number = decNumber;
    let rem; //余数
    let binaryString = "";
    while(number>0){
        rem = number%2
        stack.push(rem);
        number = Math.floor(number/2);
    }
    while(!stack.isEmpty()){
        binaryString += stack.pop().toString();
    }
    return binaryString;
}