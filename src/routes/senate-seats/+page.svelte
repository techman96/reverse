<script lang="ts">
	import { onMount } from 'svelte';
	import { Tween } from 'svelte/motion';

	type Race = {
		state: string;
		label: string;
		party: 'Democratic' | 'Republican';
		partyOrder: number;
		marginGroup: number;
		marginOrder: number;
		ratingGroup: number;
		ratingOrder: number;
		opening: { x: number; y: number };
	};

	const races: Race[] = [
		{
			state: 'Alaska',
			label: 'Alaska',
			party: 'Republican',
			partyOrder: 4,
			marginGroup: 5,
			marginOrder: 0,
			ratingGroup: 2,
			ratingOrder: 3,
			opening: { x: 300, y: 342 }
		},
		{
			state: 'North Carolina',
			label: 'N.C.',
			party: 'Republican',
			partyOrder: 1,
			marginGroup: 3,
			marginOrder: 2,
			ratingGroup: 0,
			ratingOrder: 1,
			opening: { x: 264, y: 279 }
		},
		{
			state: 'Georgia',
			label: 'Ga.',
			party: 'Democratic',
			partyOrder: 3,
			marginGroup: 3,
			marginOrder: 1,
			ratingGroup: 0,
			ratingOrder: 0,
			opening: { x: 192, y: 279 }
		},
		{
			state: 'Minnesota',
			label: 'Minn.',
			party: 'Democratic',
			partyOrder: 0,
			marginGroup: 2,
			marginOrder: 0,
			ratingGroup: 1,
			ratingOrder: 0,
			opening: { x: 192, y: 153 }
		},
		{
			state: 'Michigan',
			label: 'Mich.',
			party: 'Democratic',
			partyOrder: 2,
			marginGroup: 3,
			marginOrder: 0,
			ratingGroup: 2,
			ratingOrder: 2,
			opening: { x: 264, y: 153 }
		},
		{
			state: 'New Hampshire',
			label: 'N.H.',
			party: 'Democratic',
			partyOrder: 1,
			marginGroup: 2,
			marginOrder: 1,
			ratingGroup: 1,
			ratingOrder: 1,
			opening: { x: 228, y: 216 }
		},
		{
			state: 'Maine',
			label: 'Maine',
			party: 'Republican',
			partyOrder: 0,
			marginGroup: 1,
			marginOrder: 0,
			ratingGroup: 2,
			ratingOrder: 0,
			opening: { x: 300, y: 90 }
		},
		{
			state: 'Ohio',
			label: 'Ohio',
			party: 'Republican',
			partyOrder: 2,
			marginGroup: 5,
			marginOrder: 1,
			ratingGroup: 2,
			ratingOrder: 5,
			opening: { x: 300, y: 216 }
		},
		{
			state: 'Iowa',
			label: 'Iowa',
			party: 'Republican',
			partyOrder: 5,
			marginGroup: 5,
			marginOrder: 3,
			ratingGroup: 2,
			ratingOrder: 1,
			opening: { x: 336, y: 153 }
		},
		{
			state: 'Texas',
			label: 'Texas',
			party: 'Republican',
			partyOrder: 6,
			marginGroup: 5,
			marginOrder: 2,
			ratingGroup: 2,
			ratingOrder: 6,
			opening: { x: 336, y: 279 }
		},
		{
			state: 'Kansas',
			label: 'Kan.',
			party: 'Republican',
			partyOrder: 7,
			marginGroup: 6,
			marginOrder: 1,
			ratingGroup: 2,
			ratingOrder: 4,
			opening: { x: 372, y: 216 }
		},
		{
			state: 'South Carolina',
			label: 'S.C.',
			party: 'Republican',
			partyOrder: 8,
			marginGroup: 6,
			marginOrder: 0,
			ratingGroup: 3,
			ratingOrder: 0,
			opening: { x: 408, y: 153 }
		},
		{
			state: 'Nebraska',
			label: 'Neb.',
			party: 'Republican',
			partyOrder: 9,
			marginGroup: 6,
			marginOrder: 3,
			ratingGroup: 4,
			ratingOrder: 1,
			opening: { x: 408, y: 279 }
		},
		{
			state: 'Mississippi',
			label: 'Miss.',
			party: 'Republican',
			partyOrder: 3,
			marginGroup: 6,
			marginOrder: 2,
			ratingGroup: 4,
			ratingOrder: 0,
			opening: { x: 444, y: 216 }
		}
	];
	const chapters = [
		{
			control: 'States',
			title: '14 states in focus',
			heading: 'One circle, one state',
			text: 'These are the 14 states included in the original Senate graphic. Following the same states through different views helps separate who holds a seat from how the state voted for president.'
		},
		{
			control: 'Party',
			title: 'Incumbent party',
			heading: 'Which party currently holds the seat',
			text: 'There are now 14 competitive states. This was not the battleground map most would have predicted at the beginning of the election cycle. It includes several states that are traditionally solidly Republican, such as Texas, Alaska and Kansas.'
		},
		{
			control: 'Connections',
			title: 'Incumbent party',
			heading: 'Keep track of each state',
			text: 'The circles spread into rows, keeping the incumbent-party groups at the top. Each connecting line follows one state into the next view.'
		},
		{
			control: '2024 vote',
			title: 'Two ways to read the same states',
			heading: 'How each state voted in 2024',
			text: 'The past does not predict the future, but a state’s previous presidential performance is a key indicator of its partisan leaning. To capture a majority, Democrats must prevail in at least two states that Mr. Trump carried by at least 11 percentage points.'
		},
		{
			control: 'Ratings',
			title: 'Incumbent party',
			heading: 'How the races are leaning',
			text: 'Political analysts at the Cook Political Report and advertising decisions by both parties suggest there are seven tossup states, but the map is constantly shifting. Republicans can keep the majority if they hold four of the tossup states.'
		}
	];
	const ratingLabels = ['Likely Dem.', 'Lean Dem.', 'Tossup', 'Lean Rep.', 'Likely Rep.'];
	const ratingDescriptions = [
		'Likely Democratic',
		'Lean Democratic',
		'Tossup',
		'Lean Republican',
		'Likely Republican'
	];
	const ratingColors = ['#2476a2', '#4b83a4', '#86527f', '#b94f59', '#ad3444'];
	const marginLabels = ['D 10+', 'D 5–10', 'D 0–5', 'R 0–5', 'R 5–10', 'R 10–15', 'R 15+'];
	const marginDescriptions = [
		'Democratic by 10+ points',
		'Democratic by 5–10 points',
		'Democratic by 0–5 points',
		'Republican by 0–5 points',
		'Republican by 5–10 points',
		'Republican by 10–15 points',
		'Republican by 15+ points'
	];
	const marginColors = [
		'#17679b',
		'#397eae',
		'#6899bc',
		'#b34b55',
		'#a33240',
		'#962b3a',
		'#802030'
	];
	const partyColors = { Democratic: '#176a9b', Republican: '#b52d3a' };
	const progress = new Tween(0, { duration: 650 });
	let activeChapter = $state(0);
	let compact = $state(false);
	let reducedMotion = $state(false);
	let chapterElements = $state<HTMLElement[]>([]);
	const ratingCenters = $derived(compact ? [42, 123, 220, 317, 382] : [88, 240, 425, 600, 730]);
	const viewWidth = $derived(compact ? 420 : 800);
	const viewHeight = $derived(compact ? 470 : 520);
	const groupProgress = $derived(Math.min(1, progress.current));
	const connectionProgress = $derived(Math.max(0, Math.min(1, progress.current - 1)));
	const marginProgress = $derived(Math.max(0, Math.min(1, progress.current - 2)));
	const ratingProgress = $derived(Math.max(0, Math.min(1, progress.current - 3)));
	let hoveredState = $state<string | null>(null);
	let focusedState = $state<string | null>(null);
	let selectedState = $state<string | null>(null);
	const highlightedState = $derived(hoveredState ?? focusedState ?? selectedState);
	const highlightedRace = $derived(races.find((race) => race.state === highlightedState));

	function stateOpacity(race: Race) {
		return highlightedState && highlightedState !== race.state ? 0.15 : 1;
	}

	function pathOpacity(race: Race) {
		return highlightedState ? (highlightedState === race.state ? 0.95 : 0.035) : 0.2;
	}

	function toggleState(stateName: string) {
		focusedState = null;
		selectedState = selectedState === stateName ? null : stateName;
	}

	function clearHighlight() {
		hoveredState = null;
		focusedState = null;
		selectedState = null;
	}

	function rowPosition(race: Race) {
		return {
			x:
				race.party === 'Democratic'
					? (compact ? 35 : 120) + race.partyOrder * (compact ? 18 : 34)
					: (compact ? 202 : 405) + race.partyOrder * (compact ? 20 : 32),
			y: compact ? 110 : 130
		};
	}

	function stagePosition(race: Race, stage: number) {
		if (stage === 0) {
			return {
				x: race.opening.x * (compact ? 0.9 : 1.65) - (compact ? 70 : 120),
				y: race.opening.y + 10
			};
		}
		if (stage === 1) {
			if (race.party === 'Democratic') {
				const offsets = [
					{ x: -1, y: 0 },
					{ x: 0, y: -1 },
					{ x: 1, y: 0 },
					{ x: 0, y: 1 }
				];
				const offset = offsets[race.partyOrder];
				return {
					x: (compact ? 85 : 170) + offset.x * (compact ? 27 : 42),
					y: (compact ? 190 : 220) + offset.y * (compact ? 47 : 73)
				};
			}
			const offsets = [
				{ x: -1.5, y: 0 },
				{ x: -1, y: -1 },
				{ x: -1, y: 1 },
				{ x: 1.5, y: 0 },
				{ x: -0.5, y: 0 },
				{ x: 0, y: -1 },
				{ x: 0, y: 1 },
				{ x: 0.5, y: 0 },
				{ x: 1, y: -1 },
				{ x: 1, y: 1 }
			];
			const offset = offsets[race.partyOrder];
			return {
				x: (compact ? 306 : 590) + offset.x * (compact ? 52 : 80),
				y: (compact ? 190 : 220) + offset.y * (compact ? 45 : 69)
			};
		}
		if (stage === 2) return { x: rowPosition(race).x, y: compact ? 340 : 390 };
		if (stage === 3) {
			return {
				x: (compact ? 30 : 65) + race.marginGroup * (compact ? 60 : 110),
				y: (compact ? 290 : 320) + race.marginOrder * (compact ? 40 : 52)
			};
		}
		const clusterOffsets = [
			{ x: -0.5, y: 0 },
			{ x: 0.5, y: 0 },
			{ x: -1, y: 1 },
			{ x: 0, y: 1 },
			{ x: 1, y: 1 },
			{ x: -0.5, y: 2 },
			{ x: 0.5, y: 2 }
		];
		const offset =
			race.ratingGroup === 2
				? clusterOffsets[race.ratingOrder]
				: { x: race.ratingGroup === 3 ? 0 : race.ratingOrder - 0.5, y: 0 };
		return {
			x: ratingCenters[race.ratingGroup] + offset.x * (compact ? 36 : 52),
			y: (compact ? 322 : 375) + offset.y * (compact ? 32 : 46)
		};
	}

	function middlePosition(race: Race) {
		const original = stagePosition(race, 3);
		const members = races.filter((candidate) => candidate.marginGroup === race.marginGroup).length;
		const spacing = compact ? 9 : 13;
		const offsets =
			members === 4
				? [
						{ x: 0, y: -1 },
						{ x: -1, y: 0 },
						{ x: 1, y: 0 },
						{ x: 0, y: 1 }
					]
				: members === 3
					? [
							{ x: -1, y: 0 },
							{ x: 1, y: 0 },
							{ x: 0, y: 1.75 }
						]
					: members === 2
						? [
								{ x: -1, y: 0 },
								{ x: 1, y: 0 }
							]
						: [{ x: 0, y: 0 }];
		const offset = offsets[race.marginOrder];
		const destination = {
			x: original.x + offset.x * spacing,
			y: (compact ? 194 : 233) + offset.y * spacing * (members === 4 ? 1.8 : 1)
		};
		return {
			x: original.x + (destination.x - original.x) * ratingProgress,
			y: original.y + (destination.y - original.y) * ratingProgress
		};
	}

	function currentPosition(race: Race) {
		const startStage = Math.min(chapters.length - 2, Math.floor(progress.current));
		const fraction = progress.current - startStage;
		const start = stagePosition(race, startStage);
		const end = stagePosition(race, startStage + 1);
		return { x: start.x + (end.x - start.x) * fraction, y: start.y + (end.y - start.y) * fraction };
	}

	function activateChapter(chapterIndex: number) {
		if (activeChapter === chapterIndex) return;
		activeChapter = chapterIndex;
		void progress.set(chapterIndex, { duration: reducedMotion ? 0 : 650 });
	}

	function goToChapter(chapterIndex: number) {
		const chapterElement = chapterElements[chapterIndex];
		if (!chapterElement) return;
		const bounds = chapterElement.getBoundingClientRect();
		window.scrollTo({
			top:
				window.scrollY +
				bounds.top +
				bounds.height / 2 -
				window.innerHeight * (compact ? 0.77 : 0.5),
			behavior: reducedMotion ? 'instant' : 'smooth'
		});
	}

	onMount(() => {
		const smallScreen = window.matchMedia('(max-width: 760px)');
		const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
		let scheduledFrame = 0;
		function updateChapter() {
			scheduledFrame = 0;
			const trigger = window.innerHeight * (compact ? 0.77 : 0.5);
			let nearestChapter = 0;
			let nearestDistance = Infinity;
			chapterElements.forEach((chapterElement, chapterIndex) => {
				const bounds = chapterElement.getBoundingClientRect();
				const distance = Math.abs(bounds.top + bounds.height / 2 - trigger);
				if (distance < nearestDistance) {
					nearestChapter = chapterIndex;
					nearestDistance = distance;
				}
			});
			activateChapter(nearestChapter);
		}
		function requestUpdate() {
			if (!scheduledFrame) scheduledFrame = requestAnimationFrame(updateChapter);
		}
		function updatePreferences() {
			compact = smallScreen.matches;
			reducedMotion = motionPreference.matches;
			if (reducedMotion) void progress.set(activeChapter, { duration: 0 });
			requestUpdate();
		}
		updatePreferences();
		window.addEventListener('scroll', requestUpdate, { passive: true });
		window.addEventListener('resize', requestUpdate);
		smallScreen.addEventListener('change', updatePreferences);
		motionPreference.addEventListener('change', updatePreferences);
		return () => {
			cancelAnimationFrame(scheduledFrame);
			window.removeEventListener('scroll', requestUpdate);
			window.removeEventListener('resize', requestUpdate);
			smallScreen.removeEventListener('change', updatePreferences);
			motionPreference.removeEventListener('change', updatePreferences);
		};
	});
