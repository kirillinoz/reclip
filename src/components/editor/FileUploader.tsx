import { useRef, useState } from 'react'

type FileUploaderProps = {
    inputVideo: File | null | undefined
    setInputVideo: (video: File | null) => void
}

function FileUploader({ inputVideo, setInputVideo }: FileUploaderProps) {
    const hiddenFileInput = useRef<HTMLInputElement>(null)
    const [fileName, setFileName] = useState('')

    const handleClick = () => {
        hiddenFileInput?.current?.click()
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileUploaded = event.target.files?.[0]
        if (fileUploaded !== undefined) {
            setInputVideo(fileUploaded)
            setFileName(fileUploaded.name)
        }
    }

    return (
        <div>
            {inputVideo ? (
                <div className="flex items-center px-4 py-2 bg-gray-100 rounded-sm">
                    <button
                        className="button mr-5 rounded-full"
                        onClick={handleClick}
                    >
                        Change
                    </button>
                    <p className="font-bold text-sm">{fileName}</p>
                </div>
            ) : (
                <div className="flex flex-col">
                    <img
                        className="w-1/2 h-1/2 mx-auto"
                        src="/img/upload-video.svg"
                        alt="Upload video"
                    />
                    <button
                        className="button highlight mt-20"
                        onClick={handleClick}
                    >
                        Choose video
                    </button>
                </div>
            )}

            <input
                type="file"
                className="hidden"
                ref={hiddenFileInput}
                onChange={handleChange}
            ></input>
        </div>
    )
}

export default FileUploader
