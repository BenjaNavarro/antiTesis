import React, {Suspense} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoadingPage from './components/pages/LoadingPage';
const Home = React.lazy(()=>import('./components/pages/Home'));
const Login = React.lazy(()=>import('./components/pages/Login'));
const NotFound = React.lazy(()=>import('./components/pages/NotFound'));
const VideoLlamada = React.lazy(()=>import('./components/pages/VideoLlamada'));
const RegistroPaciente = React.lazy(()=>import('./components/pages/RegistroPaciente'));
const RegistroTerapeuta = React.lazy(()=>import('./components/pages/RegistroTerapeuta'));
const LoginAdmin = React.lazy(()=>import('./components/pages/LoginAdmin'));
const LoginTerapist = React.lazy(()=>import('./components/pages/LoginTerapist'));
const AdminProfile = React.lazy(()=>import('./components/pages/Admin/AdminProfile'));
const PacientsAdmin = React.lazy(()=>import('./components/pages/Admin/PacientsAdmin'));
const PacientProfile = React.lazy(()=>import('./components/pages/Pacient/PacientProfile'));
const TerapistProfile = React.lazy(()=>import('./components/pages/Terapist/TerapistProfile'));
const MyPacients = React.lazy(()=>import('./components/pages/Terapist/MyPacients'));
const TerapistsAdmin = React.lazy(()=>import('./components/pages/Admin/TerapistsAdmin'));

const user = localStorage.getItem('userLoged') ? JSON.parse(localStorage.getItem('userLoged')): null

function App() {
  console.log({user});
  return (
    <Routes>
      <Route path='/' element={
        user?
        <Navigate to={'/perfil'} replace={true}/>
        :
        <Suspense fallback={<LoadingPage/>}>
          <Home/>
        </Suspense>
      }/>
      <Route path='/login' element={
        user?
        <Navigate to={'/perfil'} replace={true}/>
        :
        <Suspense fallback={<LoadingPage/>}>
          <Login/>
        </Suspense>
      }/>
      <Route path='/perfil' element={
        user?.type == 'admin'?
          <Suspense fallback={<LoadingPage/>}>
            <AdminProfile/>
          </Suspense>
        :
        user?.type == 'terapist'?
          <Suspense fallback={<LoadingPage/>}>
            <TerapistProfile/>
          </Suspense>
        :
        user?.type == 'pacient'?
          <Suspense fallback={<LoadingPage/>}>
            <PacientProfile/>
          </Suspense>
        :<Navigate to={'/login'} replace={true}/>
      }/>
      <Route path='/pacients' element={
        user?.type == 'admin'?
          <Suspense fallback={<LoadingPage/>}>
            <PacientsAdmin/>
          </Suspense>
        :
        user?.type == 'terapist'?
          <Suspense fallback={<LoadingPage/>}>
            <MyPacients/>
          </Suspense>
        :
        user?.type == 'pacient'?
          <Navigate to={'/perfil'} replace={true}/>
        :
          <Navigate to={'/login'} replace={true}/>
      }/>
      <Route path='/terapists' element={
        user?.type == 'admin'?
         <Suspense>
            <TerapistsAdmin/>
         </Suspense>
         :<Navigate to={'/perfil'} replace={true}/>
      }/>
      {/* <Route path='/calls' /> */}
      <Route path='/call' element={
        user ? 
        <Suspense fallback={<LoadingPage/>}>
          <VideoLlamada/>
        </Suspense>
        :<Navigate to={'/'} replace={true}/>
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
      
       <Route path='/pacients/perfil' element={
        <Suspense fallback={<LoadingPage/>}>
          <PacientProfile/>
        </Suspense>
      }/>
      <Route path='/admins/perfil' element={
        <Suspense fallback={<LoadingPage/>}>
          <AdminProfile/>
        </Suspense>
      }/>
       <Route path='/terapists/perfil' element={
        <Suspense fallback={<LoadingPage/>}>
          <TerapistProfile/>
        </Suspense>
      }/>
       <Route path='/terapists/pacients' element={
        <Suspense fallback={<LoadingPage/>}>
          <MyPacients/>
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