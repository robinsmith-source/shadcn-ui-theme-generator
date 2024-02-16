import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ThemeSection from "@/components/theme-section.tsx";

import {ThemeProvider} from "@/components/misc/theme-provider.tsx";
import Header from "@/components/header.tsx";
import Footer from "@/components/footer.tsx";
import CardsDemo from "@/components/cards-demo.tsx";
import {SelectionProvider} from "@/utils/selection-provider.tsx";
import {GeneratedThemeProvider} from "@/utils/generatedThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div className="flex flex-col items-center justify-center space-y-16 mx-auto min-h-screen max-w-screen-2xl p-6">
            <ThemeProvider>
                <Header/>
                <div className="dynamic-theme flex flex-col justify-center items-center space-y-8 w-full">
                    <GeneratedThemeProvider>
                        <SelectionProvider>
                            <ThemeSection/>
                            <CardsDemo/>
                        </SelectionProvider>
                    </GeneratedThemeProvider>
                </div>
                <Footer/>
            </ThemeProvider>
        </div>
    </React.StrictMode>,
)
