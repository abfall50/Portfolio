import React from 'react'
import Hero from './main/Hero'
import PRE_Hero from './main/PRE_Hero'

type Props = {}

function Main({}: Props) {
  return (
	<>


		{ /* PRE-HERO */ }
		<section id='pre-hero' className='h-screen snap-center md:hidden'>
			<PRE_Hero />
		</section>
		{ /* HERO */ }

		<section id='hero' className='h-screen snap-center'>
			<Hero />
		</section>

		{ /* ABOUT */ }
		{ /* SKILLS */ }
		{ /* PROJECTS */ }
		{ /* CONTACT */ }
		<section id='' className='h-screen snap-center'>YO</section>
		<section id='' className='h-screen snap-center'>YO</section>
		<section id='' className='h-screen snap-center'>YO</section>
		<section id='' className='h-screen snap-center'>YO</section>
	</>
  )
}

export default Main