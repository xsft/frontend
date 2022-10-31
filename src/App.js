import './App.css';

const App = () => {

    const handleClick = () => alert('say mio')


  return (
    <div className="app">
        <input type = 'text' placeholder='login'/>
        <input type='password' placeholder='password'/>
      <button onClick={handleClick} >
          click me
      </button>
    </div>
  );
}

export default App;
