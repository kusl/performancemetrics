import { useState } from 'react';

const StorageAnalysisComponent = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const sections = [
    {
      id: 'basics',
      title: '💾 Storage Basics: What\'s the Difference?',
      summary: 'Understanding the fundamental differences between storage types',
      content: (
        <div className="space-y-4 text-gray-700">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <h4 className="font-semibold text-blue-800 mb-2">Hard Disk Drives (HDDs)</h4>
            <p className="text-sm">Think of an HDD like a record player. It has spinning metal disks (platters) and a moving arm with a read/write head that physically moves to different locations to access data. This mechanical movement takes time, especially when files are scattered across different areas of the disk.</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <h4 className="font-semibold text-green-800 mb-2">Solid State Drives (SSDs)</h4>
            <p className="text-sm">SSDs are like having instant access to any book in a library without walking around. They use flash memory (similar to what's in your phone) with no moving parts. Data can be accessed almost instantly from any location, making them much faster for most tasks.</p>
          </div>
        </div>
      )
    },
    {
      id: 'performance',
      title: '📊 Performance Impact on Development',
      summary: 'How storage speed affects your daily coding work',
      content: (
        <div className="space-y-4 text-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">With HDD (What you see above)</h4>
              <ul className="text-sm space-y-1">
                <li>• Build times: 6-15+ minutes</li>
                <li>• File operations feel sluggish</li>
                <li>• IDE/editor may freeze occasionally</li>
                <li>• Git operations take longer</li>
                <li>• Installing packages is slower</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">With SSD (Typical experience)</h4>
              <ul className="text-sm space-y-1">
                <li>• Build times: 30 seconds - 3 minutes</li>
                <li>• Instant file operations</li>
                <li>• Smooth IDE performance</li>
                <li>• Fast Git operations</li>
                <li>• Quick package installation</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Real Impact:</strong> The performance data above shows disk utilization averaging 354% - this means your hard disk is working overtime, often unable to keep up with the demands. This translates to longer wait times and reduced productivity.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'recommendations',
      title: '🚀 Practical Recommendations',
      summary: 'Actionable steps to improve your development experience',
      content: (
        <div className="space-y-4 text-gray-700">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">If Budget Allows (Highly Recommended)</h4>
            <ul className="text-sm space-y-2">
              <li>• <strong>Upgrade to SSD:</strong> Even a modest 500GB SSD will dramatically improve your experience</li>
              <li>• <strong>Cost:</strong> Basic SSDs start around $30-50 for 500GB</li>
              <li>• <strong>Installation:</strong> Many computer shops can install it for $20-40 if you're not comfortable doing it yourself</li>
              <li>• <strong>ROI:</strong> The time saved in builds and operations typically pays for itself within weeks</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">If Upgrading Isn't Possible Right Now</h4>
            <ul className="text-sm space-y-2">
              <li>• <strong>Optimize build processes:</strong> Use incremental builds, avoid full rebuilds when possible</li>
              <li>• <strong>Close unnecessary programs:</strong> Reduce disk competition during builds</li>
              <li>• <strong>Regular maintenance:</strong> Defragment your hard drive monthly</li>
              <li>• <strong>Code organization:</strong> Keep project files in one location to minimize disk seeking</li>
              <li>• <strong>Consider cloud development:</strong> Services like GitHub Codespaces run on fast SSDs</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'productivity',
      title: '⏱️ Time is Your Most Valuable Resource',
      summary: 'Understanding the hidden cost of slow storage',
      content: (
        <div className="space-y-4 text-gray-700">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-800 mb-2">The Hidden Cost of Wait Time</h4>
            <div className="text-sm space-y-2">
              <p>Let's do some friendly math together:</p>
              <ul className="space-y-1 ml-4">
                <li>• If you build your code 10 times per day</li>
                <li>• HDD builds take 10 minutes, SSD builds take 2 minutes</li>
                <li>• That's 80 minutes saved per day</li>
                <li>• Over a month: ~27 hours saved</li>
                <li>• Over a year: ~320 hours saved (8 work weeks!)</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Beyond Just Time</h4>
            <ul className="text-sm space-y-1">
              <li>• <strong>Focus:</strong> Long waits break your concentration and flow state</li>
              <li>• <strong>Frustration:</strong> Slow tools can make coding feel tedious instead of enjoyable</li>
              <li>• <strong>Learning:</strong> Faster feedback loops help you learn and iterate more quickly</li>
              <li>• <strong>Confidence:</strong> Responsive tools make you feel more capable and productive</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg border">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          💡 Is Hard Disk Storage Right for Development in 2025?
        </h2>
        <p className="text-gray-600 text-sm">
          A friendly, non-technical analysis of your storage situation
        </p>
      </div>

      {/* Executive Summary */}
      <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
        <h3 className="text-xl font-semibold text-blue-900 mb-3">📋 Executive Summary</h3>
        <div className="text-gray-700 space-y-3">
          <p className="font-medium">
            <span className="text-red-600">Short answer:</span> Hard disk drives (HDDs) are not ideal for software development in 2025.
          </p>
          <p className="text-sm">
            The performance data above shows your system working much harder than necessary. While HDDs are perfectly fine for storing photos, documents, or media files, modern software development tools expect faster storage. The good news? This is one of the most cost-effective upgrades you can make to dramatically improve your coding experience.
          </p>
          <div className="text-sm bg-white p-3 rounded border-l-4 border-green-400">
            <strong className="text-green-700">Bottom line:</strong> Upgrading to an SSD would likely reduce your build times from 10+ minutes to under 3 minutes, making your daily work much more enjoyable and productive.
          </div>
        </div>
      </div>

      {/* Expandable Sections */}
      <div className="space-y-4">
        {sections.map((section) => (
          <div key={section.id} className="border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors border-b"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-gray-900">{section.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{section.summary}</p>
                </div>
                <div className="text-gray-400">
                  {expandedSection === section.id ? '▼' : '▶'}
                </div>
              </div>
            </button>
            
            {expandedSection === section.id && (
              <div className="p-6 bg-white">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Encouraging Footer */}
      <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200 text-center">
        <p className="text-sm text-green-800">
          🌟 <strong>Remember:</strong> Every developer's journey is different, and working with the tools you have is completely valid. 
          This analysis is meant to help you understand your options, not make you feel bad about your current setup. 
          You're already doing great by monitoring and analyzing your system's performance!
        </p>
      </div>
    </div>
  );
};

export default StorageAnalysisComponent;
