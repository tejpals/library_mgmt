// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import BookList from './components/booklist';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <BookList />
    </div>
  );
}

export default App;
