import "./styles.css";
import MyCart from "./components/MyCart";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Layout />} />
        <Route exact path="/myCart" element={<MyCart />} />
      </Routes>
    </div>
  );
}
