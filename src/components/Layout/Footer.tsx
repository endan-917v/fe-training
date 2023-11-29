
export default function Footer() {
    return (
        <footer className="flex flex-col gap-12 px-4 py-12">
            <div className="mb-8"></div>
            <div className="border-t-gray-200 border-t"></div>
            <div className="flex flex-col gap-6">
                <div className="flex gap-[10px] items-center">
                    <img
                        src="/logo.png"
                        alt="Purple lens with blurred half"
                    ></img>
                    <span className="text-xl font-medium">Untitled UI</span>
                </div>
                <p className='text-gray-400 text-base'>© 2077 Untitled UI. All rights reserved.</p>
            </div>
        </footer>
    )
}
