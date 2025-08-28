import React from "react";
import { categoriesList, ratingList } from "../constants/Books";
import FilterListToggle from "../filterListToggle/FilterListToggle";
import "./filter.css";

const FilterPanel = ({ selectedCategory, selectToggle, selectedRating, selectRating}) => {
  return (
    <div>
      {/* category filter */}
      <div className="input-group">
        <p className="label">Category</p>
        <FilterListToggle
          options={categoriesList}
          value={selectedCategory}
          selectToggle={selectToggle}
        />
      </div>

      {/* genre filter */}

      {/* price range */}

      {/* rating filter */}

      <div className="input-group">
        <p className="label">Star Rating</p>
         <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />
      </div>
    </div>
  );
};

export default FilterPanel;
