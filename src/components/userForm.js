import axios from "axios";
import { useState } from "react";
import { Counter } from "./Counter";

export function UserForm() {
    const BASE_URL = "http://localhost:3001/users/";
    const [userForm, setUserForm] = useState({ firstname: "Sangeetha" });
    const [users, setUsers] = useState([]);
    function getAllUser() {
        if (!users.length)
            axios.get(BASE_URL)
                .then(function (response) {
                    console.log(response.data);
                    setUsers(response.data)
                })
    }
    getAllUser();
    const handleEvent = function (event) {
    console.log(event.target.value);
        setUserForm({
           ...userForm,  [event.target.name]: event.target.value //spread operator
        })
    }
    const saveUser = function () {
        axios.post(BASE_URL, userForm)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                alert(error);
            });
        console.log('clicked...');
    }
    function deleteUser(event) {
        if (!window.confirm("Are you sure?"))
            return;
        axios.delete(BASE_URL + event.target.id)
        .then(function (response) {
            getAllUser();
        })
    }
    
    const handleEvent = function (event) {
        console.log(event.target.value);
        setUserForm({
            ...userForm, [event.target.name]: event.target.value 
        })
    }
 
    function validate(){//returns false if data is invalid
       return ( userForm.firstname ||userForm.firstname.trim() !=='')
    }
    
    return (//JSX
        <div>userform
            <input value={userForm.firstname} name='firstname' onChange={handleEvent}></input>
            <input value={userForm.age}  name='age' onChange={handleEvent}></input>
            <input value={userForm.firstname} name='firstname' onChange={handleEvent}></input>
            <input value={userForm.age} name='age' onChange={handleEvent}></input>
            <input value={userForm.gender} name='gender' onChange={handleEvent} type='radio' value='Female'/>Female
            <input value={userForm.gender} name='gender' onChange={handleEvent} type='radio' value='Male'/>Male
            <button onClick={saveUser}> Save</button>
            {users.map(function (user, index) {
                return <div>{user.firstname}, {user.age}
                    <button id={user.id} onClick={deleteUser} >Delete</button>
                </div>
            })}
            <Counter count={users.length} user={userform}></Counter>
        </div>
    );
}
