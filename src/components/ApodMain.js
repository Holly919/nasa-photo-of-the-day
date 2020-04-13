import React, { useState, useEffect } from "react";
import axios from "axios";

import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";
export default function ApodMain() {
  const [photo, setphoto] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod`)
      .then(response => {
        console.log(response.data);
        setphoto(response.data);
      })
      .catch(error => {
        console.log("the data was not return", error);
      });
  }, []);
  return (
    <div className="photo">
      {photo.map(photo => {
        return (
          <PhotoCard
            key={photo.id}
            title={photo.title}
            description={photo.description}
            date={photo.date}
          />
        );
      })}
    </div>
  );
}

