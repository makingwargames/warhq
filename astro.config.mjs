// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://makingwargames.github.io',
	base: '/warhq',
	integrations: [
		starlight({
			title: 'WarHQ',
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Quick Start', slug: 'quick-start' },
						{ label: 'Useful Links', slug: 'useful-links' },
					],
				},
				{
					label: 'Tutorials',
					items: [
						{ label: 'WarMatch', slug: 'tutorials/warmatch' },
						{ label: 'PBEM Box', slug: 'tutorials/pbem-box' },
					],
				},
				{
					label: 'Support',
					items: [
						{ label: 'Troubleshooting', slug: 'troubleshooting' },
						{ label: 'Release Notes', slug: 'release-notes' },
					],
				},
				{
					label: 'Legal',
					items: [
						{ label: 'Privacy Policy', slug: 'privacy' },
						{ label: 'Terms of Service', slug: 'terms' },
					],
				},
			],
		}),
	],
});
