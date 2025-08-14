import React, { useState } from "react";
import questionnaires from "../questionnaires";
import { Time } from "../types/Time";
import FilterSidebar from "../components/FilterSidebar";
import QuestionnaireTable from "../components/QuestionnaireTable";
import { getIconForLink } from "../utils/iconUtils";

type Filters = {
  scales: string[];
  time: Time | "";
  language: string;
  scaleSearch: string;
};

const QuestionnairesPage: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [filters, setFilters] = useState<Filters>({
    scales: [],
    time: "",
    language: "",
    scaleSearch: "",
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value, selectedOptions } = e.target;
    if (name === "scales") {
      const selectedValues = Array.from(
        selectedOptions,
        (option) => option.value
      );
      setFilters({ ...filters, [name]: selectedValues });
    } else {
      setFilters({ ...filters, [name]: value });
    }
  };

  const handleScaleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    setFilters({
      ...filters,
      scaleSearch: searchValue,
    });
  };

  const handleScaleToggle = (scale: string) => {
    const newScales = filters.scales.includes(scale)
      ? filters.scales.filter((s) => s !== scale)
      : [...filters.scales, scale];
    setFilters({ ...filters, scales: newScales });
  };

  const handleClearScales = () => {
    setFilters({ ...filters, scales: [] });
  };

  const filteredQuestionnaires = questionnaires.filter((q) => {
    const matchesSearch = q.name.toLowerCase().includes(search.toLowerCase());
    const matchesScales = filters.scales.length
      ? filters.scales.every((factor) => q.metadata.scales.includes(factor))
      : true;

    const matchesTime = filters.time
      ? q.metadata.time?.includes(filters.time)
      : true;

    const matchesLanguage = filters.language
      ? q.metadata.language?.includes(filters.language)
      : true;

    return matchesSearch && matchesScales && matchesTime && matchesLanguage;
  });

  return (
    <div className="container-fluid">
      <div className="d-flex">
        <FilterSidebar
          questionnaires={questionnaires}
          search={search}
          filters={filters}
          onSearchChange={handleSearch}
          onFilterChange={handleFilterChange}
          onScaleSearchChange={handleScaleSearchChange}
          onScaleToggle={handleScaleToggle}
          onClearScales={handleClearScales}
        />
        <QuestionnaireTable
          questionnaires={filteredQuestionnaires}
          getIconForLink={getIconForLink}
        />
      </div>
    </div>
  );
};

export default QuestionnairesPage;
