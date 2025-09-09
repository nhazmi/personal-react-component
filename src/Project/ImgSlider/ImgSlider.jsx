import { useEffect, useState } from "react";
import "./ImgSlider.css";

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);

  async function fetchImage() {
    try {
      const response = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=10"
      );
      const data = await response.json();
      console.log(data);
      setImages(data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleLeftClick(index) {
    setCurrentIndex(index === 0 ? images.length - 1 : (i) => i - 1);
  }

  function handleRightClick(index) {
    setCurrentIndex(index === images.length - 1 ? 0 : (i) => i + 1);
  }

  function loading() {
    return <div>Loading Data ! Please Wait</div>;
  }

  useEffect(function () {
    fetchImage();
  }, []);

  return (
    <>
      <div className="MainContainer">
        {images && images.length ? (
          <div>
            <div className="SeparateContainer">
              <span
                className="ClickableButton"
                id="left"
                onClick={function () {
                  handleLeftClick(currentIndex);
                }}
              >
                ⬅️
              </span>
              <img src={images[currentIndex].download_url} alt="" />
              <span
                className="ClickableButton"
                id="right"
                onClick={function () {
                  handleRightClick(currentIndex);
                }}
              >
                ➡️
              </span>
            </div>
            <div className="NavigationalWrapper">
              {images.map(function (_, index) {
                const number = index + 1;
                return (
                  <span
                    className="NavigationPanel"
                    key={number}
                    onClick={function () {
                      setCurrentIndex(index);
                    }}
                  >
                    {number}
                  </span>
                );
              })}
            </div>
          </div>
        ) : (
          <div>Loading Data ! Please Wait</div>
        )}
      </div>
    </>
  );
}

export default ImageSlider;
