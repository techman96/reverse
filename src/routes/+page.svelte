<script lang="ts">
	import { featuredProjects, moreProjects } from '#lib/projects.js';
</script>

<svelte:head>
	<title>Muhammad Shumail | Reporter + Developer</title>
	<meta
		name="description"
		content="Muhammad Shumail reports and builds data-driven stories, graphics, and interactive projects."
	/>
</svelte:head>

<div class="page">
	<a class="skip-link" href="#main">Skip to content</a>

	<header class="site-header">
		<a class="wordmark" href="/" aria-label="Muhammad Shumail home"
			>Muhammad Shumail<span>.</span></a
		>
		<nav aria-label="Main navigation">
			<a href="#work">Work</a>
			<a href="#about">About</a>
			<a href="mailto:muhammad.shumail48@journalism.cuny.edu">Contact</a>
		</nav>
	</header>

	<main id="main" tabindex="-1">
		<section class="intro" aria-labelledby="intro-heading">
			<p class="eyebrow">Reporter + Developer</p>
			<h1 id="intro-heading">I report and build<br />data-driven stories.</h1>
			<div class="intro-bottom">
				<p>
					I combine reporting judgment and technical execution to make complex topics clear through
					writing, analysis, graphics, and interactive storytelling.
				</p>
				<a class="text-link" href="mailto:muhammad.shumail48@journalism.cuny.edu">
					Get in touch <span aria-hidden="true">&rarr;</span>
				</a>
			</div>
		</section>

		<section class="work" id="work" aria-labelledby="work-heading">
			<div class="section-heading">
				<div>
					<p class="eyebrow">Selected work</p>
					<h2 id="work-heading">Stories, graphics &amp; interactives</h2>
				</div>
				<span class="section-note">Selected newsroom work</span>
			</div>

			<div class="project-grid featured-grid">
				{#each featuredProjects as project, index (project.slug)}
					<article class="project-card" class:wide={index === 0}>
						<a class="image-link" href={`/work/${project.slug}`} aria-label={project.title}>
							<img src={project.image} alt={project.alt} loading={index > 1 ? 'lazy' : 'eager'} />
						</a>
						<div class="project-copy">
							<p class="project-meta">{project.publication}</p>
							<h3>
								<a class="project-title-link" href={`/work/${project.slug}`}>{project.title}</a>
							</h3>
							<p class="project-description">{project.description}</p>
							<p class="project-role"><strong>My role:</strong> {project.role}</p>
							<div class="project-links">
								<a href={`/work/${project.slug}`}
									>Project details <span aria-hidden="true">&rarr;</span></a
								>
								{#if project.href}
									<a href={project.href} target="_blank" rel="noopener noreferrer">
										{project.linkLabel} <span aria-hidden="true">&rarr;</span>
									</a>
								{/if}
								{#if project.code}
									<a href={project.code} target="_blank" rel="noopener noreferrer">View code</a>
								{/if}
							</div>
						</div>
					</article>
				{/each}
			</div>
		</section>

		<section class="more-work" aria-labelledby="more-work-heading">
			<div class="section-heading">
				<div>
					<p class="eyebrow">More work</p>
					<h2 id="more-work-heading">Other projects</h2>
				</div>
				<span class="section-note">Newsroom tools, service journalism &amp; independent work</span>
			</div>

			<div class="project-grid secondary-grid">
				{#each moreProjects as project (project.slug)}
					<article class="project-card">
						<a class="image-link" href={`/work/${project.slug}`} aria-label={project.title}>
							<img src={project.image} alt={project.alt} loading="lazy" />
						</a>
						<div class="project-copy">
							<p class="project-meta">{project.publication}</p>
							{#if project.highlight}
								<p class="project-role"><strong>{project.highlight}</strong></p>
							{/if}
							<h3>
								<a class="project-title-link" href={`/work/${project.slug}`}>{project.title}</a>
							</h3>
							<p class="project-description">{project.description}</p>
							<p class="project-role"><strong>My role:</strong> {project.role}</p>
							<div class="project-links">
								<a href={`/work/${project.slug}`}
									>Project details <span aria-hidden="true">&rarr;</span></a
								>
								{#if project.href}
									<a href={project.href} target="_blank" rel="noopener noreferrer">
										{project.linkLabel} <span aria-hidden="true">&rarr;</span>
									</a>
								{/if}
								{#if project.code}
									<a href={project.code} target="_blank" rel="noopener noreferrer">View code</a>
								{/if}
							</div>
						</div>
					</article>
				{/each}
			</div>
		</section>

		<section class="recreation" aria-labelledby="recreation-heading">
			<div class="recreation-copy">
				<p class="eyebrow">Recreations &amp; experiments</p>
				<h2 id="recreation-heading">Learning by looking closer.</h2>
				<p>
					Independent studies in how visual journalism works—separate from commissioned or published
					newsroom work.
				</p>
			</div>
			<a class="recreation-card" href="/senate-seats">
				<div class="seat-art" aria-hidden="true">
					{#each Array.from({ length: 40 }, (_, index) => index) as seat (seat)}
						<span class:alternate={seat % 4 < 2}></span>
					{/each}
				</div>
				<div class="recreation-info">
					<p class="project-meta">Recreation study / Svelte</p>
					<h3>Senate seats</h3>
					<span class="project-links">View study <span aria-hidden="true">&rarr;</span></span>
				</div>
			</a>
		</section>

		<section class="about" id="about" aria-labelledby="about-heading">
			<div>
				<p class="eyebrow">About</p>
				<h2 id="about-heading" hidden>Reporting instincts.<br />Builder’s mindset.</h2>
			</div>
			<div class="about-copy">
				<p>
					Muhammad Shumail is a visual data journalist for CoStar News and Homes.com based in
					Arlington, Virginia. His work includes building charts, maps and interactive graphics that
					turn CoStar Group's commercial and residential real estate data into visual stories.
				</p>
				<p>
					He previously interned on The Wall Street Journal graphics desk, covering business and
					markets, and holds a master's degree from the Craig Newmark Graduate School of Journalism
					at CUNY.
				</p>
				<a class="text-link" href="mailto:muhammad.shumail48@journalism.cuny.edu">
					Contact me <span aria-hidden="true">&rarr;</span>
				</a>
			</div>
		</section>
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

	.intro {
		padding-block: clamp(4rem, 9vw, 8rem);
		border-bottom: 1px solid var(--color-rule);
	}

	.eyebrow,
	.project-meta {
		margin: 0;
		color: var(--color-accent);
		font-size: 0.68rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	h1,
	h2,
	h3,
	p {
		margin-top: 0;
	}

	h1 {
		margin-block: 1.25rem 2rem;
		font-family: var(--font-editorial);
		font-size: clamp(3rem, 8.5vw, 7.25rem);
		font-weight: 400;
		letter-spacing: -0.065em;
		line-height: 0.98;
	}

	.intro-bottom {
		display: flex;
		max-width: 56rem;
		align-items: end;
		justify-content: space-between;
		gap: 2rem;
	}

	.intro-bottom p,
	.about-copy p,
	.recreation-copy > p:last-child {
		max-width: 39rem;
		margin-bottom: 0;
		color: var(--color-muted);
		font-size: 1rem;
		line-height: 1.75;
	}

	.text-link,
	.project-links a {
		color: var(--color-accent);
		font-size: 0.85rem;
		font-weight: 700;
		text-decoration: none;
	}

	.text-link {
		flex: 0 0 auto;
	}

	.text-link:hover,
	.project-links a:hover {
		text-decoration: underline;
		text-underline-offset: 0.25em;
	}

	.work,
	.more-work,
	.recreation,
	.about {
		scroll-margin-top: 2rem;
		padding-top: clamp(3rem, 6vw, 5rem);
	}

	.section-heading {
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: 1.5rem;
		padding-bottom: 1rem;
		border-bottom: 2px solid var(--color-ink);
	}

	.section-heading h2,
	.recreation-copy h2,
	.about h2 {
		margin: 0.5rem 0 0;
		font-family: var(--font-editorial);
		font-size: clamp(1.8rem, 3vw, 2.6rem);
		font-weight: 400;
		letter-spacing: -0.04em;
	}

	.section-note {
		padding-bottom: 0.2rem;
		color: var(--color-muted);
		font-size: 0.75rem;
		text-align: right;
	}

	.project-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1.25rem;
	}

	.project-card {
		display: flex;
		min-width: 0;
		flex-direction: column;
		border: 1px solid var(--color-rule);
		background: var(--color-paper);
	}

	.featured-grid .project-card.wide {
		grid-column: span 2;
	}

	.image-link {
		display: block;
		overflow: hidden;
		aspect-ratio: 16 / 10;
		margin: 0;
		background: #e8e9e3;
	}

	.image-link img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 250ms ease;
	}

	a.image-link:hover img {
		transform: scale(1.025);
	}

	.project-copy {
		display: flex;
		flex: 1;
		flex-direction: column;
		align-items: flex-start;
		padding: 1.25rem;
	}

	.project-meta {
		font-size: 0.62rem;
		letter-spacing: 0.09em;
	}

	.project-copy h3 {
		margin: 0.7rem 0 0.5rem;
		font-family: var(--font-editorial);
		font-size: clamp(1.3rem, 2vw, 1.75rem);
		font-weight: 400;
		letter-spacing: -0.035em;
		line-height: 1.16;
	}

	.project-title-link {
		text-decoration: none;
	}

	.project-title-link:hover {
		text-decoration: underline;
		text-underline-offset: 0.12em;
	}

	.project-description,
	.project-role {
		margin-bottom: 0.75rem;
		color: var(--color-muted);
		font-size: 0.84rem;
		line-height: 1.65;
	}

	.project-role {
		font-size: 0.78rem;
	}

	.project-role strong {
		color: var(--color-ink);
	}

	.project-links {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-top: auto;
		padding-top: 0.5rem;
	}

	.project-links a {
		font-size: 0.78rem;
	}

	.recreation {
		display: grid;
		grid-template-columns: 0.8fr 1.2fr;
		gap: clamp(2rem, 6vw, 5rem);
		align-items: center;
		margin-top: clamp(2rem, 5vw, 4rem);
		padding-block: clamp(2rem, 5vw, 4rem);
		border-block: 1px solid var(--color-rule);
	}

	.recreation-copy h2 {
		margin-bottom: 1rem;
	}

	.recreation-card {
		display: grid;
		min-width: 0;
		grid-template-columns: 1fr 1fr;
		border: 1px solid var(--color-rule);
		text-decoration: none;
	}

	.seat-art {
		display: grid;
		min-height: 12rem;
		grid-template-columns: repeat(8, minmax(0, 1fr));
		align-content: center;
		gap: 0.55rem;
		padding: 1.5rem;
		background: #e8ecdf;
	}

	.seat-art span {
		aspect-ratio: 1;
		border-radius: 50%;
		background: #ee4800;
	}

	.seat-art .alternate {
		background: #0555b6;
	}

	.recreation-info {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding: 1.5rem;
	}

	.recreation-info h3 {
		margin: 0.75rem 0 1.25rem;
		font-family: var(--font-editorial);
		font-size: 1.75rem;
		font-weight: 400;
		letter-spacing: -0.04em;
	}

	.recreation-info .project-links {
		color: var(--color-accent);
		font-size: 0.8rem;
		font-weight: 700;
	}

	.recreation-card:hover .project-links {
		text-decoration: underline;
		text-underline-offset: 0.25em;
	}

	.about {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		padding-bottom: clamp(3rem, 6vw, 5rem);
	}

	.about h2 {
		font-size: clamp(2rem, 4vw, 3rem);
	}

	.about-copy p {
		margin-bottom: 1rem;
	}

	.about-copy .text-link {
		display: inline-block;
		margin-top: 0.75rem;
	}

	.site-footer {
		min-height: 5rem;
		border-top: 1px solid var(--color-rule);
		color: var(--color-muted);
		font-size: 0.75rem;
	}

	@media (max-width: 48rem) {
		.project-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.recreation {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}
	}

	@media (max-width: 36rem) {
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

		.intro-bottom,
		.section-heading {
			align-items: flex-start;
			flex-direction: column;
		}

		.intro-bottom {
			gap: 1rem;
		}

		.section-note {
			text-align: left;
		}

		.project-grid,
		.featured-grid .project-card.wide,
		.about {
			grid-template-columns: 1fr;
		}

		.featured-grid .project-card.wide {
			grid-column: auto;
		}

		.recreation-card {
			grid-template-columns: 1fr;
		}

		.seat-art {
			min-height: 10rem;
		}

		.about {
			gap: 1.25rem;
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

	@media (prefers-reduced-motion: reduce) {
		.image-link img {
			transition: none;
		}
	}
</style>
