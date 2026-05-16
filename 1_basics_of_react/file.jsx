import { useState } from "react";




function counter (){
    const[count , setcount] =useState(0);
    
const increament =() => {
setcount(count +1)
}
const decrement =() => {
    setcount(count -1)
}

}
return <div>
    <button onClick= {increament}> +</button>
    <p> counter :{counter}</p>
    <button onClick= {decrement}> -</button>

</div>