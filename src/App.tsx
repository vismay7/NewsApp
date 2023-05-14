import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import News from "./Components/News";
import Navbar from "./Components/Navbar";
import LoadingBar from "react-top-loading-bar";
import "bootstrap/dist/css/bootstrap.min.css";

const Test = () => {
  console.log("asd");
  return <div>test</div>;
};

const App = () => {
  const [progress, setProgress] = useState<number>(0);
  const pageSize = 15;

  return (
    <div>
      <Navbar />
      <LoadingBar height={3} color="#f11946" progress={progress} />

      <Routes>
        <Route path="/" element={<News setProgress={setProgress} pageSize={pageSize} country="in" category="general" />} />
        <Route path="/general" element={<News setProgress={setProgress} pageSize={pageSize} country="in" category="general" />} />
        <Route path="/entertainment" element={<News setProgress={setProgress} pageSize={pageSize} country="in" category="entertainment" />} />
        <Route path="/health" element={<News setProgress={setProgress} pageSize={pageSize} country="in" category="health" />} />
        <Route path="/science" element={<News setProgress={setProgress} pageSize={pageSize} country="in" category="science" />} />
        <Route path="/sports" element={<News setProgress={setProgress} pageSize={pageSize} country="in" category="sports" />} />
        <Route path="/technology" element={<News setProgress={setProgress} pageSize={pageSize} country="in" category="technology" />} />
      </Routes>
    </div>
  );
};

export default App;
