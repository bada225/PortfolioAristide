import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // durée totale = 5000 ms
    const duration = 5000;
    const intervalTime = 50; // fréquence de mise à jour
    const step = (intervalTime / duration) * 100; // progression en %

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev + step >= 100) {
          clearInterval(interval);
          setLoading(false);
          return 100;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50">
      <h1 className="text-2xl md:text-4xl font-bold animate-pulse mb-6">
        Aguehy Iagne Aristide Bada
      </h1>

      
      <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-50"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Preloader;
