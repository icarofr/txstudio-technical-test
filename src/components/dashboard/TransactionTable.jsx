import React from "react";

export default function TransactionTable({ headers, data, type }) {
  const getValueStyle = (value) => {
    if (value === "Validé") {
      return "text-green-500 font-medium";
    } else if (value === "En attente") {
      return "text-gray-400";
    }
    return "";
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6 py-6 px-4">
      <div className="overflow-x-auto">
        <table className="min-w-full table-fixed">
          <colgroup>
            <col className="w-24" />

            {headers.map((_, index) => (
              <col key={index} className="w-32" />
            ))}
          </colgroup>
          <thead className="bg-white">
            <tr>
              <th className="py-3 px-4 text-left"></th>

              {headers.map((header, index) => (
                <th
                  key={index}
                  className="py-3 px-4 text-center text-xs font-bold text-blue-900 break-words"
                >
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className="py-4 px-4 font-bold text-gray-600 text-xs whitespace-nowrap">
                  {row.type}
                </td>

                {headers.map((header, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`py-4 px-4 text-gray-400 text-center text-xs whitespace-normal ${getValueStyle(
                      row[header.key]
                    )}`}
                  >
                    {row[header.key] === "Validé" ? (
                      <span className="flex items-center justify-center">
                        {row[header.key]}
                      </span>
                    ) : (
                      row[header.key]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
