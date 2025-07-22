

import { Header } from "../components/Header"
import instance from "../api/instance"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import Loader from "../components/Loader"



export default function Contact() {
    
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: ''
    })

    const handleChange = (e) => {
        const { name, value} = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try{
            const response = await instance.post('api/create-contact', formData)
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

        }catch(err){
            console.error(err)
            toast.error('Failed to create contact!')
        }finally{
            setLoading(false)
        }
    }
    

    return(
        <div className="w-full flex flex-col items-center justify-center">

        <ToastContainer
            position="top-right"
            autoClose={5000}
        />
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

                <button type="submit">
                    {loading ? "Submitting" : "Submit"}
                </button>
                {loading && <Loader />}
            </form>
        </div>
    )
};
