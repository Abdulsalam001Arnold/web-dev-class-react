


import { useState } from "react"
import createInstance from "../api/instance";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
export default function Login () {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const api = createInstance()
    
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => {
            return{
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try{
            const response = await api.post('/api/login-user', formData)
            // console.log(response)
            if(response?.status === 200){
                const data = await response.data
                console.log(data)
                const token = data?.token
                localStorage.setItem('auth-token', token)
                console.log(token)
                toast.success('User created successfully!!!')
                navigate('/')
            }
        }catch(err){
            console.error(err)
        }finally{
            setLoading(false)
        }
    }

    return(
        <main className="w-full bg-white flex flex-col items-center justify-center">

            <div className="max-w-6xl border border-gray-300">
                <h1>Login</h1>

                <form action='POST' onSubmit={handleSubmit}>
                    <input name="email" className="p-4 w-full focus:outline-amber-400" type="email" value={formData.email} placeholder="Input your email" onChange={handleChange}/>

                    <input name="password" className="p-4 w-full focus:outline-amber-400" value={formData.password} type="password" placeholder="Input your password" onChange={handleChange}/>

                    <input type="submit" value='Submit'/>
                </form>
                {loading && <Loader/>}
            </div>
        </main>
    )
}