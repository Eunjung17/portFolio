import Image from 'next/image';
import Link from 'next/link';

const projects = [
	{
		id: 1,
		title: 'E-Commerce Platform',
		site: 'https://01ecommercefrontend.netlify.app/',
		gitHub: 'https://github.com/Eunjung17/01_eCommerce_Site',
		description: 'A modern e-commerce platform built with React, Redux, Prisma ORM',
		image: '/code.jpg',
	},
	{
		id: 2,
		title: 'Automation using Git Actions',
		site: 'https://docs.google.com/presentation/d/1sTsftBeWyXgg1jpMOhusBVo0RaA15ZC_Wui34fUefQY/edit?usp=sharing',
		gitHub: 'https://github.com/Eunjung17/gitActionProject',
		description: 'Automation for folder creation, markdown generation, and commit message rewriting in a LeetCode problem repository',
		image: '/laptop.jpg',
	},
	{
		id: 3,
		title: 'Currently studying Data Structures and Algorithms',
		site: 'https://docs.google.com/presentation/d/1cA7s0_ffhF_kt1Eg2CcZMxWlJd3EbZDSoJ97Rx2zOPM/edit?usp=sharing',
		gitHub: 'https://github.com/Eunjung17/LeetCode-Solutions',
		description: 'A collaborative team task using LeetCode solutions for data structures and algorithms.',
		image: '/code.jpg',
	},
];

export default function ProjectsSection() {
	return (
		<section className="py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Featured Projects</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
					{projects.map((project) => (
						<div key={project.id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
							<div className="aspect-video bg-gray-700 relative">
								<Image src={project.image} alt={project.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
							</div>
							<div className="p-4 sm:p-6">
								<h3 className="text-base sm:text-lg font-semibold text-white mb-2">{project.title}</h3>
								<p className="text-sm sm:text-base text-gray-300 mb-4">{project.description}</p>
								<div className="flex gap-2">
									<Link href={project.site} target="_blank" className="text-sm px-4 py-2 bg-white/60 hover:bg-white/80 rounded-full transition-colors">
										View Project
									</Link>
									<Link href={project.gitHub} target="_blank" className="text-sm px-4 py-2 bg-white/60 hover:bg-white/80 rounded-full transition-colors">
										GitHub
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>

	);
}
