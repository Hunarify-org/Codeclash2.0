import React from 'react';

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center text-purple-800">👤 User Dashboard</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-purple-100 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-purple-700">📄 My Profile</h2>
            <p className="text-sm text-gray-700 mt-2">Name: Anjali Kumari</p>
            <p className="text-sm text-gray-700">Skill: Mehndi Designing</p>
            <p className="text-sm text-gray-700">Experience: 3 years</p>
            <p className="text-sm text-gray-700">Location: Patna, Bihar</p>
            <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Edit Profile</button>
          </div>
          <div className="p-6 bg-blue-100 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-blue-700">📬 Job Opportunities</h2>
            <ul className="list-disc pl-4 mt-2 text-gray-700 text-sm space-y-1">
              <li>Wedding Mehndi Artist – Delhi</li>
              <li>Bridal Event Freelancer – Lucknow</li>
              <li>Online Art Workshop Instructor</li>
            </ul>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Apply Now</button>
          </div>
        </div>
        <div className="bg-white border-t pt-6 text-center">
          <p className="text-gray-500 text-sm">Want more gigs on WhatsApp? Enable notifications in settings.</p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;