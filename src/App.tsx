import { useState } from 'react'
import DiskPerformanceDashboard from './DiskPerformanceDashboard'
import './App.css'

function App() {
  const [showDashboard, setShowDashboard] = useState(true)
  
  return (
    <>
      <div style={{ padding: '20px' }}>
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <h1 style={{ margin: '0 0 10px 0', color: '#1f2937' }}>
            Hard Disk Performance Analysis
          </h1>
          <p style={{ margin: '0 0 15px 0', color: '#6b7280', fontSize: '14px' }}>
            Performance monitoring of traditional hard disk drives (HDD) during build/publish operations
          </p>
          <div style={{ fontSize: '12px', color: '#9ca3af' }}>
            <a 
              href="https://github.com/kusl/performancemetrics" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: '#3b82f6', 
                textDecoration: 'none',
                borderBottom: '1px dotted #3b82f6'
              }}
            >
              📊 View Source Code on GitHub
            </a>
          </div>
        </div>

        <button
          onClick={() => setShowDashboard(!showDashboard)}
          style={{ 
            marginBottom: '20px',
            padding: '8px 16px',
            backgroundColor: showDashboard ? '#ef4444' : '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
            transition: 'background-color 0.2s'
          }}
        >
          {showDashboard ? '📈 Hide Dashboard' : '📊 Show Dashboard'}
        </button>
       
        {showDashboard ? (
          <DiskPerformanceDashboard />
        ) : (
          <div style={{ 
            padding: '40px', 
            textAlign: 'center', 
            color: '#6b7280',
            backgroundColor: '#f9fafb',
            borderRadius: '8px',
            border: '1px solid #e5e7eb'
          }}>
            <p>📊 Dashboard hidden - click "Show Dashboard" button to view performance metrics</p>
            <p style={{ fontSize: '12px', marginTop: '10px' }}>
              This analysis covers 21+ iterations of build/publish cycles on traditional hard disk storage
            </p>
          </div>
        )}
      </div>
    </>
  )
}

export default App
