import React, {Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingPage from './components/pages/LoadingPage';
const Home = React.lazy(()=>import('./components/pages/Home'));
const Login = React.lazy(()=>import('./components/pages/Login'));
const NotFound = React.lazy(()=>import('./components/pages/NotFound'));
const VideoLlamada = React.lazy(()=>import('./components/pages/VideoLlamada'));
const RegistroPaciente = React.lazy(()=>import('./components/pages/RegistroPaciente'));
const RegistroTerapeuta = React.lazy(()=>import('./components/pages/RegistroTerapeuta'));
const LoginAdmin = React.lazy(()=>import('./components/pages/LoginAdmin'));
const LoginTerapist = React.lazy(()=>import('./components/pages/LoginTerapist'));

const user = localStorage.getItem('userLoged');

function App() {
  console.log({user});
  return (
    <Routes>
      <Route path='/' element={
        <Suspense fallback={<LoadingPage/>}>
          <Home/>
        </Suspense>
      }/>
      <Route path='/login' element={
        <Suspense fallback={<LoadingPage/>}>
          <Login/>
        </Suspense>
      }/>
      <Route path='/call' element={
        <Suspense fallback={<LoadingPage/>}>
          <VideoLlamada/>
        </Suspense>
      }/>
      <Route path='/register' element={
        <Suspense fallback={<LoadingPage/>}>
          <RegistroPaciente/>
        </Suspense>
      }/>
      <Route path='/registro_terapeuta' element={
        <Suspense fallback={<LoadingPage/>}>
          <RegistroTerapeuta/>
        </Suspense>
      }/>
      <Route path='/login_admin' element={
        <Suspense fallback={<LoadingPage/>}>
          <LoginAdmin/>
        </Suspense>
      }/>
      <Route path='/login_terapist' element={
        <Suspense fallback={<LoadingPage/>}>
          <LoginTerapist/>
        </Suspense>
      }/>
      <Route path='*' element={
        <Suspense fallback={<LoadingPage/>}>
          <NotFound/>
        </Suspense>
      }/>
    </Routes>
  )
}

export default App