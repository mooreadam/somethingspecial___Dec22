PBS.KIDS.storybook.config.pages.push({
    background: {
		url: "images/pages/page-27/bg.png"
	},
    sound: {
		startTime: 204,
		endTime: 234.5,
		loop: false
	},
	content: [
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
            // Butterfly Intro Animation
			type: "Sprite",
			x: 0,
			y: 0,
			url: "images/pages/page-27/27b.png",
            numFrames: 8,
            startDelay: 400,
            frameDelay: 40,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: false

        },
        
        // Static butterfly body
        {
                type: "Sprite",
                id: "mixer-1",
                x: "574px",
                y: "303px",
                numFrames: 2,
                frameDelay: 710,
                url: "images/pages/page-27/bfly1.png"
            
        },
        
        
        
        
        // bfly Cycler
        {
            type: "Cycler",
            content: [
                
            {
                type: "Sprite",
                id: "mixer-1",
                x: "574px",
                y: "305px",
                numFrames: 1,
                frameDelay: 1,
                url: "images/pages/page-27/blank.png"
            },
            {
                type: "Sprite",
                id: "mixer-2",
                x: "574px",
                y: "305px",
                numFrames: 2,
                frameDelay: 20,
                url: "images/pages/page-27/b_anim2.png",
                loop: true
            }
            
            ]
        },
       
        
        
        
        {
			type: "TextArea",
			x: "50px",
			y: "50px",
			align: "left",
            width: "700px",
			color: "#222222",
			size: 48,
			font: "Gill Sans",
			text: "\“Happy birthday, Millie\” said Mum. \“We brought you something special\”. \“It’s beautiful!\” said Millie.",
            sound: {
		      startTime: 203,
		      endTime: 213,
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
			text: "Page 25"
		}
	]
});

PBS.KIDS.storybook.config.pages.push({
    background: {
		url: "images/pages/page-28/page-28_0004s_0000_Layer-0.png"
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
			type: "TextArea",
            width: "600px",
			x: "100px",
			y: "50px",
			align: "right",
			color: "#222222",
			size: 48,
			font: "Gill Sans",
			text: "Together they walked home. Millie zipped the bird’s nest carefully into her school bag.",
            sound: {
		      startTime: 215,
		      endTime: 223,
		      loop: false
	       }
		},
        {
			type: "TextArea",
            width: "600px",
			x: "100px",
			y: "650px",
			align: "right",
			color: "#222222",
			size: 48,
			font: "Gill Sans",
			text: "\“Why did you bring a plate to school, Mum?\” she asked. \“It’s a long story,\” said Mum. \“I’ll explain when we get home.\”",
            sound: {
		      startTime: 224,
		      endTime: 235,
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
			text: "Page 26"
		}
	]
});
