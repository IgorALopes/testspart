import React from "react";

const Pagination = ({ pages, setCurrentPage }) => {
    return (
      <div>
        {Array.from(Array(pages), (user, index) => {
          return (
            <button
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