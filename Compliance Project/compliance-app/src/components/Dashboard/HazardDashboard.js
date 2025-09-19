import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';

function ActionMenu({ id, onView, onEdit, onDelete }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="p-1 text-gray-500 hover:text-gray-700"
      >
        <EllipsisVerticalIcon className="h-5 w-5" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-lg z-10">
          <button
            onClick={() => {
              onView(id);
              setOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-gray-100"
          >
            View
          </button>
          <button
            onClick={() => {
              onEdit(id);
              setOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-sm text-yellow-600 hover:bg-gray-100"
          >
            Edit
          </button>
          <button
            onClick={() => {
              onDelete(id);
              setOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default function HazardDashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const mockData = [
        {
          id: 1,
          type: 'Chemical',
          hazardtype: 'Spill in lab',
          location: 'Building A',
          reporter: 'Alice',
          date: '2025-08-30',
        },
        {
          id: 2,
          type: 'Electrical',
          hazardtype: 'Exposed wires',
          location: 'Warehouse',
          reporter: 'Bob',
          date: '2025-08-28',
        },
      ];
      setData(mockData);
    };

    fetchData();
  }, []);

  const handleView = (id) => {
    navigate(`/dashboard/view/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/dashboard/edit/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      setData(prev => prev.filter(item => item.id !== id));
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Hazard & Risk Management</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div
          onClick={() => navigate('/dashboard/hazardform')}
          className="cursor-pointer bg-white shadow rounded-lg p-6 flex items-center justify-between hover:shadow-lg transition"
        >
          <div>
            <div className="text-red-600 text-3xl mb-2">⚠️</div>
            <h2 className="text-lg font-semibold text-gray-800">Hazard Report</h2>
          </div>
          <div className="text-gray-400 text-xl">→</div>
        </div>

        <div
          onClick={() => navigate('/form/risk')}
          className="cursor-pointer bg-white shadow rounded-lg p-6 flex items-center justify-between hover:shadow-lg transition"
        >
          <div>
            <div className="text-yellow-500 text-3xl mb-2">✅</div>
            <h2 className="text-lg font-semibold text-gray-800">Risk Assessment</h2>
          </div>
          <div className="text-gray-400 text-xl">→</div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Recent Information</h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Export
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full md:w-1/3 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <table className="w-full table-auto border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              {['ID', 'Type', 'Hazard-type', 'Location', 'Reporter', 'Date', 'Action'].map(
                header => (
                  <th
                    key={header}
                    className="border px-4 py-2 text-left text-sm font-medium text-gray-700"
                  >
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map(entry => (
                <tr key={entry.id} className="hover:bg-gray-50">
                  <td className="border px-4 py-2 text-sm">{entry.id}</td>
                  <td className="border px-4 py-2 text-sm">{entry.type}</td>
                  <td className="border px-4 py-2 text-sm">{entry.hazardtype}</td>
                  <td className="border px-4 py-2 text-sm">{entry.location}</td>
                  <td className="border px-4 py-2 text-sm">{entry.reporter}</td>
                  <td className="border px-4 py-2 text-sm">{entry.date}</td>
                  <td className="border px-4 py-2 text-sm">
                    <ActionMenu
                      id={entry.id}
                      onView={handleView}
                      onEdit={handleEdit}
                      onDelete={handleDelete}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center text-gray-500 py-6">
                  No data available. Entries will be loaded from the backend.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-600">Rows per page:</div>
          <select className="border rounded px-2 py-1 text-sm">
            <option>10</option>
            <option selected>20</option>
            <option>50</option>
          </select>
        </div>
      </div>
    </div>
  );
}
