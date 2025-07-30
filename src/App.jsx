import React from 'react';
import Home from './components/Home';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-sky-200 via-violet-200 to-fuchsia-200 flex flex-col items-center justify-center py-10 px-4">

      {/* 💠 Stylish blurred blobs in background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[60vw] h-[60vw] bg-violet-300 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-fuchsia-300 rounded-full opacity-20 blur-2xl" />
      </div>

      {/* 🧠 AI Image Enhancer Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-10 text-center">
        AI Image Enhancer <span className="text-indigo-600">{""}</span>
      </h1>

      {/* 🚀 Main Home Component */}
      <Home />

      {/* 🛠️ Footer: Engineered by Subhamoy */}
      <footer className="mt-16 text-md text-gray-600 font-medium text-center">
        Engineered by <span className="text-blue-700 font-semibold">@Subhamoy’sAI</span>
      </footer>
    </div>
  );
}

export default App;
