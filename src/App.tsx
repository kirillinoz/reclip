import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactGA from 'react-ga'

import Home from './views/Home'
import Editor from './views/Editor'
import Header from './components/Header'
import Footer from './components/Footer'

// Google Analytics
const MEASUREMENT_ID = 'G-2SC4HXDQNM'
ReactGA.initialize(MEASUREMENT_ID)

function App() {
    const [ready, setReady] = useState<boolean>(false)

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search)
    }, [])

    return (
        <BrowserRouter>
            <div className="flex flex-col h-screen">
                <Header />
                <div className="flex-grow">
                    <Routes>
                        <Route index element={<Home />} />
                        <Route
                            path="editor"
                            element={
                                <Editor ready={ready} setReady={setReady} />
                            }
                        />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
