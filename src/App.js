import './App.css';
import Union from './components/layout/Union/Union';
import Chats from './components/layout/Chats/Chats';

function App() {
  return (
    <div className="chat_dashboard container">
      <Union />
      <Chats />
    </div>
  );
}

export default App;
