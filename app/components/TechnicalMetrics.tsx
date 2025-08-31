'use client';

import { motion } from 'framer-motion';

export default function TechnicalMetrics() {
	return (
		<section className="py-20 px-4 bg-gray-900/50">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Impact & Achievements
				</motion.h2>

				<div className="grid grid-cols-1 gap-12">
          {/* Development & Leadership */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Development & Leadership</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Team Impact</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Mentored 3 less senior engineers</li>
									<li>• Created wiki tagging system for the entire DevOps organization</li>
									<li>• Led 3 major system migrations</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Code Quality</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Led adoption of TypeScript across backend</li>
									<li>• Established coding standards</li>
									<li>• Reduced technical debt by 40%</li>
								</ul>
							</motion.div>
						</div>
					</div>

          {/* Infrastructure & DevOps */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Infrastructure & DevOps</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Cloud Infrastructure</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Achieved a 95% on CKA (2024)</li>
									<li>• Zero-downtime deployments</li>
									<li>• Implemented Karpenter on several clusters for cost savings vs CastAI</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">CI/CD</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Migrated 30+ AZDO pipelines from classic to YAML</li>
									<li>• Mentored developers to feel empowered to create their own YAML pipelines</li>
									<li>• Fixed faulty Cypress and k6 pipelines before developers noticed</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* System Performance */}
					{/* <div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">System Performance</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">API Gateway</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• P95 latency reduced from 250ms to 80ms</li>
									<li>• 99.99% availability achieved</li>
									<li>• Handles 2M requests/day</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Database Optimization</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Query response time improved by 70%</li>
									<li>• Implemented efficient indexing strategy</li>
									<li>• Reduced DB load by 45%</li>
								</ul>
							</motion.div>
						</div>
					</div> */}
				</div>
			</div>
		</section>
	);
}
