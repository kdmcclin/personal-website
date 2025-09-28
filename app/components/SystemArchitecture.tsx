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
							description: 'Led the migration of 30+ Azure DevOps pipelines from classic to YAML, modernizing CI/CD workflows and laying the foundation for slice-by-slice deployments',
							details: [
								'Proactively reverse-engineered and documented legacy slice-by-slice Kubernetes deployment pipelines to guide modernization',
								'Designed and implemented modular YAML templates to standardize deployments across services',
								'Enabled developer self-service by mentoring engineers to create and maintain their own pipelines',
							],
							tech: ['Azure DevOps', 'YAML', 'Kubernetes', 'Helm', 'CI/CD', 'Deployment Automation'],
						},
            {
							title: 'Slice by Slice Deployment Pipeline',
							description: 'Designed and implemented a new pipeline strategy for slice-by-slice Kubernetes deployments, from prototype to stakeholder feedback and multi-environment testing',
							details: [
								'Built the first working tmeplate and validated it in lower environments',
                'Gathered and incorporated feedback from developers and stakeholders to refine design',
                'Documented rollout requirements for adoption beyond the test-case application'
							],
							tech: ['Azure DevOps', 'YAML', 'Kubernetes', 'Deployment Strategy', 'CI/CD'],
						},
            {
							title: 'Toil Reduction & Automation',
							description: 'Proactively identified and automated repetitive operational tasks to reduce team burden, cut down on manual effort, and improve reliability across clusters and pipelines',
							details: [
                'Created scripts to manage complex PagerDuty overrides spanning multiple clusters',
                'Automated auditing and cleanup of unused pipelines, reducing clutter and developer confusion',
                'Built checks for cluster health issues (e.g., missing podAntiAffinities, stuck pods) and automated remediation for known problems',
                'Developed tooling to scale down deprecated models and services, saving resources and reducing noise'
							],
							tech: ['Automation', 'Kubernetes', 'Azure DevOps', 'PagerDuty', 'Operational Efficiency'],
            },
						{
							title: 'Virtual Service Rollout',
							description: 'Drove end-to-end delivery of a critical virtual service change, coordinating across Dev, QA, and DevOps teams to ensure a safe rollout and rollback strategy',
							details: [
								'Planned and executed testing through all pre-prod environments prior to production rollout',
                'Scripted automation for manual rollout and rollback to reduce operational risk',
                'Coordinated timelines and communication across multiple stakeholder groups'
							],
							tech: ['Kubernetes', 'Networking', 'Rollout Strategy', 'Stakeholder Management', 'Reliability'],
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
