import './App.css';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';

function App() {
  return (
    <div>
      <h1>Chart Page</h1>
      <div style={{ width: '500px', height: '600px' }}>
        <BarChart />
      </div>
      <br/><br/>
      <div style={{ width: '500px', height: '500px' }}>
        <PieChart/>
      </div>
    </div>
  );
}

export default App