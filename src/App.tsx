// Packages
import { useEffect, useRef, useState } from 'react'
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg'

// Components
import FileUploader from './components/FileUploader'
import Export from './components/Export'
import FramePosition from './components/FramePosition'
import VideoPlayer from './components/VideoPlayer'

// Create FFmpeg instance
const ffmpeg = createFFmpeg({ log: true })

function App() {
    const [ready, setReady] = useState<boolean>(false)
    const [inputVideo, setInputVideo] = useState<File | null>()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [clientWidthVideo, setClientWidthVideo] = useState<number>(0)
    const [clientHeightVideo, setClientHeightVideo] = useState<number>(0)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [widthVideo, setWidthVideo] = useState<number>(0)
    const [heightVideo, setHeightVideo] = useState<number>(0)
    const [position, setPosition] = useState<
        { x: number; y: number } | undefined
    >(undefined)

    const draggable = useRef<HTMLDivElement>(null)

    // Load FFmpeg library
    const load = async () => {
        await ffmpeg.load()
        setReady(true)
    }

    useEffect(() => {
        load()
    }, [])

    return ready ? (
        <div className="max-w-lg  px-5">
            <FileUploader {...{ setInputVideo }} />

            {inputVideo && (
                <div className="mt-6">
                    <VideoPlayer
                        url={URL.createObjectURL(inputVideo)}
                        clientWidthVideo={clientWidthVideo}
                        clientHeightVideo={clientHeightVideo}
                        position={position}
                        draggable={draggable}
                        setWidthVideo={setWidthVideo}
                        setHeightVideo={setHeightVideo}
                        setClientWidthVideo={setClientWidthVideo}
                        setClientHeightVideo={setClientHeightVideo}
                    />

                    <FramePosition
                        clientWidthVideo={clientWidthVideo}
                        clientHeightVideo={clientHeightVideo}
                        setPosition={setPosition}
                    />
                    <Export
                        heightVideo={heightVideo}
                        ffmpeg={ffmpeg}
                        fetchFile={fetchFile}
                        inputVideo={inputVideo}
                        clientWidthVideo={clientWidthVideo}
                        widthVideo={widthVideo}
                        draggable={draggable}
                    />
                </div>
            )}
        </div>
    ) : (
        <p>Loading...</p>
    )
}

export default App
