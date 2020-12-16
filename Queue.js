//Creating queue
function Queue()
{
    this.element=[];
}

//push element into queue
Queue.prototype.enqueue = function (e)
{
    this.elements.push(e);
}

//remove an element from the front
    Queue.prototype.dequeue = function ()
    {
        return this.elements.shift();
    
    }

 //Display queue
 Display()
 {
     var str="";
     for(var i=0; i< this.DataTransferItem.length ; i++ )
     {
         str += this.items[i] + " " ;
         return str;
     }
 }

