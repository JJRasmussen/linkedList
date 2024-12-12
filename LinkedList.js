//add to end of the list
append = (value) =>{  
    let newNode = new Node(value);
    
    if (this.head === null){
        return this.head = newNode}
    /*
    traverseList = (value) => {
    if (head.nextNode === null){
        head.nextNode = newNode
    } else {
        
    }*/
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null
    }
    
    //add to end of the list
    append = (value) =>{  
        let newNode = new Node(value);
        
        if (this.head === null){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
    }

    //add to the front of the list
    preend = (value) => {
        let newNode = new Node(value);
        
        if (this.head === null){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
    }

    size = (target = this.head, counter = 0) => {
        if (this.head === null){
            return 0
        } else if (target.nextNode === null) {
            counter = 1
            return counter
        } else {
            counter = 1 + this.size(target.nextNode)
            return counter
        }        
    }

    getHeadNode = () => {
        if (this.head === null){
            return null}
        else
            return this.head
        } 

    getTailNode = (target = this.head) => {
        if (this.head === null){
            return null}
        else if (target.nextNode === null){
            return target
        } else {
            target = this.getTailNode(target.nextNode)
            return target
        }
    }

    at = (index, target = this.head, counter = 0) => {
        if (target === null){
            return null
        } else if (counter === index){
            return target
        } else {
            return this.at(index, target.nextNode, counter += 1);
        }
    }

    pop = (target = this.head, previousTarget = null) => {
        if (this.head === null){
            return null}
        else if (this.head===target && target.nextNode === null){
            this.head = null
            return
        } else if (target.nextNode === null) {
            previousTarget.nextNode = null;
            return
        } else {
            previousTarget = target;
            target = this.pop(target.nextNode, previousTarget)
            return
        }
    }

    contains = (value, target = this.head) => {
        if (target === null){
            return null
        } else if (target.value === value){
            return true
        } else if (target.nextNode === null){
            return false
        } else {
            return this.contains(value, target.nextNode)
        }
    }

    find = (value, target = this.head, counter = 0) => {
        if (target === null){
            return null
        } else if (target.value === value){
            return counter
        } else if (target.nextNode === null){
            return null
        } else if (target.value === value) {
            return counter
        } else {
            counter += 1 
            return this.find(value, target.nextNode, counter)
        }
    }

    toString = (target = this.head, string = "") => {
        if (target === null){
            string = "null"
        } else if (target.nextNode != null){
            string = "( " + target.value + " ) -> " + this.toString(target.nextNode)
            return string
        } else {
            return string = "( " + target.value + " ) -> null"
        }
    }
};

class Node {
    constructor(value = null, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    };
};


let list = new LinkedList()
list.append("first");
list.append("second");
list.append("last");




console.log(list)
let listSize = list.size();
console.log(listSize);
console.log(list.getHeadNode());
console.log("tail")
console.log(list.getTailNode())

console.log(list.at(0));
console.log(list.at(1));
console.log(list.at(2));

console.log("toString test");
console.log(list.toString())

console.log("contains test");
console.log(list.contains("secnd"));
console.log(list.contains("secnd"));

console.log("find test");
console.log(list.find("second"));
console.log(list.find("last"));
console.log(list.find("secnd"));

console.log("pop test");
console.log("test 1") 
list.pop();
console.log(list.at(0));
console.log(list.at(1));
console.log(list.at(2)); 
console.log("test 2") 
list.pop();
console.log(list.at(0));
console.log(list.at(1));
console.log(list.at(2)); 
console.log("test 3")
list.pop();
console.log(list.at(0));
console.log(list.at(1));
console.log(list.at(2));