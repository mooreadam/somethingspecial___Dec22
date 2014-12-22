PBS.KIDS.storybook.config = {
	background: {
		color: "#ababab",
		url: "images/background.png"
	},
	audio: {
		enabled: true,
		path: "audio/",
		name: "001"
	},
	book: {
		font: "Gill Sans",
		startOnPage: 0,
		pageWidth: 768,
		pageHeight: 1024,
		previousPageButton: {
			url: "images/prev_page_button.png",
			x: 2,
			y: 50,
			width: "100px",
			height: "100px"
		},
		nextPageButton: {
			url: "images/next_page_button.png",
			horizontalAlign: "RIGHT",
			x: 2,
			y: 50,
			width: "100px",
			height: "100px"
		},
		replayPageButton: {
			url: "images/replay_page_button.png",
			horizontalAlign: "RIGHT",
			x: 2,
			y: 75,
			width: '100px',
			height: '100px'
		},
		homePageButton: {
			url: "images/home_page_button.png",
			horizontalAlign: "LEFT",
			x: 2,
			y: 75,
			width: '100px',
			height: '100px'
		},
		pageBackground: {
			color: "#fefefe"
		},
		oddPageBackground: {
			color: "#fdfdfd"
		},
		evenPageBackground: {
			color: "#f9f9f9"
		},
		pageTurnDuration: 500,
		pageSlideDuration: 200
	},
	cover: {
		background: {
			url: "images/pages/page-0/cover_v2.png"
		},
		sound: {
			startTime: 0,
			endTime: 11,
			loop: false
		},
		content: [

		]
	},
	pages: []
};
