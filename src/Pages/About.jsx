import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function About() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("Button has been clicked!!!");
    navigate("/contact");
  };

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await fetch(
          "https://archbuild-api.vercel.app/api/peopleList"
        );
        const data = await response.json();

        if (data) {
          navigate("/");
        }

        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAPI();
  }, []);

  return (
    <div className="w-full">
      <Header title="This is about page!" />

      <p>mpoepvrpmrvpomerpovmporemvpoermvpompovnorooeooeoop</p>

      <button onClick={handleSubmit}>Click me!!</button>
    </div>
  );
}
