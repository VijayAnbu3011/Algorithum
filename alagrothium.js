// febbinachi serious
// let feb=(n)=>{
//     let feb=[0,1]
//     for(let i=2;i<n;i++){
//         feb[i]=feb[i-1]+feb[i-2]
//     }
//     return feb
// }
// console.log(feb(3));

// factorial of number

// let fact=(n)=>{
//     let result=1
//     for(let i=2;i<=n;i++){
//         result=result*i
//     }
//     return result
// }
// console.log(fact(5));

// prime number

// let prime=(n)=>{
//     if(n<2){
//         return false
//     }
//     for(let i=2;i<Math.sqrt(n);i++){
//         if(n%i==0){
//             return false
//         }
//         return true
//     }
// }
// console.log(prime(123));

// power of two
// let p2=(n)=>{
//     if(n<1){
//         return false
//     }
//     while(n>1){
//         if(n%2!==0){
//             return false
//         }
//         n=n/2;
//     }
//     return true
// }
// console.log(p2(16));
//   or
// let p2Bitwise=(n)=>{
//     if(n<1){
//         return false
//     }
//     return (n & (n-1))==0
// }
// console.log(p2Bitwise(16));

// recursion for fibonacci
// let frb=(n)=>{
//     if(n<2){
//         return n
//     }
//     return frb(n-1)+frb(n-2)
// }
// console.log(frb(6));

// recursion for factorial
// let refact=(n)=>{
//     if(n===0){
//         return 1
//     }
//     return n*refact(n-1)
// }
// console.log(refact(5));

// linear search

// let a=[1,6,9,-5,8]

// let ls=(a,t)=>{
//     for(let i=0;i<a.length;i++){
//         if(a[i]===t){
//             return i
//         }
//     }
//     return -1
// }
// console.log(ls(a,-5));

// binary search

// let a=[-5,1,4,6,8,10,12]

// let bsa=(a,t)=>{
//     let li=0
//     let ri=a.length-1
//     while(li<=ri){
//     let mi=Math.floor((li+ri)/2)
//     if(t===a[mi]){
//         return mi
//     }
//     if(t<a[mi]){
//         ri=mi-1
//     }else{
//         li=mi+1
//     }
// }
// return -1
// }
// console.log(bsa(a,10));

// recursion binary

// let a=[1,4,6,8,9,10,15,17]

// let rbs=(a,t)=>{
//     return search(a,t,0,a.length-1)
// }
// let search=(a,t,li,ri)=>{
//     if(li>ri){
//         return -1
//     }
//     let mi=Math.floor((li+ri)/2)
//     if(t===a[mi]){
//         return mi
//     }
//     if(t<a[mi]){
//         return search(a,t,li,mi-1)
//     }else{
//         return search(a,t,mi+1,ri)
//     }
// }
// console.log(rbs(a,0));

// sort Algorithms

// let a=[-6,8,1,0,-5,15,12,3]

// let sort=(a)=>{
//     let swapped
//     do{
//         swapped =false
//     for(let i=0;i<a.length;i++){
//         if(a[i]>a[i+1]){
//             let temp=a[i]
//             a[i]=a[i+1]
//             a[i+1]=temp
//             swapped=true
//         }
//     }
// }while(swapped)
// }
// sort(a)
// console.log(a);

// insertion sort
// let a=[-6,8,1,0,-5,15,12,3]

// let is=(a)=>{
//     for(let i=1;i<a.length;i++){
//         let nti=a[i]
//         let j=i-1
//         while(j>=0 && a[j]>nti){
//             a[j+1]=a[j]
//             j=j-1
//         }
//         a[j+1]=nti
//     }
// }
// is(a)
// console.log(a);

// quick sort
// let a=[-6,8,1,0,-5,15,12,3]

// let qs=(a)=>{
//     if(a.length<2){
//         return a
//     }
//     let pivot=a[a.length-1];
//     let left=[]
//     let right=[]
//     for(let i=0;i<a.length-1;i++){
//         if(a[i]<pivot){
//             left.push(a[i])
//         }else{
//             right.push(a[i])
//         }
//     }
//     return [...qs(left), pivot, ...qs(right)]
// }
// console.log(qs(a));

// merge sort
// let a=[-6,8,1,0,-5,15,12,3]
// let ms=(a)=>{
//     if(a.length<2){
//         return a
//     }
//     let mid=Math.floor(a.length/2)
//     let left=a.slice(0,mid)
//     let rigth=a.slice(mid)
//     return merge(ms(left),ms(rigth))
// }
// let merge=(left,right)=>{
//     let sort=[]
//     while(left.length && right.length){
//         if(left[0]<= right[0]){
//             sort.push(left.shift())
//         }else{
//             sort.push(right.shift())
//         }
//     }
//     return [...sort,...left,...right]
// }
// ms(a)
// console.log(ms(a));

