import React from "react";
import { Questionnaire } from "../types/Questionnaire";
import { useTheme } from "../hooks/useTheme";

interface QuestionnaireTableProps {
  questionnaires: Questionnaire[];
  getIconForLink: (linkType: string, isDarkMode?: boolean) => string | null;
  onQuestionnaireClick: (questionnaire: Questionnaire) => void;
}

const QuestionnaireTable: React.FC<QuestionnaireTableProps> = ({
  questionnaires,
  getIconForLink,
  onQuestionnaireClick,
}) => {
  const { actualTheme } = useTheme();
  return (
    <div className="">
      <div className="table-responsive-md overflow-hidden">
        <table className="table table-hover table-sm mb-0">
          <thead className=" sticky-top border-0">
            <tr>
              <th className="px-3" style={{ minWidth: "80px" }}>
                Abbr.
              </th>
              <th style={{ minWidth: "200px" }}>Name</th>
              <th
                className="d-none d-md-table-cell"
                style={{ minWidth: "150px" }}
              >
                Scales
              </th>
              <th
                className="d-none d-lg-table-cell"
                style={{ minWidth: "100px" }}
              >
                Time
              </th>
              <th
                className="d-none d-lg-table-cell"
                style={{ minWidth: "120px", maxWidth: "150px" }}
              >
                Languages
              </th>
              <th className="d-none d-sm-table-cell " style={{ width: "80px" }}>
                Year
              </th>
              <th className="d-none d-md-table-cell " style={{ width: "80px" }}>
                Items
              </th>
              <th className="" style={{ width: "100px" }}>
                Links
              </th>
            </tr>
          </thead>
          <tbody>
            {questionnaires.map((q) => (
              <tr
                key={q.short}
                onClick={() => onQuestionnaireClick(q)}
                className="table-row-clickable"
                style={{ cursor: "pointer" }}
              >
                <td className="text-wrap p-3">
                  <span className="fw-bold text-primary">{q.short}</span>
                </td>
                <td>
                  <div>
                    <div className="fw-medium">{q.name}</div>
                    <div className="d-md-none mt-1">
                      <small className="text-muted">
                        {q.metadata.scales.length} scale
                        {q.metadata.scales.length !== 1 ? "s" : ""} •{" "}
                        {q.metadata.items} items
                      </small>
                    </div>
                  </div>
                </td>
                <td className="d-none d-md-table-cell">
                  <div className="d-flex flex-wrap gap-1">
                    {q.metadata.scales.slice(0, 3).map((scale, index) => (
                      <span
                        key={index}
                        className="badge bg-secondary text-truncate"
                        style={{ maxWidth: "120px" }}
                      >
                        {scale.name}
                      </span>
                    ))}
                    {q.metadata.scales.length > 3 && (
                      <span className="badge bg-light text-dark">
                        +{q.metadata.scales.length - 3}
                      </span>
                    )}
                  </div>
                </td>
                <td className="d-none d-lg-table-cell text-nowrap">
                  <small className="text-muted">
                    {q.metadata.time.join(", ")}
                  </small>
                </td>
                <td className="d-none d-lg-table-cell">
                  <div style={{ wordWrap: "break-word", hyphens: "auto" }}>
                    <small className="text-muted">
                      {q.metadata.language?.length ? (
                        q.metadata.language.length <= 10 ? (
                          q.metadata.language.join(", ")
                        ) : (
                          <>
                            {q.metadata.language.slice(0, 10).join(", ")}
                            <span className="text-primary">
                              {" "}
                              +{q.metadata.language.length - 10} more
                            </span>
                          </>
                        )
                      ) : (
                        "—"
                      )}
                    </small>
                  </div>
                </td>
                <td className="d-none d-sm-table-cell">
                  <span className="badge bg-light text-dark opacity-75">
                    {q.metadata.year}
                  </span>
                </td>
                <td className="d-none d-md-table-cell">
                  <span className="">{q.metadata.items}</span>
                </td>
                <td>
                  <div className="d-flex gap-1">
                    {Object.entries(q.links || {})
                      .sort(([aType], [bType]) => aType.localeCompare(bType))
                      .map(([linkType, linkUrl]) => (
                        <a
                          key={linkType}
                          href={linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-secondary p-1 d-flex align-items-center justify-content-center"
                          onClick={(e) => e.stopPropagation()}
                          style={{ width: "28px", height: "28px" }}
                        >
                          <img
                            src={
                              getIconForLink(
                                linkType,
                                actualTheme === "dark"
                              ) || ""
                            }
                            alt={linkType}
                            style={{
                              width: "16px",
                              height: "16px",
                              display: "block",
                              margin: "auto",
                            }}
                          />
                        </a>
                      ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuestionnaireTable;
