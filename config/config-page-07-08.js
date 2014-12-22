PBS.KIDS.storybook.config.pages.push({
    background: {
		url: "images/pages/page-09/page-09_0002s_0000_Layer-2.png"
	},
    sound: {
		startTime: 61,
		endTime: 74,
		loop: false
	},
	content: [


        {
            // Character Animation
			type: "Sprite",
			x: "0px",
			y: "0px",
			url: "images/pages/page-09/p9-walk.png",
            numFrames: 4,
            frameDelay: 150,
            autoStart: true,
            autoReset: false,
            playOnPress: false,
            loop: false
        },
        {
            // Leaf 1 Animation
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/anim/leaf_1.png",
            numFrames: 6,
            frameDelay: 20,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: true

        },
        {
            // Wind Animation
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/anim/wind_left_sheet.png",
            numFrames: 8,
            frameDelay: 30,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: true

        },
        {
			type: "TextArea",
			x: "50px",
			y: "50px",
			align: "left",
			color: "#222222",
			size: 48,
			font: "Gill Sans",
			text: "They set off for school. First they walked down the steep hill.",
            sound: {
		          startTime: 61,
		          endTime: 68,
		          loop: false
	       }
		},
		{
			// Cat Murderer Window Cycler
			type: "Cycler",
    			content: [
        			{
            			type: "Sprite",
            			id: "cat1",
            			x: "650px",
            			y: "380px",
            			numFrames: 1,
            			frameDelay: 6,
            			url: "images/pages/page-09/p9_cat.png"
        			},
        			{
            			type: "Sprite",
            			id: "cat2",
            			x: "715px",
            			y: "375px",
            			numFrames: 1,
            			frameDelay: 2,
            			url: "images/pages/page-09/p9_cat.png"
        			}
    			]
		},
		{
			// Dog Window Cycler
			type: "Cycler",
    			content: [
        			{
            			type: "Sprite",
            			id: "dog1",
            			x: "600px",
            			y: "140px",
            			numFrames: 1,
            			frameDelay: 6,
            			url: "images/pages/page-09/p9_dog.png"
        			},
        			{
            			type: "Sprite",
            			id: "dog2",
            			x: "634px",
            			y: "133px",
            			numFrames: 1,
            			frameDelay: 2,
            			url: "images/pages/page-09/p9_dog.png"
        			},
        			{
            			type: "Sprite",
            			id: "dog3",
            			x: "560px",
            			y: "150px",
            			numFrames: 1,
            			frameDelay: 2,
            			url: "images/pages/page-09/p9_dog.png"
        			},
        			{
            			type: "Sprite",
            			id: "dog4",
            			x: "680px",
            			y: "124px",
            			numFrames: 1,
            			frameDelay: 2,
            			url: "images/pages/page-09/p9_dog.png"
        			}
    			]
		},

        {
			type: "TextArea",
            width: "600px",
			x: "50px",
			y: "800px",
			align: "left",
			color: "#222222",
			size: 48,
			font: "Gill Sans",
			text: "But it was a very windy day. And the wind was HUNGRY.",
            sound: {
		      startTime: 69,
		      endTime: 74,
		      loop: false
	       }
		},
		{
			type: "TextArea",
			x: 0,
			y: 95,
			align: "center",
			color: "#222222",
			size: 18,
			font: "Gill Sans",
			text: "Page 7"
		}
	]
});

PBS.KIDS.storybook.config.pages.push({
    background: {
		url: "images/pages/page-10/page-10_0002s_0000_Layer-2.png"
	},
	content: [
        {
            // Leaf 2 Animation
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/anim/leaf_2.png",
            numFrames: 6,
            frameDelay: 20,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: true

        },
        {
            // Character Animation
			type: "Sprite",
			x: "0px",
			y: "360px",
			url: "images/pages/page-10/figs.png",
            numFrames: 2,
            frameDelay: 450,
            autoStart: true,
            autoReset: false,
            playOnPress: false,
            loop: false
        },

        {
            // Wind Animation
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/anim/wind_right_sheet.png",
            numFrames: 8,
            frameDelay: 30,
            autoStart: true,
            autoReset: true,
            playOnPress: true,
            loop: true

        },
		{
			type: "TextArea",
			x: 0,
			y: 95,
			align: "center",
			color: "#222222",
			size: 18,
			font: "Gill Sans",
			text: "Page 8"
		}
	]
});
