import React from "react";

// CSS
import "./list.scss";

// COMPONENTS
import ListItem from "../app-list-item";

// UTILS
import {useWindowDimensions} from "../../utils";


const List = (props) => {
  const {list, giftId} = props;
  const {width, height} = useWindowDimensions();

  const center = (giftId * 200) + ((giftId - 1) * 10) - (width / 2) + 110;

  const transformToGift = giftId ? {transform : `translate3d(-${center}px, 0, 0)`} : null;

  return(
    <ul className="spinner-wrapper" style={transformToGift}>
      {
        list.map((item, idx) => {
          return <li key={idx} className={`spinner-wrapper__item ${idx}`}><ListItem item={item} /></li>
        })
      }
    </ul>
  )
}

export default List;