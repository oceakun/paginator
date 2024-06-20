import React, { useState } from "react";

interface PaginatorProps {
  onPageChange: (page: number, startId: number, endId: number) => void;
}

const Paginator: React.FC<PaginatorProps> = ({ onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pagesToShow = 10;

  const handlePageChange = (page: number) => {
    if (page >= 0) {
      const startId = page * 10 + 1; 
      const endId = startId + 9; 
      setCurrentPage(page);
      onPageChange(page + 1, startId, endId); 
    }
  };

  const startPage = Math.floor(currentPage / pagesToShow) * pagesToShow;

  const pages = [...Array(pagesToShow)].map((_, i) => startPage + i); 

  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-zinc-800/30 h-full px-4 border-l dark:border-neutral-800 ">
      <button
        className="h-10 px-3 py-1 rounded bg-zinc-700/30 text-gray-400 hover:bg-zinc-600/30 disabled:opacity-50 rotate-90 font-bold"
        onClick={() => handlePageChange(0)}
        disabled={currentPage === 0}
      >
        {"<<"}
      </button>
      <button
        className="h-10 px-3 py-1 rounded bg-zinc-700/30 text-gray-400 hover:bg-zinc-600/30 disabled:opacity-50 rotate-90"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 0}
      >
        {"<"}
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`w-10 px-3 py-1 rounded ${
            currentPage === page
              ? "bg-slate-700/50 text-white"
              : "bg-zinc-800/30 text-gray-400 hover:bg-zinc-600/30"
          }`}
          onClick={() => handlePageChange(page)}
        >
          {page + 1}
        </button>
      ))}
      <button
        className="h-10 px-3 py-1 rounded bg-zinc-700/30 text-gray-400 hover:bg-zinc-600/30 rotate-90"
        onClick={() => handlePageChange(currentPage + 1)}
      >
        {">"}
      </button>
      <button
        className="h-10 px-3 py-1 rounded bg-zinc-700/30 text-gray-400 hover:bg-zinc-600/30 rotate-90"
        onClick={() =>
          handlePageChange(10 - (currentPage % 10) + currentPage - 1)
        }
      >
        {">>"}
      </button>
    </div>
  );
};

export default Paginator;
