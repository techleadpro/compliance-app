import React, { useState } from "react";

export default function HealthAndSafetyModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className="max-w-6xl mx-auto p-6 bg-gray-100 min-h-screen text-center">
       <h1 className="text-3xl font-bold text-gray-800  ">Health-And-Safety</h1>
                  <div className="flex justify-end mb-8">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-primary text-tertiary rounded shadow hover:bg-indogo-700"
      >
       + Risk Assessment Form
      </button>
             </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative p-6 space-y-8">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
            >
              &times;
            </button>

            {/* Form Content */}
            <h1 className="text-3xl font-bold text-indigo-700 text-center">
              Health & Safety Risk Assessment Form
            </h1>

            {/* SECTION: Details */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Details</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <input placeholder="Activity / Task / Facility" className="border p-2 rounded" />
                <input type="date" className="border p-2 rounded" />
                <input placeholder="Location" className="border p-2 rounded" />
                <input placeholder="Time" className="border p-2 rounded" />
              </div>
            </section>

            {/* SECTION: Risk Assessors */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Risk Assessors</h2>
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="Name" className="border p-2 rounded" />
                <input placeholder="Signature" className="border p-2 rounded" />
              </div>
            </section>

            {/* SECTION: Risk Matrix */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Risk Matrix</h2>
              <div className="overflow-x-auto">
                <table className="table-auto border border-collapse w-full text-sm">
                  <thead className="bg-indigo-100">
                    <tr>
                      <th className="border px-2 py-1" rowSpan="2">Severity / Consequence</th>
                      <th className="border px-2 py-1" colSpan="5">Probability / Likelihood</th>
                    </tr>
                    <tr>
                      <th className="border px-2 py-1">1 – Rare</th>
                      <th className="border px-2 py-1">2 – Unlikely</th>
                      <th className="border px-2 py-1">3 – Possible</th>
                      <th className="border px-2 py-1">4 – Likely</th>
                      <th className="border px-2 py-1">5 – Almost Certain</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['1 – Minor', [1, 2, 3, 4, 5], 'Low'],
                      ['2 – Moderate', [2, 4, 6, 8, 10], ['Low', 'Low', 'Medium', 'Medium', 'Medium']],
                      ['3 – Serious', [3, 6, 9, 12, 15], ['Low', 'Medium', 'Medium', 'High', 'High']],
                      ['4 – Major', [4, 8, 12, 16, 20], ['Low', 'Medium', 'High', 'High', 'High']],
                      ['5 – Fatal/Critical', [5, 10, 15, 20, 25], ['Low', 'Medium', 'High', 'High', 'Extreme']],
                    ].map(([label, scores, levels], idx) => (
                      <tr key={idx}>
                        <td className="border px-2 py-1 font-semibold">{label}</td>
                        {scores.map((score, i) => (
                          <td key={i} className="border px-2 py-1 text-center">
                            {score} ({Array.isArray(levels) ? levels[i] : levels})
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION: Risk Assessment Table */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Risk Assessment</h2>
              <div className="overflow-x-auto">
                <table className="table-auto border w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      {[
                        "#",
                        "Hazard Description",
                        "Current Controls",
                        "Inherent Risk (P × C)",
                        "Additional Control Measures",
                        "Residual Risk (P × C)",
                        "Due Date",
                        "Responsible Person",
                      ].map((heading, idx) => (
                        <th key={idx} className="border px-2 py-1 text-left">{heading}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4].map((row) => (
                      <tr key={row}>
                        <td className="border px-2 py-1">{row}</td>
                        {[...Array(7)].map((_, idx) => (
                          <td key={idx} className="border px-2 py-1">
                            <input className="w-full p-1 border rounded" />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
