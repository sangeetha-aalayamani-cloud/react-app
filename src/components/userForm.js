import axios from "axios";
import { useState } from "react";

export function UserForm() {
    const [userForm, setUserForm] = useState({ firstname: "Sangeetha" });
    const [users, setUsers] = useState([]);
    function getAllUser() {
        if (!users.length)
            axios.get("http://localhost:3000/users")
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
        axios.post("http://localhost:3000/users", userForm)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                alert(error);
            });
        console.log('clicked...');
    }
    return (//JSX
        <div>userform
            <input value={userForm.firstname} name='firstname' onChange={handleEvent}></input>
            <input value={userForm.age}  name='age' onChange={handleEvent}></input>

            <button onClick={saveUser}> Save</button>
            {users.map(function (user, index) {
                return <div>{user.firstname}, {user.age}</div> 
            })}
        </div>
    );
}
