import { useState } from 'react'
import DiskPerformanceDashboard from './DiskPerformanceDashboard'
import './App.css'

function App() {
  const [showDashboard, setShowDashboard] = useState(true)

  return (
    <>
      <div style={{ padding: '20px' }}>
        <button 
          onClick={() => setShowDashboard(!showDashboard)}
          style={{ marginBottom: '20px' }}
        >
          {showDashboard ? 'Hide Dashboard' : 'Show Dashboard'}
        </button>
        
        {showDashboard ? (
          <DiskPerformanceDashboard />
        ) : (
          <div>Dashboard hidden - click button to show</div>
        )}
      </div>
    </>
  )
}

export default App
