import React, { useState } from "react";

export default function IncidentInvestigationModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (


      <div className="max-w-6xl mx-auto p-6 bg-gray-100 min-h-screen text-center">
       <h1 className="text-3xl font-bold text-gray-800  ">Incident Investigation Form</h1>
                  <div className="flex justify-end mb-8">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-primary text-tertiary rounded shadow hover:bg-indogo-700"
      >
       + Incident Form
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

            {/* Form Header */}
            <h1 className="text-3xl font-bold text-red-600 text-center">
              Health & Safety Incident Investigation Report
            </h1>
            <p className="text-sm text-gray-500 font-semibold">
              CONFIDENTIAL – FOR INTERNAL USE ONLY
            </p>

            {/* Section 1: General Information */}
            <section>
              <h2 className="text-xl font-semibold mb-4">SECTION 1: GENERAL INFORMATION</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input placeholder="Report Number" className="border p-2 rounded" />
                <input type="date" className="border p-2 rounded" />
                <input type="datetime-local" className="border p-2 rounded" />
                <input placeholder="Location of Incident" className="border p-2 rounded" />
                <input placeholder="Reported By (Name & Position)" className="border p-2 rounded" />
                <input placeholder="Contact Info (Phone / Email)" className="border p-2 rounded" />
              </div>

              <div className="mt-4 space-y-2">
                <p className="font-medium">Incident Type:</p>
                {[
                  "Injury",
                  "Near Miss",
                  "Property Damage",
                  "Environmental",
                  "Fatality",
                  "Other",
                ].map((type, index) => (
                  <label key={index} className="inline-block mr-4">
                    <input type="checkbox" className="mr-2" />
                    {type}
                    {type === "Other" && (
                      <input
                        placeholder="Specify"
                        className="ml-2 border px-2 py-1 rounded"
                      />
                    )}
                  </label>
                ))}
              </div>
            </section>

            {/* Section 2: People Involved */}
            <section>
              <h2 className="text-xl font-semibold mb-4">SECTION 2: PEOPLE INVOLVED</h2>
              {[1, 2].map((i) => (
                <div key={i} className="grid grid-cols-4 gap-4 mb-2">
                  <input placeholder="Name" className="border p-2 rounded" />
                  <select className="border p-2 rounded">
                    <option>Employee</option>
                    <option>Contractor</option>
                    <option>Visitor</option>
                  </select>
                  <div className="flex items-center gap-4">
                    <label>
                      <input type="radio" name={`injury${i}`} className="mr-2" /> Yes
                    </label>
                    <label>
                      <input type="radio" name={`injury${i}`} className="mr-2" /> No
                    </label>
                  </div>
                  <input placeholder="Nature of Injury" className="border p-2 rounded" />
                </div>
              ))}
            </section>

            {/* Section 3: Property Involved */}
            <section>
              <h2 className="text-xl font-semibold mb-4">SECTION 3: PROPERTY INVOLVED</h2>
              {[1, 2].map((i) => (
                <div key={i} className="grid grid-cols-3 gap-4 mb-2">
                  <input placeholder="Type of Property" className="border p-2 rounded" />
                  <input placeholder="Description/ID" className="border p-2 rounded" />
                  <input placeholder="Nature of Damage" className="border p-2 rounded" />
                </div>
              ))}
            </section>

            {/* Section 4: Description */}
            <section>
              <h2 className="text-xl font-semibold mb-4">SECTION 4: DESCRIPTION OF INCIDENT</h2>
              <textarea
                rows={6}
                placeholder="Describe the incident..."
                className="border p-2 rounded w-full"
              />
            </section>

            {/* Section 5: Immediate Actions */}
            <section>
              <h2 className="text-xl font-semibold mb-4">
                SECTION 5: IMMEDIATE ACTION(S) TAKEN
              </h2>
              {[1, 2, 3].map((i) => (
                <div key={i} className="grid grid-cols-3 gap-4 mb-2">
                  <input placeholder="Actions Taken" className="border p-2 rounded" />
                  <input placeholder="By Whom" className="border p-2 rounded" />
                  <input type="datetime-local" className="border p-2 rounded" />
                </div>
              ))}
            </section>

            {/* Section 6: Root Cause Analysis */}
            <section>
              <h2 className="text-xl font-semibold mb-4">SECTION 6: ROOT CAUSE ANALYSIS</h2>
              <p className="font-medium mb-2">Underlying / Contributing Factors:</p>
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-wrap gap-4 mb-2">
                  {[
                    "Human",
                    "Equipment",
                    "Process/procedure",
                    "Environment",
                    "Other",
                  ].map((factor) => (
                    <label key={factor} className="inline-flex items-center">
                      <input type="checkbox" className="mr-2" />
                      {factor}
                    </label>
                  ))}
                </div>
              ))}

              <p className="font-medium mt-4">Root Cause:</p>
              <div className="flex flex-wrap gap-4">
                {[
                  "Human",
                  "Equipment",
                  "Process/procedure",
                  "Environment",
                  "Other",
                ].map((factor) => (
                  <label key={factor} className="inline-flex items-center">
                    <input type="checkbox" className="mr-2" />
                    {factor}
                  </label>
                ))}
              </div>
            </section>

            {/* Section 7: CAPA */}
            <section>
              <h2 className="text-xl font-semibold mb-4">
                SECTION 7: CORRECTIVE AND PREVENTIVE ACTIONS (CAPA)
              </h2>
              <div className="grid grid-cols-4 gap-4">
                <input placeholder="Action Required" className="border p-2 rounded" />
                <input placeholder="Responsible Person" className="border p-2 rounded" />
                <input type="date" className="border p-2 rounded" />
                <input type="date" className="border p-2 rounded" />
              </div>
            </section>

            {/* Section 8: Review & Sign-off */}
            <section>
              <h2 className="text-xl font-semibold mb-4">SECTION 8: REVIEW & SIGN-OFF</h2>
              {[
                ["Investigator(s)", "Investigator"],
                ["Supervisor/Manager Review", "Manager"],
                ["Health & Safety Manager Approval", "H&S Manager"],
              ].map(([label, name], idx) => (
                <div key={idx} className="grid grid-cols-3 gap-4 mb-2">
                  <input placeholder={`${label} Name(s)`} className="border p-2 rounded" />
                  <input placeholder="Signature" className="border p-2 rounded" />
                  <input type="date" className="border p-2 rounded" />
                </div>
              ))}
            </section>

            <button className="bg-primary text-tertiary px-6 py-2 font-semibold rounded hover:bg-primary">
              Submit Report
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
