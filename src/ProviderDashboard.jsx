import React, { useState } from 'react';

const ProviderDashboard = () => {
  const [jobData, setJobData] = useState({
    title: '',
    location: '',
    charge: '',
    description: '',
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:5000/post-job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jobData),
      });

      if (res.ok) {
        alert("Job posted successfully!");
        setJobData({
          title: '',
          location: '',
          charge: '',
          description: '',
        });
      } else {
        alert("Failed to post job. Please try again.");
      }
    } catch (error) {
      console.error("Error posting job:", error);
      alert("Server error. Please check your backend.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center text-pink-800">Provider Dashboard</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-pink-100 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-pink-700">📝 Post a Job</h2>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                placeholder="Job Title"
                value={jobData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={jobData.location}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="text"
                name="charge"
                placeholder="Expected charge"
                value={jobData.charge}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
              />
              <textarea
                name="description"
                placeholder="Job Description"
                value={jobData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded h-24"
              ></textarea>
              <button
                type="submit"
                className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
              >
                Post
              </button>
            </form>
          </div>

          <div className="p-6 bg-yellow-100 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-yellow-700">👩‍💻 Recent Applicants</h2>
            <ul className="text-sm text-gray-700 space-y-2 mt-2">
              <li>🧕 Rekha Devi – Mehndi Artist (Patna)</li>
              <li>👩‍🎨 Savita Singh – Henna Expert (Jaipur)</li>
              <li>👱‍♀️ Meera Patel – Bridal Designer (Ahmedabad)</li>
            </ul>
            <button className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
              Manage Applicants
            </button>
          </div>
        </div>
        <div className="bg-white border-t pt-6 text-center">
          <p className="text-gray-500 text-sm">Use AI to filter best talent for your gig.</p>
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;
