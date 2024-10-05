import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from '@/components/layout/theme-provider';
import Header from '@/components/layout/header';
import { StyleProvider } from '@/components/style-provider';
import Customizer from '@/components/customizer';
import CardsDemo from '@/components/cards';
import { Separator } from '@/components/ui/separator';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='mx-auto flex min-h-screen w-full flex-col'>
      <ThemeProvider>
        <Header />
        <StyleProvider>
          <main className='mx-auto flex max-w-screen-2xl flex-1 flex-col px-6 py-32'>
            <Customizer />
            <Separator className='my-4' />
            <div className='grid w-full items-center justify-center space-y-8'>
              <CardsDemo />
            </div>
          </main>
        </StyleProvider>
      </ThemeProvider>
    </div>
  </React.StrictMode>
);
