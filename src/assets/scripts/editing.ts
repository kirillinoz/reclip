import { FFmpeg } from '@ffmpeg/ffmpeg'

export const cropVideo = async (
    out_w: number,
    out_h: number,
    x: number,
    y: number,
    ffmpeg: FFmpeg,
    fetchFile: (file: File) => Promise<Uint8Array>,
    inputVideo: File
) => {
    // Write the video to memory
    ffmpeg.FS('writeFile', 'in.mp4', await fetchFile(inputVideo))

    // Run the FFmpeg command
    await ffmpeg.run(
        '-i',
        'in.mp4',
        '-vf',
        `crop=${out_w}:${out_h}:${x}:${y}`,
        'out.mp4'
    )

    // Read the output video from memory
    const data = ffmpeg.FS('readFile', 'out.mp4')

    const url = URL.createObjectURL(new Blob([data], { type: 'video/mp4' }))
    return url
}
