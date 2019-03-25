     class Stack {     
        constructor()     
        {         
            this.items = [];
        } 

        push(element) 
        {     
            this.items.push(element);
        } 

        pop()
        {    
            if (this.items.length == 0) 
            return "Underflow"; 
            else
            return this.items.pop(); 
        } 

        peek()
        {    
            return this.items[this.items.length - 1];
        } 
        
        printStack() 
        { 
            var str = ""; 
            for (var i = 0; i < this.items.length; i++) 
                str += this.items[i] + " "; 
            return str; 
        } 
        }
        

        var stack = new Stack();
        stack.push(100); 
        stack.push(200); 
        stack.push(300);

        console.log("Elements of stack are = " + stack.printStack()); 
        console.log("Last element of stack = " + stack.peek());
        console.log("Element removed = " + stack.pop());
        console.log("Elements of stack after pop() operation = " + stack.printStack());
