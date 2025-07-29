import { useState } from "react";
import createInstance from "../api/instance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import useUserStore from "../store/useUserStore";

export default function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    password: "",
    bio: "",
    profilePicture: null,
  });

  const { setToken, setUser } = useUserStore();
  const uploadAPI = createInstance(true);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      for (const key in formValues) {
        formData.append(key, formValues[key]);
      }

      const response = await uploadAPI.post("/api/create-user", formData);
      if (response?.status === 201) {
        const { token: tokenFetched, user: userFetched } = response.data;
        setToken(tokenFetched);
        setUser(userFetched);
        toast.success("User created successfully!");
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full bg-white flex flex-col items-center justify-center">
      <div className="max-w-6xl border border-gray-300">
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="fullName"
            className="p-4 w-full focus:outline-amber-400"
            type="text"
            value={formValues.fullName}
            placeholder="Input your full-name"
            onChange={handleChange}
          />

          <input
            name="email"
            className="p-4 w-full focus:outline-amber-400"
            type="email"
            value={formValues.email}
            placeholder="Input your email"
            onChange={handleChange}
          />

          <input
            name="password"
            className="p-4 w-full focus:outline-amber-400"
            type="password"
            value={formValues.password}
            placeholder="Input your password"
            onChange={handleChange}
          />

          <textarea
            name="bio"
            className="w-[20rem]"
            rows={6}
            placeholder="Tell us about yourself..."
            value={formValues.bio}
            onChange={handleChange}
          />

          <input
            name="profilePicture"
            type="file"
            accept="image/*"
            onChange={handleChange}
          />

          <input type="submit" value="Submit" />
        </form>
        {loading && <Loader />}
      </div>
    </main>
  );
}
