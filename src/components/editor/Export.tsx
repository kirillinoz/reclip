// ----- Packages -----
import { FFmpeg } from '@ffmpeg/ffmpeg'
import { useState } from 'react'

// ----- Scripts -----
import { cropVideo } from '../../assets/scripts/editing'
import { calcNewWidth, scale } from '../../assets/scripts/utils'
import LoadingSpinner from './LoadingSpinner'

type ExportProps = {
    heightVideo: number
    ffmpeg: FFmpeg
    fetchFile: (file: File) => Promise<Uint8Array>
    inputVideo: File
    clientWidthVideo: number
    widthVideo: number
    draggable: React.RefObject<HTMLDivElement>
    container: React.RefObject<HTMLDivElement>
}

function Export({
    heightVideo,
    ffmpeg,
    fetchFile,
    inputVideo,
    clientWidthVideo,
    widthVideo,
    draggable,
    container
}: ExportProps) {
    const [loading, setLoading] = useState(false)

    const handleDownload = async () => {
        if (!draggable.current || !container.current) return

        setLoading(true)

        const correctedPosition = scale(
            draggable.current.getBoundingClientRect().x -
                container.current.getBoundingClientRect().x +
                8,
            0,
            clientWidthVideo,
            0,
            widthVideo
        )

        const output = await cropVideo(
            calcNewWidth(heightVideo),
            heightVideo,
            correctedPosition,
            0,
            ffmpeg,
            fetchFile,
            inputVideo
        )

        setLoading(false)

        const a = Object.assign(document.createElement('a'), {
            href: output,
            style: 'display: none',
            download: 'output.mp4'
        })

        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }

    return (
        <div>
            <h3>Publish</h3>
            <div className="flex flex-col">
                <button
                    className="button highlight mt-3"
                    onClick={handleDownload}
                >
                    {loading ? (
                        <div className="flex justify-center items-center">
                            <div className="ml-2 w-5 h-5">
                                <LoadingSpinner color="#FFFFFF" />
                            </div>
                            Loading
                        </div>
                    ) : (
                        'Download'
                    )}
                </button>
            </div>
        </div>
    )
}

export default Export
