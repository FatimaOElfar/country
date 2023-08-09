import Navbar from "../component/navbar/Navbar";
import Header from "../component/header/Header";
import { useState, useEffect, CSSProperties } from "react";
import Cart from "../component/cart/Cart";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {}, 5000);
    setLoading(false);
  }, []);
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Header />
      <Cart />
    </div>
  );
};

export default Home;
