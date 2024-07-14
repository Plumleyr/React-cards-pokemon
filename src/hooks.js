import { useState } from "react";
import { v1 as uuid } from "uuid";
import axios from "axios";

const useFlip = (initialVal = true) => {
  const [facingUp, setFacingUp] = useState(initialVal);
  const flip = () => {
    setFacingUp((facingUp) => !facingUp);
  };
  return [facingUp, flip];
};

const useAxios = (baseUrl) => {
  const [data, setData] = useState([]);
  const fetchData = async (name = null) => {
    const url = name ? `${baseUrl}/${name}` : baseUrl;
    const response = await axios.get(url);
    setData((data) => [...data, { ...response.data, id: uuid() }]);
  };
  return [data, fetchData];
};

export { useFlip, useAxios };
