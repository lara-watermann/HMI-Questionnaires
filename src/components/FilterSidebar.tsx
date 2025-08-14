import React from "react";
import { Time } from "../types/Time";
import { Questionnaire } from "../types/Questionnaire";

type Filters = {
  scales: string[];
  time: Time | "";
  language: string;
  scaleSearch: string;
};

interface FilterSidebarProps {
  questionnaires: Questionnaire[];
  search: string;
  filters: Filters;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onScaleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onScaleToggle: (scale: string) => void;
  onClearScales: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  questionnaires,
  search,
  filters,
  onSearchChange,
  onFilterChange,
  onScaleSearchChange,
  onScaleToggle,
  onClearScales,
}) => {
  const uniqueScales = Array.from(
    new Set(questionnaires.flatMap((q) => q.metadata.scales))
  );

  // Use the predefined Time enum values
  const timeValues: Time[] = Object.values(Time);

  const uniqueLanguages = Array.from(
    new Set(questionnaires.flatMap((q) => q.metadata.language || []))
  );

  return (
    <div className="p-3 flex-shrink-0 col-3">
      <h2>Filters</h2>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name"
          value={search}
          onChange={onSearchChange}
        />
      </div>

      <div className="mb-3">
        <h4>Scales</h4>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Search scales"
          onChange={onScaleSearchChange}
        />
        <div className="d-flex flex-wrap">
          {uniqueScales
            .filter((scale) =>
              scale.toLowerCase().includes(filters.scaleSearch || "")
            )
            .map((scale) => (
              <button
                key={scale}
                type="button"
                className={`btn btn-sm m-1 ${
                  filters.scales.includes(scale)
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => onScaleToggle(scale)}
              >
                {scale}
              </button>
            ))}
        </div>
        <button
          className="btn btn-secondary mt-2 text-white "
          onClick={onClearScales}
        >
          Clear scales
        </button>
      </div>

      <div className="mb-3">
        <h4>Timing</h4>
        <select
          id="time"
          name="time"
          className="form-select"
          value={filters.time}
          onChange={onFilterChange}
        >
          <option value="">All</option>
          {timeValues.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <h4>Language</h4>
        <select
          id="language"
          name="language"
          className="form-select"
          value={filters.language}
          onChange={onFilterChange}
        >
          <option value="">All Languages</option>
          {uniqueLanguages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterSidebar;
