const Spinner = () => {
    return (
        <div className="h-[40vh] w-full flex justify-center items-center bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700">
            <div className="text-center space-y-4">
                <div className="relative">
                    {/* Outer ring */}
                    <div className="w-16 h-16 border-4 border-emerald-500/20 rounded-full animate-spin">
                        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-t-emerald-400 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
                    </div>
                    {/* Inner dot */}
                    {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div> */}
                </div>
                <h2 className="text-xl font-medium text-gray-300 animate-pulse">
                    Loading...
                </h2>
            </div>
        </div>
    );
};

export default Spinner;