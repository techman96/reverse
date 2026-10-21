<svelte:head>
	<title>Visual journalism | Graphics &amp; stories</title>
	<meta
		name="description"
		content="A growing portfolio of visual journalism, news-graphic recreations, and experiments in telling stories with data."
	/>
</svelte:head>

<div class="page">
	<a class="skip-link" href="#main">Skip to content</a>

	<header class="site-header">
		<a class="wordmark" href="/" aria-label="Visual journalism home"
			>Visual journalism<span>.</span></a
		>
		<nav aria-label="Main navigation">
			<a href="#work">Work</a>
			<a href="#about">About</a>
		</nav>
	</header>

	<main id="main" tabindex="-1">
		<section class="intro" aria-labelledby="intro-heading">
			<p class="eyebrow">A portfolio in progress</p>
			<h1 id="intro-heading">Making sense of the news,<br /> one graphic at a time.</h1>
			<p class="intro-description">
				Exploring data, design, and code through news-graphic recreations and original visual
				stories.
			</p>
		</section>

		<section class="work" id="work" aria-labelledby="work-heading">
			<div class="section-heading">
				<h2 id="work-heading">Selected work</h2>
				<span class="section-note">Graphics &amp; visual stories</span>
			</div>

			<article>
				<a class="project-card" href="/senate-seats" aria-labelledby="senate-title senate-action">
					<div class="project-preview" aria-hidden="true">
						<span class="preview-label">Exploring representation</span>
						<div class="seat-pattern">
							{#each Array.from({ length: 40 }, (_, index) => index) as seat (seat)}
								<span class:alternate={seat % 4 < 2}></span>
							{/each}
						</div>
						<span class="preview-caption">Concept illustration / not election data</span>
					</div>
					<div class="project-body">
						<div class="project-meta">
							<span>Recreation study</span>
							<span class="status">In progress</span>
						</div>
						<h3 id="senate-title">Senate seats</h3>
						<p>
							A study in recreating a news graphic about Senate seats, exploring how visual design
							can explain political representation.
						</p>
						<p class="project-disclaimer">The graphic and source notes are still in development.</p>
						<span class="project-action" id="senate-action">
							View project <span aria-hidden="true">&rarr;</span>
						</span>
					</div>
				</a>
			</article>
		</section>

		<section class="about" id="about" aria-labelledby="about-heading">
			<div>
				<p class="eyebrow">Behind the work</p>
				<h2 id="about-heading">Learning by looking closer.</h2>
			</div>
			<div class="about-copy">
				<p>
					This portfolio documents an exploration of visual journalism: taking apart how news
					graphics work, rebuilding them, and developing original graphics and stories.
				</p>
				<p>
					Recreation studies are independent learning projects, not commissions or work published by
					the original news organizations. Original work will be labeled separately.
				</p>
			</div>
		</section>
	</main>

	<footer class="site-footer">
		<span>Visual journalism / A working collection</span>
		<a href="#main">Back to top <span aria-hidden="true">&uarr;</span></a>
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
	.section-heading {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	.site-header {
		min-height: 6rem;
		border-bottom: 1px solid var(--color-rule);
	}

	.wordmark {
		font-size: 1.15rem;
		font-weight: 700;
		letter-spacing: -0.04em;
		text-decoration: none;
	}

	.wordmark span {
		color: var(--color-accent);
	}

	nav {
		display: flex;
		gap: 1.75rem;
		font-size: 0.875rem;
	}

	nav a {
		text-decoration: none;
	}

	nav a:hover,
	.site-footer a:hover {
		text-decoration: underline;
	}

	.intro {
		padding-block: clamp(3.5rem, 7vw, 6rem);
	}

	.eyebrow,
	.project-meta,
	.preview-label {
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.eyebrow {
		margin: 0 0 1.25rem;
		color: var(--color-accent);
	}

	h1 {
		margin: 0;
		font-family: var(--font-editorial);
		font-size: clamp(2.5rem, 5.5vw, 4.75rem);
		font-weight: 400;
		letter-spacing: -0.055em;
		line-height: 1.08;
	}

	.intro-description {
		max-width: 36rem;
		margin: 1.75rem 0 0;
		color: var(--color-muted);
		font-size: 1.1rem;
		line-height: 1.7;
	}

	.work,
	.about {
		scroll-margin-top: 2rem;
	}

	.section-heading {
		padding-block: 1rem;
		border-top: 2px solid var(--color-ink);
	}

	.section-heading h2 {
		margin: 0;
		font-size: 0.875rem;
	}

	.section-note {
		color: var(--color-muted);
		font-size: 0.75rem;
	}

	.project-card {
		display: grid;
		grid-template-columns: 1.15fr 1fr;
		border: 1px solid var(--color-rule);
		text-decoration: none;
	}

	.project-preview {
		display: flex;
		min-width: 0;
		min-height: 22rem;
		flex-direction: column;
		justify-content: space-between;
		gap: 2rem;
		padding: clamp(1.5rem, 4vw, 3rem);
		color: #34533f;
		background: #e8ecdf;
	}

	.seat-pattern {
		display: grid;
		width: 100%;
		max-width: 21rem;
		grid-template-columns: repeat(10, minmax(0, 1fr));
		gap: clamp(0.35rem, 1vw, 0.75rem);
		align-self: center;
		transform: rotate(-8deg);
	}

	.seat-pattern span {
		aspect-ratio: 1;
		border-radius: 50%;
		background: #ee4800;
	}

	.seat-pattern .alternate {
		background: #0555b6;
	}

	.preview-caption {
		font-size: 0.7rem;
		line-height: 1.5;
	}

	.project-body {
		display: flex;
		min-width: 0;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding: clamp(1.5rem, 4vw, 3rem);
	}

	.project-meta {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.75rem;
		color: var(--color-accent);
		letter-spacing: 0.07em;
	}

	.status {
		padding: 0.35rem 0.5rem;
		border: 1px solid var(--color-rule);
		color: var(--color-muted);
		font-size: 0.65rem;
	}

	h3 {
		margin: 1.5rem 0 0;
		font-family: var(--font-editorial);
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 400;
		letter-spacing: -0.04em;
	}

	.project-body p,
	.about-copy p {
		color: var(--color-muted);
		font-size: 0.95rem;
		line-height: 1.75;
	}

	.project-body .project-disclaimer {
		margin-top: 0;
		font-size: 0.8rem;
	}

	.project-action {
		display: flex;
		align-items: center;
		gap: 1.25rem;
		margin-top: 1rem;
		color: var(--color-accent);
		font-size: 0.875rem;
		font-weight: 700;
	}

	.project-card:hover .project-action,
	.project-card:focus-visible .project-action {
		text-decoration: underline;
		text-underline-offset: 0.25em;
	}

	.about {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		margin-top: 5rem;
		padding-block: 3rem;
		border-top: 1px solid var(--color-rule);
	}

	.about h2 {
		max-width: 20rem;
		margin: 0;
		font-family: var(--font-editorial);
		font-size: 2.25rem;
		font-weight: 400;
		letter-spacing: -0.04em;
	}

	.about-copy p:first-child {
		margin-top: 0;
	}

	.site-footer {
		padding-block: 1.5rem;
		border-top: 1px solid var(--color-rule);
		color: var(--color-muted);
		font-size: 0.75rem;
		line-height: 1.6;
	}

	.site-footer a {
		text-decoration: none;
	}

	@media (max-width: 44rem) {
		.project-card,
		.about {
			grid-template-columns: 1fr;
		}

		.project-preview {
			min-height: 19rem;
		}

		.about {
			gap: 1.5rem;
			margin-top: 3rem;
		}
	}

	@media (max-width: 26rem) {
		.page {
			width: calc(100% - 2rem);
		}

		nav {
			gap: 1rem;
		}

		.section-heading,
		.site-footer {
			align-items: flex-start;
			flex-direction: column;
			gap: 0.5rem;
		}
	}
</style>
