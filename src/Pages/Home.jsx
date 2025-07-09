import { useState, useEffect, useRef } from "react";
import { Header } from "../components/Header";
import { Link } from "react-router-dom";

export default function Home() {
  const reference = useRef();
  const [count, setCount] = useState(0);

  const [name, setName] = useState("");

  const handleChange = (e) => {
    return setName(e.target.value);
  };

  useEffect(() => {
    console.info("Component has been updated!!!!");
    document.title = `My count is ${count}`;
  }, [count]);

  return (
    <div className="w-full">
      <Header title="Hello world!!" />
      <h1 className="text-xl leading-1.5 text-red-600">
        Welcome to my website!!!
      </h1>

      <div className="mt-[20px] border flex flex-col items-center justify-center gap-6">
        My count: {count}
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-black rounded-[20px] text-white hover:bg-white hover:text-black transition-all duration-200">
          Click me to increase count!!
        </button>
        <input
          type="text"
          name="name"
          value={name}
          ref={reference.current}
          onChange={handleChange}
          placeholder="enter your name"
        />
        <h1 className="mt-[3rem]">My name is: {name}</h1>

      <Link to='/about'>
        <button className="mt-[2rem]">
          Click me to navigate to About page
        </button>
      </Link>
      </div>
    </div>
  );
}
