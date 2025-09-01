import { useState } from "react";
import "./Accordion.css";
import accordionData from "./Data";

export default function Accordion() {
  const [select, setSelect] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(id) {
    setSelect(select === id ? null : id);
    console.log(id);
    console.log(enableMultiSelection);
  }

  function handleMultiSelection(id) {
    let cpymultiple = [...multiple];
    if (cpymultiple.indexOf(id) !== -1) {
      const indexOfItem = cpymultiple.indexOf(id);
      cpymultiple.splice(indexOfItem, 1);
      setMultiple(cpymultiple);
      console.log(multiple);
    } else {
      cpymultiple.push(id);
      setMultiple(cpymultiple);
      console.log(multiple);
      console.log(enableMultiSelection);
    }
  }

  return (
    <>
      <button
        onClick={function () {
          setEnableMultiSelection(enableMultiSelection ? false : true);
        }}
      >
        Enable Multiselection
      </button>
      <div className="mainTitle">About Codexyss</div>
      <div className="container">
        <div className="individualContainer">
          {accordionData.map(function (item) {
            return (
              <div
                onClick={function () {
                  enableMultiSelection
                    ? handleMultiSelection(item.id)
                    : handleSingleSelection(item.id);
                }}
              >
                {item.question}
                {select === item.id || multiple.indexOf(item.id) !== -1 ? (
                  <h4>{item.answer}</h4>//4th item.answer is not rendering and disappearing properly
                ): null}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
