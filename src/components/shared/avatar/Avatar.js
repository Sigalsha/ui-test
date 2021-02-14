import React, { useState, useEffect } from "react";
import axios from "axios";
import { AvatarWrapper, AvatarImg } from "./style";

const Avatar = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await axios("https://randomuser.me/api/?results=5");
        console.log("axios res ", result.data.results);
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
    <AvatarWrapper>
      {!isLoading && data ? (
        <AvatarImg src={localStorage.getItem("avatar")} alt="avatar-image" />
      ) : (
        <div>Loading...</div>
      )}
      {/*     <ul>
               {data.map((av) => {
          return (
            <li key={av.id.value}>
              <img src={av.picture.thumbnail} alt="avatar-image" />
            </li>
          );
        })} 
      </ul> */}
    </AvatarWrapper>
  );
};

export default Avatar;
