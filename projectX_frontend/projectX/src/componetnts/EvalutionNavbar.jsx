import React from 'react';
import { NavLink } from 'react-router-dom';
import model from '../assets/svg/model.svg'
import star from '../assets/svg/star.svg'

const EvalutionNavbar = () => {
  return (
    <section className='Evaluateheader font-saveur sm:text-sm '>
      <div className='flex flex-row'>
        <div className='flex flex-row w-fit items-start'>
          <img src={star} alt="" className='absolute ml-20 -mt-2 animate-ping-slow delay-75'/>
          <img src={model} alt="" />
        </div>
        <div>
        <div class="cardss">
          <div class="card-overlays"></div>
          <div class="card-inners">
            <nav className="flex text-3xl text-secondary-lightenglishblue font-medium">
              <NavLink to="/multipleq" className='p-4'>
                many question
                evaluation
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
        </div>
        


      <div class="cardss">
        <div class="card-overlays"></div>
        <div class="card-inners">
          <nav className="flex text-3xl text-secondary-lightenglishblue font-medium">
            <NavLink to="/question">
              One Question
              evaluation
            </NavLink>
          </nav>
        </div>
      </div>


    </section>
  )
}

export default EvalutionNavbar
