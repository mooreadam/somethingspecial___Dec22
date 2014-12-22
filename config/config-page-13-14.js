PBS.KIDS.storybook.config.pages.push({
    background: {
		url: "images/pages/page-15/page-15_0004s_0000_Layer-1.png"
	},
    sound: {
		startTime: 99,
		endTime: 112,
		loop: false
	},
	content: [

        {
            //  Char walk Animation
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/pages/page-15/char.png",
            numFrames: 2,
            frameDelay: 400,
            startDelay: 200,
            autoStart: true,
            autoReset: false,
            playOnPress: false,
            loop: false
        },
        {
            //  Ecalir levitattino Animation
			type: "Sprite",
			x: "328px",
			y: "259px",
			url: "images/pages/page-15/15-e.png",
            numFrames: 7,
            startDelay: 80,
            frameDelay: 30,
            autoStart: true,
            autoReset: false,
            playOnPress: false,
            loop: false
        },
        {
            //  Gull Animation
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/pages/page-15/15_gull.png",
            numFrames: 8,
            startDelay: 230,
            frameDelay: 30,
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
			url: "images/anim/wind_left_sheet.png",
            numFrames: 8,
            frameDelay: 30,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: true

        },
        {
			// Fountain Cycler
			type: "Cycler",
    			content: [
        			{
            			type: "Sprite",
            			id: "blank",
            			x: "0px",
            			y: "0px",
            			numFrames: 1,
            			url: "images/pages/page-15/blank.png"
        			},
        			{
            			type: "Sprite",
            			id: "fountain",
            			x: "450px",
            			y: "327px",
            			numFrames: 3,
            			frameDelay: 15,
            			url: "images/pages/page-15/fountain_anim.png",
                        loop: true
        			}
    			]
		},
        {
			// Gull Cycler
			type: "Cycler",
    			content: [
        			{
            			type: "Sprite",
            			id: "blank",
            			x: "94px",
            			y: "694px",
            			numFrames: 1,
            			url: "images/anim/gull_cycle_1.png"
        			},
        			{
            			type: "Sprite",
            			id: "fountain",
            			x: "94px",
            			y: "694px",
            			numFrames: 1,
            			frameDelay: 1,
            			url: "images/anim/gull_cycle_2.png"
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
			text: "As they were walking along the Parade, the wind decided to feed the birds.",
            sound: {
		      startTime: 99,
		      endTime: 107,
		      loop: false
	       }
		},
        {
			type: "TextArea",
			x: "50px",
			y: "800px",
            width: "500px",
			align: "left",
			color: "#222222",
			size: 48,
			font: "Gill Sans",
			text: "\“Never mind,\” said Mum. \“We’ve still got five left\”.",
            sound: {
		      startTime: 108,
		      endTime: 112,
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
			text: "Page 13"
		}
	]
});

PBS.KIDS.storybook.config.pages.push({
    background: {
		url: "images/pages/page-16/page-16_0004s_0000_Layer-1.png"
	},
	content: [
        
        {
            //  Ship Animation
			type: "Sprite",
			x: "380px",
			y: "350px",
			url: "images/pages/page-16/ship.png",
            numFrames: 10,
            startDelay: 80,
            frameDelay: 80,
            autoStart: true,
            autoReset: false,
            playOnPress: false,
            loop: false
        },
        {
            //  Gull Animation
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/anim/gull_right_to_left.png",
            numFrames: 8,
            startDelay: 50,
            frameDelay: 30,
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
			url: "images/anim/wind_right_sheet.png",
            numFrames: 8,
            frameDelay: 30,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: true

        },
        {
            //  Clickable Gull Animation
			type: "Sprite",
			x: 0,
			y: "767px",
			url: "images/pages/page-16/interact-gull.png",
            numFrames: 8,
            startDelay: 0,
            frameDelay: 15,
            autoStart: false,
            autoReset: true,
            playOnPress: true,
            loop: false
        },
        
        

        
        {
            //  Char walk Animation
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/pages/page-16/char.png",
            numFrames: 2,
            frameDelay: 400,
            startDelay: 200,
            autoStart: true,
            autoReset: false,
            playOnPress: false,
            loop: false
        },
        
        
                                    {
            //  Yaught Animation
			type: "Sprite",
			x: "-140px",
			y: "330px",
			url: "images/anim/yaught5.png",
            numFrames: 8,
            startDelay: 0,
            frameDelay: 80,
            autoStart: false,
            autoReset: false,
            playOnPress: true,
            loop: false
        },
        
	
        
        
        
/*        			// Gull Cycler2
			type: "Cycler",
    			content: [
        			{
            			type: "Sprite",
            			id: "blank",
            			x: "281px",
            			y: "118px",
            			numFrames: 1,
            			url: "images/anim/sitting_gull_flying.png"
        			},
        			{
            			type: "Sprite",
            			id: "fountain",
            			x: "281px",
            			y: "118px",
            			numFrames: 7,
            			frameDelay: 13,
            			url: "images/anim/gull_flying_Left.png"
            			
            		
            			
        			}
    			]
		},*/
        
        
        
		{
			type: "TextArea",
			x: 0,
			y: 95,
			align: "center",
			color: "#222222",
			size: 18,
			font: "Gill Sans",
			text: "Page 14"
		}
	]
});