// cartesian product

// let a=[1,2,3]
// let b=[5,6,7,8,9]

// let car=(a,b)=>{
//     let result=[]
//     for(let i=0;i<a.length;i++){
//         for(let j=0;j<b.length;j++){
//             result.push([a[i],b[j]])
//         }
//     }
//     return result
// }
// console.log(car(a,b));

// climing staircase
// let cs=(n)=>{
//     let nod=[1,2]
//     for(let i=2;i<=n;i++){
//         nod[i]=nod[i-1]+nod[i-2]
//     }
//     return nod[n-1]
// }

// console.log(cs(5));

// tower of hanoi

// let toh=(n,fr,tr,ur)=>{
//     if(n===1){
//         console.log(`move disk 1 from ${fr} to ${tr}`);
//         return
//     }
//     toh(n-1,fr,ur,tr)
//     console.log(`Move disk ${n} from ${fr} to ${tr}`);
//     toh(n-1,ur,tr,fr)
// }
// toh(5,"A","c","B")

//---------------------------------------- Data Structure--------------------------------------------

// set Data structure

// it is data structure which accepts multiple data type and value must be unique
// it do not follow order of insertion
// deleteing and searching an element is faster compared to array
//  const set=new Set([1,2,3])
// console.log(set.has(4));
//  set.add(4)
//  console.log(set.size);
// console.log(set.has(4));
//  set.delete(3)
//  set.clear()
//  for(let item of set){
//      console.log(item);
//  }

//  Map
// let map=new Map([[1,1],[2,1],["c",3]])
// map.set('D',5)
// map.delete(1)
// console.log(map.has(1));
// console.log(map.size);
// map.clear()
// for(let [key,value] of map){
//     console.log(`${key}:${value}`);
// }

// Stack Data Structure
// LIFO
// class Stack{
//     constructor(){
//         this.item=[]
//     }
//     push(element){
//         this.item.push(element)
//     }
//     pop(){
//         return this.item.pop()
//     }
//     peek(){
//         return this.item[this.item.length-1]
//     }
//     isEmpty(){
//         return this.item.length===0
//     }
//     size(){
//         return this.item.length
//     }
//     print(){
//         console.log(this.item.toString());
//     }
// }
// let stack=new Stack()
// console.log(stack.isEmpty());
// stack.push(10)
// stack.push(20)
// stack.push(10)
// stack.pop()
// console.log(stack.size());
// stack.print()
// console.log(stack.peek());

// Queue
// FIFO
// class Queue{
//     constructor(){
//         this.item=[]
//     }
//     enQueue(element){
//         this.item.push(element)
//     }
//     deQueue(){
//         return this.item.shift()
//     }
//     isEmpty(){
//         return this.item.length===0
//     }
//     peek(){
//         if(!this.isEmpty()){
//             return this.item[0]
//         }
//         return null
//     }
//     size(){
//         return this.item.length
//     }
//     print(){
//         console.log(this.item.toString());
//     }
// }

// let queue=new Queue()
// console.log(queue.isEmpty());
// queue.enQueue(10)
// queue.enQueue(20)
// queue.enQueue(30)
// console.log(queue.size());
// queue.print()
// console.log(queue.deQueue());
// console.log(queue.peek());

//  Queue with Object Constructor

// class Queue{
//     constructor(){
//         this.items={}
//         this.rear=0
//         this.font=0
//     }
//     enQueue(element){
//         this.items[this.rear]=element
//         this.rear++
//     }
//     deQueue(){
//         const item=this.items[this.font]
//         delete this.items[this.font]
//         this.font++
//         return item
//     }
//     peek(){
//         return this.items[this.font]
//     }
//     isEmpty(){
//         return this.rear-this.font===0
//     }
//     size(){
//         return this.rear-this.font
//     }
//     print(){
//         console.log(this.items);
//     }
// }
// let queue=new Queue()
// console.log(queue.isEmpty());
// queue.enQueue(10)
// queue.enQueue(20)
// queue.enQueue(30)
// console.log(queue.size());
// queue.print()
// console.log(queue.deQueue());
// console.log(queue.peek());

// circular queue
// follows FIFO

