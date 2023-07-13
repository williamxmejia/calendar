import './App.css';
import Calendar from './components/Calendar';
import Time from './components/Time';

function App() {
  return (
    <div className="container">
      <Calendar type='month'/>
      <Time />
    </div>
  );
}

export default App;
