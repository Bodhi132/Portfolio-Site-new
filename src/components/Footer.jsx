import React from 'react'
import gith from '../assets/git.png'
import link from '../assets/Link.png'
import resume from '../assets/resume.png'

const Footer = () => {
    return (
        <div className='flex justify-between  bg-[#424685] py-5 md:hidden px-5'>
            <a className='bg-gradient-to-r from-rose-100 to-teal-100 rounded-full p-3 block' href='https://drive.google.com/file/d/1dLhcJtczB6Ane-t9XcCzKRHN4_M8-_zV/view?usp=drive_link'>
                <img src={resume} alt="" className='object-contain w-4 h-4' />
            </a>
            <div className='flex justify-around '>
                <a className='bg-gradient-to-r from-rose-100 to-teal-100 rounded-full p-3 block mr-6'href='https://www.linkedin.com/in/bodhisattwa-basu/' >
                    <img src={link} alt="" className='object-contain w-4 h-4' />
                </a>
                <a className='bg-gradient-to-r from-rose-100 to-teal-100 rounded-full p-3 block'  href='https://github.com/Bodhi132'>
                    <img src={gith} alt="" className='object-contain w-4 h-4' />
                </a>
            </div>
        </div>
    )
}

export default Footer