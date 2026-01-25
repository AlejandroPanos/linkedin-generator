import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "./SavedPostsFilter.css";

const SavedPostsFilter = () => {
  const [filter, setFilter] = useState(false);

  return (
    <div className="posts-filter-wrapper">
      <div className="flex-row-gap-2">
        <h2>Filter by favorite:</h2>

        <button onClick={() => setFilter(!filter)} className="pill-btn">
          <div className={`is-pill ${filter ? "left-0.5" : "right-0.5"}`} />
          <span className={`pill-text ${filter ? "text-neutral-300" : "text-neutral-400"}`}>
            Yes
          </span>
          <span className={`pill-text ${!filter ? "text-neutral-300" : "text-neutral-400"}`}>
            No
          </span>
        </button>
      </div>

      <div className="flex-row-gap-4">
        <h2>Page 1 of 5</h2>
        <div className="flex-row-gap-2">
          <button className="page-btn">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="page-btn">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavedPostsFilter;
