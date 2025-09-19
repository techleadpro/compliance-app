import React from 'react';


export default function PPEInterface() {
  return (
    <div className="p-6 max-w-7xl mx-auto bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">PPE Inspection</h1>

      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        {['All', 'Pending', 'In Progress', 'Completed', 'Approved'].map(tab => (
          <button
            key={tab}
            className="px-4 py-2 rounded bg-gray border text-gray-700 hover:bg-gray-100"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 space-y-4 md:space-y-0">
        <input
          type="text"
          placeholder="Search "
          className="w-full md:w-1/3 border rounded px-4 py-2"
        />
        <input
          type="date"
          className="w-full md:w-1/4 border rounded px-4 py-2"
        />
      </div>

      {/* Table Header */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              {[
                'PPE Users',
                'Department',
                'Date of Inspection',
                'Time',
                'Inspected By',
                'Status',
                'Action',
              ].map(header => (
                <th key={header} className="border px-4 py-2 text-left text-sm font-medium text-gray-700">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
        </table>
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center mt-20 text-center space-y-4">
        <p className="text-xl font-semibold text-gray-700">Oops there is nothing here</p>
        <p className="text-gray-500">There is nothing here to view. Please create a new Vehicle Inspection table to get started</p>

      </div>
    </div>
  );
}
