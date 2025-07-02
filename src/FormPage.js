import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
//Function FormPage Component
function FormPage({ addEntry }){
    //State to manage form data
    const [formData,setFormData]=useState({name:'',email:''});
    const navigate=useNavigate();
//Handle input changes and form submission
    const handleChange=(e)=>{
        setFormData(prev=>({...prev,[e.target.name]:e.target.value}));

    };
    const handleSubmit=(e)=>{

        e.preventDefault();
        addEntry(formData);
        setFormData({name:'',email:''});
        navigate('/display');
    };
    return(
        <div style={{padding:'20px'}}>
            <h2>Form Page</h2>
            <form onSubmit={handleSubmit}>
                <input name='name' value={formData.name} onChange={handleChange} placeholder="Name" required/>
                <br/><br/>
                <input name='email' value={formData.email} onChange={handleChange} placeholder="Email" required/>
                <br/><br/>
                <button type="submit" >Submit</button>

            </form>
        </div>

    );
}
export default FormPage;