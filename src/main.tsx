import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import DemoSection from "@/components/demo-section.tsx";
import ThemeSection from "@/components/theme-section.tsx";

import {ThemeProvider} from "@/components/misc/theme-provider.tsx";
import Header from "@/components/header.tsx";
import Footer from "@/components/footer.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div className="flex flex-col items-center justify-center space-y-16 mx-auto min-h-screen max-w-screen-lg p-6">
            <ThemeProvider>
                <Header/>
                <div className="dynamic-theme flex flex-col justify-center items-center gap-6">
                <ThemeSection/>
                <DemoSection/>
                </div>
                <Footer/>
            </ThemeProvider>
        </div>
    </React.StrictMode>,
)
