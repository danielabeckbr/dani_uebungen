import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.tsx'
import WelcomeClass from './components/WelcomeClass.tsx';
import WelcomeFunction from './components/WelcomeFunction.tsx'
import AppDani from './components/AppDani.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* TS prüft: name ist ein string */}
      <WelcomeClass name="Welt (Class TS)" />
      
      {/* TS prüft: name ist ein string */}
      <WelcomeFunction name="Welt (Function TS)" />
      <AppDani color="black" />
  </StrictMode>,
)
