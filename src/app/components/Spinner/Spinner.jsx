
const Spinner = () => {
    return (
        <div className="h-[40vh] w-full flex justify-center items-center bg-white shadow-sm rounded-md">
            <div className="text-center space-y-3">
                <span className="loading loading-spinner loading-xl"></span>
                <h2 className="text-xl">Loading....</h2>
            </div>

            
        </div>
    );
};

export default Spinner;