import {useState} from "react";

function CreateRandomColour(){
    const [color, setColor] = useState("white")

    function returnRandomNumber(length){
        return(Math.floor(Math.random()*length))
    }

    function createRgbColour(){
        //rgb(x,y,z) 
        const r = returnRandomNumber(256)
        const g = returnRandomNumber(256)
        const b = returnRandomNumber(256)

        let RgbColor = `rgb(${r},${g},${b})`        
        setColor(RgbColor)
    }

    function createHexColour(){
        //#RRGGBB
        const HexChar = ["0","1","2","4","5","6","7","8","9","A","B","C","D","E","F"]
        let HexColor = "#"

        for(let i=0; i<6; i++){
            HexColor += HexChar[returnRandomNumber(HexChar.length)]
        }

        setColor(HexColor)
    }
return(
        <>
        <div className="container"
        style={{
            height:"100vh",
            width:"100vw",
            backgroundColor: color}
        }>
            <button onClick={createRgbColour}>RGB</button>
            <button onClick={createHexColour} >HEX</button>
            <button onClick={function(){
                console.log(color)
            }} >Reset</button>
        </div>
        </>
    )
}

export default CreateRandomColour