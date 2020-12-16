let list = new Linkedlist();

//Insert node at beginning
Linkedlist.prototype.insertAt 
Beginning = function(data) {
   
    let newNode = new Node(data);

    newNode.next=this.head;

    this.head  = newNode;
    return this.head;

}


//Insert node at the end
LinkedList.prototype.insertAtEnd = function(data){
    // A newNode object is created with property data and next=null
        
        let newNode = new Node(data);
    // When head = null i.e. the list is empty, then head itself will point to the newNode.
        if(!this.head){
            this.head = newNode;
            return this.head;
        }
    // Else, traverse the list to find the tail (the tail node will initially be pointing at null), and update the tail's next pointer.
       let tail = this.head;
       while(tail.next !== null){
            tail = tail.next;
       }
       tail.next = newNode;
       return this.head;
    }


    // prints the list items 
Display () 
{ 
    var tail = this.head; 
    var str = ""; 
    while (curr) { 
        str += tail.element + " "; 
        tail = tail.next; 
    } 
    console.log(str); 
} 
