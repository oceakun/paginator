"use client";

import React, { useState } from "react";
import Paginator from "./Paginator";
import CardGrid from "./CardGrid";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main className="flex min-h-screen flex-col items-start md:items-center justify-between pt-24 md:p-24">
      <div className="flex flex-col items-start justify-start w-full">
        <CardGrid currentPage={currentPage} />
      </div>

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit   lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30">
          the user grid&nbsp;
        </p>
        <div className="fixed right-0 top-0 h-full flex flex-col items-center justify-center">
          <Paginator onPageChange={handlePageChange} />
        </div>
      </div>
    </main>
  );
};

export default App;
