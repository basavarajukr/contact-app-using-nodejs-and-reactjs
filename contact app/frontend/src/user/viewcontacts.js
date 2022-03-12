import {useEffect,useState} from 'react';



function ContactView() {

    let [contacts,setContact] = useState([]);


    useEffect(() =>{
        fetch("http://localhost:8000/contacts")
        .then((response)=>response.json())
        .then((contact)=>{
            setContact(contact);
            console.log(contact);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])


    const todoItems = contacts.map((contact) =>
        <tbody key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.number}</td>
            <td>{contact.email}</td>
        </tbody>
);

    


    
    return (
        
            
            <div className="view">
                <table>
                        
                
                <tbody>
                    
                        {todoItems}
                    
                </tbody>
                </table>
                    
            
            </div>
            
        
    )



}


export default ContactView;