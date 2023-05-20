import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomGreeting } from '../redux/greetings';

function Greeting() {
  const dispatch = useDispatch();
  const randomGreetings = useSelector((state) => state.message);
  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <div className="greet-div">
      <h1>Greetings</h1>
      <button type="button" onClick={() => dispatch(fetchRandomGreeting())}>Greetings</button>
      <h3>{randomGreetings}</h3>
    </div>
  );
}
export default Greeting;
