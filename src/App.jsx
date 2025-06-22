// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [input, setInput] = useState('');
//   const [profile, setProfile] = useState(null);

//   const handleSubmit = async () => {
//     const res = await fetch('http://localhost:5000/generate-profile', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ input }),
//     });
//     const data = await res.json();
//     setProfile(data);
//   };

//   return (
//     <div className="app">
//       <h1>🎙️ Hunarify – Voice to Skill, Skill to Income</h1>

//       <textarea
//         rows="4"
//         placeholder="Apna kaam Hindi ya Bhojpuri mein likhiye..."
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />

//       <button onClick={handleSubmit}>Generate Profile</button>

//       {profile && (
//         <div className="profile-card">
//           <h2>{profile.name}</h2>
//           <p><strong>Skills:</strong> {profile.skills}</p>
//           <p><strong>Bio:</strong> {profile.bio}</p>
//           <p><strong>Proposal:</strong> {profile.proposal}</p>
//           <button onClick={() => alert("Simulated WhatsApp sent!")}>📤 Send to WhatsApp</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;







// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [input, setInput] = useState('');
//   const [profile, setProfile] = useState(null);

//   const handleSubmit = async () => {
//     const res = await fetch('http://localhost:5000/generate-profile', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ input }),
//     });
//     const data = await res.json();
//     setProfile(data);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-tr from-[#fef9f9] via-[#eefcfb] to-[#e5f8f5] p-8">
//       <div className="max-w-3xl mx-auto text-center">
//         <h1 className="text-4xl font-bold text-gray-800 mb-2">🎙️ Hunarify</h1>
//         <p className="text-lg text-gray-600 mb-6">Voice to Skill, Skill to Rojgar</p>

//         <textarea
//           rows="4"
//           className="w-full p-4 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
//           placeholder="Apna kaam Hindi ya Bhojpuri mein likhiye..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />

//         <button
//           onClick={handleSubmit}
//           className="mt-4 px-6 py-2 bg-green-700 text-white font-semibold rounded-lg shadow hover:bg-green-800 transition"
//         >
//           Generate Profile
//         </button>

//         {profile && (
//           <div className="mt-10 p-6 rounded-xl bg-white shadow-xl text-left">
//             <h2 className="text-2xl font-bold text-green-700 mb-2">{profile.name}</h2>
//             <p className="mb-1"><span className="font-semibold">🛠️ Skills:</span> {profile.skills}</p>
//             <p className="mb-1"><span className="font-semibold">📜 Bio:</span> {profile.bio}</p>
//             <p className="mb-4"><span className="font-semibold">✉️ Proposal:</span> {profile.proposal}</p>
//             <button
//               className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
//               onClick={() => alert("Sent to WhatsApp!")}
//             >
//               📤 Send to WhatsApp
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;







// import { useState } from 'react';

// function App() {
//   const [input, setInput] = useState('');
//   const [gig, setGig] = useState(null);

//   const handleSubmit = async () => {
//     const res = await fetch('http://localhost:5000/generate-profile', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ input }),
//     });
//     const data = await res.json();
//     setGig(data);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
//       <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-6">
//         <div className="flex items-center space-x-2">
//           <img src="/logo.png" alt="logo" className="h-6" />
//           <h1 className="text-xl font-semibold text-gray-800">Hunarify</h1>
//         </div>
//         <p className="text-sm text-gray-500">AI Platform to Convert Local Skills into Global Freelance Gigs</p>

//         <div>
//           <label className="block mb-2 text-sm font-medium">Describe your skill or work in your local language</label>
//           <div className="flex border rounded-lg overflow-hidden shadow">
//             <input
//               type="text"
//               className="w-full px-4 py-2 focus:outline-none"
//               placeholder="मैं मेहंदी डिज़ाइनिंग में माहिर हूँ"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//             />
//             <button className="bg-blue-100 px-4 text-blue-600">🎙️</button>
//           </div>
//           <button
//             onClick={handleSubmit}
//             className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
//           >
//             GENERATE GIG
//           </button>
//         </div>

//         {gig && (
//           <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
//             <h2 className="font-bold text-lg mb-1">{gig.title || 'Mehndi Design for Weddings and Festivals'}</h2>
//             <p className="text-sm text-gray-700 mb-3">{gig.bio}</p>
//             <div className="flex flex-wrap gap-2 text-xs">
//               <span className="bg-white border rounded-full px-3 py-1">Mehndi Design</span>
//               <span className="bg-white border rounded-full px-3 py-1">Henna Art</span>
//               <span className="bg-white border rounded-full px-3 py-1">Weddings</span>
//             </div>
//           </div>
//         )}

