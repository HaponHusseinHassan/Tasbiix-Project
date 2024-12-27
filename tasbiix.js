let value = document.querySelector("#value")
let increment = document.querySelector("#incr")
let decrement = document.querySelector("#decr")

let startValue = 0;
// increment
increment.addEventListener("click", () => {
    startValue ++;
   
    value.textContent = startValue
    if(startValue == 10){
        value.style.color = "blue"
    }
    else{
        value.style.color = "black"

    }
})


//Reset

    reset.addEventListener("click", () => {
        startValue = 0;
        value.textContent = startValue
    })


    // decrement
   
    decrement.addEventListener("click", () => {
        if(startValue > 0){
            startValue --;
            value.textContent =startValue 

        }
        if(startValue == 10){
            value.style.color = "blue"
        }
        else{
            value.style.color = "black"
    
        }
       
    })

    









  