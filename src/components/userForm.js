import { useState } from "react";

export function UserForm() {
    const[userform,setUserform] = useState({
        firstname:"sange"
    });
    const handleEvent = function(event) {
        console.log(event.target.value);
        setUserform({
            firstname: event.target.value
        });
    }
 return  (
     
    <div>Name:
     <input value= {userform.firstname}
     onChange= {handleEvent}></input>
    </div>
    
 );
    
}