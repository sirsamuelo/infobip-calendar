import {useState} from 'react'
import BgOverlay from '../Components/BgOverlay'
import Button from '../Components/Button'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import {useParams} from 'react-router-dom'

function Term() {
    const [formData,setFormData] = useState({
        name: '',
        age: ''
    })
    const navigate = useNavigate()
    const {termId} = useParams()
    
    function parseData(someId){
        var existing = localStorage.getItem('terms')
        existing = existing ? existing.split(',') : []

        if(existing.length < 2) {
            existing.push(someId)
            localStorage.setItem('terms',existing.toString())
            toast.success('Term was submitted')
        } else {
            toast.error('Only 2 terms can be selected at maximum')
            navigate('/')
        }       
    }


    function handleSubmit(e) {
        e.preventDefault()
        
        if(formData.age > 0 && formData.name.length > 0) {
            parseData(termId)
            setFormData({
                name: '',
                age: ''
            })
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