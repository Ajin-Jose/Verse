import React, { Suspense, useState } from 'react'
import { RecoilRoot, useRecoilState } from 'recoil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Landing from './pages/Landing';
import Developer_Tools from './pages/Developer_Tools';



import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";




const SignUp = React.lazy(() => import('./pages/SignUp'));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));


function App() {

  const theme =createTheme(themeSettings('dark'));

  return (
    <div className='w-screen p-0 m-0 h-screen'>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <RecoilRoot>
      <BrowserRouter>
      <Routes>

          <Route path="/" element={<Landing/>} />
          <Route path="/signup" element={<Suspense fallback={"loading..."}><SignUp /></Suspense>} />
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />

          <Route path="/dev" element={<Developer_Tools/>} />
      </Routes>
      </BrowserRouter>
      </RecoilRoot>
      </ThemeProvider>

    </div>
  )
}

export default App
