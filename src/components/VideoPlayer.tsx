// Packages
import { FormEvent, useRef, useState } from 'react'
import Draggable from 'react-draggable'
import ReactPlayer from 'react-player'
import { calcNewWidth } from '../assets/scripts/utils'
import CustomVideoControls from './CustomVideoControls'

function VideoPlayer({
    url,
    clientWidthVideo,
    clientHeightVideo,
    position,
    draggable,
    setWidthVideo,
    setHeightVideo,
    setClientWidthVideo,
    setClientHeightVideo
}: {
    url: string
    clientWidthVideo: number
    clientHeightVideo: number
    position: { x: number; y: number } | undefined
    draggable: React.RefObject<HTMLDivElement>
    setWidthVideo: (width: number) => void
    setHeightVideo: (height: number) => void
    setClientWidthVideo: (width: number) => void
    setClientHeightVideo: (height: number) => void
}) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [isMuted, setIsMuted] = useState(true)

    const hostVideo = useRef<ReactPlayer>(null)

    const handleOnProgress = (e: { playedSeconds: number }) => {
        setCurrentTime(e.playedSeconds)
    }

    const handleTimeChange = (e: FormEvent<HTMLInputElement>) => {
        if (!hostVideo.current) return
        const element = e.target as HTMLInputElement
        setCurrentTime(+element.value)
        hostVideo.current.seekTo(+element.value)
    }

    const handlePlay = () => {
        if (duration === 0 && hostVideo.current) {
            setDuration(hostVideo.current.getDuration())
        }
        setIsPlaying(true)
    }

    const handlePause = () => {
        setIsPlaying(false)
    }

    return (
        <div>
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
                <ReactPlayer
                    width="100%"
                    height="100%"
                    url={url}
                    muted={isMuted}
                    ref={hostVideo}
                    playing={isPlaying}
                    onProgress={(e) => handleOnProgress(e)}
                    onReady={() => {
                        if (!hostVideo.current) return
                        setWidthVideo(
                            hostVideo.current.getInternalPlayer().videoWidth
                        )
                        setHeightVideo(
                            hostVideo.current.getInternalPlayer().videoHeight
                        )
                        setClientWidthVideo(
                            hostVideo.current.getInternalPlayer().clientWidth
                        )
                        setClientHeightVideo(
                            hostVideo.current.getInternalPlayer().clientHeight
                        )
                    }}
                    onEnded={() => {
                        setIsPlaying(false)
                    }}
                />
            </div>
            <CustomVideoControls
                currentTime={currentTime}
                isPlaying={isPlaying}
                handlePause={handlePause}
                handlePlay={handlePlay}
                handleTimeChange={handleTimeChange}
                duration={duration}
                isMuted={isMuted}
                setIsMuted={setIsMuted}
            />
        </div>
    )
}

export default VideoPlayer
