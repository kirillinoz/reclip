// ----- Packages -----
import { FormEvent } from 'react'

type CustomVideoControlsProps = {
    isPlaying: boolean
    currentTime: number
    duration: number
    handlePause: () => void
    handlePlay: () => void
    handleTimeChange: (e: FormEvent<HTMLInputElement>) => void
    isMuted: boolean
    setIsMuted: (boolean: boolean) => void
}

function CustomVideoControls({
    isPlaying,
    currentTime,
    duration,
    handlePause,
    handlePlay,
    handleTimeChange,
    isMuted,
    setIsMuted
}: CustomVideoControlsProps) {
    return (
        <div className="flex pt-5 pb-3 bg-gray-200 px-2 rounded-sm">
            <div className=" w-1/12 h-auto mr-2 flex justify-center items-center">
                {isPlaying && (
                    <button onClick={handlePause}>
                        <img src="/icons/player/pause.svg" alt="Pause" />
                    </button>
                )}
                {!isPlaying && (
                    <button onClick={handlePlay}>
                        <img src="/icons/player/play.svg" alt="Play" />
                    </button>
                )}
            </div>
            {/*<div>*/}
            <div className="w-1/12 h-auto mr-2 flex justify-center items-center">
                {isMuted && (
                    <button
                        onClick={() => {
                            setIsMuted(false)
                            //handleVolumeChange({ target: { value: 50 } })
                        }}
                    >
                        <img src="/icons/player/volume.svg" alt="Volume" />
                    </button>
                )}
                {!isMuted && (
                    <button
                        onClick={() => {
                            setIsMuted(true)
                        }}
                    >
                        <img src="/icons/player/muted.svg" alt="Muted" />
                    </button>
                )}
            </div>
            <div className="relative seekbar w-10/12">
                <input
                    className="w-full"
                    type="range"
                    min={0}
                    max={duration}
                    value={currentTime}
                    onInput={(e) => handleTimeChange(e)}
                />
                <progress
                    className="w-full"
                    value={currentTime}
                    max={duration}
                />
            </div>
        </div>
    )
}

export default CustomVideoControls
