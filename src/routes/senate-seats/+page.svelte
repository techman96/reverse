<script>
	import { replaceState } from '$app/navigation';
	import { Tween } from 'svelte/motion';
	import { scale } from 'svelte/transition';

	const races = [
		{
			id: 1,
			state: 'Alaska',
			Abbr: 'Alaska',
			incumbentParty: 'Republican',
			positions: {
				opening: { x: 300, y: 342 },
				incumbentParty: { x: 432, y: 140 }
			}
		},
		{
			id: 2,
			state: 'North Carolina',
			Abbr: 'N.C.',
			incumbentParty: 'Republican',
			positions: {
				opening: { x: 264, y: 279 },
				incumbentParty: { x: 360, y: 266 }
			}
		},
		{
			id: 3,
			state: 'Georgia',
			Abbr: 'Ga.',
			incumbentParty: 'Democratic',
			positions: {
				opening: { x: 192, y: 279 },
				incumbentParty: { x: 120, y: 266 }
			}
		},
		{
			id: 4,
			state: 'Minnesota',
			Abbr: 'Minn.',
			incumbentParty: 'Democratic',
			positions: {
				opening: { x: 192, y: 153 },
				incumbentParty: { x: 84, y: 203 }
			}
		},
		{
			id: 5,
			state: 'Michigan',
			Abbr: 'Mich.',
			incumbentParty: 'Democratic',
			positions: {
				opening: { x: 264, y: 153 },
				incumbentParty: { x: 156, y: 203 }
			}
		},
		{
			id: 6,
			state: 'New Hampshire',
			Abbr: 'N.H.',
			incumbentParty: 'Democratic',
			positions: {
				opening: { x: 228, y: 216 },
				incumbentParty: { x: 120, y: 140 }
			}
		},
		{
			id: 7,
			state: 'Maine',
			Abbr: 'Maine',
			incumbentParty: 'Republican',
			positions: {
				opening: { x: 300, y: 90 },
				incumbentParty: { x: 360, y: 140 }
			}
		},
		{
			id: 8,
			state: 'Ohio',
			Abbr: 'Ohio',
			incumbentParty: 'Republican',
			positions: {
				opening: { x: 300, y: 216 },
				incumbentParty: { x: 396, y: 203 }
			}
		},
		{
			id: 9,
			state: 'Iowa',
			Abbr: 'Iowa',
			incumbentParty: 'Republican',
			positions: {
				opening: { x: 336, y: 153 },
				incumbentParty: { x: 432, y: 266 }
			}
		},
		{
			id: 10,
			state: 'Texas',
			Abbr: 'Texas',
			incumbentParty: 'Republican',
			positions: {
				opening: { x: 336, y: 279 },
				incumbentParty: { x: 468, y: 203 }
			}
		},
		{
			id: 11,
			state: 'Kansas',
			Abbr: 'Kan.',
			incumbentParty: 'Republican',
			positions: {
				opening: { x: 372, y: 216 },
				incumbentParty: { x: 504, y: 140 }
			}
		},
		{
			id: 12,
			state: 'South Carolina',
			Abbr: 'S.C.',
			incumbentParty: 'Republican',
			positions: {
				opening: { x: 408, y: 153 },
				incumbentParty: { x: 504, y: 266 }
			}
		},
		{
			id: 13,
			state: 'Nebraska',
			Abbr: 'Neb.',
			incumbentParty: 'Republican',
			positions: {
				opening: { x: 408, y: 279 },
				incumbentParty: { x: 540, y: 203 }
			}
		}
	];
	let selectedView = $state('opening');
	const progress = new Tween(0, { duration: 600 });
	let headText = $derived(progress.current < 0.5 ? '13 battleground states' : 'Incumbent party');
	const repStates = races.filter((r) => {
		return r.incumbentParty === 'Republican';
	});
	const demStates = races.filter((r) => {
		return r.incumbentParty === 'Democratic';
	});

	function partyWise() {
		if (selectedView === 'opening') {
			selectedView = 'incumbentParty';
			progress.target = 1;
		} else {
			selectedView = 'opening';
			progress.target = 0;
		}
	}
