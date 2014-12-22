PBS.KIDS.storybook.config.pages.push({
    background: {
		url: "images/pages/page-21/page-21_0000_background.png"
	},
    sound: {
		startTime: 131,
		endTime: 141,
		loop: false
	},
	content: [
       {
            //  ship Animation
			type: "Sprite",
			x: "82px",
			y: "150px",
			url: "images/pages/page-21/ship2.png",
            numFrames: 13,
            frameDelay: 80,
            autoStart: true,
            autoReset: false,
            playOnPress: false,
            loop: false
        },
        {
            //  bus Animation
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/pages/page-21/bus.png",
            numFrames: 3,
            frameDelay: 200,
            autoStart: true,
            autoReset: false,
            playOnPress: false,
            loop: false
        },
        {
            //  Char walk Animation
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/pages/page-21/char.png",
            numFrames: 2,
            startDelay: 100,
            frameDelay: 300,
            autoStart: true,
            autoReset: false,
            playOnPress: false,
            loop: false
        },
        {
            // Eclair Animation
			type: "Sprite",
			x: "30px",
			y: 0,
			url: "images/pages/page-21/p21_eclair1.png",
            numFrames: 6,
            frameDelay: 70,
            autoStart: true,
            autoReset: false,
            playOnPress: false,
            loop: false
        },
        {
            // Eclair Animation
			type: "Sprite",
			x: "-20px",
			y: 0,
			url: "images/pages/page-21/eclair2.png",
            numFrames: 10,
            startDelay: 370,
            frameDelay: 30,
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
            // Ship Sound
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/pages/page-21/ship_sound.png",
            numFrames: 1,
            frameDelay: 1,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: false,
            sound: {
		      startTime: 242,
		      endTime: 250,
		      loop: false
	       }

        },
        {
			type: "TextArea",
            width: "400px",
			x: "50px",
			y: "50px",
			align: "left",
			color: "#222222",
			size: 48,
			font: "Gill Sans",
			text: "It kept playing, all the way up the hill towards the school.",
            sound: {
		      startTime: 131,
		      endTime: 135,
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
			text: "Page 19"
		}
	]
});

PBS.KIDS.storybook.config.pages.push({
    background: {
		url: "images/pages/page-22/page-22_0000_background.png"
	},
	content: [
        {
            //  bus Animation
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/pages/page-22/bus.png",
            numFrames: 4,
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
			url: "images/anim/wind_right_sheet.png",
            numFrames: 8,
            frameDelay: 30,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: true

        },
        {
            // Bus Sound
			type: "Sprite",
			x: "300px",
			y: "215px",
			url: "images/pages/page-21/ship_sound.png",
            numFrames: 1,
            frameDelay: 1,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: false,
            sound: {
		      startTime: 251,
		      endTime: 256,
		      loop: false
	       }

        },
        {
			type: "TextArea",
            width: "400px",
			x: "300px",
			y: "650px",
			align: "right",
			color: "#222222",
			size: 48,
			font: "Gill Sans",
			text: "\“Never mind,\” said Mum. \“We’ve still got one left\”.",
            sound: {
		      startTime: 138,
		      endTime: 141,
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
			text: "Page 20"
		}
	]
});
