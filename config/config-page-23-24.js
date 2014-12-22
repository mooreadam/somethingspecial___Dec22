PBS.KIDS.storybook.config.pages.push({
    background: {
		url: "images/pages/page-25/page-25_0001_plate.png"
	},
    sound: {
		startTime: 177,
		endTime: 205,
		loop: false
	},
	content: [


        
        
        
             {
            // nest Animation 2
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/pages/page-25/25n_3.png",
            numFrames: 4,
            startDelay: 185,
            frameDelay: 10,
            autoStart: true,
            autoReset: false,
            playOnPress: false,
            loop: false

        },

        
        
       
       
                           {
            // fade
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/pages/page-25/whiteoutFade2.png",
            numFrames: 4,
            startDelay: 750,
            frameDelay: 70,
            autoStart: true,
            autoReset: false,
            playOnPress: false,
            loop: false

        },
        
             
                    {
            // fade
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/pages/page-25/whiteoutFade.png",
            numFrames: 4,
            startDelay: 770,
            frameDelay: 70,
            autoStart: true,
            autoReset: false,
            playOnPress: false,
            loop: false

        },
        
                    {
            // fade
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/pages/page-25/whiteout.png",
            numFrames: 4,
            startDelay: 790,
            frameDelay: 70,
            autoStart: true,
            autoReset: false,
            playOnPress: false,
            loop: false

        },

           
             
                   {
            // Leaf 1 Animation
			type: "Sprite",
			x: 0,
			y: -20,
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
            width: "650px",
			align: "left",
			color: "#222222",
			size: 48,
			font: "Gill Sans",
			text: "Suddenly, there was a whoosh and a thump as something landed on the steps beside them.",
            sound: {
		      startTime: 177,
		      endTime: 182,
		      loop: false
	       }
		},
        {
			type: "TextArea",
			x: "50px",
			y: "850px",
			align: "left",
			color: "#222222",
			size: 48,
			font: "Gill Sans",
			text: "\“Oh!\” said Sally. \“It’s perfect!\”",
            sound: {
		      startTime: 185,
		      endTime: 188,
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
			text: "Page 23"
		}
	]
});

PBS.KIDS.storybook.config.pages.push({
    background: {
		url: "images/pages/page-26/page-26_0001_plate.png"
	},
	
	
	content: [

        {
            // nest
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/pages/page-26/26n.png",
            numFrames: 5,
            startDelay:950,
            frameDelay: 50,
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
			type: "TextArea",
			x: "50px",
			y: "50px",
            width: "650px",
			align: "right",
			color: "#222222",
			size: 48,
			font: "Gill Sans",
			text: "She carefully picked up the bird’s nest and put it on the plate. The bell rang, and a few minutes later, Millie came up the drive.",
            sound: {
		      startTime: 190,
		      endTime: 203,
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
			text: "Page 24"
		}
	]
});
