// import React, { useState } from "react";
// import "./StrRating.css";

// const StarRating = ({ totalStars = 5 }) => {
//     const [hoveredStar, setHoveredStar] = useState(null);
//     const [selectedStar, setSelectedStar] = useState(null);

//     return (
//         <div style={{ display: "flex", gap: 4 }}>
//             {[...Array(totalStars)].map((_, idx) => {
//                 const starValue = idx + 1;
//                 const isFilled = hoveredStar
//                     ? starValue <= hoveredStar
//                     : starValue <= selectedStar;

//                 return (
//                     <span
//                         key={starValue}
//                         style={{
//                             cursor: "pointer",
//                             fontSize: 32,
//                             color: isFilled ? "#ffd900ff" : "#CCC",
//                             transition: "color 1s",
//                         }}
//                         onMouseEnter={() => setHoveredStar(starValue)}
//                         onMouseLeave={() => setHoveredStar(null)}
//                         onClick={() => setSelectedStar(starValue)}
//                         role="button"
//                         aria-label={`Rate ${starValue} star${starValue > 1 ? "s" : ""}`}
//                         tabIndex={0}
//                         onKeyDown={e => {
//                             if (e.key === "Enter" || e.key === " ") setSelectedStar(starValue);
//                         }}
//                     >
//                         ★
//                     </span>
//                 );
//             })}
//         </div>
//     );
// };    

// export default StarRating;

import { useState } from "react";
import "./StrRating.css";

function StarRating(){
    const [rated, setRated] = useState(0);
    const [hover, setHover] = useState(0);
    const yellow ="#FFFF00";
    const grey ="#808080";
   

    const newArray = [...Array(10)]
    return(
        <div
        style={{
            display:"flex",
            flexWrap:"wrap"
        }}>
            {newArray.map(function(item,index){
            const starValue = index + 1;
            return(
               <span 
               key={starValue}
               style={{
                color:starValue <= (hover||rated) ? yellow : grey,
                transitionDuration : "0.5s"
               }}
               onClick={function(){setRated(starValue)}}
               onMouseEnter={function(){setHover(starValue)}}
               onMouseLeave={function(){setHover(0)}}
               >
                ★
                </span>
            )
            })
            }
        </div>
    )
 
}
export default StarRating