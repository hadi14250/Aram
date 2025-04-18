import React from 'react';

const WorkingHours: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
      <div className="p-8 text-center">
        <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 mb-4">
          <h3 className="text-white text-sm uppercase tracking-widest font-medium mb-1">Working Hours</h3>
          <div className="flex items-center justify-center space-x-2">
            <div className="text-white text-3xl font-bold font-mono">MON-FRI</div>
            <div className="text-white/80 text-2xl">•</div>
            <div className="text-white text-3xl font-bold font-mono">9AM-4PM</div>
          </div>
        </div>
        <div className="text-white/80 text-sm">
          <span className="inline-block px-3 py-1 bg-white/10 rounded-full">Closed on weekends</span>
        </div>
      </div>
    </div>
  );
};

export default WorkingHours; 