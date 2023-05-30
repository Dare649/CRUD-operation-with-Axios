import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Add = () => {
    const [inputData, setInputData] = useState({name:'', email:''})

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:5177/users', inputData)
        .then(res => {
            alert("Data created successfully!");
            navigate('/');
        }).catch(error => console.log(error));
    };
return (
<div className='container-fluid d-flex w-100 h-100 justify-content-center align-item-center mt-5'>
    <Form onSubmit={handleSubmit} className='w-50 border bg-light p-5 col'> 
        <input type="text" name="name" id="name" className='form-control mb-4' placeholder='Name'
        onChange={(e) =>setInputData({...inputData, name: e.target.value})}
        />
        <input type="text" name="email" id="email" className='form-control mb-4' placeholder='Email'
        onChange={(e) =>setInputData({...inputData, email: e.target.value})}
        />
        <button type='submit' className='btn btn-outline-primary'>Submit</button>
    </Form>
</div>
)
}

export default Add
