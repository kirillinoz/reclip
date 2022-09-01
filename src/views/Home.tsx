function Home() {
    return (
        <div className="flex flex-col items-center bg-indigo-50">
            {/*<div className="fixed w-screen h-screen">
                <div className="absolute top-1/2 left-[1/12] w-28 h-12 glassmorphism opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 w-12 h-12 glassmorphism opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 w-12 h-12 glassmorphism opacity-50"></div>
            </div>*/}
            <section className="w-screen px-3 sm:px-6 ">
                <div className="relative py-20 mx-auto flex flex-col justify-center items-center max-w-3xl">
                    <h1 className="text-2xl text-center font-bold sm:text-4xl sm:leading-normal md:text-5xl md:leading-normal lg:text-6xl lg:leading-normal max-w-5xl">
                        Easily <span className="text-indigo-500">crop</span>{' '}
                        your videos &&nbsp;
                        <span className="text-indigo-500">post</span> them to{' '}
                        <span className="text-indigo-500">vertical</span>{' '}
                        platforms.
                    </h1>
                </div>
            </section>
            <section className="w-screen bg-white flex justify-center">
                <div className="w-full px-3 sm:px-6 max-w-3xl my-20">
                    <h4 className="font-bold text-lg sm:text-xl">
                        From horizontal to{' '}
                        <span className="text-indigo-500">vertical</span>!
                    </h4>
                    <p className="mt-2 text-xs font-bold text-gray-600 sm:text-sm">
                        Convert your videos to vertical format.
                    </p>
                    <div className="mt-8 flex w-full">
                        <div className="flex flex-col w-full">
                            <div className="p-5 w-full bg-white rounded-lg border border-gray-200 shadow-md flex justify-evenly">
                                <div className="w-1/6 flex flex-col items-center">
                                    <img
                                        src="/icons/media/upload.svg"
                                        alt="Upload"
                                    />
                                </div>
                                <div className="w-1/6 flex flex-col items-center">
                                    <img
                                        src="/icons/media/youtube.svg"
                                        alt="YouTube"
                                    />
                                    <span className="mt-2 bg-gray-100 px-2 py-1 sm:px-4 sm:py-2 text-xxxs text-center sm:text-xxs font-bold text-gray-600 rounded-full">
                                        COMING SOON
                                    </span>
                                </div>
                                <div className="w-1/6 flex flex-col items-center">
                                    <img
                                        src="/icons/media/twitch.svg"
                                        alt="Twitch"
                                    />
                                    <span className="mt-2 bg-gray-100 px-2 py-1 sm:px-4 sm:py-2 text-xxxs text-center sm:text-xxs font-bold text-gray-600 rounded-full">
                                        COMING SOON
                                    </span>
                                </div>
                            </div>
                            <div className="p-5 mt-10 w-full bg-white rounded-lg border border-gray-200 shadow-md flex justify-evenly">
                                <div className="w-1/6 flex flex-col items-center">
                                    <img
                                        src="/icons/media/download.svg"
                                        alt="Download"
                                    />
                                </div>
                                <div className="w-1/6 flex flex-col items-center">
                                    <img
                                        src="/icons/media/ytshorts.svg"
                                        alt="YouTube Shorts"
                                    />
                                    <span className="mt-2 bg-gray-100 px-2 py-1 sm:px-4 sm:py-2 text-xxxs text-center sm:text-xxs font-bold text-gray-600 rounded-full">
                                        COMING SOON
                                    </span>
                                </div>
                                <div className="w-1/6 flex flex-col items-center">
                                    <img
                                        src="/icons/media/tiktok.svg"
                                        alt="TikTok"
                                    />
                                    <span className="mt-2 bg-gray-100 px-2 py-1 sm:px-4 sm:py-2 text-xxxs text-center sm:text-xxs font-bold text-gray-600 rounded-full">
                                        COMING SOON
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <img
                                className="w-full h-1/2"
                                src="/icons/media/arrow.svg"
                                alt="Arrow top to bottom"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-screen  flex justify-center">
                <div className="w-full px-3 sm:px-6 max-w-3xl my-20">
                    <h4 className="font-bold text-lg sm:text-xl">
                        <span className="text-indigo-500">Easy</span> and&nbsp;
                        <span className="text-indigo-500">quick</span>!
                    </h4>
                    <p className="mt-2 text-xs font-bold text-gray-600 sm:text-sm">
                        Thanks to these features.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row">
                        <div className="sm:max-w-xs bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden">
                            <img src="/img/features/frame.svg" alt="Frame" />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-indigo-500">
                                    Frame
                                </h5>
                                <p className="mb-3 font-normal text-gray-600">
                                    Move the frame to capture what you want to
                                    show in your clip.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 sm:mt-0 sm:ml-4 sm:max-w-xs bg-white rounded-lg border border-gray-200 shadow-md">
                            <img
                                className="rounded-t-lg"
                                src="/img/features/time.svg"
                                alt="Time slots"
                            />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-indigo-500 flex justify-between">
                                    Time slots{' '}
                                    <span className="ml-2 bg-gray-100 px-4 text-xxs font-bold text-gray-600 rounded-full">
                                        COMING SOON
                                    </span>
                                </h5>
                                <p className="mb-3 font-normal text-gray-600">
                                    Create new time slots and move the frame to
                                    add dynamics to your clip.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row">
                        <div className="sm:max-w-xs bg-white rounded-lg border border-gray-200 shadow-md">
                            <img
                                className="rounded-t-lg"
                                src="/img/features/face.svg"
                                alt="Face tracker"
                            />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-indigo-500 flex justify-between">
                                    Face tracker{' '}
                                    <span className="ml-2 bg-gray-100 px-4 text-xxs font-bold text-gray-600 rounded-full">
                                        COMING SOON
                                    </span>
                                </h5>
                                <p className="mb-3 font-normal text-gray-600">
                                    Save time on time slots, make the frame
                                    follow your face.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 sm:mt-0 sm:ml-4 sm:max-w-xs bg-white rounded-lg border border-gray-200 shadow-md">
                            <img
                                className="rounded-t-lg"
                                src="/img/features/split.svg"
                                alt="Split"
                            />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-indigo-500 flex justify-between">
                                    Split{' '}
                                    <span className="ml-2 bg-gray-100 px-4 text-xxs font-bold text-gray-600 rounded-full">
                                        COMING SOON
                                    </span>
                                </h5>
                                <p className="mb-3 font-normal text-gray-600">
                                    Split your frame into two and capture two
                                    frames at the same time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*
            <section className="px-3 sm:px-6 w-full max-w-3xl">
                <h4 className="mt-20 font-bold text-lg sm:text-xl">
                    Sign up, <span className="text-indigo-500">clip</span>{' '}
                    and&nbsp;
                    <span className="text-indigo-500">crop</span> first!
                </h4>
                <p className="mt-2 text-xs font-bold text-gray-600 sm:text-sm">
                    Subscribe to our newsletter.
                </p>
                <form action="" className="flex flex-col md:flex-row">
                    <input
                        className="mt-8 w-full border font-bold border-indigo-500 rounded-lg h-20 text-lg font-inter px-4 md:flex-1"
                        type="email"
                        name="member[email]"
                        id="member_email"
                        placeholder="winnie@pooh.com"
                        required
                    />
                    <button
                        className="button highlight w-full mt-4 text-xl h-20 md:mt-8 md:ml-5 md:w-72"
                        value="Subscribe"
                        name="member[subscribe]"
                        id="member_submit"
                    >
                        Subscribe
                    </button>
                </form>
                <a
                    className="flex items-center justify-center w-full button text-xl h-20 mt-8 mb-20"
                    href="https://twitter.com/reclipHQ"
                >
                    Follow us on Twitter
                </a>
            </section>
    */}
        </div>
    )
}

export default Home
