import { useEffect, useState } from "react";
import "./scrollIndicator.css";
// 'https://dummyjson.com/products/category-list' this is the api to be fetch

export default function ScrollIndicator() {
  const [productData, setProductData] = useState(null);
  const [scrollLevel, setScrollLevel] = useState(0);

 

  function scrollingProgress() {
    const distanceScrolled = document.documentElement.scrollTop;
    const totalHeight = document.documentElement.scrollHeight;
    const viewportHeight = document.documentElement.clientHeight;

    const scrollPercentage =
      (distanceScrolled / (totalHeight - viewportHeight)) * 100;
    setScrollLevel(scrollPercentage);
  }

  async function fetchProduct() {
    try {
      const response = await fetch(
        "https://dummyjson.com/products/category-list"
      );
      const data = await response.json();
      setProductData(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(function () {
    fetchProduct();
    window.addEventListener("scroll", scrollingProgress);

    return function(){window.removeEventListener("scroll", scrollingProgress)}
  }, []);

  return (
    <div className="container">
      <div className="scrollIndicatorContainer">
        <div
          className="scrollProgress"
          style={{
            width: `${ scrollLevel }%`,
            height: "20px",
            backgroundColor: "green",
            position: "fixed",
            top: "0px",
            left: "0px",
            transitionDuration:"0.1s"
          }}
        ></div>
      </div>
      {productData && productData.length > 0 ? (
        <ul>
          {productData.map(function (item, index) {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      ) : null}
    </div>
  );
}
