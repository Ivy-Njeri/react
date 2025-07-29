import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Moments = () => {
  const [moments, setMoments] = useState([]);

  useEffect(() => {
    const fetchMoments = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/moments');
        setMoments(res.data);
      } catch (err) {
        console.error('Error fetching moments:', err);
      }
    };

    fetchMoments();
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">🌸 Serendate Moments</h1>
      {moments.map((moment) => (
        <div key={moment.id} className="mb-4 border-b pb-4">
          <p className="text-gray-800 font-semibold">{moment.content}</p>
          {moment.media_url && (
            <img
              src={moment.media_url}
              alt="Moment"
              className="mt-2 rounded-lg"
            />
          )}
          <p className="text-sm text-gray-500 mt-1">Posted by user #{moment.user_id}</p>
        </div>
      ))}
    </div>
  );
};

export default Moments;
