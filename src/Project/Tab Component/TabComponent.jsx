import { useState } from "react";
import "./TabComponent.css";

export default function TabComponent({ data }) {
  const [activeTab, setActiveTab] = useState(null);
  //the useState is seriously needed to create a widely (global)
  // available variable or const that can be read from anywhere in the component

  return (
    <div
      style={{
        backgroundColor:"#234C6A",
        padding: "5em",
        borderRadius: "50%",
      }}
    >
      <div style={{
        display:"flex",
        gap:"20px", 
        backgroundColor: "#1B3C53",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:"20px"
      }}>
        {data && data.length > 0
          ? data.map(function (item, itemIndex) {
              return (
                <div
                  className="label"
                  key={itemIndex}
                  onClick={function () {
                    setActiveTab(itemIndex);
                  }}
                >
                  <span >{item.label}</span>
                </div>
              );
            })
          : null}
      </div>

      {data && data.length > 0 && activeTab !== null   ? (
        <div className="content">{data[activeTab].content}</div>
      ) : null}
    </div>
  );
}
