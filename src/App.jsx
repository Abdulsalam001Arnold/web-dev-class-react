import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Signup from "./Pages/SignUp";
import Login from './Pages/Login';
import Profile from "./Pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
              <Layout>
                <Home />
              </Layout>
              </ProtectedRoute>
            }
          />
          <Route path="/about" element={
            <Layout>
            <About />
            </Layout>
            } />
            <Route path="/create-profile" element={
            <Layout>
            <Profile />
            </Layout>
            } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
