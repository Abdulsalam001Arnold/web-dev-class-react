import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Signup from "./Pages/SignUp";
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
