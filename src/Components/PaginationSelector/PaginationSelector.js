import React from "react";
import style from "./style.module.css"

const PaginationSelector = ({ itensPerPage, setItensPerPage }) => {
    return (
      <div className={style.select}>
        <span>Users per page: </span>
        <select
          value={itensPerPage}
          onChange={(e) => setItensPerPage(Number(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>
    );
}

export default PaginationSelector;