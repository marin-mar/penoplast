import Logo from '../Components/Logo/Logo.js';
import './App.scss';

function App() {
  return (
    <div className="app">
      <header className="header">
        <Logo />
        <h2>header</h2>
      </header>
      <main className="content">
        <h2>content</h2>
      </main>
      <footer className="footer">
        <h2>footer</h2>
      </footer>
    </div>
  );
}

export default App;
