<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.project.title} | Muhammad Shumail</title>
	<meta name="description" content={data.project.description} />
</svelte:head>

<div class="page">
	<a class="skip-link" href="#main">Skip to content</a>

	<header class="site-header">
		<a class="wordmark" href="/" aria-label="Muhammad Shumail home"
			>Muhammad Shumail<span>.</span></a
		>
		<nav aria-label="Main navigation">
			<a href="/#work">Work</a>
			<a href="/#about">About</a>
			<a href="mailto:muhammad.shumail48@journalism.cuny.edu">Contact</a>
		</nav>
	</header>

	<main id="main" tabindex="-1">
		<a class="back-link" href="/#work">&larr; Back to selected work</a>

		<header class="project-heading">
			<p class="eyebrow">{data.project.publication}</p>
			<h1>{data.project.title}</h1>
			<p class="lede">{data.project.description}</p>
			<div class="heading-links">
				{#if data.project.href}
					<a href={data.project.href} target="_blank" rel="noopener noreferrer">
						{data.project.linkLabel} <span aria-hidden="true">&nearr;</span>
					</a>
				{/if}
				{#if data.project.code}
					<a href={data.project.code} target="_blank" rel="noopener noreferrer">View code</a>
				{/if}
			</div>
		</header>

		<figure class="project-image">
			<img src={data.project.image} alt={data.project.alt} />
		</figure>

		<div class="case-study">
			<section class="case-section" aria-labelledby="overview-heading">
				<div class="section-label">
					<p class="eyebrow">01 / The project</p>
					<h2 id="overview-heading">Overview</h2>
				</div>
				<div class="section-content">
					<p>{data.project.description}</p>
					<dl class="facts">
						<div>
							<dt>Publication</dt>
							<dd>{data.project.publication}</dd>
						</div>
						<div>
							<dt>My role</dt>
							<dd>{data.project.role}</dd>
						</div>
					</dl>
				</div>
			</section>

			<section class="case-section" aria-labelledby="approach-heading">
				<div class="section-label">
					<p class="eyebrow">02 / The process</p>
					<h2 id="approach-heading">My approach</h2>
				</div>
				<div class="section-content">
					{#if data.project.approach}
						<p>{data.project.approach}</p>
					{:else}
						<p class="draft-prompt">
							Add how you approached this project: the reporting, research, data, design, or
							technical decisions that shaped the work.
						</p>
					{/if}
				</div>
			</section>

			<section class="case-section" aria-labelledby="created-heading">
				<div class="section-label">
					<p class="eyebrow">03 / The work</p>
					<h2 id="created-heading">What I created</h2>
				</div>
				<div class="section-content">
					<p>{data.project.created}</p>
					{#if data.project.tools}
						<p><strong>Tools:</strong> {data.project.tools}</p>
					{:else}
						<p class="draft-prompt">
							Add useful details such as tools, methods, collaborators, or a specific part you
							built.
						</p>
					{/if}
				</div>
			</section>

			<section class="case-section" aria-labelledby="result-heading">
				<div class="section-label">
					<p class="eyebrow">04 / The outcome</p>
					<h2 id="result-heading">The result</h2>
				</div>
				<div class="section-content">
					{#if data.project.result}
						<p>{data.project.result}</p>
					{:else}
						<p class="draft-prompt">
							Add what was published, how the work was used, or another outcome you can verify.
						</p>
					{/if}
				</div>
			</section>
		</div>

		<a class="back-link bottom-link" href="/#work">&larr; Back to selected work</a>
	</main>

	<footer class="site-footer">
		<span>Muhammad Shumail / Reporter + Developer</span>
		<div>
			<a href="https://github.com/techman96" target="_blank" rel="noopener noreferrer">GitHub</a>
			<a href="mailto:muhammad.shumail48@journalism.cuny.edu">Email</a>
			<a href="#main">Back to top <span aria-hidden="true">&uarr;</span></a>
		</div>
	</footer>
</div>

<style>
	.page {
		width: min(var(--content-width), calc(100% - 3rem));
		margin-inline: auto;
	}

	.skip-link {
		position: absolute;
		top: 1rem;
		left: 1rem;
		z-index: 1;
		padding: 0.75rem 1rem;
		background: var(--color-paper);
		transform: translateY(-200%);
	}

	.skip-link:focus {
		transform: translateY(0);
	}

	.site-header,
	.site-footer,
	.site-footer div,
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
	}

	.site-header {
		min-height: 6rem;
		border-bottom: 1px solid var(--color-rule);
	}

	.wordmark {
		font-size: 1.05rem;
		font-weight: 700;
		letter-spacing: -0.04em;
		text-decoration: none;
	}

	.wordmark span {
		color: var(--color-accent);
	}

	nav,
	.site-footer {
		font-size: 0.8rem;
	}

	nav a,
	.site-footer a {
		text-decoration: none;
	}

	nav a:hover,
	.site-footer a:hover {
		text-decoration: underline;
		text-underline-offset: 0.25em;
	}

	.skip-link,
	.back-link,
	.heading-links a {
		color: var(--color-accent);
	}

	.back-link {
		display: inline-block;
		margin-top: 2rem;
		font-size: 0.85rem;
		text-decoration: none;
	}

	.back-link:hover,
	.heading-links a:hover {
		text-decoration: underline;
		text-underline-offset: 0.25em;
	}

	.project-heading {
		max-width: 54rem;
		padding-block: clamp(3rem, 7vw, 6rem) 3rem;
	}

	.eyebrow {
		margin: 0;
		color: var(--color-accent);
		font-size: 0.68rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	h1,
	h2,
	p {
		margin-top: 0;
	}

	h1 {
		margin-block: 1rem 1.25rem;
		font-family: var(--font-editorial);
		font-size: clamp(2.75rem, 7vw, 6rem);
		font-weight: 400;
		letter-spacing: -0.06em;
		line-height: 1;
	}

	.lede {
		max-width: 43rem;
		margin-bottom: 1.5rem;
		color: var(--color-muted);
		font-size: 1.1rem;
		line-height: 1.7;
	}

	.heading-links {
		display: flex;
		flex-wrap: wrap;
		gap: 1.25rem;
	}

	.heading-links a {
		font-size: 0.85rem;
		font-weight: 700;
		text-decoration: none;
	}

	.project-image {
		margin: 0;
		border: 1px solid var(--color-rule);
		background: #e8e9e3;
	}

	.project-image img {
		width: 100%;
		max-height: 42rem;
		object-fit: contain;
	}

	.case-study {
		max-width: 58rem;
		margin: 2rem auto 0;
	}

	.case-section {
		display: grid;
		grid-template-columns: minmax(12rem, 0.8fr) minmax(0, 1.2fr);
		gap: clamp(2rem, 6vw, 5rem);
		padding-block: 2.25rem;
		border-bottom: 1px solid var(--color-rule);
	}

	.section-label h2 {
		margin: 0.65rem 0 0;
		font-family: var(--font-editorial);
		font-size: 1.75rem;
		font-weight: 400;
		letter-spacing: -0.04em;
	}

	.section-label .eyebrow {
		font-size: 0.62rem;
	}

	.section-content p {
		margin-bottom: 1rem;
		color: var(--color-muted);
		font-size: 0.95rem;
		line-height: 1.75;
	}

	.section-content p:last-child {
		margin-bottom: 0;
	}

	.facts {
		margin: 1.5rem 0 0;
	}

	.facts div {
		display: grid;
		grid-template-columns: 7rem 1fr;
		gap: 1rem;
		padding-block: 0.75rem;
		border-top: 1px solid var(--color-rule);
		font-size: 0.82rem;
		line-height: 1.6;
	}

	.facts dt {
		font-weight: 700;
	}

	.facts dd {
		margin: 0;
		color: var(--color-muted);
	}

	.section-content .draft-prompt {
		padding: 1rem;
		border-left: 2px solid var(--color-rule);
		background: color-mix(in srgb, var(--color-paper) 70%, white);
		font-size: 0.85rem;
	}

	.bottom-link {
		margin-block: 2rem 4rem;
	}

	.site-footer {
		min-height: 5rem;
		border-top: 1px solid var(--color-rule);
		color: var(--color-muted);
		font-size: 0.75rem;
	}

	@media (max-width: 40rem) {
		.page {
			width: calc(100% - 2rem);
		}

		.site-header {
			min-height: 5rem;
		}

		.site-header,
		.site-footer {
			gap: 1rem;
		}

		nav {
			gap: 0.85rem;
		}

		nav,
		.wordmark {
			font-size: 0.75rem;
		}

		.case-section {
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.site-footer {
			align-items: flex-start;
			flex-direction: column;
			justify-content: center;
			padding-block: 1rem;
		}

		.site-footer div {
			flex-wrap: wrap;
			justify-content: flex-start;
			gap: 1rem;
		}
	}
</style>
