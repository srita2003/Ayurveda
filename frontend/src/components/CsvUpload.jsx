import React, { useRef } from 'react';

const CsvUpload = ({ onUpload, fileName }) => {
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && onUpload) {
      onUpload(file);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <input
        type="file"
        accept=".csv"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <button
        type="button"
        onClick={() => fileInputRef.current && fileInputRef.current.click()}
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 transition flex items-center justify-center mb-2"
      >
        SELECT CSV FILE
      </button>
      {/* File name is now shown in the parent as an info bar */}
    </div>
  );
};

export default CsvUpload; 