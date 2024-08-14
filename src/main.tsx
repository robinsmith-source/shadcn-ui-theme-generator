import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Controls from '@/components/controls.tsx';
import { ThemeProvider } from '@/components/layout/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

import { StyleProvider } from '@/components/style-provider';
import CardsDemo from '@/components/cards';
import Analytics from '@/components/misc/analytics.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='mx-auto flex min-h-screen w-full flex-col'>
      <ThemeProvider>
        <StyleProvider>
          <Header />
          <main className='mx-auto flex max-w-screen-2xl flex-1 flex-col py-32'>
            <div className='flex w-full flex-col items-center justify-center space-y-8'>
              <Controls />
              <CardsDemo />
            </div>
            <Analytics />
          </main>
          <Footer />
        </StyleProvider>
      </ThemeProvider>
    </div>
  </React.StrictMode>
);
