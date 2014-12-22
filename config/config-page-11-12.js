PBS.KIDS.storybook.config.pages.push({
    background: {
		url: "images/pages/page-13/page-13_0001_Background-copy.png"
	},
    sound: {
		startTime: 87,
		endTime: 98,
		loop: false
	},
	content: [

        {
            //  Gull Animation
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/anim/gull_right_to_left.png",
            numFrames: 8,
            startDelay: 120,
            frameDelay: 20,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: false
        },
        {
            //  Char walk Animation
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/pages/page-13/chars.png",
            numFrames: 3,
            startDelay: 100,
            frameDelay: 200,
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
			url: "images/anim/wind_left_sheet.png",
            numFrames: 8,
            frameDelay: 30,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: true

        },
        {
            //  Eclair Animation
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/pages/page-13/p13_eclair.png",
            numFrames: 7,
            frameDelay: 40,
            startDelay: 250,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: false
        },

        {
			type: "TextArea",
			x: "50px",
			y: "50px",
			align: "left",
            width: "400px",
			color: "#222222",
			size: 48,
			font: "Gill Sans",
			text: "When they crossed the road outside the dairy, the wind POUNCED again.",
            sound: {
		      startTime: 87,
		      endTime: 93,
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
			text: "Page 11"
		}
	]
});

PBS.KIDS.storybook.config.pages.push({
    background: {
		url: "images/pages/page-14/page-14_0001_Background-copy.png"
	},

	content: [

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
            playOnPress: false,
            loop: true

        },

         {
            //  Gull Animation
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/anim/gull_right_to_left.png",
            numFrames: 8,
            startDelay: 0,
            frameDelay: 20,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: false
        },

        {
			// Light Cycler
			type: "Cycler",
    			content: [
        			{
            			type: "Sprite",
            			id: "l1",
            			x: 0,
            			y: 0,
            			numFrames: 1,
            			url: "images/pages/page-14/light_1.png"
        			},
        			{
            			type: "Sprite",
            			id: "l2",
            			x: 0,
            			y: 0,
            			numFrames: 1,
            			url: "images/pages/page-14/light_2.png"
        			}
    			]
		},

        {
			type: "TextArea",
			x: "300px",
			y: "700px",
            width: "400px",
			align: "right",
			color: "#222222",
			size: 48,
			font: "Gill Sans",
			text: "\“Never mind,\” said Mum. \“We’ve still got six left\”.",
            sound: {
		      startTime: 94,
		      endTime: 98,
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
			text: "Page 12"
		}
	]
});
