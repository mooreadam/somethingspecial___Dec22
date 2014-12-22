// Final Page of Story

PBS.KIDS.storybook.config.pages.push({
    background: {
		url: "images/pages/page-29/29-party.png"
	},
    sound: {
		startTime: 257,
		endTime: 269.3,
		loop: true
	},
	content: [
        {
            //cage
            type: "Sprite",
			x: "200px",
			y: "200px",
			url: "images/pages/page-29/cage.png",
        },
        {
            // MIllie
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/pages/page-29/mil.png",
            numFrames: 2,
            startDelay: 50,
            frameDelay: 160,
            autoStart: true,
            autoReset: false,
            playOnPress: false,
            loop: true
        },
        {
            // Bird Animation
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/pages/page-29/bird-anim.png",
            numFrames: 5,
            startDelay: 200,
            frameDelay: 50,
            autoStart: true,
            autoReset: false,
            playOnPress: false,
            loop: false
        },
        {
            // Cat Painting
            type: "Sprite",
            x: "80px",
            y: "225px",
            url: "images/pages/page-03/cat.png",
            numFrames: 2,
            frameDelay: 40,
            loop: false,
            playOnPress: true,
            autoStart: false,
            autoReset: true

        },
		{
			type: "TextArea",
			x: 0,
			y: 95,
			align: "center",
			color: "#222222",
			size: 18,
			font: "Gill Sans",
			text: "Page 27"
		}
	]
});

PBS.KIDS.storybook.config.pages.push({
    background: {
		url: "images/pages/page-30/30-party.png"
	},
	content: [
        
        {
            // Sally
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/pages/page-30/sal.png",
            numFrames: 3,
            startDelay: 400,
            frameDelay: 100,
            autoStart: true,
            autoReset: false,
            playOnPress: false,
            loop: true
        },
         {
            // Overlay
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/pages/page-30/page-29_0000_p30-foreground.png"
        },



        {
            // Bfly transition Animation
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/pages/page-30/bflyxx.png",
            numFrames: 7,
            startDelay: 0,
            frameDelay: 50,
            autoStart: true,
            autoReset: false,
            playOnPress: false,
            loop: false
        },
        {
            // Bfly hidden body
			type: "Sprite",
			x: "15px",
			y: "660px",
			url: "images/pages/page-27/bfly-hide.png",
            numFrames: 2,
            frameDelay: 300,
            autoStart: true,
            autoReset: false,
            playOnPress: false,
            loop: false
        },
        
        

        
        
                
        {
            // Bird Animation
			type: "Sprite",
			x: 0,
			y: 35.5,
			url: "images/pages/page-30/bird_anim2.png",
            numFrames: 5,
            startDelay: 300,
            frameDelay: 50,
            autoStart: true,
            autoReset: false,
            playOnPress: false,
            loop: false
        },
        
        
       
        {
			// bird wings
			type: "Cycler",
    			content: [
        			{
            			type: "Sprite",
            			id: "cat1",
            			x: "650px",
            			y: "380px",
            			numFrames: 1,
            			frameDelay: 6,
            			url: "images/pages/page-30/blank.png"
        			},
        			{
            			type: "Sprite",
            			id: "cat2",
            			x: 0,
            			y: 55,
            			numFrames: 2,
            			frameDelay: 50,
            			url: "images/pages/page-30/flap3.png",
                        loop: true
        			}
    			]
		},
        {
			// bfly wings
			type: "Cycler",
    			content: [
        			{
            			type: "Sprite",
            			id: "cat1",
            			x: "15px",
            			y: "660px",
            			numFrames: 1,
            			frameDelay: 6,
            			url: "images/pages/page-27/blank.png"
        			},
        			{
            			type: "Sprite",
            			id: "cat2",
            			x: "15px",
            			y: "660px",
            			numFrames: 2,
            			frameDelay: 30,
            			url: "images/pages/page-30/b_anim.png",
                        loop: true
        			}
    			]
		},





                {
            // Dog Painting
            type: "Sprite",
            x: "197px",
            y: "285px",
            url: "images/pages/page-04/dog.png",
            numFrames: 2,
            frameDelay: 40,
            loop: false,
            playOnPress: true,
            autoStart: false,
            autoReset: true

        },


		{
			type: "TextArea",
			x: 0,
			y: 95,
			align: "center",
			color: "#222222",
			size: 18,
			font: "Gill Sans",
			text: "Page 28"
		}
	]
});
