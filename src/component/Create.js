import axios from 'axios';
import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';


function Create() {
    const[values, setValues] = useState({
        id:'',
        name:'',
        phone:'',
        company:'',
        milkliters:''
    })
    const navigate = useNavigate();

    const handleSubmit =(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3000/users",values)
        .then(res=> {
            console.log(res);
            navigate('/home')
        })
        .catch(err => console.log(err));
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <h1>Add a user</h1>
            <form onSubmit={handleSubmit}>
                <div className='mb-2'>
                    <label>ID:</label>
                    <input type='text' name='id' className='form-control' placeholder='Enter Id' 
                    onChange={e=> setValues({...values, id:e.target.value})}/>
                </div>

                <div className='mb-2'>
                    <label>Name:</label>
                    <input type='text' name='name' className='form-control' placeholder='Enter Name' 
                    onChange={e=> setValues({...values,name:e.target.value})}/>
                </div>

                <div className='mb-2'>
                    <label>Phone:</label>
                    <input type='text' name='phone' className='form-control' placeholder='Enter Phone Number' 
                    onChange={e=> setValues({...values, phone:e.target.value})}/>
                </div>

                <div className='mb-2'>
                    <label>Company:</label>
                    <input type='text' name='company' className='form-control' placeholder='Enter Company' 
                    onChange={e=> setValues({...values, company:e.target.value})}/>
                </div>

                <div className='mb-2'>
                    <label>MilkLiters:</label>
                    <input type='text' name='milkliters' className='form-control' placeholder='Enter milkliters' 
                    onChange={e=> setValues({...values, milkliters:e.target.value})}/>
                </div>

                <button className='btn btn-success'>Submit</button>

                <Link to='/home' className='btn btn-primary ms-3'>Back</Link>
            </form>
        </div>
      
    </div>
  )
}

export default Create;
