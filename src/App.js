import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Common/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import Signup from "./pages/Signup";

function App() {
  return (
    <Layout>
      <Routes>
        {/* Home */}
        <Route exact path="/" element={<Home />} />
        {/* Signup */}
        <Route exact path="signup" element={<Signup />} />
        {/* Login */}
        <Route exact path="login" element={<Login />} />
        {/* Quiz */}
        <Route exact path="quiz" element={<Quiz />} />
        {/* Result */}
        <Route exact path="result" element={<Results />} />
      </Routes>
    </Layout>
  );
}

export default App;
