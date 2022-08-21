// ----- Scripts -----
import { calcNewWidth } from '../../assets/scripts/utils'

type FramePositionProps = {
    clientWidthVideo: number
    clientHeightVideo: number
    setPosition: (position: { x: number; y: number } | undefined) => void
}

function FramePosition({
    clientWidthVideo,
    clientHeightVideo,
    setPosition
}: FramePositionProps) {
    return (
        <div>
            <h3>Frame Position</h3>
            <div className="flex mt-3">
                <button
                    className="button max-h-14 mr-1"
                    onClick={() => {
                        setPosition({ x: 0, y: 0 })
                        setTimeout(() => {
                            setPosition(undefined)
                        }, 10)
                    }}
                >
                    <img
                        className="h-full w-full"
                        src="/icons/frame/left.svg"
                        alt="Left"
                    />
                </button>
                <button
                    className="button max-h-14"
                    onClick={() => {
                        setPosition({
                            x:
                                clientWidthVideo / 2 -
                                calcNewWidth(clientHeightVideo) / 2,
                            y: 0
                        })
                        setTimeout(() => {
                            setPosition(undefined)
                        }, 10)
                    }}
                >
                    <img
                        className="h-full w-full"
                        src="/icons/frame/center.svg"
                        alt="Center"
                    />
                </button>
                <button
                    className="button max-h-14 ml-1"
                    onClick={() => {
                        setPosition({
                            x:
                                clientWidthVideo -
                                calcNewWidth(clientHeightVideo),
                            y: 0
                        })
                        setTimeout(() => {
                            setPosition(undefined)
                        }, 10)
                    }}
                >
                    <img
                        className="h-full w-full"
                        src="/icons/frame/right.svg"
                        alt="Right"
                    />
                </button>
            </div>
        </div>
    )
}

export default FramePosition