//         <div className="grid grid-cols-2 gap-4 pt-4 text-sm text-gray-600 border-t mt-4">
//           <div className="flex items-center gap-2">
//             🎤 <span>Voice input in Hindi/local</span>
//           </div>
//           <div className="flex items-center gap-2">
//             🤖 <span>AI-generated profiles</span>
//           </div>
//           <div className="flex items-center gap-2">
//             🖼️ <span>Photos/videos to portfolio</span>
//           </div>
//           <div className="flex items-center gap-2">
//             📲 <span>Jobs via WhatsApp</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;




// // File: frontend/src/App.jsx
// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [input, setInput] = useState("");
//   const [gig, setGig] = useState(null);

//   const handleSubmit = async () => {
//     const res = await fetch("http://localhost:5000/generate-gig", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ input }),
//     });
//     const data = await res.json();
//     setGig(data);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex justify-center items-center px-4 py-8">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-6">
//         <div className="flex items-center gap-2">
//           <img src="/logo.png" alt="logo" className="h-6" />
//           <h1 className="text-xl font-bold text-gray-800">Hunarify</h1>
//         </div>
//         <p className="text-sm text-gray-500">
//           AI Platform to Convert Local Skills into Global Freelance Gigs
//         </p>

//         <div>
//           <label className="block mb-1 text-sm font-medium">
//             Describe your skill or work in your local language
//           </label>
//           <div className="flex border rounded-lg overflow-hidden shadow-sm">
//             <input
//               type="text"
//               className="w-full px-4 py-2 focus:outline-none"
//               placeholder="मैं मेहंदी डिज़ाइनिंग में माहिर हूं"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//             />
//             <button className="bg-blue-100 px-4 text-blue-600">🎙️</button>
//           </div>
//           <button
//             onClick={handleSubmit}
//             className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
//           >
//             GENERATE GIG
//           </button>
//         </div>

//         {gig && (
//           <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
//             <h2 className="font-bold text-lg mb-1">{gig.title}</h2>
//             <p className="text-sm text-gray-700 mb-3">{gig.bio}</p>
//             <div className="flex flex-wrap gap-2 text-xs">
//               {gig.tags.map((tag, i) => (
//                 <span
//                   key={i}
//                   className="bg-white border rounded-full px-3 py-1"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}

//         <div className="grid grid-cols-2 gap-4 pt-4 text-sm text-gray-600 border-t mt-4">
//           <div className="flex items-center gap-2">🎤 Voice input in Hindi/local</div>
//           <div className="flex items-center gap-2">🤖 AI-generated profiles</div>
//           <div className="flex items-center gap-2">🖼️ Photos/videos to portfolio</div>
//           <div className="flex items-center gap-2">📲 Jobs via WhatsApp</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;




// // File: frontend/src/App.jsx
// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [input, setInput] = useState("");
//   const [gig, setGig] = useState(null);

