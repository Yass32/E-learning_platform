const Loading = () => {
    return(
        <div className='flex space-x-2 justify-center items-center bg-white h-screen'>
            <span className='sr-only'>Loading...</span>
            <div className='h-24 w-24 bg-rose-600 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div className='h-24 w-24 bg-rose-600 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div className='h-24 w-24 bg-rose-600 rounded-full animate-bounce'></div>
        </div>
    )
}

export default Loading