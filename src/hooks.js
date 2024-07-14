import { useState, useEffect } from "react";
import { v1 as uuid } from "uuid";
import axios from "axios";
import { setSelection } from "@testing-library/user-event/dist/cjs/event/selection/setSelection.js";

const useFlip = (initialVal = true) => {
  const [facingUp, setFacingUp] = useState(initialVal);
  const flip = () => {
    setFacingUp((facingUp) => !facingUp);
  };
  return [facingUp, flip];
};

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    let value;
    try {
      value = JSON.parse(window.localStorage.getItem(key)) || defaultValue;
    } catch (e) {
      value = defaultValue;
      console.log(e);
    }
    return value;
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch (e) {
      console.log(e);
    }
  }, [key, state]);

  return [state, setState];
};

const useAxios = (baseUrl, key) => {
  const [data, setData] = useLocalStorage(key, []);
  const fetchData = async (name = null, formatFunction) => {
    const url = name ? `${baseUrl}/${name}` : baseUrl;
    const response = await axios.get(url);
    const formattedData = await formatFunction(response.data);
    setData((data) => [...data, { ...formattedData, id: uuid() }]);
  };

  const clearData = () => {
    setData([]);
  };

  return [data, fetchData, clearData];
};

export { useFlip, useAxios };
