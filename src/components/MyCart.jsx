import react from "react";
import { useLocation } from "react-router-dom";
const MyCart = () => {
  const location = useLocation();
  console.log({ location });
  const payload = location.state.payload;

  console.log({ payload });

  return <div className="MyCart">{JSON.stringify(payload)}</div>;
};

export default MyCart;
