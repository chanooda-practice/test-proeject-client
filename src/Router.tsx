import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routers/Home/Home";
import Signup from "./routers/Signup/Signup";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
