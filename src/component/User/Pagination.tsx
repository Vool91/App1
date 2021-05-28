import React, { useState } from "react";
import pag from "./Paginator.module.css";

type Props={
  totalUsersCount:number
  pageSize:number
  pageChange:(PagesCount:number)=>void
  startPage:number
  PortSize?:number
  
}

const Pagination:React.FC<Props> = ({totalUsersCount, pageSize,pageChange,startPage, PortSize =5} ) => {

  let PagesCount = Math.ceil(totalUsersCount / pageSize);
  let page:Array<number> =  [];

  for (let index = 1; index <= PagesCount; index++) {
    page.push(index);
  }

  let PortisionCount = Math.ceil(PagesCount / PortSize);
  let [portionNumber, SetPortionNumber] = useState(1);
  let LeftPortisionNumb = (portionNumber - 1) * PortSize + 1;
  let RightPortisionNumb = portionNumber * PortSize;

  return (
    <div className={pag.PAgg}>
      {portionNumber > 1 && (
        <button
          className={pag.leftPrev}
          onClick={() => {
            SetPortionNumber(portionNumber - 1);
          }}
        ></button>
      )}

      {page
        .filter((p) => p >= LeftPortisionNumb && p <= RightPortisionNumb)
        .map((p) => {
          return (
            <span     
                    //  className={(startPage === p) & pag.selectPage}
            
              key={p}
              onClick={(e) => {
                pageChange(p);
              }}
            >
              {p}
            </span>
          );
        })}

      {PortisionCount > portionNumber && (
        <button
          className={pag.rightPrev}
          onClick={() => {
            SetPortionNumber(portionNumber + 1);
          }}
        ></button>
      )}
    </div>
  );
};

export default Pagination;
