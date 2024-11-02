
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [animation, setAnimation] = useState(false);

    const increment = () => {
        if (count < 100) {
            setCount(count + 1);
            setAnimation(true);
        }
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
            setAnimation(true);
        }
    };

    const reset = () => {
        setCount(0);
        setAnimation(true);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className={`text-4xl font-bold mb-4 transition duration-500 ${animation ? 'text-green-500' : 'text-gray-800'}`}>
                Counter: {count}
            </h1>
            <div className="w-full max-w-xs mb-4">
                <div className="bg-gray-300 h-4 rounded">
                    <div 
                        className="bg-blue-500 h-4 rounded" 
                        style={{ width: `${count}%`, transition: 'width 0.5s ease' }}
                    />
                </div>
            </div>
            <div className="space-x-4">
                <button 
                    onClick={increment} 
                    className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 ${count === 100 && 'opacity-50 cursor-not-allowed'}`} 
                    disabled={count === 100}
                >
                    Increase
                </button>
                <button 
                    onClick={decrement} 
                    className={`bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 ${count === 0 && 'opacity-50 cursor-not-allowed'}`} 
                    disabled={count === 0}
                >
                    Decrease
                </button>
                <button 
                    onClick={reset} 
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
                >
                    Reset
                </button>
            </div>
            {count === 0 && <p className="text-red-500 mt-2">Counter cannot go below 0!</p>}
            {count === 100 && <p className="text-green-500 mt-2">Counter has reached the maximum value!</p>}
        </div>
    );
};

export default Counter;