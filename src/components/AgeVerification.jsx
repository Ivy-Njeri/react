import React, { useState, useEffect } from 'react';

const AgeVerification = () => {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem('ageVerified');
    if (verified === 'true') {
      setIsVerified(true);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem('ageVerified', 'true');
    setIsVerified(true);
  };

  const handleReject = () => {
    window.location.href = "https://www.google.com"; // redirect to safe page
  };

  if (isVerified) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl text-center max-w-md shadow-lg">
        <h2 className="text-2xl font-bold text-pink-600 mb-4">🔞 Age Verification</h2>
        <p className="mb-6 text-gray-700">
          This website is for users 18 years and older. Please confirm your age to continue.
        </p>
        <div className="flex justify-center space-x-4">
          <button onClick={handleConfirm} className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700">
            I’m 18 or older
          </button>
          <button onClick={handleReject} className="bg-gray-300 px-6 py-2 rounded hover:bg-gray-400">
            I’m under 18
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeVerification;
