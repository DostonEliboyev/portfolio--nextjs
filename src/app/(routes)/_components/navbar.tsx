'use client'

import { navLinks } from '@/constants'
import Link from 'next/link'

function Navbar() {
	return (
		<div className='h-[10vh] backdrop-blur-sm border-b fixed z-40 inset-0 bg-background'>
			<div className='container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between'>
				{/* Logo */}
				<Link href={'/'}>
					<h1 className='text-4xl font-creteRound'>Sammi</h1>
				</Link>
				{/* Nav links */}
				<div className='gap-2 hidden md:flex'>
					{navLinks.map(nav => (
						<Link key={nav.route} href={nav.route}>
							{nav.name}
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default Navbar
