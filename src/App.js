import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, StarsPage } from "./pages";

const App = () => {
  return(
    <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/stars" element={<StarsPage/>}/>
          </Routes>
      </BrowserRouter>
  );
};
export default App;