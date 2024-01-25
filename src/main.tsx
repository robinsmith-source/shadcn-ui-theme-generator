import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import DemoSection from "@/components/demo-section.tsx";
import ThemeSection from "@/components/theme-section.tsx";
import App from "@/App.tsx";
import {ThemeProvider} from "@/components/misc/theme-provider.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div className="space-y-16 mx-auto min-h-screen max-w-screen-lg p-6">
            <ThemeProvider>
                <App/>
                <ThemeSection/>
                <DemoSection/>
            </ThemeProvider>
        </div>
    </React.StrictMode>,
)
