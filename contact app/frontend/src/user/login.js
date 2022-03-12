import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';


function Log() {

    let [email,setEmail] = useState('');
    let [password,setPassword] = useState('');
    let [signinStatus,setSigninStatus] = useState('');
    const navigate = useNavigate();    
    
  
    const signin=()=>{
      axios.post("http://localhost:8000/signin",{
        email: email,
        password: password
        
      }).then((response)=>{
        console.log(response.data.message);
        if (response.data.message=="user found"){
          navigate('/contact');
        }
        else{
          setSigninStatus(response.data.message);
        }
        
      })
      
      
    }
    return (
        <div className="box">
            <div className="box1">
            <h1>User Login</h1>
            <form>
                
                <h3>Email : </h3>
                <input type="text" name="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} />
                
                <br />
                
                <h3>Password : </h3>
                <input type="password" name="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}  />
                
                <br />
                <button type="button" className="btn" onClick={signin} > Login </button>
                <br />
                <a href="/register">Not yet signed up</a>
            </form>
            </div>
            <h1>{signinStatus}</h1>
        </div>
    )
}

export default Log;