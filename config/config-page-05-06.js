PBS.KIDS.storybook.config.pages.push({
    background: {
		url: "images/pages/page-07/page-07_0001s_0000_plate.png"
	},
    sound: {
		startTime: 47,
		endTime: 60,
		loop: false
	},
	content: [

        {
            // Eclair Animation
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/pages/page-07/eclairs.png",
            numFrames: 12,
            frameDelay: 70,
            autoStart: true,
            autoReset: false,
            playOnPress: false,
        },
        {
			type: "TextArea",
			x: "50px",
			y: "50px",
            width: "550px",
			align: "left",
			color: "#222222",
			size: 48,
			font: "Gill Sans",
			text: "Sally carefully arranged eight of the éclairs onto a plate.",
            sound: {
		      startTime: 47,
		      endTime: 51,
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
			text: "Page 5"
		}
	]
});

PBS.KIDS.storybook.config.pages.push({
    background: {
		url: "images/pages/page-08/page-08_0001s_0000_plate.png"
	},
	content: [
        {
            // Eclair Animation
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/pages/page-08/eclair.png",
            numFrames: 12,
            frameDelay: 70,
            autoStart: true,
            autoReset: false,
            playOnPress: false
        },
		{
			type: "TextArea",
			x: 0,
			y: 95,
			align: "center",
			color: "#222222",
			size: 18,
			font: "Gill Sans",
			text: "Page 6"
		},
        {
			type: "TextArea",
            width: "550px",
			x: "150px",
			y: "50px",
			align: "right",
			color: "#222222",
			size: 48,
			font: "Gill Sans",
			text: "\“These ones don’t fit,\” she said.\“We’ll keep those for later,\” said Mum.",
            sound: {
		          startTime: 54,
		          endTime: 60,
		          loop: false
	       }
		}
	]
});
