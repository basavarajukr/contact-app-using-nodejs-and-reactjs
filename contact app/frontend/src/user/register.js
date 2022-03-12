import axios from 'axios';
import {useState} from 'react';


function Register(){

    let [email,setEmail] = useState('');
    let [password,setPassword] = useState('');
    let [secretcode,setSecretcode] = useState('');

    let [signupStatus,setSignupStatus] = useState('');
  
    const signup=()=>{
      axios.post("http://localhost:8000/signup",{
        email: email,
        password: password,
        secretcode: secretcode
      }).then((response)=>{
          if (response.data.message){
              setSignupStatus(response.data.message);
          }
          
      })
      
      
    }
    return(
        <div className="box">
            <div className="box1">
            <h1>User Register</h1>
            <form>
                
                
                <h3>Email : </h3>
                <input type="text" name="name" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} />
                
                <br />
                
                <h3>Password : </h3>
                <input type="password" name="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
                
                
                <br />
                
                <h3>Secret code : </h3>
                <input type="text" name="code" placeholder="Secret code" onChange={(e)=>{setSecretcode(e.target.value)}} />
                
                <br />
                <button type="button" className="btn" onClick={signup} > Register </button>
                <br />

                <a href="/login">Already registered</a>
            </form>
            </div>
            <h1>{signupStatus}</h1>
        </div>
    )
}

export default Register;