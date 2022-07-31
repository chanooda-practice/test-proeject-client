import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./routers/Home/Home";
import Signin from "./routers/signin/Signin";
import Signup from "./routers/Signup/Signup";

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
