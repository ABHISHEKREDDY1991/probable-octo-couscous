import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

function Update() {
    // const [data, setData] = useState([])
    const {id} = useParams();

    const[values, setValues] = useState({
        id:'',
        name:'',
        phone:'',
        company:'',
        milkliters:''
    })

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/users/' + id)
             .then(res =>{
                setValues(res.data);
             })
             .catch(err => console.log(err));
    },  [])

    const update = (event)=>{
        event.preventDefault();

        axios.put("http://localhost:3000/users/"+id, values)
        .then(res=> {
            console.log(res);
            navigate('/home')
        })
        .catch(err => console.log(err));

    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <h1>Update users</h1>
            <form onSubmit={update}>
                <div className='mb-2'>
                    <label>ID:</label>
                    <input type='text' name='id' className='form-control' placeholder='Enter Id' 
                    value={values.id} onChange={e=> setValues({...values, id:e.target.value})}/>
                </div>

                <div className='mb-2'>
                    <label>Name:</label>
                    <input type='text' name='name' className='form-control' placeholder='Enter Name' 
                    value={values.name} onChange={e=> setValues({...values, name:e.target.value})}/>
                </div>

                <div className='mb-2'>
                    <label>Phone:</label>
                    <input type='text' name='phone' className='form-control' placeholder='Enter Phone Number' 
                   value={values.phone} onChange={e=> setValues({...values, phone:e.target.value})}/>
                </div>

                <div className='mb-2'>
                    <label>Company:</label>
                    <input type='text' name='company' className='form-control' placeholder='Enter Company' 
                   value={values.company} onChange={e=> setValues({...values, company:e.target.value})}/>
                </div>

                <div className='mb-2'>
                    <label>MilkLiters:</label>
                    <input type='text' name='milkliters' className='form-control' placeholder='Enter milkliters' 
                  value={values.milkliters}  onChange={e=> setValues({...values, milkliters:e.target.value})}/>
                </div>

                <button className='btn btn-success'>Update</button>

                <Link to='/home' className='btn btn-primary ms-3'>Back</Link>
            </form>
        </div>
      
    </div>
  )
}

export default Update
