
class Stack { 
    
    // Array is used to implement stack 
    constructor() 
    { 
        this.items = []; 
    } 
    
    // push function 
    push(element) 
    { 
        // push element into the items 
        this.items.push(element); 
    } 
    // pop function 
    pop() 
    { 
        // return top most element in the stack 
        // and removes it from the stack 
        // Underflow if stack is empty 
        if (this.items.length == 0) 
        return "Underflow"; 
    return this.items.pop(); 
        } 
        // peek function 
        peek() 
        { 
            // return the top most element from the stack 
            // but does'nt delete it. 
            return this.items[this.items.length - 1]; 
        } 
        // isEmpty function 
        isEmpty() 
        { 
            // return true if stack is empty 
            return this.items.length == 0; 
        } 
        // printStack function 
        printStack() 
        { 
            let str = ""; 
            for (let i = 0; i < this.items.length; i++) 
            str += this.items[i] + " "; 
        return str; 
    } 
}

// code starts from here
function nextSmallestNumber(height){
    let ans=[]
    let stack = new Stack();
    stack.push(-1)
        
        for(let i=height.length-1;i>=0;i--){
            let current=height[i]
            
            while(stack.peek()!=-1 && height[stack.peek()]>=current){
                stack.pop()
            }
            
            ans[i]=stack.peek()
            stack.push(i)
            
        }
        return ans
    }
    function prevSmallestNumber(height){
        let ans=[]
        let stack = new Stack();
        stack.push(-1)
        
        for(let i=0;i<height.length;i++){
            let current=height[i]
            
            while(stack.peek()!=-1 && height[stack.peek()]>=current){
                stack.pop()
            }
            
            ans[i]=stack.peek()
            stack.push(i)
            
        }
        return ans
    }
    
    function LargestRectArea(height){
        
        let right=[]
        right=nextSmallestNumber(height)
        
        let left=[]
        left=prevSmallestNumber(height)
        
        let area=-Infinity;
        
        for(let i=0;i<height.length;i++){
            let l=height[i]
            
            if(right[i]==-1){
                right[i]=height.length
            }
            let b=right[i]-left[i]-1;
            
            let newArea=l*b
            
            area=Math.max(newArea,area)
        }
        
        return area;
        
    } 
    let maxArea=(mat)=>{
        let area=LargestRectArea(mat[0]);
        console.log(area)
        for(let i=1;i<mat.length;i++){
            for(let j=0;j<mat[0].length;j++){
                
                if(mat[i][j]!=0){
                    mat[i][j]=mat[i][j]+mat[i-1][j]
                }
                else{
                    mat[i][j]==0
                }
            }
            area=Math.max(area,LargestRectArea(mat[i]))
            console.log(area)
        }
        return area
    }
    
    console.log(maxArea([[0 ,0, 0, 0],
        [1, 1, 1 ,1],
        [1, 1, 1 ,1],
        [1, 1, 0, 0,]]))