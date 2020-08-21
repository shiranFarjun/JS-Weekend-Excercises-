// Ex4.1 - Fibonacci -
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
// or this:
//====> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …

function Fibonacci(num) 
    { 
        if(num==1) 
            return 0; 
        if(num==2) 
            return 1; 
        var num1=0; 
        var num2=1; 
        var sum=0; 
        var i=2; 
        while (i<num)   
        { 
            sum=num1+num2; 
            num1=num2; 
            num2=sum; 
            i+=1; 
        } 
        return num2; 
    }

console.log(Fibonacci(12));