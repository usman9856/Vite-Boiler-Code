import './index.css';
import App from './App.tsx';
import { StrictMode } from 'react';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Layout from './layout/Layout.tsx';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Layout>
        <App />
      </Layout>
    </Provider>
  </StrictMode>
);
