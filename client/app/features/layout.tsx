

import React from 'react';
import { Layout, Pencil, LayoutTemplate, Palette, Upload } from 'lucide-react';

export default function FeatureLayout() {
  const features = [
    {
      icon: <Layout className="w-8 h-8 text-white" />,
      title: "Beautiful Templates",
      description: "Kickstart your site by selecting from hundreds of pre-made, professionally-designed, customizable templates."
    },
    {
      icon: <Pencil className="w-8 h-8 text-white" />,
      title: "Content Editor",
      description: "Use intuitive content editing method to easily arrange, rearrange, and organize your content and media."
    },
    {
      icon: <LayoutTemplate className="w-8 h-8 text-white" />,
      title: "Pre-Built Components",
      description: "Have great-looking Components simply by inserting elegant pre-built block patterns into your pages."
    },
    {
      icon: <Palette className="w-8 h-8 text-white" />,
      title: "Advanced Design Tools",
      description: "Customize your blog's design with extended color schemes, typography, borders, and control over website CSS."
    },
    {
      icon: <Upload className="w-8 h-8 text-white" />,
      title: "Upload Any Type of Media",
      description: "Create designer-worthy photo galleries, embed audio, video, documents, and more—with cloudinary"
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors duration-300"
            >
              <div className="h-12 w-12 bg-indigo-600 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}