import {useEffect,useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Contact() {

    let [name,setName] = useState('');
    let [number,setNumber] = useState('');
    let [email,setEmail] = useState('');
    const navigate = useNavigate();

    
    const nav=()=>{
        navigate('/viewcontacts');
      }

    let [contactStatus,setContactStatus] = useState('');

    const contact=()=>{
        axios.post("http://localhost:8000/contact",{
          name: name,
          number: number,
          email: email
        }).then((response)=>{
            if (response.data.message){
                setContactStatus(response.data.message);
            }            
        })
    }

    

    
         
     
    

    return (
        <div className="box">
            <div className="box2">
            <h1>Contact name and contact list page</h1>
            <form>

                <h4>{contactStatus}</h4>
                
                <h3>Contact name : </h3>
                <input type="text" name="name" placeholder="Contact name" onChange={(e)=>{setName(e.target.value)}} />
                
                <br />
                
                <h3>Contact Number : </h3>
                <input type="number" name="number" placeholder="Contact number" onChange={(e)=>{setNumber(e.target.value)}}  />
                
                <br />
                <h3>Contact email : </h3>
                <input type="text" name="email" placeholder="Contact email" onChange={(e)=>{setEmail(e.target.value)}}  />
                
                <br />
                <button type="button" className="btn" onClick={contact}  > Save contact </button>
                
            </form>
            </div>
            <div className="view">
                <button className="btn3" type="button" onClick={nav}>View contact</button>
            </div>

            
          
            
        </div>
    )



}


export default Contact;