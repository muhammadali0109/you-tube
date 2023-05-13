import { useState } from 'react'
import '../Register/Register.css'
import React from 'react'

const Register = () => {
    // const Register = () => {
        const [userName, setUserName] = useState('')
        const [password,setPassword] = useState('')
    
        // const navvigate
    
        const SubmitHandler = (e) => {
            e.preventDefault()
            // console.log(userName,password);
            const data = {
                "email": userName,
                "password": password
            };
            fetch("https://reqres.in/api/login", {
                method: 'POST',
                headers: {
                    'Contebt-Type': 'Application/json'
                },
                body: JSON.stringify(data)
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
      return (
        <div>
                {/* <h2>Login Page</h2> */}
                {/* <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum inventore labore provident corporis, laboriosam laborum atque maiores hic rerum! Accusantium deleniti distinctio illum cumque beatae laborum quae est illo optio?</p> */}
                <div className="wrapper">
                 <div className="logo">
                     <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="#"/>
                 </div>
                 <div className="text-center mt-4 name">
                 YouTube
                 </div>  
            <form className="p-3 mt-3" onSubmit={SubmitHandler}>
                <div className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input
                    value={userName}
                    onChange={(evt) => {
                        setUserName(evt.target.value);
                    }}
                     type="text" name="userName" id="userName" placeholder="Username"/>
                </div>
                <div className="form-field d-flex align-items-center">
                    <span className="fas fa-key"></span>
                    <input
                    value={password}
                    onChange={(evt) => {
                        setPassword(evt.target.value);
                    }}
                    type="password" name="password" id="pwd" placeholder="Password"/>
                </div>
                <button type='submit' className="btn mt-3">Login</button>
            </form>
            <div className="text-center fs-6">
                <a href="#">Forget password?</a> or <a href="#">Sign up</a>
            </div>
        </div>
            </div>
      )
    }
}

export default Register