import "./App.scss";
import { Routes, Route, Outlet } from "react-router-dom";

import HomeComponent from "./routes/Home/HomeComponent";
import Navigation from "./routes/Navigation/Navigation";
import SignIn from "./routes/sign-in/SignIn";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomeComponent />}>
          {" "}
        </Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
