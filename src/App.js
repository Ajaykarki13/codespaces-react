import './App.css';
import Profile from './componenets/Profile'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces
        </p>
        <Profile   obj={{a:1,b:2,c:3}} name="Name - Ajay karki" skill="Skill - Software Developer"/>
       
       
      </header>
                  
    </div>
  );
}

export default App;
