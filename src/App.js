import "./App.scss";
import { Routes, Route, Outlet } from "react-router-dom";

import HomeComponent from "./routes/Home/HomeComponent";
import Navigation from "./routes/Navigation/Navigation";

import Authentication from "./routes/authentication/Authentication";

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
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
