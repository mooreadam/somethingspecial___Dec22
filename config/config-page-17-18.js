PBS.KIDS.storybook.config.pages.push({
    background: {
		url: "images/pages/page-19/page-19_0002_Layer-1.png"
	},
    sound: {
		startTime: 120,
		endTime: 130,
		loop: false
	},
	content: [
        
        {
            //  Char ealk Animation
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/pages/page-19/char.png",
            numFrames: 3,
            frameDelay: 150,
            autoStart: true,
            autoReset: false,
            playOnPress: false,
            loop: false
        },
        {
            //  Eclair Animation
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/pages/page-19/19-e.png",
            numFrames: 5,
            startDelay: 100,
            frameDelay: 50,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: false
        },
        {
            // Wind Animation
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/anim/wind2_left.png",
            numFrames: 6,
            frameDelay: 50,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: true

        },
        {
            // Left light
            type: "Cycler",
            content: [
            {
                type: "Sprite",
                id: "light-1",
                x: "0px",
                y: "230px",
                numFrames: 1,
                frameDelay: 1,
                url: "images/pages/page-19/l1.png"
            },
            {
                type: "Sprite",
                id: "light-2",
                x: "0px",
                y: "230px",
                numFrames: 1,
                frameDelay: 1,
                url: "images/pages/page-19/l2.png"
            }
            ]
        },
        {
			type: "TextArea",
			x: "50px",
			y: "50px",
            width: "500px",
			align: "left",
			color: "#222222",
			size: 48,
			font: "Gill Sans",
			text: "As they crossed the road again, the wind began to play.",
            sound: {
		      startTime: 120,
		      endTime: 125,
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
			text: "Page 17"
		}
	]
});

PBS.KIDS.storybook.config.pages.push({
    background: {
		url: "images/pages/page-20/page-20_0002_Layer-1.png"
	},

	content: [

        {
            //  Char ealk Animation
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/pages/page-20/char.png",
            numFrames: 4,
            frameDelay: 150,
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
			url: "images/anim/wind2_right.png",
            numFrames: 6,
            frameDelay: 50,
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
			url: "images/pages/page-20/20e.png",
            numFrames: 7,
            startDelay: 250,
            frameDelay: 50,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: false
        },
        {
            // Right light
            type: "Cycler",
            content: [
            {
                type: "Sprite",
                id: "light-1",
                x: "540px",
                y: "290px",
                numFrames: 1,
                frameDelay: 1,
                url: "images/pages/page-20/l1.png"
            },
            {
                type: "Sprite",
                id: "light-2",
                x: "540px",
                y: "290px",
                numFrames: 1,
                frameDelay: 1,
                url: "images/pages/page-20/l2.png"
            }
            ]
        },
        {
			type: "TextArea",
			x: "200px",
			y: "750px",
            width: "500px",
			align: "right",
			color: "#222222",
			size: 48,
			font: "Gill Sans",
			text: "\“Never mind,\” said Mum. \“We’ve still got three left\”.",
            sound: {
		      startTime: 126,
		      endTime: 130,
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
			text: "Page 18"
		}
	]
});
