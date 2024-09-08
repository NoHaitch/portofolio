'use client'

import { TypeAnimation } from 'react-type-animation'

export default function HeroTypingAnimation() {
  return (
    <TypeAnimation
      sequence={[
        'Fullstack Developer',
        1000,
        'Frontend Developer',
        1000,
        'UI/UX Designer',
        1000
      ]}
      wrapper='span'
      speed={50}
      className='text-lg font-semibold md:text-2xl lg:text-xl'
      repeat={Infinity}
    />
  )
}
