import { motion, useInView } from 'motion/react'
import { useRef, useState } from 'react'
import ComputerModelContainer from './computer/ComputerModelContainer'
import ConsoleModelContainer from './console/ConsoleModelContainer'
import MugModelContainer from './mug/MugModelContainer'
import './services.css'
const textVariants = {
	initial: {
		x: -100,
		y: -100,
		opacity: 0,
	},
	animate: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
}

const listVariants = {
	initial: {
		x: -100,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.5,
		},
	},
}

const services = [
	{
		id: 1,
		img: '/service1.png',
		title: 'Web Development',
		description: 'Crafting modern, interactive, and scalable web experiences.',
		counter: 35,
	},
	{
		id: 2,
		img: '/service2.png',
		title: '3D and Animations ',
		description:
			'Designing immersive, dynamic, and animated 3D web experiences.',
		counter: 23,
	},
	{
		id: 3,
		img: '/service3.png',
		title: 'Dashboard',
		description:
			'Building complex dashboards with modern UI and architecture solutions.',
		counter: 46,
	},
]

const Services = () => {
	const [currentServiceId, setCurrentServiceId] = useState(1)
	const ref = useRef()
	const isInView = useInView(ref, { margin: '-200px' })
	console.log(currentServiceId)
	return (
		<div className='services' ref={ref}>
			<div className='sSection left'>
				<motion.h1
					variants={textVariants}
					animate={isInView ? 'animate' : 'initial'}
					className='sTitle'
				>
					How do I help?
				</motion.h1>
				<motion.div
					variants={listVariants}
					animate={isInView ? 'animate' : 'initial'}
					className='serviceList'
				>
					{services.map(service => (
						<motion.div
							variants={listVariants}
							className='service'
							key={service.id}
							onClick={() => setCurrentServiceId(service.id)}
						>
							<div className='serviceIcon'>
								<img src={service.img} alt='' />
							</div>
							<div className='serviceInfo'>
								<h2>{service.title}</h2>
								<h3>{service.description}</h3>
							</div>
						</motion.div>
					))}
				</motion.div>
				{/* <div className='counterList'>
					<Counter from={0} to={104} text='Projects Completed' />
					<Counter from={0} to={72} text='Happy Clients' />
				</div> */}
			</div>
			<div className='sSection right'>
				{/* <ComputerModelContainer /> */}

				{currentServiceId === 1 ? (
					<ComputerModelContainer />
				) : currentServiceId === 2 ? (
					<MugModelContainer />
				) : (
					<ConsoleModelContainer />
				)}
			</div>
		</div>
	)
}

export default Services
