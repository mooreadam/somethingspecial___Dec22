PBS.KIDS.storybook.config.pages.push({
    background: {
		url: "images/pages/page-11/page-11_0002s_0000_figures.png"
	},
    
    sound: {
		startTime: 75,
		endTime: 86,
		loop: false
	},
    
	content: [
        /*{
            // Eclair Animation
			type: "Sprite",
			x: "100px",
			y: 0,
			url: "images/pages/page-11/e.png",
            numFrames: 10,
            frameDelay: 20,
            startDelay: 300,
            autoStart: true,
            autoReset: false,
            playOnPress: false,
            loop: false
        },*/
        // Left Eclair Animation
        {
            type: "Sprite",
			x: "228px",
			y: 0,
			url: "images/pages/page-11/left.png",
            numFrames: 5,
            frameDelay: 20,
            startDelay: 250,
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
            width: "500px",
			color: "#222222",
			size: 48,
			font: "Gill Sans",
			text: "When they got to the bottom of the street, the wind POUNCED.",
            sound: {
		      startTime: 75,
		      endTime: 81,
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
			text: "Page 09"
		}
	]
});

PBS.KIDS.storybook.config.pages.push({
    background: {
		url: "images/pages/page-12/page-12_0002s_0000_figures.png"
	},
	content: [
        // Right Eclair Animation
        {
            type: "Sprite",
			x: 0,
			y: 0,
			url: "images/pages/page-11/right.png",
            numFrames: 4,
            frameDelay: 40,
            startDelay: 290,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: false
        },
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
            // Leaf 2 Animation
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/anim/leaf_3.png",
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
			url: "images/anim/wind_right_sheet.png",
            numFrames: 8,
            frameDelay: 30,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: true

        },
        {
			type: "TextArea",
			x: "350px",
			y: "600px",
			align: "right",
            width: "350px",
			color: "#222222",
			size: 48,
			font: "Gill Sans",
			text: "\“Never mind,” said Mum. “We’ve still got seven left.\”",
            sound: {
		      startTime: 82,
		      endTime: 86,
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
			text: "Page 10"
		}
	]
});
