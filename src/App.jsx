import './App.css';
import Board from './components/Board/Board';
import Navbar from './components/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions/action'
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const { tickets, loading, error } = useSelector((state) => state.dataSlice);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Something Went Wrong !!!", error);
    return <div>Error loading data. Please try again later.</div>;
  }
  


  return (
    <div className='appContainer'>
      <Navbar/>
      <Board/>
    </div>
);

}

export default App;
