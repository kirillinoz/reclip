import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import splitbee from '@splitbee/web'

import Home from './views/Home'
import Editor from './views/Editor'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
    const [ready, setReady] = useState<boolean>(false)

    splitbee.init()

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
