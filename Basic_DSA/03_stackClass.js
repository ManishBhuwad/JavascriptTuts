
class Stack{

    constructor(){
        this.items = [];
        this.count = 0;
    }


    push(elem){
        this.items[this.count] = elem;
        console.log(`${elem} added to ${this.count}`)
        this.count +=1;
        return this.count-1;

    }

    pop(){
        if(this.count==0) return undefined;
        let deleteItem = this.items[this.count-1]
        this.count -=1;
        console.log(`${deleteItem} removed `)
        return deleteItem;

    }

    peak(){
        let top = this.items[this.count-1]
        console.log("peak item : ",top);
        return top;
    }

    showStackItems(){
        
        let str = "";
        for(let i = 0; i<this.count;i++){
            str += `${this.items[i]} `;
        }
        console.log(str);
    }

    size(){
        console.log(`size : ${this.count}`)
        
    }
    
    isEmpty(){
        (this.count <=0) ? console.log("stack is empty"):
        console.log("stack is not empty");
    }
}


    const stack = new Stack();
    stack.push(23);
    stack.push(24)
    stack.pop();
    stack.showStackItems();
    stack.push(40)
    stack.push(50)
    stack.push(60)
    stack.showStackItems();
    stack.pop();
    stack.showStackItems();
    stack.size();
    stack.peak();
    stack.pop();
    console.log(stack.peak());
    stack.pop()
    stack.pop()
    stack.pop()
    stack.pop()
    stack.isEmpty();
    stack.push(50)
    stack.push(60)
    stack.isEmpty();
    