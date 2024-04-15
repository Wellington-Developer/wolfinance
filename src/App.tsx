import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SideNav from './Components/SideNav';
import Overview from './Pages/Overview';
import { UserContextProvider } from './UserContext';
import Sales from './Pages/Sales';
import Sale from './Pages/Sale';

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <div className="container">
        <SideNav />
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/sale/:id" element={<Sale />} />
            </Routes>
        </div>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
