import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const Update = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5177/users/' + id)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put('http://localhost:5177/users/'+ id, data)
        .then(res => {
            alert("Data updated successfully!");
            navigate('/');
        })
    };

  return (
    <div className='container-fluid d-flex w-100 h-100 justify-content-center align-item-center mt-5'>
    <Form onSubmit={handleSubmit} className='w-50 border bg-light p-5 col'> 
        <input type="text" name="name" id="name" className='form-control mb-4' placeholder='Name'
        value={data.name}
        onChange={e => setData({...data, name: e.target.value})}
        />
        <input type="text" name="email" id="email" className='form-control mb-4' placeholder='Email'
        value={data.email}
        onChange={e => setData({...data, email: e.target.value})}
        />
        <button type='submit' className='btn btn-outline-primary'>Update</button>
    </Form>
</div>
  )
}

export default Update
