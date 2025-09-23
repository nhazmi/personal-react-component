import { useState } from "react";

export default function Items({ items3, level=0 }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="container" style={{marginLeft:`${level*16}px`,
                                        textAlign: "left"
}}>
        <div 
          onClick={function () {
            setExpanded(!expanded);
          }}
        >
          {items3.label}{' '}
          {items3.children ? (expanded ? "-" : "+") : ""}
        </div>
        <div className="childComponent">
          {items3 && items3.children
            ? expanded
              ? items3.children.map(function (item) {
                  return <Items items3={item} key={item.id} level={level + 1}></Items>;
                })
              : null
            : null}
        </div>
    </div>
  );
}
