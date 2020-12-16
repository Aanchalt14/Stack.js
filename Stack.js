let stackoperation=require('./Stack');


//creating stack class
class stack {
    constructor() {
        this.data=[];
        this.top=0;
    }
}

//pusing element into stack
push(element) 
{
    this.data [this.top]=element;
    this.top=this.top+1;
}

//length of stack
length()
{
    return this.top;
}


//To get top element
peek()
{
 return this.data[this.top -1];
}

 //check the stack is empty or not
 isEmpty() 
 {
     return this.top==0;
 }

 pop() 
  {
     if( this.isEmpty() == false)
     {
     this.top = this.top -1;
     return this.data.pop();
     //removes last element
     }
  }

 //Display the stck elements
 Display() 
  {
     var top = this.top -1;
     while(top>=0) 
     {
     console.log(this.data[top]);
     }
 }
