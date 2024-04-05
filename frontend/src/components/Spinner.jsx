import React from 'react';

const Spinner = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-16 h-16 rounded-full border-4 border-sky-600 border-t-transparent animate-spin shadow-lg'></div>
        </div>
    );
}

export default Spinner;