//   const handleSubmit = async () => {
//     const res = await fetch("http://localhost:5000/generate-gig", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ input }),
//     });
//     const data = await res.json();
//     setGig(data);
//   };

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-br from-[#fdfcfb] via-[#e2ebf0] to-[#c9e4ca] flex justify-center items-center px-4 py-8">

//       <div className="w-full max-w-2xl bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] p-10 space-y-6 text-center">

//         <div className="flex items-center gap-3">
//           <img src="/logo.png" alt="logo" className="h-6" />
//           <h1 className="text-2xl font-bold text-gray-800">Hunarify</h1>
//         </div>
//         <p className="text-sm text-gray-600">
//           AI Platform to Convert Local Skills into Global Freelance Gigs
//         </p>

//         <div>
//           <label className="block mb-1 text-sm font-medium">
//             Describe your skill or work in your local language
//           </label>
//           <div className="flex border rounded-lg overflow-hidden shadow-sm">
//             <input
//               type="text"
//               className="w-full px-4 py-3 text-sm sm:text-base focus:outline-none"
//               placeholder="मैं मेहंदी डिज़ाइनिंग में माहिर हूं"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//             />
//             <button className="bg-blue-100 px-4 text-blue-600">🎙️</button>
//           </div>
//           <button
//             onClick={handleSubmit}
//             className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
//           >
//             GENERATE GIG
//           </button>
//         </div>

//         {gig && (
//           <div className="bg-gray-100 p-5 rounded-lg shadow-inner">
//             <h2 className="font-bold text-xl mb-2 text-gray-800">{gig.title}</h2>
//             <p className="text-sm text-gray-700 mb-4">{gig.bio}</p>
//             <div className="flex flex-wrap gap-2 text-xs">
//               {gig.tags.map((tag, i) => (
//                 <span
//                   key={i}
//                   className="bg-white border border-gray-300 rounded-full px-3 py-1"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}

//         <div className="grid grid-cols-2 gap-4 pt-4 text-sm text-gray-600 border-t mt-4">
//           <div className="flex items-center gap-2">🎤 Voice input in Hindi/local</div>
//           <div className="flex items-center gap-2">🤖 AI-generated profiles</div>
//           <div className="flex items-center gap-2">🖼️ Photos/videos to portfolio</div>
//           <div className="flex items-center gap-2">📲 Jobs via WhatsApp</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;





// // File: frontend/src/App.jsx
// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [input, setInput] = useState("");
//   const [gig, setGig] = useState(null);

//   const handleSubmit = async () => {
//     const res = await fetch("http://localhost:5000/generate-gig", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ input }),
//     });
//     const data = await res.json();
//     setGig(data);
//   };

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-br from-[#e0f7fa] via-[#e1bee7] to-[#fff9c4] flex justify-center items-center px-4 py-8">
//       <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-10 space-y-6 flex flex-col justify-center items-center">
//         <div className="flex items-center justify-center gap-3">
//           <img src="/logo.png" alt="logo" className="h-8" />
//           <h1 className="text-3xl font-extrabold text-gray-800">Hunarify</h1>
//         </div>
//         <p className="text-md text-gray-600 text-center">
//           AI Platform to Convert Local Skills into Global Freelance Gigs
//         </p>

//         <div className="w-full text-left">
//           <label className="block mb-2 text-sm font-semibold">
//             Describe your skill or work in your local language
//           </label>
//           <div className="flex border rounded-lg overflow-hidden shadow-sm">
//             <input
//               type="text"
//               className="w-full px-4 py-3 text-sm sm:text-base focus:outline-none"
//               placeholder="मैं मेहंदी डिज़ाइनिंग में माहिर हूं"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//             />
//             <button className="bg-blue-100 px-4 text-blue-600">🎙️</button>
//           </div>
//           <button
//             onClick={handleSubmit}
//             className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90"
//           >
//             GENERATE GIG
//           </button>
//         </div>

//         {gig && (
//           <div className="w-full bg-gradient-to-br from-[#f0f4f8] to-[#e1f5fe] p-5 rounded-xl shadow-lg text-left">
//             <h2 className="font-bold text-xl mb-2 text-gray-800">{gig.title}</h2>
//             <p className="text-sm text-gray-700 mb-4">{gig.bio}</p>
//             <div className="flex flex-wrap gap-2 text-xs">
//               {gig.tags.map((tag, i) => (
//                 <span
//                   key={i}
//                   className="bg-white border border-gray-300 rounded-full px-3 py-1 shadow-sm"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}

//         <div className="w-full grid grid-cols-2 sm:grid-cols-2 gap-4 pt-4 text-sm text-gray-600 border-t mt-6">
//           <div className="flex items-center gap-2">🎤 Voice input in Hindi/local</div>
//           <div className="flex items-center gap-2">🤖 AI-generated profiles</div>
//           <div className="flex items-center gap-2">🖼️ Photos/videos to portfolio</div>
//           <div className="flex items-center gap-2">📲 Jobs via WhatsApp</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



// // File: frontend/src/App.jsx
// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [input, setInput] = useState("");
//   const [gig, setGig] = useState(null);

//   const handleSubmit = async () => {
//     const res = await fetch("http://localhost:5000/generate-gig", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ input }),
//     });
//     const data = await res.json();
//     setGig(data);
//   };

//   return (
//     <div className="min-h-screen w-screen bg-gradient-to-br from-[#e0f7fa] via-[#e1bee7] to-[#fff9c4] flex justify-center items-center">
//       <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-10 space-y-6 flex flex-col justify-center items-center text-center mx-auto">
//         <div className="flex flex-col items-center gap-3">
//           <img src="/logo.png" alt="logo" className="h-8" />
//           <h1 className="text-3xl font-extrabold text-gray-800">Hunarify</h1>
//         </div>
//         <p className="text-md text-gray-600">
//           AI Platform to Convert Local Skills into Global Freelance Gigs
//         </p>

//         <div className="w-full flex flex-col items-center">
//           <label className="block mb-2 text-sm font-semibold">
//             Describe your skill or work in your local language
//           </label>
//           <div className="flex border rounded-lg overflow-hidden shadow-sm w-full max-w-md">
//             <input
//               type="text"
//               className="w-full px-4 py-3 text-sm sm:text-base focus:outline-none text-center"
//               placeholder="मैं मेहंदी डिज़ाइनिंग में माहिर हूं"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//             />
//             <button className="bg-blue-100 px-4 text-blue-600">🎙️</button>
//           </div>
//           <button
//             onClick={handleSubmit}
//             className="w-full max-w-md mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90"
//           >
//             GENERATE GIG
//           </button>
//         </div>

//         {gig && (
//           <div className="w-full max-w-md bg-gradient-to-br from-[#f0f4f8] to-[#e1f5fe] p-5 rounded-xl shadow-lg text-center">
//             <h2 className="font-bold text-xl mb-2 text-gray-800">{gig.title}</h2>
//             <p className="text-sm text-gray-700 mb-4">{gig.bio}</p>
//             <div className="flex flex-wrap justify-center gap-2 text-xs">
//               {gig.tags.map((tag, i) => (
//                 <span
//                   key={i}
//                   className="bg-white border border-gray-300 rounded-full px-3 py-1 shadow-sm"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}

//         <div className="w-full max-w-md flex justify-center items-center gap-6 pt-4 text-sm text-gray-600 border-t mt-6 text-center">
//   <div className="flex items-center gap-1 whitespace-nowrap"> 🎤 Voice input in Hindi/local</div>
//   <div className="flex items-center gap-1 whitespace-nowrap"> 🤖 AI-generated profiles</div>
//   <div className="flex items-center gap-1 whitespace-nowrap"> 🖼️ Photos/videos to portfolio</div>
//   <div className="flex items-center gap-1 whitespace-nowrap"> 📲 Jobs via WhatsApp</div>
// </div>
//       </div>
//     </div>
//   );
// }

// export default App;




// // File: frontend/src/App.jsx
// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [input, setInput] = useState("");
//   const [gig, setGig] = useState(null);

//   const handleSubmit = async () => {
//     const res = await fetch("http://localhost:5000/generate-gig", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ input }),
//     });
//     const data = await res.json();
//     setGig(data);
//   };

//   return (
//     <div className="min-h-screen w-screen bg-gradient-to-br from-[#e0f7fa] via-[#e1bee7] to-[#fff9c4] flex justify-center items-center">
//       <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-10 space-y-6 flex flex-col justify-center items-center text-center mx-auto">
//         <div className="flex flex-col items-center gap-3">
//           <img src="/logo.png" alt="logo" className="h-12" /> {/* Increased size to match screenshot */}
//           <h1 className="text-3xl font-extrabold text-gray-800">Hunarify</h1>
//           <p className="text-md text-gray-600">
//             AI Platform to Convert Local Skills into Global Freelance Gigs
//           </p>
//         </div>

//         <div className="w-full flex flex-col items-center">
//           <label className="block mb-2 text-sm font-semibold text-left w-full max-w-md">
//             Describe your skill or work in your local language
//           </label>
//           <div className="flex border rounded-lg overflow-hidden shadow-sm w-full max-w-md">
//             <input
//               type="text"
//               className="w-full px-4 py-3 text-sm sm:text-base focus:outline-none text-center"
//               placeholder="मैं मेहंदी डिज़ाइनिंग में माहिर हूं"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//             />
//             <button className="bg-blue-100 px-4 text-blue-600">🎙️</button>
//           </div>
//           <button
//             onClick={handleSubmit}
//             className="w-full max-w-md mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90"
//           >
//             GENERATE GIG
//           </button>
//         </div>

//         {gig && (
//           <div className="w-full max-w-md bg-gradient-to-br from-[#f0f4f8] to-[#e1f5fe] p-5 rounded-xl shadow-lg text-center">
//             <h2 className="font-bold text-xl mb-2 text-gray-800">Proposed Gig:</h2>
//             <div className="bg-white p-4 rounded-lg shadow-sm">
//               <h3 className="font-bold text-lg mb-2 text-gray-800">{gig.title}</h3>
//               <p className="text-sm text-gray-700 mb-4">{gig.bio}</p>
//               <div className="flex flex-wrap justify-center gap-2 text-xs">
//                 {gig.tags.map((tag, i) => (
//                   <span
//                     key={i}
//                     className="bg-white border border-gray-300 rounded-full px-3 py-1 shadow-sm"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="w-full max-w-md flex flex-col items-center gap-4 pt-6 text-sm text-gray-600 border-t mt-6 text-center">
//           <h3 className="font-semibold text-gray-800">Key Features</h3>
//           <div className="flex justify-between w-full">
//             <div className="flex items-center gap-2 whitespace-nowrap">
//               🎤 Voice input in Hindi/local
//             </div>
//             <div className="flex items-center gap-2 whitespace-nowrap">
//               🤖 AI-generated profiles
//             </div>
//             <div className="flex items-center gap-2 whitespace-nowrap">
//               🖼️ Portfolio from photos/videos
//             </div>
//             <div className="flex items-center gap-2 whitespace-nowrap">
//               📲 Jobs via WhatsApp
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



// File: frontend/src/App.jsx
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [gig, setGig] = useState(null);
  const [isListening, setIsListening] = useState(false);

  // Initialize SpeechRecognition
  useEffect(() => {
    if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
      alert("Speech Recognition is not supported in this browser. Please use Chrome or Edge.");
      return;
    }
  }, []);

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:5000/generate-gig", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input }),
    });
    const data = await res.json();
    setGig(data);
  };

  const toggleVoiceInput = () => {
    if (!isListening) {
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = "hi-IN"; // Set language to Hindi (adjust as needed)
      recognition.interimResults = false; // Only final results
      recognition.maxAlternatives = 1;

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      setIsListening(true);
      recognition.start();
    } else {
      setIsListening(false);
      // Stop recognition if supported
      if (window.SpeechRecognition || window.webkitSpeechRecognition) {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.stop();
      }
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-[#e0f7fa] via-[#e1bee7] to-[#fff9c4] flex justify-center items-center">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-10 space-y-6 flex flex-col justify-center items-center text-center mx-auto">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.png" alt="logo" className="h-12" />
          <h1 className="text-3xl font-extrabold text-gray-800">Hunarify</h1>
          <p className="text-md text-gray-600">
            AI Platform to Convert Local Skills into Global Freelance Gigs
          </p>
        </div>

        <div className="w-full flex flex-col items-center">
          <label className="block mb-2 text-sm font-semibold text-left w-full max-w-md">
            Describe your skill or work in your local language
          </label>
          <div className="flex border rounded-lg overflow-hidden shadow-sm w-full max-w-md">
            <input
              type="text"
              className="w-full px-4 py-3 text-sm sm:text-base focus:outline-none text-center"
              placeholder="मैं मेहंदी डिज़ाइनिंग में माहिर हूं"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={toggleVoiceInput}
              className={`bg-blue-100 px-4 text-blue-600 ${isListening ? "bg-gray-300" : ""}`}
              disabled={isListening}
            >
              🎙️
            </button>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full max-w-md mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90"
          >
            GENERATE GIG
          </button>
        </div>

        {gig && (
          <div className="w-full max-w-md bg-gradient-to-br from-[#f0f4f8] to-[#e1f5fe] p-5 rounded-xl shadow-lg text-center">
            <h2 className="font-bold text-xl mb-2 text-gray-800">Proposed Gig:</h2>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-gray-800">{gig.title}</h3>
              <p className="text-sm text-gray-700 mb-4">{gig.bio}</p>
              <div className="flex flex-wrap justify-center gap-2 text-xs">
                {gig.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white border border-gray-300 rounded-full px-3 py-1 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="w-full max-w-md flex flex-col items-center gap-4 pt-6 text-sm text-gray-600 border-t mt-6 text-center">
          <h3 className="font-semibold text-gray-800">Key Features</h3>
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-2 whitespace-nowrap">
              🎤 Voice input in Hindi/local
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              🤖 AI-generated profiles
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              🖼️ Portfolio from photos/videos
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              📲 Jobs via WhatsApp
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


