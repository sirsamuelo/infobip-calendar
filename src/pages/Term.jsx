import {useState} from 'react'
import BgOverlay from '../Components/BgOverlay'
import Button from '../Components/Button'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';

function Term() {
    const [formData,setFormData] = useState({
        name: '',
        age: ''
    })

    const [count,setCount] = useState(0)

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        if(formData.age > 0 && formData.name.length > 0) {
            toast.success('Data submitted')
            setFormData({
                name: '',
                age: ''
            })
            setCount(count => count + 1)
            navigate('/')
        } else {
            toast.error('Please provide valid data')
        }
    }

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

  return (
    <>
        <BgOverlay />
        <div className="container">
        <div className="home-section">
            <div className="home">
                <i className="fa-solid fa-calendar-check"></i>
                <h1>Doctors office</h1>
            </div>
            <p>Schedule your <span>Appointment</span></p>
        </div>
        <Button />
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" name='name' value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group mb-1">
                <label htmlFor="Age">Age</label>
                <input type="text" className='form-control' placeholder="Enter your age" name='age' value={formData.age} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <button className='btn btn-block' type='submit'>Submit</button>
            </div>
        </form>
        </div>
    </>
  )
}

export default Term