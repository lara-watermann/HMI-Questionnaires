import React from "react";
import { Questionnaire } from "../types/Questionnaire";

interface QuestionnaireTableProps {
  questionnaires: Questionnaire[];
  getIconForLink: (linkType: string) => string | null;
}

const QuestionnaireTable: React.FC<QuestionnaireTableProps> = ({
  questionnaires,
  getIconForLink,
}) => {
  return (
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
          {questionnaires.map((q) => (
            <tr key={q.short}>
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
                {Object.entries(q.links || {}).map(([linkType, linkUrl]) => (
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
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionnaireTable;
