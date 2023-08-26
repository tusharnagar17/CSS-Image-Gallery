import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

const App = () => {
  const [images, setImages] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [term, setTerm] = useState("");

  console.log(term);
  useEffect(() => {
    const api_key = import.meta.env.VITE_APP_PIXABAY_API_KEY;
    const api_link = `https://pixabay.com/api/?key=${api_key}&q=${term}&image_type=photo&pretty=true`;
    fetch(api_link)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsloading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <>
      <div className="container mx-auto">
        <ImageSearch searchText={(text) => setTerm(text)} />

        {!isloading && images.length === 0 && <h1 className="text-6xl text-center mx-auto mt-32">No Images found</h1> }

       {isloading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <ImageCard image={image} />
          ))}
        </div>}
        
      </div>
    </>
  );
};

export default App;
