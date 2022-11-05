import './App.css';

function App() {
  // eslint-disable-next-line no-alert
  const handleClick = () => alert('say mio');
  return (
    <div className="App">
      <input type="text" placeholder="login" />
      <input type="password" placeholder="password" />
      <button type="button" onClick={handleClick}>
        click me
      </button>
    </div>
  );
}

export default App;
