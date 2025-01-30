import { motion } from 'motion/react'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

function Speech() {
	return (
		<motion.div
			className='bubbleContainer'
			animate={{ opacity: [0, 1] }}
			transition={{ duration: 1 }}
		>
			<div className='bubble'>
				<TypeAnimation
					sequence={[
						'I build complex and scalable UIs with React.',
						1000,
						'I create dynamic animations and 3D experiences with Three.js.',
						1000,
						'I develop interactive and high-performance web applications with JavaScript.',
						1000,
						'I architect efficient and modern front-end solutions.',
					]}
					wrapper='span'
					speed={40}
					deletionSpeed={60}
					// omitDeletionAnimation
					repeat={Infinity}
				/>
			</div>
			<img src='/hero3.png' alt='' />
		</motion.div>
	)
}

export default Speech
