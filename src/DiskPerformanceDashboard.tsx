import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';

const DiskPerformanceDashboard = () => {
  const [activeTab, setActiveTab] = useState('trends');

  const rawData = [
    { iteration: 1, queueLength: 5.351, bytesPerSec: 27159286.259, diskTime: 547.420, maxQueue: 48.366 },
    { iteration: 2, queueLength: 4.793, bytesPerSec: 29761515.520, diskTime: 454.500, maxQueue: 34.619 },
    { iteration: 3, queueLength: 4.502, bytesPerSec: 34080243.846, diskTime: 374.843, maxQueue: 23.375 },
    { iteration: 4, queueLength: 4.205, bytesPerSec: 32170768.063, diskTime: 354.351, maxQueue: 28.434 },
    { iteration: 5, queueLength: 4.103, bytesPerSec: 32904669.917, diskTime: 353.794, maxQueue: 24.954 },
    { iteration: 6, queueLength: 3.822, bytesPerSec: 31576845.882, diskTime: 346.830, maxQueue: 23.437 },
    { iteration: 7, queueLength: 3.650, bytesPerSec: 31603809.367, diskTime: 308.743, maxQueue: 28.461 },
    { iteration: 8, queueLength: 3.749, bytesPerSec: 28748064.031, diskTime: 407.118, maxQueue: 30.740 },
    { iteration: 9, queueLength: 4.888, bytesPerSec: 29987096.577, diskTime: 381.872, maxQueue: 36.911 },
    { iteration: 10, queueLength: 3.374, bytesPerSec: 28623220.422, diskTime: 337.233, maxQueue: 29.981 },
    { iteration: 11, queueLength: 3.294, bytesPerSec: 31374172.081, diskTime: 302.665, maxQueue: 22.989 },
    { iteration: 12, queueLength: 3.955, bytesPerSec: 32148447.902, diskTime: 373.785, maxQueue: 38.771 },
    { iteration: 13, queueLength: 3.054, bytesPerSec: 34215094.041, diskTime: 302.610, maxQueue: 14.901 },
    { iteration: 14, queueLength: 3.930, bytesPerSec: 33728031.732, diskTime: 411.302, maxQueue: 41.402 },
    { iteration: 15, queueLength: 3.668, bytesPerSec: 30410476.651, diskTime: 300.789, maxQueue: 42.128 },
    { iteration: 16, queueLength: 3.003, bytesPerSec: 34231680.678, diskTime: 323.894, maxQueue: 20.197 },
    { iteration: 17, queueLength: 2.931, bytesPerSec: 28819326.333, diskTime: 327.357, maxQueue: 30.091 },
    { iteration: 18, queueLength: 2.850, bytesPerSec: 35018503.380, diskTime: 276.367, maxQueue: 19.108 },
    { iteration: 19, queueLength: 3.314, bytesPerSec: 31250819.444, diskTime: 282.245, maxQueue: 17.404 },
    { iteration: 20, queueLength: 3.672, bytesPerSec: 33466637.963, diskTime: 282.092, maxQueue: 41.858 },
    { iteration: 21, queueLength: 3.415, bytesPerSec: 32085714.266, diskTime: 303.982, maxQueue: 33.225 }
  ];

  const extraRuns = [
    { iteration: "Extra 1", queueLength: 4.265, bytesPerSec: 34829195.759, diskTime: 387.036, maxQueue: 26.159 },
    { iteration: "Extra 2", queueLength: 4.019, bytesPerSec: 38402983.752, diskTime: 390.501, maxQueue: 17.086 }
  ];

  // Convert bytes per second to MB/s for better readability
  const dataWithMB = rawData.map(item => ({
    ...item,
    throughputMB: item.bytesPerSec / (1024 * 1024)
  }));

  const stats = {
    queueLength: {
      mean: rawData.reduce((sum, item) => sum + item.queueLength, 0) / rawData.length,
      min: Math.min(...rawData.map(item => item.queueLength)),
      max: Math.max(...rawData.map(item => item.queueLength))
    },
    throughput: {
      mean: rawData.reduce((sum, item) => sum + item.bytesPerSec, 0) / rawData.length / (1024 * 1024),
      min: Math.min(...rawData.map(item => item.bytesPerSec)) / (1024 * 1024),
      max: Math.max(...rawData.map(item => item.bytesPerSec)) / (1024 * 1024)
    },
    diskTime: {
      mean: rawData.reduce((sum, item) => sum + item.diskTime, 0) / rawData.length,
      min: Math.min(...rawData.map(item => item.diskTime)),
      max: Math.max(...rawData.map(item => item.diskTime))
    }
  };

  const tabs = [
    { id: 'trends', label: 'Performance Trends' },
    { id: 'distribution', label: 'Distribution Analysis' },
    { id: 'correlation', label: 'Correlation Analysis' },
    { id: 'summary', label: 'Summary Statistics' }
  ];

  const formatTooltip = (value: any, name: string): [string, string] => {
    const numValue = typeof value === 'number' ? value : parseFloat(value as string);
    
    if (name === 'throughputMB') return [`${numValue.toFixed(1)} MB/s`, 'Throughput'];
    if (name === 'queueLength') return [`${numValue.toFixed(2)}`, 'Queue Length'];
    if (name === 'diskTime') return [`${numValue.toFixed(1)}%`, 'Disk Time'];
    if (name === 'maxQueue') return [`${numValue.toFixed(1)}`, 'Max Queue'];
    return [String(value), name];
  };

  const formatScatterTooltip = (value: any, name: string): [string, string] => {
    const numValue = typeof value === 'number' ? value : parseFloat(value as string);
    
    if (name === 'throughputMB') return [`${numValue.toFixed(1)} MB/s`, 'Throughput'];
    if (name === 'diskTime') return [`${numValue.toFixed(1)}%`, 'Disk Time'];
    if (name === 'queueLength') return [`${numValue.toFixed(2)}`, 'Queue Length'];
    if (name === 'maxQueue') return [`${numValue.toFixed(2)}`, 'Max Queue'];
    
    return [`${numValue.toFixed(2)}`, name === 'maxQueue' ? 'Max Queue' : 'Avg Queue'];
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="border-b border-gray-200">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Disk Performance Analysis Dashboard
            </h1>
            <p className="text-gray-600">
              Analysis of 21 build/publish cycles with comprehensive disk performance metrics
            </p>
          </div>
          <div className="flex space-x-0 border-t border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 bg-blue-50'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          {activeTab === 'trends' && (
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Queue Length Over Time</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={dataWithMB}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="iteration" />
                    <YAxis />
                    <Tooltip formatter={formatTooltip} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="queueLength" 
                      stroke="#3b82f6" 
                      strokeWidth={2}
                      dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="maxQueue" 
                      stroke="#ef4444" 
                      strokeWidth={2}
                      strokeDasharray="5,5"
                      dot={{ fill: '#ef4444', strokeWidth: 2, r: 3 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Throughput Over Time</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={dataWithMB}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="iteration" />
                    <YAxis />
                    <Tooltip formatter={formatTooltip} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="throughputMB" 
                      stroke="#10b981" 
                      strokeWidth={2}
                      dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Disk Time Percentage Over Time</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={dataWithMB}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="iteration" />
                    <YAxis />
                    <Tooltip formatter={formatTooltip} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="diskTime" 
                      stroke="#f59e0b" 
                      strokeWidth={2}
                      dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {activeTab === 'distribution' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Queue Length Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={dataWithMB}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="iteration" />
                    <YAxis />
                    <Tooltip formatter={formatTooltip} />
                    <Bar dataKey="queueLength" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Throughput Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={dataWithMB}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="iteration" />
                    <YAxis />
                    <Tooltip formatter={formatTooltip} />
                    <Bar dataKey="throughputMB" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Disk Time Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={dataWithMB}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="iteration" />
                    <YAxis />
                    <Tooltip formatter={formatTooltip} />
                    <Bar dataKey="diskTime" fill="#f59e0b" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Max Queue Length Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={dataWithMB}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="iteration" />
                    <YAxis />
                    <Tooltip formatter={formatTooltip} />
                    <Bar dataKey="maxQueue" fill="#ef4444" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {activeTab === 'correlation' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Queue Length vs Throughput</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <ScatterChart>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="queueLength" type="number" name="Queue Length" />
                    <YAxis dataKey="throughputMB" type="number" name="Throughput" />
                    <Tooltip 
                      cursor={{ strokeDasharray: '3 3' }}
                      formatter={formatScatterTooltip}
                    />
                    <Scatter data={dataWithMB} fill="#3b82f6" />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Queue Length vs Disk Time</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <ScatterChart>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="queueLength" type="number" name="Queue Length" />
                    <YAxis dataKey="diskTime" type="number" name="Disk Time" />
                    <Tooltip 
                      cursor={{ strokeDasharray: '3 3' }}
                      formatter={formatScatterTooltip}
                    />
                    <Scatter data={dataWithMB} fill="#f59e0b" />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Throughput vs Disk Time</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <ScatterChart>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="throughputMB" type="number" name="Throughput" />
                    <YAxis dataKey="diskTime" type="number" name="Disk Time" />
                    <Tooltip 
                      cursor={{ strokeDasharray: '3 3' }}
                      formatter={formatScatterTooltip}
                    />
                    <Scatter data={dataWithMB} fill="#10b981" />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Max Queue vs Average Queue</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <ScatterChart>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="queueLength" type="number" name="Avg Queue" />
                    <YAxis dataKey="maxQueue" type="number" name="Max Queue" />
                    <Tooltip 
                      cursor={{ strokeDasharray: '3 3' }}
                      formatter={formatScatterTooltip}
                    />
                    <Scatter data={dataWithMB} fill="#ef4444" />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {activeTab === 'summary' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h4 className="text-lg font-semibold text-blue-800 mb-4">Queue Length Statistics</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-600">Mean:</span>
                      <span className="font-medium">{stats.queueLength.mean.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-600">Min:</span>
                      <span className="font-medium">{stats.queueLength.min.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-600">Max:</span>
                      <span className="font-medium">{stats.queueLength.max.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-600">Range:</span>
                      <span className="font-medium">{(stats.queueLength.max - stats.queueLength.min).toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="text-lg font-semibold text-green-800 mb-4">Throughput Statistics</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-green-600">Mean:</span>
                      <span className="font-medium">{stats.throughput.mean.toFixed(1)} MB/s</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-600">Min:</span>
                      <span className="font-medium">{stats.throughput.min.toFixed(1)} MB/s</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-600">Max:</span>
                      <span className="font-medium">{stats.throughput.max.toFixed(1)} MB/s</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-600">Range:</span>
                      <span className="font-medium">{(stats.throughput.max - stats.throughput.min).toFixed(1)} MB/s</span>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h4 className="text-lg font-semibold text-yellow-800 mb-4">Disk Time Statistics</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-yellow-600">Mean:</span>
                      <span className="font-medium">{stats.diskTime.mean.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-yellow-600">Min:</span>
                      <span className="font-medium">{stats.diskTime.min.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-yellow-600">Max:</span>
                      <span className="font-medium">{stats.diskTime.max.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-yellow-600">Range:</span>
                      <span className="font-medium">{(stats.diskTime.max - stats.diskTime.min).toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Key Observations</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Performance Trends</h5>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Queue length shows decreasing trend (improvement)</li>
                      <li>• Throughput shows increasing trend (+118 KB/s per iteration)</li>
                      <li>• Disk time shows decreasing trend (improvement)</li>
                      <li>• Performance stabilized after iteration 10</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Performance Characteristics</h5>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Average throughput: {stats.throughput.mean.toFixed(1)} MB/s</li>
                      <li>• Peak throughput: {stats.throughput.max.toFixed(1)} MB/s</li>
                      <li>• Disk utilization averaged {stats.diskTime.mean.toFixed(0)}%</li>
                      <li>• Queue length remained manageable (avg {stats.queueLength.mean.toFixed(1)})</li>
                    </ul>
                  </div>
                </div>
              </div>

              {extraRuns.length > 0 && (
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <h4 className="text-lg font-semibold text-purple-800 mb-4">Additional Test Runs</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {extraRuns.map((run, index) => (
                      <div key={index} className="bg-white p-4 rounded border">
                        <h5 className="font-medium mb-2">{run.iteration}</h5>
                        <div className="text-sm space-y-1">
                          <div>Queue Length: {run.queueLength.toFixed(2)}</div>
                          <div>Throughput: {(run.bytesPerSec / (1024 * 1024)).toFixed(1)} MB/s</div>
                          <div>Disk Time: {run.diskTime.toFixed(1)}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiskPerformanceDashboard;
