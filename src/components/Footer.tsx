function Footer() {
    return (
        <footer className="w-full px-3 py-6 bg-white border-t-2 flex flex-col sm:flex-row items-center sm:justify-between sm:px-6 sm:py-10">
            <span className="text-sm text-gray-600 sm:text-center">
                © {new Date().getFullYear()} Reclip. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-600 sm:mt-0">
                <li>
                    <a href="https://twitter.com/reclipHQ">
                        <img src="/icons/media/twitter.svg" alt="Twitter" />
                    </a>
                </li>
            </ul>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-600 sm:mt-0">
                <li>
                    <a
                        href="https://twisty-professor-6d5.notion.site/Reclip-7840b180589547e5ba022478774cb181"
                        className="mr-4 underline hover:text-gray-500 sm:mr-6"
                    >
                        Terms of Service
                    </a>
                </li>
                <li>
                    <a
                        href="https://twisty-professor-6d5.notion.site/Reclip-7840b180589547e5ba022478774cb181"
                        className="mr-4 underline hover:text-gray-500 sm:mr-6"
                    >
                        Privacy Policy
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
