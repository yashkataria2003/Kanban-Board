import './App.css';
import Board from './components/Board/Board';
import Navbar from './components/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions/action'
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const { tickets } = useSelector((state) => state.dataSlice);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return tickets ? (
    <div className='appContainer'>
      <Navbar/>
      <Board/>
    </div>
  ) : (console.error("Something Went Wrong !!!"));
}

export default App;
