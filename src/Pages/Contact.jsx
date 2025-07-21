

import { Header } from "../components/Header"
import instance from "../api/instance"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import axios from "axios"


export default function Contact() {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: ''
    })

    const handleChange = (e) => {
        const {  name, value} = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            const response = await axios.post('https://nodejs-class-pgxf.vercel.app/api/create-contact', formData)
            if(response?.status === 201) {
                toast.success('Contact created successfully!')
                setFormData({
                    name: '',
                    email: '',
                    phoneNumber: ''
                })
            }

            if(response?.status === 400) {
                toast.error('Please fill all the fields correctly!')
            }

            toast.error('Failed to create contact!')
        }catch(err){
            console.error(err)
        }
    }
    

    return(
        <div className="w-full flex flex-col items-center justify-center">
            <Header title='This is contact page!!!'/>

            <p>Welcome, contact us for more info!!!</p>

            <form action="POST" onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Please enter your name"
                />

                 <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Please enter your email"
                />

                   <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Please enter your phone number"
                />

                <input
                    type="submit"
                    value={"Submit"}
                />
            </form>
        </div>
    )
};
