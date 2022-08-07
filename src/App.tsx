// Packages
import { useEffect, useRef, useState } from 'react'
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg'
import Draggable from 'react-draggable'

// Components
import FileUploader from './components/FileUploader'
import Export from './components/Export'
import FramePosition from './components/FramePosition'

// Scripts
import { calcNewWidth, valueToTime } from './assets/scripts/utils'

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
    const draggable = useRef(null)
    const video = useRef<HTMLVideoElement>(null)

    // Player
    const [duration, setDuration] = useState<number>(0)
    const [currentTime, setCurrentTime] = useState<number>(0)
    const [isPlaying, setIsPlaying] = useState<boolean>(false)

    const updateVideo = (e: any) => {
        if (!video.current || !e.target) return
        pause()
        video.current.currentTime = e.target.value
    }

    const play = () => {
        if (!video.current) return
        video.current.play()
    }

    const pause = () => {
        if (!video.current) return
        video.current.pause()
    }

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
            <FileUploader setInputVideo={setInputVideo} />

            {inputVideo && (
                <div className="mt-6">
                    <div className="relative">
                        {clientWidthVideo > 0 && (
                            <div className="absolute w-full h-full z-10">
                                <Draggable
                                    axis="x"
                                    position={position}
                                    defaultPosition={{
                                        x:
                                            clientWidthVideo / 2 -
                                            calcNewWidth(clientHeightVideo) / 2,
                                        y: 0
                                    }}
                                    bounds="parent"
                                    nodeRef={draggable}
                                    onStop={(e, data) => {
                                        console.log(e, data)
                                    }}
                                >
                                    <div
                                        className="absolute box-content -m-2 h-full aspect-[9/16] border-8 border-indigo-500 rounded-lg cursor-pointer"
                                        ref={draggable}
                                    ></div>
                                </Draggable>
                            </div>
                        )}
                        <video
                            ref={video}
                            className="w-full aspect-video"
                            src={URL.createObjectURL(inputVideo)}
                            onLoadedMetadata={(e) => {
                                const target = e.target as HTMLVideoElement
                                // Virtual video size
                                setClientWidthVideo(target.clientWidth)
                                setClientHeightVideo(target.clientHeight)
                                // Actual video size
                                setWidthVideo(target.videoWidth)
                                setHeightVideo(target.videoHeight)
                                // Set duration
                                setDuration(target.duration)
                            }}
                            /*onEnded={pause}
                            onTimeUpdate={(e) => {
                                const target = e.target as HTMLVideoElement
                                setCurrentTime(target.currentTime)
                            }}*/
                        />
                    </div>
                    <div className="mt-5 flex flex-col">
                        <input
                            type="range"
                            min="0"
                            max={duration}
                            step="0.01"
                            //value={currentTime}
                            //onChange={updateVideo}
                        />
                        <div className="flex justify-between">
                            <p className="text-gray-600">
                                {valueToTime(currentTime)}
                            </p>
                            <p className="text-gray-600">
                                {valueToTime(duration)}
                            </p>
                        </div>
                        <button
                            className="button mt-2"
                            onClick={() => {
                                if (video.current?.paused) play()
                                else pause()
                            }}
                        >
                            <p>{video.current?.paused ? 'Play' : 'Pause'}</p>
                        </button>
                    </div>
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
