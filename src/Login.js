import React from 'react';
import './Login.css';

const Login = () => {
  var userData=[
    {UserName:'yuvaraj',passcode:123,cart:[]},
    {UserName:'Vadivel',passcode:456,cart:[]},
    {UserName:'Linkesh',passcode:789,cart:[]}];

    const Signup=()=>{
      var UserName=document.getElementById("userName").value;
      var Userpasscode=document.getElementById("passcode").value;
    

      var Details=userData.filter((data)=>{
        return UserName==data.UserName; 
        

      });

      if(Details.length>0){
     
        if(Details[0].passcode==Userpasscode){
          localStorage.setItem("userName",Details[0].UserName);
          window.location.replace('/home');
        }
       
      }
      else{
        console.log("Wrong Passcode");
      }
      


      
    }
  return (

    <div className='main'>
<div class="container">
    <h2>Login</h2>
    <hr></hr>
        <div class="input-box">
            <input type="text" placeholder="Username"></input>
       
            <input type="password" placeholder="Password"></input>
        </div>
        <div class="remember-forgot">
         
             <input type="checkbox"> Remember Me</input>
      
            <a href="#">Forgot password?</a>
        </div>
        <button onClick={Signup}>Log in</button>
        <div class="register-link">
        <p>Don't have an account?<a href="#">Register Here!</a></p>
        </div>
    
</div>
</div>
     
  )
}

export default Login