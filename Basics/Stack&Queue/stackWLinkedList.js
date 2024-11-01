class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top;
    }

    push(value){
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;  
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            // The *next* top for the current one is what was there before
            this.top.next = holdingPointer;
        }
        this.length++;       
        console.log(this);
        return this;
    } 

    pop(){
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        // const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return this;
    }
}

const myStack = new Stack();
myStack.push('Google');
myStack.push('Paystack');
myStack.pop();

console.log(myStack);
