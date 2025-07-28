import React, { useState } from 'react';
import AdminLayout from './AdminLayout'; // make sure the path is correct!

const dummyReports = [
  {
    id: 1,
    reporter: 'Jane Doe',
    reportedUser: 'Bob Lee',
    reason: 'Inappropriate messages',
    date: '2025-07-28',
    status: 'pending',
  },
  {
    id: 2,
    reporter: 'John Smith',
    reportedUser: 'Alice Johnson',
    reason: 'Fake profile',
    date: '2025-07-27',
    status: 'resolved',
  },
];

const Reports = () => {
  const [reports, setReports] = useState(dummyReports);

  const handleStatusToggle = (id) => {
    const updatedReports = reports.map((report) =>
      report.id === id
        ? {
            ...report,
            status: report.status === 'pending' ? 'resolved' : 'pending',
          }
        : report
    );
    setReports(updatedReports);
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <h2 className="text-4xl font-bold text-pink-600 mb-8 text-center drop-shadow">
          🚨 User Reports
        </h2>

        <div className="overflow-x-auto shadow rounded-lg bg-white">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-pink-100 text-pink-700">
              <tr>
                <th className="p-4">Reporter</th>
                <th className="p-4">Reported User</th>
                <th className="p-4">Reason</th>
                <th className="p-4">Date</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr
                  key={report.id}
                  className="border-t border-pink-100 hover:bg-pink-50 transition"
                >
                  <td className="p-4">{report.reporter}</td>
                  <td className="p-4">{report.reportedUser}</td>
                  <td className="p-4">{report.reason}</td>
                  <td className="p-4">{report.date}</td>
                  <td
                    className={`p-4 font-medium ${
                      report.status === 'pending'
                        ? 'text-yellow-500'
                        : 'text-green-600'
                    }`}
                  >
                    {report.status}
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleStatusToggle(report.id)}
                      className="px-4 py-2 rounded bg-pink-200 text-pink-800 font-semibold hover:bg-pink-300 transition"
                    >
                      {report.status === 'pending'
                        ? 'Mark as Resolved'
                        : 'Mark as Pending'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Reports;
