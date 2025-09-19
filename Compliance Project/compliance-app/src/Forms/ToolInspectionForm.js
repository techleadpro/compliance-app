import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import ToolInterface from "../Forms-interface/Tool-interface";


// Accordion context
const AccordianContext = React.createContext();

function CanteenForm({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value);
  React.useEffect(() => {
    onChange?.(selected);
  }, [selected, onChange]);

  return (
    <ul {...props} className="space-y-2">
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
}

function AccordianItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = React.useContext(AccordianContext);
  const open = selected === value;

  return (
    <li className="border rounded" {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 font-medium cursor-pointer"
      >
        {trigger}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </header>
      <div className="overflow-hidden transition-all duration-300" style={{ height: open ? "auto" : 0 }}>
        {open && <div className="p-4 bg-white">{children}</div>}
      </div>
    </li>
  );
}

function ChecklistSection({ items }) {
  return (
    <table className="w-full border border-gray-300 table-auto border-collapse  ">
      <thead className="bg-gray-100 ">
        <tr>
          <th className="px-4 py-2 text-left border border-gray-300">Item</th>
          <th className="px-4 py-2 text-center border border-gray-300">√ / ⤫ / N/A</th>
          <th className="px-4 py-2 text-left border border-gray-300">Comments</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 ">
        {items.map((item, i) => (
          <tr key={i}  className={item.isCategoryEnd ? "mb-6" : ""}>
            <td className="px-4 py-2  border border-gray-300">{item}</td>
            <td className="px-4 py-2 text-center">
              <select className="border rounded px-2 py-1">
                <option value="√">√</option>
                <option value="⤫">⤫</option>
                <option value="N/A">N/A</option>
              </select>
            </td>
            <td className="px-4 py-2">
              <input
                type="text"
                placeholder="Enter comment"
                className="w-full border rounded px-2 py-1"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    
  );
}

const sections = [
  "General Information",
  "Category-Specific Information",
  "Issues & Action Plan",
  "Sign-Off"
];

export default function ToolInspectionFormModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [issues, setIssues] = useState([
    { issue: "", action: "", person: "", date: "" }
  ]);

  // Add updateIssue function to update a specific field of an issue
  const updateIssue = (idx, field, value) => {
    setIssues((prevIssues) =>
      prevIssues.map((issue, i) =>
        i === idx ? { ...issue, [field]: value } : issue
      )
    );
  };

    // Dummy handleSubmit function to prevent errors
  const handleSubmit = (e) => {
    e && e.preventDefault && e.preventDefault();
    // Add your submit logic here
    alert("Form submitted!");
    closeModal();
  };

  // Add deleteIssue function to remove an issue by index
  const deleteIssue = (idx) => {
    setIssues((prevIssues) => prevIssues.filter((_, i) => i !== idx));
  };

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentSection(0);
  };

  return (
    <div>
      <div className="flex justify-end p-4">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-primary text-tertiary rounded"
      >
        + Tool Inspection Form
      </button>
      </div>
            <div>
            <ToolInterface />
          </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative p-6">
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
            >
              &times;
            </button>

            

            <div className="flex justify-between items-center mb-8 px-4">
  {sections.map((label, index) => {
    const isCompleted = index < currentSection;
    const isCurrent = index === currentSection;

    return (
      <div key={index} className="flex flex-col items-center text-center flex-1 ">
        

        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm mb-1
            ${isCompleted ? "bg-white text-white" : isCurrent ? "bg-primary text-tertiary" : "bg-gray-300 text-gray-700"}
          `}
        >
          {isCompleted ? "✓" : index + 1}

        </div>
        <span
          className={`text-sm rounded-full font-bold mb-1 ${
            isCurrent ? "text-blue-600" : isCompleted ? "text-secondary2" : "text-gray-500"
          }`}
        >
          {label}
        </span>
      </div>
    );
  })}
</div>

            <h1 className="text-2xl font-bold text-center text-green-700 mb-2">
              HAND AND POWER TOOL INSPECTION FORM
            </h1>
            <p className="text-sm text-gray-500 text-center mb-6">
              CONFIDENTIAL COMPLIANCE DOCUMENT
            </p>

            <h2 className="text-xl font-semibold mb-4">
              SECTION {currentSection + 1}: {sections[currentSection]}
            </h2>



            {/* Section Content */}
            {currentSection === 0 && (
              <div className="grid grid-cols-2 gap-4 mb-6">
                <input placeholder="Date of inspection" className="border p-2 rounded" />
                <input placeholder="Location" className="border p-2 rounded" />
                <input placeholder="Tool name type" className="border p-2 rounded" />
                <input placeholder="Serial number" className="border p-2 rounded" />
                <input placeholder="Inspected by" className="border p-2 rounded" />
                <input placeholder="Signature" className="border p-2 rounded" />
              </div>
            )}

            {currentSection === 1 && (
              <CanteenForm value="tool">
                <AccordianItem value="tool" trigger="Tool Inspection">
                  <ChecklistSection
                    items={[
                                   "Tool is clean and free from debris",
    "No cracks, damage, or wear on handles/grips",
    "Blades/cutting edges are sharp and undamaged (if applicable)",
    "Power cord is intact (no cuts, exposed wires)",
    "Plug is undamaged and securely attached",
    "Safety guards/shields are in place and functional",
    "Switches and controls work correctly",
    "Tool operates properly during test (if applicable)",
    "Battery or power supply functions correctly (if applicable)",
    "Tool stored safely after inspection",
                      
                    ]}
                  />
                </AccordianItem>
                

               
              </CanteenForm>
            )}

            {currentSection === 2 && (
                <CanteenForm value="issues">
              <AccordianItem value="issues" trigger="Issues & Action Plan">
                <div className="space-y-2">
                                <button
                onClick={() =>
                  setIssues([
                    ...issues,
                    { issue: "", action: "", person: "", date: "" }
                  ])
                }
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                + Add Issue
              </button>

              {/*Issue Rows*/}
              {issues.map((issues, idx) =>(
                <div key={idx} className="grid grid-cols-5 gap-4 items-center">
                  <input
                  placeholder="Issue"
                  value={issues.issue}
                  onChange={(e) =>
                    updateIssue(idx, "issue", e.target.value)
                  }
                  className="border p-2 rounded"
                  />
                  <input
                   placeholder="Corrective Action"
                  value={issues.action}
                  onChange={(e) =>
                    updateIssue(idx, "action", e.target.value)
                  }
                  className="border p-2 rounded"
                  />
                  <input
                   placeholder="Person"
                  value={issues.person}
                  onChange={(e) =>
                    updateIssue(idx, "person", e.target.value)
                  }
                  className="border p-2 rounded"
                  />
                  <input
                  type="date"
                  value={issues.date}
                  onChange={(e) =>
                    updateIssue(idx, "date", e.target.value)
                  }
                  className="border p-2 rounded"
                  
                  />
                  <button
                  onClick={() => deleteIssue(idx)}
                  className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700">
                    Delete

                  </button>

                </div>
              ))}


                </div>
              </AccordianItem>
              </CanteenForm>
            )}



    <>

            {currentSection === 3 && (
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-8 bg-gray-50 p-6 rounded-lg shadow-sm">
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-600">Inspectors</label>
                    <div className="flex gap-4">
                      {["Paul Amegah", "Debby", "Eric"].map((name, idx) => (
                        <div key={idx} className="border rounded px-4 py-2 text-gray-700 bg-white shadow-sm">
                          {name}
                        </div>
                      ))}
                    </div>

                    <label className="block text-sm font-medium text-gray-600">Signature</label>
                    <div className="border rounded px-4 py-2 text-blue-600 italic shadow-sm">
                      Paul Amegah
                    </div>

                    <label className="block text-sm font-medium text-gray-600">Date</label>
                    <input type="date" className="border rounded px-4 py-2 text-gray-700 shadow-sm w-full" />
                  </div>

                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-600">Fuel-Storage Committee Chair</label>
                    <div className="border rounded px-4 py-2 text-gray-700 bg-white shadow-sm">Paul</div>
                                      <label className="block text-sm font-medium text-gray-600">Signature</label>
                  <div className="border rounded px-4 py-2 text-blue-600 italic shadow-sm">

                             <svg className="w-8 h-8 text-blue-400 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M4 12l8-8 8 8M12 4v12" />

          </svg>
          <span>Drag and drop your file or</span>
          <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Browse File</button>
                  </div>

                  <label className="block text-sm font-medium text-gray-600">Date</label>
                  <input
                    type="date"
                    className="border rounded px-4 py-2 text-gray-700 shadow-sm w-full"
                  />
                </div>
              </div>
            </div>
            )}

            </>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              <button
  onClick={prevSection}
  disabled={currentSection === 0}
  className={`px-4 py-2 rounded ${
    currentSection === 0
      ? "bg-gray-300 cursor-not-allowed"
      : "bg-blue-600 text-white hover:bg-blue-700"
  }`}
>
  Previous
</button>

<button
  onClick={
    currentSection === sections.length - 1
      ? handleSubmit // Replace with your actual submit logic
      : nextSection
  }
  className={`px-4 py-2 rounded ${
    currentSection === sections.length - 1
      ? "bg-purple-600 text-white hover:bg-purple-700"
      : "bg-green-600 text-white hover:bg-green-700"
  }`}
>
  {currentSection === sections.length - 1 ? "Submit" : "Next"}
</button>


              


            </div>
          </div>
        </div>
      )}
    </div>
  );
}