</script>

<svelte:head>
	<title>Senate seats | Muhammad Shumail</title>
	<meta
		name="description"
		content="An independent Svelte recreation exploring 14 Senate seats, incumbent parties, 2024 voting patterns, and Cook Political Report ratings from the original graphic."
	/>
</svelte:head>

<main>
	<a class="back-link" href="/#work">&larr; Back to work</a>
	<header class="study-heading">
		<p class="eyebrow">Recreation study / First pass</p>
		<h1>Senate seats</h1>
		<p class="introduction">
			Who holds a Senate seat and how a state votes for president can tell different stories.
		</p>
		<p class="study-note">
			An independent recreation of a New York Times graphic. This study follows the 14-state
			selection, 2024 margin groups, and Cook Political Report ratings in the reference, not live
			election ratings.
		</p>
	</header>

	<div class="scrolly">
		<div class="graphic-panel">
			<div class="view-controls" role="group" aria-label="Graphic view">
				{#each chapters as chapter, chapterIndex}
					<button
						type="button"
						aria-pressed={activeChapter === chapterIndex}
						onclick={() => goToChapter(chapterIndex)}>{chapter.control}</button
					>
				{/each}
			</div>
			<svg
				class="race-graphic"
				viewBox={`0 0 ${viewWidth} ${viewHeight}`}
				role="group"
				aria-labelledby="race-title race-description"
				data-stage={activeChapter}
			>
				<title id="race-title">{chapters[activeChapter].title}</title>
				<desc id="race-description"
					>{chapters[activeChapter].text} States shown: {races
						.map((race) => race.state)
						.join(', ')}.</desc
				>
				<text class="graphic-heading" x={viewWidth / 2} y="40" text-anchor="middle"
					>{chapters[activeChapter].title}</text
				>
				<g class="anchor-labels" opacity={connectionProgress} text-anchor="middle">
					<text x={compact ? 62 : 171} y={compact ? 80 : 95} fill={partyColors.Democratic}
						>Democratic-held</text
					>
					<text x={compact ? 292 : 549} y={compact ? 80 : 95} fill={partyColors.Republican}
						>Republican-held</text
					>
				</g>
				{#each races as race (race.state)}
					{@const point = ratingProgress > 0 ? middlePosition(race) : currentPosition(race)}
					{@const anchor = rowPosition(race)}
					<path
						class="party-link"
						data-state={race.state}
						d={`M ${anchor.x},${anchor.y} C ${anchor.x},${(anchor.y + point.y) / 2} ${point.x},${(anchor.y + point.y) / 2} ${point.x},${point.y}`}
						fill="none"
						stroke={partyColors[race.party]}
						stroke-width={compact ? 5 : 9}
						opacity={connectionProgress * pathOpacity(race)}
					/>
					<circle
						cx={anchor.x}
						cy={anchor.y}
						r={compact ? 7 : 12}
						fill={partyColors[race.party]}
						opacity={connectionProgress * stateOpacity(race)}
					/>
				{/each}
				{#each races as race (race.state)}
					{@const middle = middlePosition(race)}
					{@const destination = currentPosition(race)}
					<path
						class="rating-link"
						data-state={race.state}
						d={`M ${middle.x},${middle.y} C ${middle.x},${(middle.y + destination.y) / 2} ${destination.x},${(middle.y + destination.y) / 2} ${destination.x},${destination.y}`}
						fill="none"
						stroke={ratingColors[race.ratingGroup]}
						stroke-width={compact ? 5 : 9}
						opacity={ratingProgress * pathOpacity(race)}
					/>
					<circle
						class="margin-node"
						cx={middle.x}
						cy={middle.y}
						r={compact ? 8 : 12}
						fill={marginColors[race.marginGroup]}
						opacity={ratingProgress * stateOpacity(race)}
					/>
				{/each}
				<g
					opacity={Math.max(0, groupProgress - connectionProgress)}
					text-anchor="middle"
					class="party-labels"
				>
					<text x={compact ? 85 : 170} y={compact ? 300 : 360}>Democratic-held</text>
					<text x={compact ? 85 : 170} y={compact ? 322 : 385} fill={partyColors.Democratic}
						>4 states</text
					>
					<text x={compact ? 306 : 590} y={compact ? 300 : 360}>Republican-held</text>
					<text x={compact ? 306 : 590} y={compact ? 322 : 385} fill={partyColors.Republican}
						>10 states</text
					>
				</g>
				<g opacity={marginProgress} text-anchor="middle">
					<text
						class="axis-title"
						x={viewWidth / 2}
						y={(compact ? 190 : 205) - ratingProgress * (compact ? 45 : 30)}
						>2024 presidential margin</text
					>
					<text
						class="direction-label"
						opacity={1 - ratingProgress}
						x={compact ? 105 : 230}
						y={compact ? 216 : 237}>More Democratic &larr;</text
					>
					<text
						class="direction-label"
						opacity={1 - ratingProgress}
						x={compact ? 315 : 620}
						y={compact ? 216 : 237}>&rarr; More Republican</text
					>
					{#each marginLabels as marginLabel, groupIndex}
						<text
							class="margin-label"
							opacity={1 - ratingProgress}
							x={(compact ? 30 : 65) + groupIndex * (compact ? 60 : 110)}
							y={compact ? 255 : 277}
							fill={marginColors[groupIndex]}>{marginLabel}</text
						>
					{/each}
				</g>
				<g class="rating-labels" opacity={ratingProgress} text-anchor="middle">
					<text class="axis-title" x={viewWidth / 2} y={compact ? 260 : 308}
						>Ratings in the original graphic</text
					>
					{#each ratingLabels as ratingLabel, groupIndex}
						<text
							class="rating-label"
							x={ratingCenters[groupIndex]}
							y={compact ? 289 : 343}
							fill={ratingColors[groupIndex]}>{ratingLabel}</text
						>
					{/each}
				</g>
				{#each races as race (race.state)}
					{@const point = currentPosition(race)}
					{@const baseRadius = compact ? 25 : 39}
					{@const rowRadius = compact ? 9 : 15}
					{@const finalRadius = compact ? 17 : 24}
					<g
						class="state-node"
						data-state={race.state}
						class:highlighted={highlightedState === race.state}
						transform={`translate(${point.x}, ${point.y})`}
						opacity={stateOpacity(race)}
						role="button"
						tabindex="0"
						aria-label={`${race.state}: ${race.party}-held seat; 2024 presidential margin: ${marginDescriptions[race.marginGroup]}; reference rating: ${ratingDescriptions[race.ratingGroup]}`}
						aria-pressed={selectedState === race.state}
						onpointerenter={(event) => {
							if (event.pointerType === 'mouse') hoveredState = race.state;
						}}
						onpointerleave={() => {
							hoveredState = null;
						}}
						onfocus={() => {
							focusedState = race.state;
						}}
						onblur={() => {
							focusedState = null;
						}}
						onclick={() => toggleState(race.state)}
						onkeydown={(event) => {
							if (event.key === 'Enter' || event.key === ' ') {
								event.preventDefault();
								toggleState(race.state);
							} else if (event.key === 'Escape') {
								clearHighlight();
							}
						}}
					>
						<circle
							r={baseRadius +
								(rowRadius - baseRadius) * connectionProgress +
								(finalRadius - rowRadius) * marginProgress}
							fill={ratingProgress > 0.5
								? ratingColors[race.ratingGroup]
								: marginProgress > 0.5
									? marginColors[race.marginGroup]
									: groupProgress > 0.5
										? partyColors[race.party]
										: '#e5e9e3'}
						/>
						<text
							text-anchor="middle"
							dominant-baseline="central"
							fill={groupProgress > 0.5 ? '#ffffff' : '#354438'}
							font-size={compact ? 10 : 16 - connectionProgress * 5 + marginProgress * 2}
							>{race.label}</text
						>
					</g>
				{/each}
				{#if highlightedRace}
					<g class="state-details" aria-hidden="true" pointer-events="none">
						<rect
							x="4"
							y={compact ? 429 : 454}
							width={compact ? 412 : 300}
							height={compact ? 40 : 62}
							rx="3"
						/>
						<text x="12" y={compact ? 440 : 472} font-weight="700"
							>{highlightedRace.state} · {highlightedRace.party}-held</text
						>
						<text x="12" y={compact ? 452 : 488}
							>2024: {marginDescriptions[highlightedRace.marginGroup]}</text
						>
						<text x="12" y={compact ? 464 : 504}
							>Reference rating: {ratingDescriptions[highlightedRace.ratingGroup]}</text
						>
					</g>
				{/if}
			</svg>
			<p class="graphic-note">
				{activeChapter === 4
					? 'Reference ratings, not live election ratings.'
					: activeChapter === 3
						? 'D / R: presidential winner. Margins in percentage points.'
						: 'Each labeled circle represents one state in the reference.'}
			</p>
		</div>
		<div class="story-steps">
			{#each chapters as chapter, chapterIndex}
				<section
					class="story-step"
					class:active={activeChapter === chapterIndex}
					bind:this={chapterElements[chapterIndex]}
					aria-labelledby={`chapter-${chapterIndex}`}
				>
					<div class="chapter-copy">
						<p class="eyebrow">0{chapterIndex + 1} / 0{chapters.length}</p>
						<h2 id={`chapter-${chapterIndex}`}>{chapter.heading}</h2>
						<p>{chapter.text}</p>
					</div>
				</section>
			{/each}
		</div>
	</div>

	<footer class="study-footer">
		<p>
			Original graphic: <a href="https://www.nytimes.com/" target="_blank" rel="noopener noreferrer"
				>The New York Times</a
			>. Data source credited in the reference:
			<a href="https://www.cookpolitical.com/" target="_blank" rel="noopener noreferrer"
				>Cook Political Report</a
			>.
		</p>
		<p>
			State selection, margin categories, and race ratings transcribed from the supplied reference.
			This first pass does not reproduce live ratings or exact vote margins.
		</p>
		<details>
			<summary>State data</summary>
			<div class="table-scroll">
				<table>
					<caption>States in the reference graphic</caption>
					<thead
						><tr
							><th scope="col">State</th><th scope="col">Seat held by</th><th scope="col"
								>2024 presidential margin</th
							><th scope="col">Rating in the reference</th></tr
						></thead
					>
					<tbody>
						{#each races as race (race.state)}
							<tr
								><th scope="row">{race.state}</th><td>{race.party}</td><td
									>{marginDescriptions[race.marginGroup]}</td
								><td>{ratingDescriptions[race.ratingGroup]}</td></tr
							>
						{/each}
					</tbody>
				</table>
			</div>
		</details>
		<a class="back-link" href="/">&larr; Back to portfolio</a>
	</footer>
</main>

<style>
	main {
		width: min(80rem, calc(100% - 3rem));
		margin-inline: auto;
		padding-block: 2rem;
	}
	.back-link {
		color: var(--color-accent);
		font-size: 0.85rem;
		text-decoration: none;
	}
	.back-link:hover {
		text-decoration: underline;
	}
	.study-heading {
		max-width: 44rem;
		margin-block: 4rem 2rem;
	}
	.eyebrow {
		color: var(--color-accent);
		font-size: 0.68rem;
		font-weight: 700;
		text-transform: uppercase;
	}
	h1,
	h2 {
		font-family: var(--font-editorial);
		font-weight: 400;
		letter-spacing: 0;
	}
	h1 {
		margin-block: 0.75rem 1rem;
		font-size: 3.5rem;
	}
	.introduction {
		font-size: 1.2rem;
		line-height: 1.6;
	}
	.study-note,
	.study-footer {
		color: var(--color-muted);
		font-size: 0.85rem;
		line-height: 1.7;
	}
	.scrolly {
		display: grid;
		grid-template-columns: minmax(0, 2.2fr) minmax(15rem, 1fr);
		gap: 2.5rem;
		align-items: start;
		border-top: 1px solid var(--color-rule);
	}
	.graphic-panel {
		position: sticky;
		top: 2rem;
		min-width: 0;
		padding-block: 1rem;
		background: var(--color-paper);
	}
	.view-controls {
		display: flex;
		width: fit-content;
		max-width: 100%;
		margin-inline: auto;
		border: 1px solid var(--color-rule);
		border-radius: 4px;
		overflow: hidden;
	}
	.view-controls button {
		border: 0;
		border-right: 1px solid var(--color-rule);
		padding: 0.7rem 0.85rem;
		color: var(--color-muted);
		background: transparent;
		font: inherit;
		font-size: 0.75rem;
		white-space: nowrap;
		cursor: pointer;
	}
	.view-controls button:last-child {
		border-right: 0;
	}
	.view-controls button[aria-pressed='true'] {
		background: var(--color-ink);
		color: var(--color-paper);
	}
	.view-controls button:focus-visible {
		outline: 2px solid var(--color-accent);
		outline-offset: -3px;
	}
	.race-graphic {
		width: 100%;
		height: auto;
		aspect-ratio: 800 / 520;
	}
	.state-node {
		cursor: pointer;
		outline: none;
	}
	.state-node.highlighted > circle,
	.state-node:focus-visible > circle {
		stroke: var(--color-ink);
		stroke-width: 2;
	}
	.state-details {
		fill: var(--color-ink);
		font-size: 12px;
	}
	.state-details rect {
		fill: var(--color-paper);
		fill-opacity: 0.97;
	}
	.graphic-heading {
		fill: var(--color-ink);
		font-size: 18px;
		font-weight: 700;
	}
	.anchor-labels {
		font-size: 13px;
		font-weight: 700;
	}
	.party-labels {
		fill: var(--color-ink);
		font-size: 17px;
		font-weight: 700;
	}
	.axis-title {
		fill: var(--color-ink);
		font-size: 17px;
		font-weight: 700;
	}
	.direction-label {
		fill: var(--color-muted);
		font-size: 13px;
	}
	.margin-label {
		font-size: 13px;
		font-weight: 700;
	}
	.rating-label {
		font-size: 13px;
		font-weight: 700;
	}
	.graphic-note {
		margin: 0;
		color: var(--color-muted);
		text-align: center;
		font-size: 0.72rem;
		line-height: 1.5;
	}
	.story-step {
		display: flex;
		align-items: center;
		min-height: 85svh;
		padding-block: 3rem;
	}
	.chapter-copy {
		padding-left: 1rem;
		border-left: 2px solid var(--color-rule);
	}
	.active .chapter-copy {
		border-color: var(--color-accent);
	}
	h2 {
		font-size: 1.6rem;
		line-height: 1.2;
		margin-block: 0.75rem;
	}
	.chapter-copy > p:last-child {
		color: var(--color-muted);
		line-height: 1.75;
		font-size: 0.95rem;
	}
	.study-footer {
		padding-block: 2rem;
		border-top: 1px solid var(--color-rule);
	}
	.study-footer > p {
		max-width: 48rem;
	}
	details {
		margin-block: 1.5rem 2rem;
	}
	summary {
		width: fit-content;
		cursor: pointer;
		color: var(--color-ink);
		font-weight: 700;
	}
	.table-scroll {
		overflow-x: auto;
	}
	table {
		width: 100%;
		max-width: 50rem;
		border-collapse: collapse;
		margin-block: 1rem;
		text-align: left;
	}
	caption {
		text-align: left;
		padding-block: 0.75rem;
	}
	th,
	td {
		padding: 0.75rem;
		border-bottom: 1px solid var(--color-rule);
	}
	@media (max-width: 760px) {
		main {
			width: calc(100% - 2rem);
		}
		.study-heading {
			margin-top: 2.5rem;
		}
		h1 {
			font-size: 2.75rem;
		}
		.scrolly {
			display: block;
		}
		.graphic-panel {
			top: 0;
			z-index: 2;
			padding-block: 0.75rem;
			border-bottom: 1px solid var(--color-rule);
		}
		.race-graphic {
			aspect-ratio: 420 / 470;
			max-height: 44svh;
		}
		.graphic-heading {
			font-size: 15px;
		}
		.state-details {
			font-size: 11px;
		}
		.anchor-labels {
			font-size: 11px;
		}
		.party-labels {
			font-size: 13px;
		}
		.axis-title {
			font-size: 14px;
		}
		.direction-label,
		.margin-label,
		.rating-label {
			font-size: 10px;
		}
		.graphic-note {
			font-size: 0.65rem;
		}
		.view-controls button {
			padding: 0.6rem 0.3rem;
			font-size: 0.7rem;
		}
		.story-step {
			min-height: 85svh;
			padding-block: 2rem;
		}
		.chapter-copy {
			max-width: 33rem;
		}
		.chapter-copy > p:last-child {
			font-size: 0.9rem;
			line-height: 1.65;
		}
	}
	@media (max-height: 600px) and (min-width: 761px) {
		.graphic-panel {
			top: 0;
		}
		.race-graphic {
			max-height: 70svh;
		}
	}
</style>
