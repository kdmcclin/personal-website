'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					System Architecture & Projects
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'YAML Pipeline Migration',
							description: 'Led the design and implementation of AZDO YAML pipelines to transition multislice deployments off of classic pipelines',
							details: [
								'Proactively reverse-engineered and documented classic slice-by-slice Kubernetes deployment pipelines to establish a strong foundation for modernization efforts',
								'Designed and implemented modern Azure DevOps YAML pipelines to replace the classic pipelines, introducing a modular, maintainable framework for slice-by-slice deployments',
								'Streamlined deployment workflows by reducing complexity, improving reliability, and enabling easier onboarding and future enhancements',
							],
							tech: ['Azure DevOps', 'YAML', 'Kubernetes', 'Helm', 'CI/CD', 'Deployment Automation'],
						},
						{
							title: 'Cilium Config Failures',
							description: 'Led identification, mitigation, and observability improvements for Cilium pod failures in Kubernetes clusters post-Karpenter adoption',
							details: [
								'Proactively identified stability issues with Cilium pods after the migration to Karpenter and raised awareness with the team.',
								'Developed an automated pipeline on a scheduled trigger to apply a temporary remediation by recycling Cilium pods on nodes where containers were stuck.',
								'Created a monitoring dashboard to track metrics on how frequently these events occurred and in which clusters, enabling better visibility and long-term remediation planning.',
							],
							tech: ['Kubernetes', 'Datadog', 'Cilium', 'Karpenter', 'Azure DevOps'],
						},
					].map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
						>
							<h3 className="text-2xl font-bold mb-4">{project.title}</h3>
							<p className="text-gray-400 mb-6">{project.description}</p>
							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
								<ul className="list-disc list-inside space-y-2 text-gray-300">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
									<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
