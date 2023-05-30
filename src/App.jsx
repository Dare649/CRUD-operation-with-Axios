import React from 'react'
import { useState, useEffect } from 'react'
import axios  from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Table } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';


const App = () => {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate

  useEffect(() => {
    axios.get('http://localhost:5177/users')
    .then(res =>{
      setColumns(Object.keys(res.data[0]))
      setRecords(res.data)
    })
  }, []);

  const handleSubmit = (id) => {
    const confirmMessage = confirm("Do your want to delete this data?")
    if(confirmMessage){
      axios.delete('http://localhost:5177/users/' +id)
      .then(res => {
        alert("record has been deleted")
        navigate('/')
      }).catch(err => console.log(err));
    }
  }
  
  return (
    <div className='container-fluid mt-5'>
      <div>
        <Link to='/create' className='btn btn-outline-primary mb-4'>Add</Link>
      </div>
      <Table className="table table-hover">
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Name</th>
            <th>Email</th>
            <th className='float-end'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            records.map((d, i) =>(
              <tr key={i}>
                {/* <td>{d.id}</td> */}
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td className='text-end '>
                  <Link to={`/update/${d.id}`} className='btn btn-sm btn-outline-success me-3'>Update</Link>
                  <button onClick={e => handleSubmit(d.id)} className='btn btn-sm btn-outline-danger'>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

export default App
