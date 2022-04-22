class ListLinked{
    constructor(){
       this.nodes = [];
    }
    get size(){
        return this.nodes.length;
    }
    get head(){
        return this.size ? this.nodes[0] : null;
    }
    get tail(){
        return this.size ? this.nodes[this.size - 1] : null;
    }

    insertAt(index, value){
        const previousNode = this.nodes[index - 1] || null;
        const nextNode = this.nodes[index] || null;
        console.log("OKE" + this.nodes[index])
        const node = {value, next: nextNode};
        if(previousNode) previousNode.next = node;
        this.nodes.splice(index, 0, node);
    }
    insertFirst(value){
        this.insertAt(0, value);
    }
    insertLast(value){
        this.insertAt(this.size, value);
    }
    getAt(index){
        return this.nodes[index];
    }
    removeAt(index){
        const previousNode = this.nodes[index - 1] || null;
        const nextNode = this.nodes[index + 1] || null;
        if(previousNode) previousNode.next = nextNode;
        this.nodes.splice(index, 1);
    }
    clear(){
        this.nodes = []
    }
    reverse(){
        this.nodes.reduce(
            (acc, {value}) => [{value, next: acc[0] || null}, ...acc],[]
        );
    }
    *[Symbol.iterator](){
        yield* this.nodes;
    }
}

const LL = new ListLinked();
LL.insertFirst(2);
LL.insertFirst(3);
LL.insertFirst(4);
LL.insertFirst(4);
console.log(`size: ${LL.size}`)
console.log(`head: ${LL.head.value}`)
console.log(`tail: ${LL.tail.value}`)
console.log(LL.nodes)
console.log(LL.getAt(3));
LL.removeAt(1);
console.log(LL.nodes)
LL.reverse();
console.log(LL.nodes);
/*
Danh sách liên kết sẽ bao gồm các phần thuộc tính sau 
- size, head(đầu), tail(đuôi)
Đồng thời, các sự kiện được thực hiện trong danh sách liên kết sẽ 
bao gồm: 
* Thêm.
- insertAt (thêm vào vị trí nhất định)
- insertFirst (thêm vào vị trí đầu tiên)
- insertLast (thêm vào vị trí cuối cùng)
* Lấy 
- getAt(lấy một node ở vị trí nào đó)
* Xóa 
- deleteAt 
* Làm mới 
- clear
* Đảo ngược
- reverse

*/
