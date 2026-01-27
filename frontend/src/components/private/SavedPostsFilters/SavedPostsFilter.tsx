import { ChevronLeft, ChevronRight } from "lucide-react";
import "./SavedPostsFilter.css";

interface SavedPostsFilterProps {
  showFavoritesOnly: boolean;
  setShowFavoritesOnly: (value: boolean) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

const SavedPostsFilter = ({
  showFavoritesOnly,
  setShowFavoritesOnly,
  currentPage,
  setCurrentPage,
  totalPages,
  hasNextPage,
  hasPrevPage,
}: SavedPostsFilterProps) => {
  const handlePrevPage = () => {
    if (hasPrevPage) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (hasNextPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="posts-filter-wrapper">
      <div className="flex-row-gap-2 flex-col sm:flex-row">
        <h2>Filter by favorite:</h2>

        <button onClick={() => setShowFavoritesOnly(!showFavoritesOnly)} className="pill-btn">
          <div className={`is-pill ${showFavoritesOnly ? "left-0.5" : "right-0.5"}`} />
          <span
            className={`pill-text ${showFavoritesOnly ? "text-neutral-300" : "text-neutral-400"}`}
          >
            Yes
          </span>
          <span
            className={`pill-text ${!showFavoritesOnly ? "text-neutral-300" : "text-neutral-400"}`}
          >
            No
          </span>
        </button>
      </div>

      <div className="flex-row-gap-2 flex-col sm:flex-row">
        <h2>
          Page {currentPage} of {totalPages}
        </h2>
        <div className="flex-row-gap-2">
          <button onClick={handlePrevPage} disabled={!hasPrevPage} className="page-btn">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={handleNextPage} disabled={!hasNextPage} className="page-btn">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavedPostsFilter;