// class CircularQueue{
//     constructor(capacity){
//         this.item=new Array(capacity)
//         this.capacity=capacity
//         this.rare=-1
//         this.font=-1
//         this.currentLength=0
//     }
//     isFull(){
//        return this.currentLength=this.capacity
//     }
//     isEmpty(){
//         return this.currentLength === 0
//     }
//     enqueue(element){
//         if(!this.isFull()){
//             this.rear=(this.rear+1)%this.capacity
//             this.item[this.rear]=element
//             this.currentLength +=1
//             if(this.font === -1){
//                 this.font=this.rear
//             }
//         }
//     }
//     dequeue(){
//         if(this.isEmpty()){
//             return null
//         }
//         const items=this.item[this.font]
//         this.item[this.font]= null
//         this.font=(this.font+1)%this.capacity
//         this.currentLength -=1
//         if(this.isEmpty()){
//             this.font=-1
//             this.rare=-1
//         }
//     }
//     peek(){
//         if(!this.isEmpty()){
//             return this.item[this.font]
//         }
//         return null
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log(`Queue is Empty`);
//         }else{
//             let i
//             let str=''
//             for(i = this.font; i !== this.rear; i= (i+1) % this.capacity){
//                 str += this.item[i] + ' '
//             }
//             str +=this.item[i]
//             console.log(str);
//         }
//     }
// }
// let queue=new CircularQueue(5)
// console.log(queue.isEmpty());
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.enqueue(50)
// console.log(queue.isFull());
// queue.print()

// Linked List
// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//     isEmpty(){
//         return this.size===0
//     }
//     getSize(){
//         return this.size
//     }
//     prepand(value){
//         let node =new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }
//         else{
//             node.next=this.head
//             this.head=node
//         }
//         this.size++
//     }
//     append(value){
//         let node= new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             let prev=this.head
//             while(prev.next){
//                 prev=prev.next
//             }
//             prev.next=node
//         }
//         this.size++
//     }
//     insert(value,index){
//         if(index<0 || index > this.size){
//             return
//         }
//         if(index===0){
//             this.prepand(value)
//         }else{
//             let node=new Node(value)
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             node.next=prev.next
//             prev.next=node
//             this.size++
//         }
//     }
//     remove(index){
//         if(index<0 || index >=this.size){
//             return null
//         }
//         let removeNode
//         if(index===0){
//             removeNode=this.head
//             this.head=this.head.next
//         }else{
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             removeNode=prev.next
//             prev.next=removeNode.next
//         }
//         this.size--
//         return removeNode.value
//     }
//     removeValue(value){
//         if(this.isEmpty()){
//             return null
//         }
//         if(this.head.value === value){
//             this.head=this.head.next
//             this.size--
//             return value
//         }else{
//             let prev=this.head
//             while(prev.next && prev.next.value !== value){
//                 prev=prev.next
//             }
//             if(prev.next){
//                 let removeNode=prev.next
//                 prev.next=removeNode.next
//                 this.size--
//                 return value
//             }
//             return null
//         }
//     }

//     search(value){
//         if(this.isEmpty()){
//             return -1
//         }
//         let i=0
//         let curr=this.head
//         while(curr){
//            if( curr.value===value){
//                return i
//            }
//            curr=curr.next
//            i++
//         }
//         return -1
//     }
//     reverse(){
//         let prev=null
//         let curr=this.head
//         while(curr){
//             let next=curr.next
//             curr.next=prev
//             prev=curr
//             curr=next
//         }
//         this.head=prev
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log(`List is Empty`);
//         }
//         else{
//             let curr=this.head
//             let listValue=" "
//             while(curr){
//                 listValue += `${curr.value } `
//                 curr=curr.next
//             }
//             console.log(listValue);
//         }
//     }
// }

// let list=new LinkedList()
// list.append(10)
// list.append(20)
// list.append(30)
// list.insert(80,1)
// list.insert(15,0)
// list.print()

// list.reverse();
// list.print()

// Linked List with tail
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  print() {
    if (this.isEmpty()) {
      console.log(`List is Empty`);
    } else {
      let curr = this.head;
      let listenValue = " ";
      while (curr) {
        listenValue += ` ${curr.value} `;
        curr = curr.next;
      }
      console.log(listenValue);
    }
  }
  preand(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    let value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }
  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    let value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    }
    let prev = this.head;
    while (prev.next !== this.tail) {
      prev = prev.next;
    }
    prev.next = null;
    this.tail = prev;

    this.size--;
    return value;
  }
}

let list = new LinkedList();

console.log("List is Empty?", list.isEmpty());
console.log("List Size", list.getSize());
list.print();
list.append(10);
list.append(20);
list.preand(30);
list.preand(50);
list.print();
console.log(list.removeFromFront());
console.log(list.removeFromEnd());
list.print();
