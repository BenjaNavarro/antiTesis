import React, {Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';
const Home = React.lazy(()=>import('./components/pages/Home'));
const Login = React.lazy(()=>import('./components/pages/Login'));
const NotFound = React.lazy(()=>import('./components/pages/NotFound'));
const LoadingPage = React.lazy(()=>import('./components/pages/LoadingPage'));

function App() {
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
      <Route path='*' element={
        <Suspense fallback={<LoadingPage/>}>
          <NotFound/>
        </Suspense>
        }/>
    </Routes>
  )
}

export default App