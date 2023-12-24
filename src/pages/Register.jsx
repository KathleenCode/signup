import Styles from "../components/Register.module.css";
// import { useState } from "react";
import { Form, redirect } from "react-router-dom";

export default function Register() {
// const [user, setUser] = useState('');
// const [fullName, setFullName] = useState('');
// const [userName, setUserName] = useState('');
// const [password, setPassword] = useState('');

  return (
    <>
    <div className={Styles.all}>
     <h1>Register Here</h1>
     <Form action = "/register" method="POST">
     <input type="text" name="fullName" placeholder="Full Name" 
    //  value={fullName} onChange={(e) => setFullName(e.target.value)}
     ></input>
     <input type="text" name="userName" placeholder="Type in your username" 
    //  value={userName} onChange={(e) => setUserName(e.target.value)}
     ></input>
     <input type="text" name="password" placeholder="type your password here" 
    //  value={password} onChange={(e) => setPassword(e.target.value)}
     ></input>
     <input type="text" name="password" placeholder="repeat password" 
    //  value={password} onChange={(e) => setPassword(e.target.value)}
     ></input>
     <button style={{display: "block"}}>Register</button>
    </Form>
    </div>
    </>
  )
}

export const registerAction = async ({ request }) => {
  const formData = await request.formData();

  const user = {
    fullName: formData.get('fullName'),
    userName: formData.get('userName'),
    password: formData.get('password')
  }

  console.log(user);
  return redirect("/");
}