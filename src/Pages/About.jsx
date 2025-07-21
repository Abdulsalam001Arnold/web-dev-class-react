import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import api from "../api/AxiosInstance";

export default function About() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("Button has been clicked!!!");
    navigate("/contact");
  };

  const [people, setPeople] = useState([])

  useEffect(() => {
    const fetchAPI = async() => {
      try{
        const response = await api.get("https://archbuild-api.vercel.app/api/peopleList")
        if(response?.status === 200){
          toast.success('Data fetched successfully!')
          const data = await response.data
          const peopleData = data.data
          console.log(peopleData)
          setPeople(peopleData)
        }
      }catch(err) {
        toast.error('Failed to fetch data!')
        console.error(err)
      }
    }
    fetchAPI()
  }, []);

  return (
    <div className="w-full mt-[3rem]">
    <ToastContainer
    position="top-right"
    autoClose="5000"
    pauseOnHover={true}
    draggable={true}
    />
      <Header title="This is about page!" />

      <ul>
        {people.map((person) => (
          <li className="flex flex-col">
            <img src={person.image} alt="people" className="w-full md:w-[16rem]"/>
            <h2>{person.name}</h2>
          </li>
        ))}
      </ul>

      <button onClick={handleSubmit}>Click me!!</button>
    </div>
  );
}
