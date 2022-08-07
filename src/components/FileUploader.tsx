type FileUploaderProps = {
    setInputVideo: (video: File | null) => void
}

function FileUploader({ setInputVideo }: FileUploaderProps) {
    return (
        <input
            className="mt-3 block w-full text-black bg-gray-200 rounded-s cursor-pointer  focus:outline-none"
            id="file_input"
            type="file"
            onChange={(e) =>
                e.target.files && setInputVideo(e.target.files.item(0))
            }
        ></input>
    )
}

export default FileUploader
