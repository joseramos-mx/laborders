import React, { useState } from 'react';

const FileUpload = () => {
  const [fileNames, setFileNames] = useState([]);

  const handleFiles = (event) => {
    const files = Array.from(event.target.files).map(file => file.name);
    setFileNames(files);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center p-5 bg-white rounded-lg">
      <label className="w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-100 dark:hover:bg-gray-50 border-gray-300 dark:border-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6 w-full">
          <svg className="w-10 h-10 mb-3 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M33 15H15a3 3 0 00-3 3v12a3 3 0 003 3h18a3 3 0 003-3V18a3 3 0 00-3-3zM12 23a9 9 0 109 9M23 30l5-5m0 0l5 5m-5-5v12"></path>
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Da click para subir archivos</span> o arrastra y suelta tus archivos
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" multiple onChange={handleFiles} className="hidden" />
      </label>
      {fileNames.length > 0 && (
        <div className="mt-3 text-sm text-center text-gray-500 w-full">
          Archivo subido: {fileNames.join(', ')}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
