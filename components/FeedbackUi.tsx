'use client';

import Image from 'next/image';
import React, { FC } from 'react';
import {
    HiOutlineGlobeAlt,
    HiOutlineMicrophone,
    HiOutlineDocumentText,
} from 'react-icons/hi';

const FeedbackUi: FC = () => (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-12 px-6">
        {/* headline */}
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900">
                The fastest feedback
                <br />
                capture you’ll ever see
            </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            <FeatureCard
                icon={<HiOutlineGlobeAlt className="text-blue-600 text-xl" />}
                title="Capture feedback from anywhere"
                description="Connect your sources (Slack, Intercom, HubSpot, Email & more) to create feedback with context"
            />
            <FeatureCard
                icon={<HiOutlineMicrophone className="text-blue-600 text-xl" />}
                title="Record & transcribe customer calls"
                description="Invite Cycle’s recorder to any Zoom, G Meet or MS Teams call to fetch transcripts & summaries"
            />
            <FeatureCard
                icon={<HiOutlineDocumentText className="text-blue-600 text-xl" />}
                title="Document your user research"
                description="Co‑write docs in real‑time, add things like tables & toggles, and translate or rephrase with AI"
            />
        </div>

        <div className="relative max-w-5xl h-[450px] mx-auto rounded-xl shadow-lg overflow-hidden bg-cover bg-center">
            {/* Background Image */}
            <Image
                src="https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65ea31e4ef3bc2ee9785b916_asset5-p-2000.png"
                alt="Feedback background"
                fill
                className="object-contain rounded-xl"
            />

            {/* Scrambled FeedbackItems */}
            <FeedbackItem
                label="Support ticket with feedback on semantic search"
                badge="Support"
                top="10%"
                left="60%"
            />
            <FeedbackItem
                label="Sales objection: missing public API"
                badge="Sales"
                top="35%"
                left="20%"
            />
            <FeedbackItem
                label="Internal feedback thread on copilot feature"
                badge="Slack"
                top="60%"
                left="45%"
            />
            <FeedbackItem
                label="Sales objection from Pia (Figma)"
                badge="Sales"
                top="75%"
                left="10%"
            />
            <FeedbackItem
                label="Product feedback: need semantic search"
                badge="Email"
                top="25%"
                left="75%"
            />
        </div>

    </div>
);

// FeatureCard Props
interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}
const FeatureCard: FC<FeatureCardProps> = ({ icon, title, description }) => (
    <div className="bg-white rounded-lg p-6 shadow hover:shadow-md transition">
        <div className="flex items-center gap-2 mb-2">
            <div className="text-blue-600">{icon}</div>
            <h3 className="text-sm font-semibold">{title}</h3>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
    </div>
);


interface FeedbackItemProps {
  label: string;
  badge?: string;
  top: string;
  left: string;
}

const FeedbackItem: React.FC<FeedbackItemProps> = ({ label, badge, top, left }) => (
  <div
    className="absolute bg-white px-4 py-2 rounded-lg shadow-md text-sm flex items-center gap-2 max-w-xs"
    style={{ top, left }}
  >
    <span className="text-gray-800">{label}</span>
    {badge && (
      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
        {badge}
      </span>
    )}
  </div>
);


export default FeedbackUi;
