import { useState } from "react";
import PopupMainPage from "./PopupMainPage";
import "./Popup.css"


export default function PopupModal({id,head,content,footer}){
    const [closed, setClosed] = useState(false)
    return <>{closed? <PopupMainPage></PopupMainPage> :<div className={`mainPopupContainer ${closed ? "opening" : "closing"}`}>
        <div className="headContainer">
            {!closed ? <p onClick={function(){
                setClosed(!closed);` `
            }}>x</p> : null}
            {head? head : "header"}
        </div>
        <div className="contentContainer">
            {content? content : "content"}
        </div>
        <div className="footerContainer">
            {footer? footer:"footer"}
        </div>
        </div>
        }</>
        

}

















// import { useState } from "react";

// export default function Modal() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       {/* Button to open modal */}
//       <button onClick={() => setIsOpen(true)}>Open Modal</button>

//       {/* Modal itself (ternary only) */}
//       {isOpen ? (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0,0,0,0.5)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 1000,
//           }}
//           onClick={() => setIsOpen(false)}
//         >
//           <div
//             style={{
//               backgroundColor: "#fff",
//               padding: "20px",
//               borderRadius: "8px",
//               width: "320px",
//               boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
//             }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h2>Welcome!</h2>
//             <p>This is a self-contained modal popup ✨</p>
//             <button onClick={() => setIsOpen(false)}>Close</button>
//           </div>
//         </div>
//       ) : null}
//     </div>
//   );
// }
