import React from 'react';
import { FaCircle, FaDiscord, FaLinkedin, FaTwitter } from 'react-icons/fa';

import { AuthBtton } from '../Firebase'

const index: React.FC = () => {


    return (

        <div className='bg-blue-950 shadow-violet-500/50 w-1/6 fixed h-full'>
            <div className='flex justify-center mt-10'>
                <AuthBtton />
            </div>
            <div className='flex justify-center mt-10'>
                <input type="text" placeholder="Search..." />
            </div>
            <h2 className='gap-5 text-sm flex-col flex justify-center bg-blue-900  shadow-xl m-8 mt-20 p-10 '>
                <label className="flex items-center gap-2 hover:text-violet-600">
                    <input type="checkbox" name="checkbox" value="1" className="form-checkbox" />
                    <span>Web App</span>
                </label>
                <label className="flex items-center gap-2 hover:text-violet-600">
                    <input type="checkbox" name="checkbox" value="1" className="form-checkbox" />
                    <span>Emerging Technology</span>
                </label>
                <label className="flex items-center gap-2 hover:text-violet-600">
                    <input type="checkbox" name="checkbox" value="1" className="form-checkbox" />
                    <span>Hardware</span>
                </label>
                <label className="flex items-center gap-2 hover:text-violet-600">
                    <input type="checkbox" name="checkbox" value="1" className="form-checkbox" />
                    <span>Innovation</span>
                </label>
                <label className="flex items-center gap-2 hover:text-violet-600">
                    <input type="checkbox" name="checkbox" value="1" className="form-checkbox" />
                    <span>Machine Learning</span>
                </label>
                <label className="flex items-center gap-2 hover:text-violet-600">
                    <input type="checkbox" name="checkbox" value="1" className="form-checkbox" />
                    <span>Cyber Security</span>
                </label>
                <label className="flex items-center gap-2 hover:text-violet-600">
                    <input type="checkbox" name="checkbox" value="1" className="form-checkbox" />
                    <span>Video Games</span>
                </label>
                <label className="flex items-center gap-2 hover:text-violet-600">
                    <input type="checkbox" name="checkbox" value="1" className="form-checkbox" />
                    <span>Software</span>
                </label>
                <label className="flex items-center gap-2 hover:text-violet-600">
                    <input type="checkbox" name="checkbox" value="1" className="form-checkbox" />
                    <span>Critical Infrastructure</span>
                </label>
            </h2>
            <div className='flex flex-row'>
                <FaDiscord href='https://discord.gg/n9sj73VEwT' size={35} className='cursor-pointer ml-10 hover:text-violet-600' />
                <FaTwitter size={35} className='cursor-pointer ml-10 hover:text-violet-600' />
                <FaLinkedin size={35} className='cursor-pointer ml-10 hover:text-violet-600' />
            </div>

        </div>
    )
}
export default index;