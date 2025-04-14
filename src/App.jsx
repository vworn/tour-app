import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallary from './components/gallary'
import './styles/styles.css'
import TourCard from './components/tourcard'


function App() {
  const [tours, setTours] = useState([]);
  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  }

  return (
    <main>
      {/* display header */}
      <h1>tour directory</h1>
      <Gallary tours={tours} setTours={setTours} onRemove={removeTour} />
    </main>
  );
}
export default App;

//Setup root component with state and props structure