</script>

<svelte:head>
	<title>Senate seats | Visual journalism</title>
	<meta
		name="description"
		content="An in-progress independent recreation study of a news graphic about Senate seats."
	/>
</svelte:head>

<main>
	<a class="back-link" href="/">&larr; Back to stories</a>
	<header>
		<p class="eyebrow">Recreation study / In progress</p>
		<h1>Senate seats</h1>
		<p class="description">
			This project is in development. The finished graphic and implementation notes will appear
			here.
		</p>
		<p class="description">
			Source: <a href="https://www.cookpolitical.com/" target="_blank" rel="noopener noreferrer"
				>Cook Political Report</a
			>.
		</p>
	</header>

	<svg class="race-graphic" viewBox="0 0 600 400" role="img" aria-labelledby="race-graphic-title">
		<title id="race-graphic-title">
			13 battleground states: Alaska, North Carolina, Georgia, Minnesota, Michigan, New Hampshire,
			Maine, Ohio, Iowa, Texas, Kansas, South Carolina, and Nebraska
		</title>
		<text class="graphic-heading" x="300" y="30" text-anchor="middle">{headText}</text>
		{#each races as race (race.id)}
			{@const start = race.positions.opening}
			{@const end = race.positions.incumbentParty}
			{@const x = start.x + (end.x - start.x) * progress.current}
			{@const y = start.y + (end.y - start.y) * progress.current}
			{@const horizonatalScale = Math.abs(1 - 2 * progress.current)}

			<g transform={`translate(${x}, ${y})`}>
				<g transform={`scale(${horizonatalScale},1)`}
					><circle
						class="circle"
						class:rep-circle={progress.current >= 0.5 && race.incumbentParty === 'Republican'}
						class:dem-circle={progress.current >= 0.5 && race.incumbentParty === 'Democratic'}
						r="35"
					/>
					<text
						class="race-label"
						class:incumbent-text={progress.current >= 0.5}
						text-anchor="middle"
						dominant-baseline="central"
					>
						{race.Abbr}
					</text>
				</g>
			</g>
		{/each}
		{#if selectedView === 'incumbentParty' && progress.current >= 0.9}
			<g class="party-name" text-anchor="middle" transform="translate(120, 330)">
				<text x="0" y="0">Democratic-held</text>
				<text x="0" y="20">{demStates.length} states</text>
			</g>
			<g class="party-name" text-anchor="middle" transform="translate(450, 330)">
				<text x="0" y="0">Republican-held</text>
				<text x="0" y="20">{repStates.length} states</text>
			</g>
		{/if}
	</svg>

	<button onclick={partyWise}> Switch </button>
</main>

<style>
	main {
		width: min(var(--content-width), calc(100% - 3rem));
		margin-inline: auto;
		padding-block: 3rem;
	}

	.back-link {
		display: inline-block;
		color: var(--color-accent);
		font-size: 0.875rem;
	}

	header {
		max-width: 42rem;
		margin-top: 4rem;
	}

	.eyebrow {
		color: var(--color-accent);
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	h1 {
		margin-block: 1rem;
		font-family: var(--font-editorial);
		font-size: clamp(2.5rem, 7vw, 4rem);
		font-weight: 400;
		letter-spacing: -0.04em;
	}

	.description {
		color: var(--color-muted);
		line-height: 1.75;
	}

	.race-graphic {
		width: 100%;
		max-width: 30rem;
		height: auto;
		margin-top: 2rem;
		margin-inline: auto;
		background-color: #bdbbbb;
	}

	.circle {
		fill: #ededed;
		stroke: #c8c8c8;
		stroke-width: 1;
	}

	.rep-circle {
		fill: red;
	}
	.dem-circle {
		fill: blue;
	}

	.race-label {
		fill: #595959;
		font-size: 18px;
	}
	.incumbent-text {
		fill: white;
	}
	.party-name {
		fill: black;
	}

	.graphic-heading {
		fill: #505050;
		font-size: 16px;
		font-weight: 700;
	}
</style>
