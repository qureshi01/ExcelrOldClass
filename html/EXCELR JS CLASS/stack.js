class Stack{
    constructor(){
        this.items=new Array(5);
        this.top=-1;
    }
    push(item){
        if(this.items.length==this.top){
            console.log("Stack Overflow");

        }
        this.top++;
        this.items[this.top] = item;
    }

    pop(){
        if(this.top==-1){
            console.log("Stack Underflow");
        }
        let data = this.items[this.top];
        this.top--;
        return data;
    }

    peek(){
        if(this.top==-1){
            console.log("nothing");
        }
        return this.items[this.top];
    }
}

let stack = new Stack();
stack.push(10);
stack.push(11);
stack.push(12);
stack.push(13);
for(let i=0; i<=stack.top;i++){
    console.log(stack.items[i]);
}

console.log("push done");

stack.pop();
stack.pop();
for(let i=0;i <=stack.top;i++){
    console.log(stack.items[i]);

}
console.log("pop done");

console.log(stack.peek());
console.log("peek done");