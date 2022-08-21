// ----- Packages -----
import { useEffect, useRef, useState } from 'react'
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg'

// ----- Components -----
import FileUploader from '../components/editor/FileUploader'
import Export from '../components/editor/Export'
import FramePosition from '../components/editor/FramePosition'
import VideoPlayer from '../components/editor/VideoPlayer'

// Create FFmpeg instance
const ffmpeg = createFFmpeg({ log: true })

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
        <div className="w-full h-full flex justify-center items-center bg-pattern bg-opacity-5">
            {ready ? (
                <div className="w-full max-w-lg px-5 py-10 rounded-lg shadow-lg bg-white">
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
                    <svg
                        version="1.1"
                        id="L9"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 100 100"
                        enableBackground="new 0 0 0 0"
                        xmlSpace="preserve"
                    >
                        <path
                            fill="#6366F1"
                            d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                        >
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="rotate"
                                dur="1s"
                                from="0 50 50"
                                to="360 50 50"
                                repeatCount="indefinite"
                            />
                        </path>
                    </svg>
                </div>
            )}
        </div>
    )
}

export default Editor
