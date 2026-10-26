import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { projects } from '#lib/projects.js';

// Without parameter destructuring: (event) => { const params = event.params; ... }
export const load: PageLoad = ({ params }) => {
	// Expanded callback: (item) => { return item.slug === params.projectName; }
	const project = projects.find((item) => item.slug === params.projectName);

	if (!project) {
		error(404, 'Project not found');
	}

	// Explicit property: return { project: project };
	return { project };
};
