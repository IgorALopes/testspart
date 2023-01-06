import React from "react";

const PaginationSelector = ({ itensPerPage, setItensPerPage }) => {
    return (
      <div>
        <span>Itens per page: </span>
        <select
          value={itensPerPage}
          onChange={(e) => setItensPerPage(Number(e.target.value))}
        >
          <option value={3}>3</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
      </div>
    );
}

export default PaginationSelector;