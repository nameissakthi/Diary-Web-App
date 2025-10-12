import { SignedOut, SignInButton } from '@clerk/clerk-react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Footer from './components/Footer';
import NewRecord from './pages/NewRecord';
import { useContext } from 'react';
import { DiaryContext } from './context/DiaryContext';

export default function App() {

  const { user } = useContext(DiaryContext)

  

  return (
    !user.isLoaded
    ?
    <div className='flex justify-center items-center h-[100vh]'>
      <p className='text-2xl'>Loading...</p>
    </div>
    :
    <div className="app">
      <Routes>
        <Route element={<Home />} index />
        <Route element={<Login />} path='/login' />
        <Route element={<NewRecord />} path='/new-record' />
      </Routes>
      <Footer />
    </div>
  );
}