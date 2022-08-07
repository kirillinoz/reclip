import { FFmpeg } from '@ffmpeg/ffmpeg'

import { cropVideo } from '../assets/scripts/editing'
import { calcNewWidth, scale } from '../assets/scripts/utils'

type ExportProps = {
    heightVideo: number
    ffmpeg: FFmpeg
    fetchFile: (file: File) => Promise<Uint8Array>
    inputVideo: File
    clientWidthVideo: number
    widthVideo: number
    draggable: React.RefObject<HTMLDivElement>
}

function Export({
    heightVideo,
    ffmpeg,
    fetchFile,
    inputVideo,
    clientWidthVideo,
    widthVideo,
    draggable
}: ExportProps) {
    const handleDownload = async () => {
        if (!draggable.current) return

        const correctedPosition = scale(
            draggable.current.getBoundingClientRect().x - 12,
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
                <button className="button mt-3" onClick={handleDownload}>
                    Download
                </button>
                <button className="button highlight mt-3">TikTok</button>
            </div>
        </div>
    )
}

export default Export
