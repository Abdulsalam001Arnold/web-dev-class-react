

import React, {useState} from "react"
import instance from "../api/instance"
import { ToastContainer, toast } from "react-toastify"


export default function Profile() {
    const [bio, setBio] = useState('')
    const [profilePicture, setProfilePicture] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleFileChange = (e) => {
        setProfilePicture(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!bio || !profilePicture){
            toast.error('Please fill all reaquired fields.')
        }

        const formData = new FormData()
        formData.append('bio', bio)
        formData.append('profilePicture', profilePicture)
        
        setLoading(true)
        try{
            const response = await instance.post('/api/create-user', formData)
            console.log(response)
        }catch(err){

        }finally{
        setLoading(false)

        }
    }


    return(
        <div className="w-full min-h-screen flex flex-col items-center justify-center">
            <div className="flex flex-col gap-5">
                <h1>Create your profile</h1>
                <form action='POST' onSubmit={handleSubmit}>
                <textarea className="w-[20rem]" rows={6} placeholder="Tell us about yourself......." value={bio} onChange={(e) => setBio(e.target.value)}/>

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                />

                <input
                    type="submit"
                    value='Submit'
                />
                </form>
            </div>
        </div>
    )
}