import { motion, useInView, useScroll, useTransform } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import './portfolio.css'

const items = [
	{
		id: 1,
		img: '/pro.png',
		title: 'Pro Lighting Media Landing Page',
		desc: 'This project is a responsive landing page built using Next.js. It is designed to provide an optimal viewing experience across devices, including phones, tablets, and desktops.',
		link: 'https://pro-lighting-media2.vercel.app/',
	},
	{
		id: 2,
		img: '/magazine.png',
		title: 'Online Store ',
		desc: 'This project is a single-page online store created using basic HTML and CSS. The project is designed to provide a simple and user-friendly interface for users.',
		link: 'https://magazineuzb.netlify.app/',
	},
	{
		id: 3,
		img: '/sublime.png',
		title: 'Online Store Sublime',
		desc: 'This project was developed while learning web development. It served as a practical exercise to apply basic HTML and CSS skills.',
		link: 'https://siblimeuz.netlify.app/',
	},
	{
		id: 4,
		img: '/guzallika.png',
		title: "Oddiylikdan Go'zallika",
		desc: 'This website is a fully responsive and modern platform designed for a beauty salon, showcasing its services and offerings. Built using HTML, CSS, and JavaScript, the site is optimized for seamless performance across all devices, including mobile phones, tablets, and desktops.',
		link: 'https://saodatgozaliksalon.netlify.app/',
	},
	{
		id: 5,
		img: '/animat.png',
		title: 'Animated Portfolio Website',
		desc: '',
		link: 'https://dostoneliboyev.uz/',
	},
]

const imgVariants = {
	initial: {
		x: -500,
		y: 500,
		opacity: 0,
	},
	animate: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
		},
	},
}

const textVariants = {
	initial: {
		x: 500,
		y: 500,
		opacity: 0,
	},
	animate: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
			staggerChildren: 0.05,
		},
	},
}

const ListItem = ({ item }) => {
	const ref = useRef()

	const isInView = useInView(ref, { margin: '-100px' })

	return (
		<div className='pItem' ref={ref}>
			<motion.div
				variants={imgVariants}
				animate={isInView ? 'animate' : 'initial'}
				className='pImg'
			>
				<img src={item.img} alt='' />
			</motion.div>
			<motion.div
				variants={textVariants}
				animate={isInView ? 'animate' : 'initial'}
				className='pText'
			>
				<motion.h1 variants={textVariants}>{item.title}</motion.h1>
				<motion.p variants={textVariants}>{item.desc}</motion.p>
				<motion.a variants={textVariants} href={item.link} target='_blank'>
					<button>View Project</button>
				</motion.a>
			</motion.div>
		</div>
	)
}

const Portfolio = () => {
	const [containerDistance, setContainerDistance] = useState(0)
	const ref = useRef(null)
	console.log('containerDistance', containerDistance)
	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect()
			setContainerDistance(rect.left)
		}
	}, [])

	// FIX: Re-calculate when screen size changes
	useEffect(() => {
		const calculateDistance = () => {
			if (ref.current) {
				const rect = ref.current.getBoundingClientRect()
				setContainerDistance(rect.left)
			}
		}

		calculateDistance()

		window.addEventListener('resize', calculateDistance)

		return () => {
			window.removeEventListener('resize', calculateDistance)
		}
	}, [])

	const { scrollYProgress } = useScroll({ target: ref })

	const xTranslate = useTransform(
		scrollYProgress,
		[0, 1],
		[0, -window.innerWidth * items.length]
	)

	return (
		<div className='portfolio' ref={ref}>
			<motion.div className='pList' style={{ x: xTranslate }}>
				<div
					className='empty'
					style={{
						width: window.innerWidth - containerDistance,
						// backgroundColor: 'pink',
					}}
				/>
				{items.map(item => (
					<ListItem item={item} key={item.id} />
				))}
			</motion.div>
			<section />
			<section />
			<section />
			<section />
			<section />
			<div className='pProgress'>
				<svg width='100%' height='100%' viewBox='0 0 160 160'>
					<circle
						cx='80'
						cy='80'
						r='70'
						fill='none'
						stroke='#ddd'
						strokeWidth={20}
					/>
					<motion.circle
						cx='80'
						cy='80'
						r='70'
						fill='none'
						stroke='#dd4c62'
						strokeWidth={20}
						style={{ pathLength: scrollYProgress }}
						transform='rotate(-90 80 80)'
					/>
				</svg>
			</div>
		</div>
	)
}

export default Portfolio
