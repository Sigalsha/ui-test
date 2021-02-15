import React, { useState, useEffect } from "react";
import axios from "axios";
import { div, AvatarImg } from "./style";

const Avatar = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await axios("https://randomuser.me/api/?results=5");
        localStorage.setItem(
          "avatar",
          result.data.results[0].picture.thumbnail
        );
        setData(result.data.results);
        setIsLoading(false);
      } catch (err) {
        console.log("err: ", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {!isLoading && data ? (
        <AvatarImg src={localStorage.getItem("avatar")} alt="avatar-image" />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Avatar;
