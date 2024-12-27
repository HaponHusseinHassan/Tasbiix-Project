let calculate=document.querySelector("#cal")
   let result=document.querySelector("#val3")

   let  val1=document.querySelector("#value1")
  let num1=parseInt(prompt("Enter num1"))
  val1.textContent="Number1: "+num1;

   let val2=document.querySelector("#value2")
    let  num2=parseInt(prompt("Enter num2 "))
    val2.textContent="Number2: "+num2;
   
let add;
calculate.addEventListener("click",()=>{
    add=num1+num2  
    result.textContent="The result is :"+add;
  

})