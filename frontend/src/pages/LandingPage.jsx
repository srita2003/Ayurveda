import React from 'react';
import { FiBarChart2, FiCheckSquare, FiMessageSquare } from 'react-icons/fi';

const features = [
  {
    icon: <FiBarChart2 className="text-3xl text-[#3B5D2A]" />,
    title: 'Data Visualisation',
    desc: 'Provides key data insights, interactive charts, and summary dashboards to support evidence-based decision-making in healthcare initiatives.',
  },
  {
    icon: <FiCheckSquare className="text-3xl text-[#3B5D2A]" />,
    title: 'Track Progress',
    desc: 'Monitor village-level activities and health interventions. Generate detailed, exportable reports tailored to each cohort or community.',
  },
  {
    icon: <FiMessageSquare className="text-3xl text-[#3B5D2A]" />,
    title: 'Bulk Messaging',
    desc: 'Quickly send multilingual updates, alerts, and appointment reminders to villagers, improving communication and health outreach.',
  },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#F7F5ED] w-full">
      <div className="w-full mt-12 px-0">
        <h1 className="text-3xl md:text-5xl font-bold text-[#3B5D2A] mb-10 text-center w-full">Welcome to Ayurveda Dashboard</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center bg-[#F7F5ED] rounded-xl shadow-lg p-8 w-full min-h-[220px] border border-[#ede6c7]">
              <div className="bg-[#EDE6C7] rounded-lg p-4 mb-4 flex items-center justify-center">
                {f.icon}
              </div>
              <div className="font-semibold text-lg text-[#3B5D2A] mb-2 text-center">{f.title}</div>
              <div className="text-gray-600 text-sm text-center">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 