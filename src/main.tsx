import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from '@/components/layout/theme-provider';
import Header from '@/components/layout/header';

import { StyleProvider } from '@/components/style-provider';
import Analytics from '@/components/misc/analytics';
import Customizer from '@/components/customizer';
import CardsDemo from '@/components/cards';
import { Separator } from '@/components/ui/separator.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='mx-auto flex min-h-screen w-full flex-col'>
      <ThemeProvider>
        <StyleProvider>
          <Header />
          <main className='mx-auto flex max-w-screen-2xl flex-1 flex-col py-32'>
            <div className='grid w-full items-center justify-center space-y-8'>
              {/*<PageHeader/>*/}
              <Customizer />
              <Separator className='my-4' />
              <CardsDemo />
            </div>
            <Analytics />
          </main>
          {/*<Footer />*/}
        </StyleProvider>
      </ThemeProvider>
    </div>
  </React.StrictMode>
);
