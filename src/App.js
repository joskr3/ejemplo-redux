import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { DECREMENT, INCREMENT, INCREMENT_BY, RESET } from './redux/actions';

function App() {

  const dispatch = useDispatch();
  const counter = useSelector( state => state.counter );

  const increment = () => {
    dispatch( { type: INCREMENT } );
  }

  const decrement = () => {
    dispatch( { type: DECREMENT } );
  }

  const incrementBy = ( incrementValue ) => {
    dispatch( { type: INCREMENT_BY, incrementValue } );
  }

  const reset = () => {
    dispatch( { type: RESET } );
  }


  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={() => incrementBy( 5 )}>+5</button>
      <button onClick={reset}>RESETEAR</button>
    </div>
  );
}

export default App;
