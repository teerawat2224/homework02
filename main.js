function App() {
  const [counters, setCounters] = React.useState([
    { id: 1, number: 9 },
    { id: 2, number: 7 },
    { id: 3, number: 10 },
    { id: 4, number: 4 },
    { id: 5, number: 2 },
  ]);

  const updateCounter = (id, increment) => {
      const newCounters = counters.map(counter => 
          counter.id === id ? { ...counter, number: counter.number + increment } : counter
      );
      setCounters(newCounters);
  };

  const resetCounter = (id) => {
      const newCounters = counters.map(counter => 
          counter.id === id ? { ...counter, number: 0 } : counter
      );
      setCounters(newCounters);
  };

  return (
    <div className='app'>
      <h1 className="show-sum">Sum = {counters.reduce((sum, counter) => sum + counter.number, 0)}</h1>
      <button className="btn-add" onClick={() => setCounters([...counters, { id: Date.now(), number: 0 }])}>Add Counter</button>
      <hr />
      {counters.map(el => (
          <Counter key={el.id} item={el} updateCounter={updateCounter} resetCounter={resetCounter} />
      ))}
    </div>
  );
}

function Counter({ item, updateCounter, resetCounter }) {
  return (
    <div className="counter">
      <button className="btn btn-dec" onClick={() => updateCounter(item.id, -1)}>-</button>
      <h3 className="number">{item.number}</h3>
      <button className="btn btn-inc" onClick={() => updateCounter(item.id, 1)}>+</button>
      <button className="btn btn-clr" onClick={() => resetCounter(item.id)}>C</button>
    </div>
  );
}

ReactDOM.createRoot(document.querySelector('#root')).render(<App />);
