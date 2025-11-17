import { useState } from "react";
import PopupModal from "./PopupModal";
import { modalData } from "./Data";
import "./Popup.css"
 
export default function PopupMainPage(){
    const [appear, setAppear] = useState(false)
    const {headData,bodyData,footerData} = modalData

    function togglePopupModal(){
        setAppear(!appear)
    }
    return(
        <div className={`mainContainer ${closed? "opening" : "closing"}`}> 
            <div className="buttonContainer">
               {!appear? <button onClick={togglePopupModal}></button>: null} 
            </div>
            {appear? <PopupModal head={headData} content={bodyData} footer={footerData}></PopupModal>:null}
        </div>
    )
}