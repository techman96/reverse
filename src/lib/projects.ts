import nvidiaImage from '#lib/assets/images/nvidia.jpeg';
import tweetsImage from '#lib/assets/images/D3.png';
import workforceImage from '#lib/assets/images/scatter.jpeg';
import creditImage from '#lib/assets/images/credit map.png';
import iceImage from '#lib/assets/images/template.jpeg';
import hoaImage from '#lib/assets/images/hoa.jpeg';
import droneImage from '#lib/assets/images/drone.png';
import sanDiegoImage from '#lib/assets/images/san diego.png';
import appImage from '#lib/assets/images/app.jpg';
import silverImage from '#lib/assets/images/silver (1).jpeg';

export type PortfolioProject = {
	slug: string;
	title: string;
	publication: string;
	description: string;
	role: string;
	approach?: string;
	created: string;
	tools?: string;
	result?: string;
	image: string;
	alt: string;
	href?: string;
	linkLabel?: string;
	code?: string;
	featured: boolean;
};

export const projects: PortfolioProject[] = [
	{
		slug: 'nvidia-market-value',
		title: 'Nvidia crosses $4 trillion market value',
		publication: 'The Wall Street Journal',
		description:
			'I created charts for breaking coverage of Nvidia crossing $4 trillion in market value.',
		role: 'I designed and built the charts, working with the reporter and editors on the timeline and callouts.',
		approach:
			'I worked with the reporter and editors to decide which moments to show in the timeline and what to highlight with callouts. Since the story was breaking, I completed the charts in under two hours.',
		created:
			'I built the charts with WSJ’s in-house graphics tool, prepared different sizes in Illustrator, and used ai2html to make them responsive.',
		tools: 'WSJ’s in-house graphics tool, Illustrator, and ai2html',
		result: 'The charts ran with the story on WSJ’s A1 page online and in the print edition.',
		image: nvidiaImage,
		alt: 'Wall Street Journal story art about Nvidia crossing a $4 trillion market value',
		href: 'https://www.wsj.com/tech/ai/nvidia-nvda-4-trillion-market-cap-466c1c9c?gaa_at=eafs&gaa_n=ASWzDAjoeppAMXJgqB5CELILgCeEAsnc7Mkjg3Fkv0APtdbZDypg431wQQyp&gaa_ts=6882fbf4&gaa_sig=YFzAPYYyXUHggRDs8U8eiABZbBfAKlvE5we1p3XQ9eJbFGihYx8D6OIFpFe3jEsWOTVCEgV3iUeMQ7jy6t-Gxg%3D%3D',
		linkLabel: 'Read the story',
		featured: true
	},
	{
		slug: 'market-reactions-trump-tweets',
		title: 'Market reactions to Trump’s tweets',
		publication: 'The Wall Street Journal',
		description:
			'An interactive chart comparing changes in trade-sensitive stocks with the S&P 500 after Inauguration Day.',
		role: 'I built the interactive with data supplied by the data team and implemented it in our WSJ style template.',
		approach:
			'I chose dates when Trump made notable comments and marked them on the chart. When readers hover over a marked date, a popup shows the comment and highlights both lines so they can compare how the selected stocks and the S&P 500 moved around that time.',
		created:
			'I used D3 to build a responsive chart that redraws when its container changes size. It compares the S&P 500 with a custom market-value-weighted index of selected trade-sensitive stocks.',
		tools: 'D3, HTML, CSS, JavaScript, and the WSJ style template',
		result:
			'The story was not published, but the finished interactive is available as a standalone project.',
		image: tweetsImage,
		alt: 'D3.js interactive chart about market reactions to Trump’s tweets',
		href: 'https://techman96.github.io/trump/',
		linkLabel: 'Open the interactive',
		code: 'https://github.com/techman96/trump',
		featured: true
	},
	{
		slug: 'companies-cutting-workforces',
		title: 'The biggest companies across America are cutting their workforces',
		publication: 'The Wall Street Journal',
		description:
			'I analyzed how sales and employment changed over time at some of America’s largest companies.',
		role: 'I worked with the reporter and editor to explore the data, shape the analysis, and build graphics for the story.',
		approach:
			'This was my first project. I started with a large set of raw data and an open-ended question: could I find a trend? I met with the reporter and editor to understand the story, explored the data, and brought what I found back to them. Comparing year-over-year changes in sales and employment made the patterns easier to see than plotting raw numbers. After reading the story draft, I highlighted the companies it mentioned in the charts.',
		created:
			'I built the graphics with WSJ’s graphics tool, then adjusted them in Illustrator for different screen sizes while keeping the callouts and dimensions in place. I ran the ai2html script and added the graphics to the story.',
		tools: 'WSJ’s graphics tool, Illustrator, and ai2html',
		result:
			'The story and my graphics were published online and in print. The story also ranked among the top 10 most-read stories on our newsroom leaderboard.',
		image: workforceImage,
		alt: 'Scatter plot comparing sales and employee changes for S&P 500 companies',
		href: 'https://www.wsj.com/business/the-biggest-companies-across-america-are-cutting-their-workforces-a0e8739a?gaa_at=eafs&gaa_n=ASWzDAitxEFOwGzYXaAAZnOoVQJ240x4p8U9Z3Kr06j83G9k1gak4S2I2kfe&gaa_ts=6882fbf4&gaa_sig=AVbO12IEZi0C4NymGfkYgYNP_xHE65QHKu4cEBTc0Kz3ivTRZNGl79r5VHbzWYI6JMXO0GJbUeUfjkfdO-ImTg%3D%3D',
		linkLabel: 'Read the story',
		featured: true
	},
	{
		slug: 'childhood-neighborhoods-credit-scores',
		title: 'How childhood neighborhoods shape credit scores',
		publication: 'The Wall Street Journal',
		description:
			'I created county-level maps showing how credit scores varied with people’s childhood neighborhoods.',
		role: 'I built the maps using QGIS and WSJ’s map templates and visual style.',
		approach:
			'I joined the data using county codes, then added county boundaries and water bodies as map layers in QGIS. I followed WSJ’s map style to keep the maps clear and consistent with the story.',
		created:
			'I exported the maps from QGIS, adjusted them in Illustrator, then ran the ai2html script to make them responsive for the web.',
		tools: 'QGIS, WSJ map templates, Illustrator, and ai2html',
		result: 'The maps were published with the WSJ story online.',
		image: creditImage,
		alt: 'Map of average credit scores across U.S. counties',
		href: 'https://www.wsj.com/economy/credit-score-childhood-neighborhood-impact-dfaed7b8?gaa_at=eafs&gaa_n=ASWzDAj8uGe6YD7YCwo9SgSRPnRqlusZMBN-VSrZwLJXEK4UJ68SLEel0bQx&gaa_ts=6882fbf4&gaa_sig=mVO3ci6sXq1gqNCln5tzasggM-y-YcK40mATQA1tWtNOTrIWlwYGAY7rGHRzTXyE1x26bEilhTK0zyNTs2FvRQ%3D%3D',
		linkLabel: 'Read the story',
		featured: true
	},
	{
		slug: 'ice-warehouse-acquisitions',
		title: 'Scrollytelling map template for location-based stories',
		publication: 'CoStar',
		description:
			'A reusable Mapbox scrollytelling template, built around an example mapping ICE-linked warehouse acquisitions across the United States.',
		role: 'I built the template with Mapbox, JavaScript, HTML, and CSS, including custom map styles and layers.',
		approach:
			'I set up each story chapter with its own camera position, annotation, and map-layer settings. As readers scroll, the active chapter flies the map to the next location and updates the map note.',
		created:
			'When sale data is available, each property card includes a bar chart comparing its price per square foot with the local market average. I used one shared scale so readers can compare locations.',
		tools: 'Mapbox GL JS, JavaScript, HTML, and CSS',
		image: iceImage,
		alt: 'Scrollytelling map template showing ICE warehouse acquisitions',
		href: 'https://techman96.github.io/ice/',
		linkLabel: 'Open the project',
		featured: false
	},
	{
		slug: 'silver-tsunami-home-listings',
		title: 'What to expect from the upcoming “silver tsunami” of home listings',
		publication: 'Homes.com News',
		description:
			'I pitched a story about how homes owned by older Americans could affect housing markets differently across the country.',
		role: 'I pitched the story, found and analyzed the data, and built a map, dot plot, and quadrant chart.',
		approach:
			'I analyzed data across 40 metro areas. With so many markets and measures to compare, I used a quadrant chart to make the relationship between older homeowners and younger adults forming households easier to see. A map and dot plot helped show the geographic patterns and differences between age groups.',
		created:
			'I built the map, dot plot, and quadrant chart in Flourish to compare housing markets and make the patterns in the data easier to see.',
		tools: 'Flourish',
		result:
			'It received more than 15,000 views on the Homes.com website and was one of the site’s top-read stories. It was also named Enterprise Story of the Month.',
		image: silverImage,
		alt: 'Dot plot comparing population share and share of owner-occupied households by age group; adults 65 and older make up 18% of the population and 34.1% of homeowners.',
		featured: false
	},
	{
		slug: 'hoas-back-on-the-rise',
		title: 'HOAs are back on the rise',
		publication: 'Homes.com',
		description: 'A multi-chart package showing HOA growth in new single-family communities.',
		role: 'Designed a multi-chart analytical package based on in-depth data analysis.',
		created: 'A multi-chart analytical package about HOA growth.',
		image: hoaImage,
		alt: 'Chart about the rise of homeowners associations in new single-family construction',
		href: 'https://www.homes.com/news/homeowners-associations-are-back-on-the-rise-in-single-family-construction/1479378706/',
		linkLabel: 'Read the story',
		featured: false
	},
	{
		slug: 'drone-strikes-pakistan',
		title: 'Drone strikes in Pakistan',
		publication: 'Independent capstone project',
		description:
			'A long-form interactive combining mapping, chronology, and sourcing notes for transparent reporting on drone strikes.',
		role: 'Built the project end to end, from data pipeline to front end.',
		created: 'A long-form interactive with mapping, chronology, and sourcing notes.',
		image: droneImage,
		alt: 'Map-based interactive about drone strikes in Pakistan',
		href: 'https://techman96.github.io/reaper/',
		linkLabel: 'Open the project',
		code: 'https://github.com/techman96/reaper',
		featured: false
	},
	{
		slug: 'unpaved-roads-san-diego',
		title: 'Map of unpaved roads in San Diego',
		publication: 'inewsource',
		description:
			'A service journalism map that helps residents locate and inspect unpaved roads across San Diego County.',
		role: 'Frontend mapping implementation and interaction design.',
		created: 'An interactive map of unpaved roads across San Diego County.',
		image: sanDiegoImage,
		alt: 'Map showing unpaved roads across San Diego County',
		href: 'https://inewsource.org/2024/06/20/map-san-diego-unpaved-roads/',
		linkLabel: 'Read the story',
		code: 'https://github.com/jselfinews/inews_maps',
		featured: false
	},
	{
		slug: 'ai-news-aggregation-app',
		title: 'AI News Aggregation App',
		publication: 'Independent project',
		description:
			'A React and TypeScript app for discovering and following news from multiple sources, with a personalized feed and account features in beta.',
		role: 'Built the app with a hosted backend, database, authentication, and news API integrations.',
		created:
			'A React and TypeScript news app with a personalized feed, account features, a hosted backend, database, authentication, and news API integrations.',
		image: appImage,
		alt: 'Interface of the AI News Aggregation App',
		featured: false
	}
] as const;

export const featuredProjects = projects.filter((project) => project.featured);
export const moreProjects = projects.filter((project) => !project.featured);
