
import './App.css';

import UserList from './Components/UserList';
import UserProvider from './Components/UserProvider';

function App() {
  return (
    <center>
      <UserProvider>
      <div className='App'>
      <UserList/>
      </div>
      </UserProvider>
      </center>
    
  );
}

export default App;
