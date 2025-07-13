'use client';

import React, { useState } from 'react';

const TABS = [
  {
    id: 'video',
    iconSrc: 'https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65ee24d0e6e8f19d66230c49_bulle-video-min.svg',
    previewSrc: 'https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65efb7064fd4fe6184c9f7ff_Feedback%20Preview%20(1)-p-500.jpg',
    label: 'Video',
  },
  {
    id: 'pdf',
    iconSrc: 'https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65ee2d08a60e12fc73031dbc_bulle-doc-min.svg',
    previewSrc: 'https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65ee4412e4f132cab47318ee_Feedback%20Preview.svg',
    label: 'PDF',
  },
  {
    id: 'intercom',
    iconSrc: 'https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65f0905f0598c5d524e19953_intercom-svg-55.svg',
    previewSrc: 'https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65ee44cc66cb99503d120ab9_Feedback-Preview-inter.svg',
    label: 'Intercom',
  },
  {
    id: 'notion',
    iconSrc: 'https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65f08e264e6e45eebe501634_bubble-notion-55.svg',
    previewSrc: 'https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65ee45159d94c555ff778e4e_Feedback%20Previewnotion.svg',
    label: 'Notion',
  },
  {
    id: 'hubspot',
    iconSrc: 'https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65e8688d7b960748d82c3385_bubble-hubspot-06.svg',
    previewSrc: 'https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65ee461e8b7e9b7aa4dbd2ba_Feedback%20Previewhubspot.svg',
    label: 'HubSpot',
  },
  {
    id: 'slack',
    iconSrc: 'https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65ee28c91b05646be25768a0_bubble-slack-min.svg',
    previewSrc: 'https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65ee47f2e4f132cab4753279_Feedback%20Previewslack.svg',
    label: 'Slack',
  },
  {
    id: 'tally',
    iconSrc: 'https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65f0939a58818934b3af490d_tally-55-5.svg',
    previewSrc: '/previews/tally.png',
    label: 'Tally',
  },
  {
    id: 'zapier',
    iconSrc: 'https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65ee2d3390a45f05abab603e_bulle-gong-min.svg',
    previewSrc: 'https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65ee3f445ad4c94ebab9a4e9_audio-feedback-preview.svg',
    label: 'Zapier',
  },
];
const SidebarGrid = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (id: string) => void;
}) => {
  const tab = TABS.find((t) => t.id === activeTab);

  return (
    <div className="w-full lg:max-w-sm bg-white border-2 border-blue-300 border-dashed p-6 rounded-xl flex flex-col items-center">
      {tab && (
        <div className="mb-6 w-full h-40 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden shadow-inner">
          <img
            src={tab.previewSrc}
            alt={tab.label}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      )}

      <div className="grid grid-cols-4 gap-1 mb-6 w-full">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-24 h-24 rounded-full flex items-center justify-center${activeTab === tab.id ? 'ring-1 ring-blue-500' : ''
              }`}
          >
            <img src={tab.iconSrc} alt={tab.label} className="w-24 h-24 object-contain" />
          </button>
        ))}
      </div>

      <div className="w-14 h-14 bg-gradient-to-tr from-purple-400 to-blue-300 rounded-full shadow-xl" />
    </div>
  );
};

import { BarChart3, PieChart, UserCheck, Quote } from 'lucide-react';

const DashboardCharts = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

    {/* Top Feature Requests */}
    <div className="bg-white rounded-2xl shadow-md p-5">
      <div className="flex items-center gap-2 mb-4">
        <BarChart3 className="text-blue-500" size={20} />
        <h4 className="text-lg font-semibold">Top Feature Requests</h4>
      </div>
      <div className="space-y-3">
        {[
          { name: 'Dark Mode', value: 70 },
          { name: 'Multi-language', value: 50 },
          { name: 'Mobile Support', value: 60 },
          { name: 'Integrations', value: 45 },
          { name: 'Export PDF', value: 30 },
        ].map((item, i) => (
          <div key={i}>
            <div className="text-xs text-gray-500 mb-1">{item.name}</div>
            <div className="h-3 bg-blue-100 rounded relative overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-400 to-blue-600 h-full rounded"
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Feedback Status Circle */}
    <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center justify-center text-center">
      <div className="flex items-center gap-2 mb-4">
        <PieChart className="text-pink-500" size={20} />
        <h4 className="text-lg font-semibold">Feedback Status</h4>
      </div>
      <div className="w-24 h-24 border-[6px] rounded-full border-pink-300 border-t-green-400 border-r-blue-300 animate-spin-slow" />
      <p className="mt-2 text-sm text-gray-500">Live status wheel</p>
    </div>

    {/* Most Feedback by Customers */}
    <div className="bg-white rounded-2xl shadow-md p-5">
      <div className="flex items-center gap-2 mb-4">
        <UserCheck className="text-pink-400" size={20} />
        <h4 className="text-lg font-semibold">Top Feedback Customers</h4>
      </div>
      <div className="flex items-end gap-5 h-32">
        {[40, 70, 55, 65, 30, 80, 34, 56, 67].map((val, idx) => (
          <div
            key={idx}
            className="w-6 rounded-t-md bg-gradient-to-t from-pink-200 to-pink-500"
            style={{ height: `${val}%` }}
            title={`Customer ${idx + 1}`}
          />
        ))}
      </div>
    </div>

    {/* Customer Quotes Summary */}
    <div className="bg-white rounded-2xl shadow-md p-5">
      <div className="flex items-center gap-2 mb-4">
        <Quote className="text-green-500" size={20} />
        <h4 className="text-lg font-semibold">Customer Quotes Summary</h4>
      </div>
      <div className="space-y-3 text-sm text-gray-600">
        <div className="h-3 w-2/3 bg-green-400 rounded" />
        <div className="h-2 w-4/5 bg-gray-200 rounded" />
        <div className="h-2 w-3/4 bg-gray-200 rounded" />
        <div className="h-2 w-2/3 bg-gray-200 rounded" />
      </div>
    </div>
    
  </div>
);

export default function DashboardFixed() {
  const [activeTab, setActiveTab] = useState('video');

  return (
    <div className=" bg-gradient-to-br from-white to-blue-50 flex flex-col items-center px-4 sm:px-6 py-30">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-8">
        <SidebarGrid activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1">
          <DashboardCharts />
        </div>
      </div>

      <button className="mt-10 bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition">
        Book demo
      </button>
    </div>
  );
}
