import './index.css';
import App from './App.tsx';
import { StrictMode } from 'react';
import Layout from './layout/Layout.tsx';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout>
      <App />
    </Layout>
  </StrictMode>
);
