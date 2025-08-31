import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Katherine McClintic - DevOps Engineer',
	description:
		'Welcome to my portfolio! I am a passionate DevOps engineer who loves optimizing systems and teams.',
	keywords: [
		'DevOps Engineer',
		'Software Engineer',
		'System Architecture',
		'Cloud Computing',
		'Microservices',
		'DevOps',
		'Katherine McClintic',
		'Distributed Systems',
		'System Design',
	],
	authors: [{ name: 'Katherine McClintic' }],
	creator: 'Katherine McClintic',
	openGraph: {
		title: 'Katherine McClintic - DevOps Engineer Portfolio',
		description: 'Passionate DevOps engineer who loves optimizing systems and teams. Explore my projects and technical expertise.',
		url: 'https://katherine.tech',
		siteName: 'Katherine McClintic - DevOps Engineer',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Katherine McClintic - DevOps Engineer',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
