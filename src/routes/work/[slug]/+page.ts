import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { projects } from '#lib/projects.js';

export const load: PageLoad = ({ params }) => {
	const project = projects.find((item) => item.slug === params.slug);

	if (!project) {
		error(404, 'Project not found');
	}

	return { project };
};
