import Items from "./Leaf";

export default function ListItems({ items2 }) {
 return(<div>
    {items2 && items2.length > 0 ? 
    items2.map(function(item){
        return(<Items items3={item} key={item.id}></Items>)
    }):null}
 </div>
 ) 
}
