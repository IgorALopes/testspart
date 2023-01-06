import React from "react";
import style from "./style.module.css"

const Pagination = ({ pages, setCurrentPage }) => {
    return (
      <div>
        {Array.from(Array(pages), (user, index) => {
          return (
            <button
              className={style.pagination}
              value={index}
              onClick={(e) => setCurrentPage(Number(e.target.value))}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    );

  }

export default Pagination;