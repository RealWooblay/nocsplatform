import React from 'react';
import { FaCircle, FaMoon } from 'react-icons/fa';

const index: React.FC = () => {

    return (
        <nav className="fixed w-full bg-transparent text-white z-0">
            <div className='flex flex-row justify-end w-full px-4 2xl:px-16'>
                <div>
                    <FaMoon size={30} className='cursor-pointer mt-5 hover:text-violet-600' />
                    <FaCircle size={150} className='cursor-pointer hover:text-violet-600' />
                </div>
            </div>
        </nav >
    );
};
export default index;