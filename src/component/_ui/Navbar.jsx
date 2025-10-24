import React, { useContext } from 'react';   
import { AuthContext } from './ContextHook';

const Navbar = () => {
    const {user} = useContext(AuthContext)

    return (
        <div className='w-[100%] border-b py-4'>
            <div className='max-w-[1440px] mx-auto flex items-center justify-between'>
                <h2 className='text-3xl font-bold'>Mubin</h2>
                <ul className='flex items-center gap-8'>
                   <li>About {user}</li> 
                   <li>Home</li> 
                   <li>Contact</li>  
                </ul>
            </div>
        </div>
    );
};

export default Navbar;