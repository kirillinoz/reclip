import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './views/Home'
import Editor from './views/Editor'
import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
    const [ready, setReady] = useState<boolean>(false)

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
