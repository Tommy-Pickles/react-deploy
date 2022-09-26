import './App.css';
import logo from './logo.svg';
import profileIMage from './img/img-9-1.jpg'

function App() {
  return (
    <div className="App">
      <h1> My React App</h1>
      <h2>Author: Mike</h2>
      <img src={profileIMage} alt="profile-img" />

    </div>
  );
}

export default App;
