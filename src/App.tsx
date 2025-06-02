import React, { useState } from "react";
import questionnaires from "./questionnaires";
import { Time } from "./types/Time";
import Credits from "./pages/Credits";
import Footer from "./components/Footer";

type Filters = {
  scales: string[];
  time: Time;
  language: string;
};

const getIconForLink = (linkType: string): string | null => {
  switch (linkType) {
    case "website":
      // LICENSE: https://www.flaticon.com/free-icon/globe_900782?term=globe&page=1&position=2&origin=search&related_id=900782
      return "/globe.png";
    case "doi":
      // LICENSE: Public Domain
      // Source: https://commons.wikimedia.org/wiki/File:DOI_logo.svg#Licensing
      return "/doi.svg";
    case "git":
      // LICENSE: Creative Commons Attribution 3.0 Unported License
      // Source: https://git-scm.com/downloads/logos
      return "/Git-Icon-Black.svg";
    case "osf":
      // LICENSE: CC0 1.0 Universal
      return "/osf.svg";
    default:
      return null;
  }
};

const App: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [filters, setFilters] = useState<Filters>({
    scales: [],
    time: undefined,
    language: "",
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

  const filteredQuestionnaires = questionnaires.filter((q) => {
    const matchesSearch = q.name.toLowerCase().includes(search.toLowerCase());
    const matchesScales = filters.scales.length
      ? filters.scales.every((factor) => q.metadata.scales.includes(factor))
      : true;
    let matchesTime: boolean;
    if (filters.time == "Post-Study") {
      matchesTime = q.metadata.time?.includes("Post-Study");
    } else if (filters.time == "Pre-Study") {
      matchesTime = q.metadata.time?.includes("Pre-Study");
    } else {
      matchesTime = true;
    }
    const matchesLanguage = filters.language
      ? q.metadata.language?.includes(filters.language)
      : true;

    return matchesSearch && matchesScales && matchesTime && matchesLanguage;
  });

  const uniquescales = Array.from(
    new Set(questionnaires.flatMap((q) => q.metadata.scales))
  );

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <div className="flex-grow-1">
        <div className="m-3">
          <h1>Human Machine Interaction Questionnaires</h1>
          <p>
            This is a collection of questionnaires used in the field of
            Human-Machine Interaction (HMI). You can filter the questionnaires
            by various criteria such as scales, methodology, time, language, and
            validation status.
          </p>
        </div>

        <div className="d-flex">
          <div className="p-3 flex-shrink-0 col-3">
            <h2>Filters</h2>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by name"
                value={search}
                onChange={handleSearch}
              />
            </div>

            <div className="mb-3">
              <h4>Scales</h4>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Search scales"
                onChange={(e) => {
                  const searchValue = e.target.value.toLowerCase();
                  setFilters({
                    ...filters,
                    scaleSearch: searchValue,
                  });
                }}
              />
              <div className="d-flex flex-wrap">
                {uniquescales
                  .filter((factor) =>
                    factor.toLowerCase().includes(filters.scaleSearch || "")
                  )
                  .map((factor) => (
                    <button
                      key={factor}
                      type="button"
                      className={`btn btn-sm m-1 ${
                        filters.scales.includes(factor)
                          ? "btn-primary"
                          : "btn-outline-primary"
                      }`}
                      onClick={() => {
                        const newScales = filters.scales.includes(factor)
                          ? filters.scales.filter((scale) => scale !== factor)
                          : [...filters.scales, factor];
                        setFilters({ ...filters, scales: newScales });
                      }}
                    >
                      {factor}
                    </button>
                  ))}
              </div>
              <button
                className="btn btn-secondary mt-2"
                onClick={() => setFilters({ ...filters, scales: [] })}
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
                onChange={handleFilterChange}
              >
                <option value="">All</option>
                {Array.from(
                  new Set(questionnaires.flatMap((q) => q.metadata.time || []))
                ).map((time) => (
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
                onChange={handleFilterChange}
              >
                <option value="">All Languages</option>
                {Array.from(
                  new Set(
                    questionnaires.flatMap((q) => q.metadata.language || [])
                  )
                ).map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
              </select>
            </div>

            <img
              src="/THA_Logo_S_Red_RGB_EN.svg"
              alt="Logo"
              style={{ width: "100%", height: "auto", marginTop: "20px" }}
            />
          </div>

          <div className="flex-grow-1 p-3">
            <table className="table table-striped table-bordered table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Abbreviation</th>
                  <th>Name</th>
                  <th>Scales</th>
                  <th>Time</th>
                  <th>Language</th>
                  <th>Year</th>
                  <th>Items</th>
                  <th>Links</th>
                </tr>
              </thead>
              <tbody>
                {filteredQuestionnaires.map((q) => (
                  <tr>
                    <td>{q.short}</td>
                    <td>{q.name}</td>
                    <td>{q.metadata.scales.join(", ")}</td>
                    <td>{q.metadata.time.join(", ")}</td>
                    <td>
                      {q.metadata.language?.length
                        ? q.metadata.language.join(", ")
                        : ""}
                    </td>
                    <td>{q.metadata.year}</td>
                    <td>{q.metadata.items}</td>
                    <td>
                      {Object.entries(q.links || {}).map(
                        ([linkType, linkUrl]) => (
                          <a
                            key={linkType}
                            href={linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={getIconForLink(linkType) || ""}
                              alt={linkType}
                              style={{
                                width: "24px",
                                height: "24px",
                                marginRight: "8px",
                              }}
                            />
                          </a>
                        )
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <p className="m-3">
        A german only website with similar content can be found at{" "}
        <a href="https://germanupa.de/wissen/fragebogenmatrix">German UPA</a>
      </p>
      <Credits />
      <Footer />
    </div>
  );
};

export default App;
