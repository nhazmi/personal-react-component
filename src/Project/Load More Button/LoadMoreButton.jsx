import { useState, useEffect } from "react";
import "./LoadMoreButton.css";

function LoadMoreButton() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState([]);
  const [count, setCount] = useState(3)

  async function fetchImage() {
    try {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${count}&limit=8`
      );
      if (!response) {
        throw new Error("Data Could Not Be Fetch");
      }
      const data = await response.json();
      setImage((prevData) => [...prevData, ...data]);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setError(true);
      setLoading(false);
    }
  }

  function removeImage(index) {
    const updatedImage = image.filter(function (_, i) {
      return i !== index;
    });
    setImage(updatedImage);
  }

  function handleButtonClick(){
    setCount(function(c){return(c+1)})
    console.log(`${count}`)
  }

  useEffect(function () {
    fetchImage();
  }, [count]);

  return (
    <>
      <div className="PageMainContainer">
        {loading ? <div>Loading Data. Please Wait</div> : null}
        {error ? <div>Could Not Display Image</div> : null}
        {image && image.length ? (
          <div className="ProductMainContainer">
            {image.map(function (item, index) {
              return (
                <span
                  key={index}
                  onClick={function () {
                    // removeImage(index);
                  }}
                  className="ProductContainer"
                >
                  <img
                    onClick={function () {
                      // removeImage(index);
                    }}
                    className="ProductImage"
                    key={index}
                    src={item.download_url}
                    alt={item.author}
                  />
                </span>
              );
            })}
          </div>
        ) : null}
        {(!loading && image)? <div className="ButtonContainer">
          <button className="Btn" onClick={handleButtonClick}>Load More</button>
        </div> : null}
        
      </div>
    </>
  );
}

export default LoadMoreButton;
