import { SignedOut, SignInButton } from '@clerk/clerk-react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<Home />} index />
        <Route element={<Login />} path='/login' />
      </Routes>
    </div>
  );
}