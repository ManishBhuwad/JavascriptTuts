
// Implement Queue

const queue = [];
let count = 0

function enqueue(element){
    queue[count] = element;
    count += 1;
}

function dequeue(){
    if(count>0){
        for(let i = 0 ; i<count; i++){
            queue[i] = queue[i+1];
        }
        count -=1;
        queue.length=count
    }else{
        console.log("queue is already empty");
    }
}

function front(){
    if(count>0){
        console.log(queue[0]);
    }else{
        console.log("queue is already empty");
    }
}

function rear(){
    if(count>0){
        console.log(queue[count-1]);
    }else{
        console.log("queue is already empty");
    }
}

enqueue(10)
enqueue(20)
enqueue(30)
enqueue(40)

console.log(queue)

front()
rear()