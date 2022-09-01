// ----- Packages -----
import { useEffect, useRef, useState } from 'react'
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg'

// ----- Components -----
import FileUploader from '../components/editor/FileUploader'
import Export from '../components/editor/Export'
import FramePosition from '../components/editor/FramePosition'
import VideoPlayer from '../components/editor/VideoPlayer'
import LoadingSpinner from '../components/editor/LoadingSpinner'

// Create FFmpeg instance
const ffmpeg = createFFmpeg() /*{ log: true }*/

type EditorProps = {
    ready: boolean
    setReady: (ready: boolean) => void
}

function Editor({ ready, setReady }: EditorProps) {
    // States
    const [inputVideo, setInputVideo] = useState<File | null>()
    const [clientWidthVideo, setClientWidthVideo] = useState<number>(0)
    const [clientHeightVideo, setClientHeightVideo] = useState<number>(0)
    const [widthVideo, setWidthVideo] = useState<number>(0)
    const [heightVideo, setHeightVideo] = useState<number>(0)
    const [position, setPosition] = useState<
        { x: number; y: number } | undefined
    >(undefined)

    // Refs
    const container = useRef<HTMLDivElement>(null)
    const draggable = useRef<HTMLDivElement>(null)

    // Load FFmpeg
    const load = async () => {
        await ffmpeg.load()
        setReady(true)
    }

    // On component mount
    useEffect(() => {
        !ready && load()
    }, [])

    return (
        <div className="w-full h-full flex justify-center items-center bg-indigo-100 bg-opacity-50">
            {ready ? (
                <div className="w-full max-w-lg my-10 p-10 rounded-lg shadow-lg bg-white">
                    <FileUploader
                        inputVideo={inputVideo}
                        setInputVideo={setInputVideo}
                    />

                    {inputVideo && (
                        <div className="mt-6">
                            <VideoPlayer
                                url={URL.createObjectURL(inputVideo)}
                                clientWidthVideo={clientWidthVideo}
                                clientHeightVideo={clientHeightVideo}
                                position={position}
                                draggable={draggable}
                                container={container}
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
                                container={container}
                            />
                        </div>
                    )}
                </div>
            ) : (
                <div className="w-20 h-20">
                    <LoadingSpinner color="#6366F1" />
                </div>
            )}
        </div>
    )
}

export default Editor
