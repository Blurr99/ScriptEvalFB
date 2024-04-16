import React from 'react'
import anime from '../assets/svg/Thur.svg'

const SideAnimation = () => {
    const fonts = ["font-bluesprits", "font-bluesprit2", "font-bright", "font-upstroke", "font-norwesters"];
    return (
        <div className={`flex flex-col overflow-hidden w-20 h-screen ${fonts[4]}`}>

            {/* <img src={anime} alt="" /><div class="overflow-x-hidden"> */}
            <div class="py-5 animate-marquee whitespace-wrap flex flex-col break-all text-center align-text-top ">

                <span class="  text-7xl">s</span>
                <span class="  text-7xl">c</span>
                <span class="  text-7xl">r</span>
                <span class="  text-7xl">i</span>
                <span class="  text-7xl">p</span>
                <span class="  text-7xl">t</span>
                <span class="py-4  text-7xl"> </span>
                <span class="  text-7xl">e</span>
                <span class="  text-7xl">v</span>
                <span class="  text-7xl">a</span>
                <span class="  text-7xl">l</span>
                <span class="  text-7xl">u</span>
                <span class="  text-7xl">a</span>
                <span class="  text-7xl">t</span>
                <span class="  text-7xl">i</span>
                <span class="  text-7xl">o</span>
                <span class="  text-7xl">n</span>
                <span class="py-4  text-7xl"> </span>
                <span class="  text-7xl">s</span>
                <span class="  text-7xl">y</span>
                <span class="  text-7xl">s</span>
                <span class="  text-7xl">t</span>
                <span class="  text-7xl">e</span>
                <span class="  text-7xl">m</span>
                </div>
            
            <div class=" py-5 animate-marquee whitespace-wrap font-extrabold flex text-center flex-col break-all align-text-top aria-hidden:'true' ">
            <span class="  text-7xl">s</span>
                <span class="  text-7xl">c</span>
                <span class="  text-7xl">r</span>
                <span class="  text-7xl">i</span>
                <span class="  text-7xl">p</span>
                <span class="  text-7xl">t</span>
                <span class="py-4  text-7xl"> </span>
                <span class="  text-7xl">e</span>
                <span class="  text-7xl">v</span>
                <span class="  text-7xl">a</span>
                <span class="  text-7xl">l</span>
                <span class="  text-7xl">u</span>
                <span class="  text-7xl">a</span>
                <span class="  text-7xl">t</span>
                <span class="  text-7xl">i</span>
                <span class="  text-7xl">o</span>
                <span class="  text-7xl">n</span>
                <span class="py-4  text-7xl"> </span>
                <span class="  text-7xl">s</span>
                <span class="  text-7xl">y</span>
                <span class="  text-7xl">s</span>
                <span class="  text-7xl">t</span>
                <span class="  text-7xl">e</span>
                <span class="  text-7xl">m</span>

                </div> 
        </div>
    )
}

export default SideAnimation
