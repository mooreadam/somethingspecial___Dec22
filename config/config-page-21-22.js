PBS.KIDS.storybook.config.pages.push({

    sound: {
		startTime: 142,
		endTime: 178,
		loop: false
	},
	content: [
	
	
	

	{
	        // Foreground
			type: "Sprite",
			x: "0px",
			y: "0px",
			url: "images/pages/page-23/page-23_2SEPERATE_FOREGROUND_0003s_0000_Roseneath--School.png",
        },
        
	
	                     {
            // Tree
			type: "Sprite",
			x: 24.9,
			y: -6.8,
			url: "images/anim/Tree_Shake.png",
            numFrames: 1,
            frameDelay: 40,
            startDelay:710,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: true

        },
	
	
	
        {
            // char
			type: "Sprite",
			x: "504px",
			y: "494px",
			url: "images/pages/page-23/page-23_0002s_0000_fig1.png",
			
        },
     
        
        
        
        
                     {
            // Rustle Animation
			type: "Sprite",
			x: 27,
			y: 2,
			url: "images/anim/leaf_1_Green3.png",
            numFrames: 6,
            frameDelay: 9,
            startDelay:1390,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: true

        },
        
        
                             {
            // Rustle Animation 2
			type: "Sprite",
			x: 16,
			y: 27,
			url: "images/anim/leaf_1_Green3.png",
            numFrames: 6,
            frameDelay: 9,
            startDelay:1390,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: true

        },
        
                                     {
            // Rustle Animation 3
			type: "Sprite",
			x: 16,
			y: 17,
			url: "images/anim/leaf_1_Green3.png",
            numFrames: 6,
            frameDelay: 9,
            startDelay:1390,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: true

        },
        
        
                                             {
            // Rustle Animation 4
			type: "Sprite",
			x: 64,
			y: -20,
			url: "images/anim/leaf_1_Green3.png",
            numFrames: 6,
            frameDelay: 9,
            startDelay:1390,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: true

        },
        
        
        
        
                                                     {
            // Rustle Animation 5
			type: "Sprite",
			x: 45,
			y: -5.6,
			url: "images/anim/leaf_1_Green3.png",
            numFrames: 6,
            frameDelay: 9,
            startDelay:1390,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: true

        },

        
        
        {
        	// Eclair
        	type: "Sprite",
        	x: "0px",
        	y: "0px",
        	url: "images/pages/page-23/23e.png",
        	numFrames: 10,
        	frameDelay: 15,
        	startDelay: 720,
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
			url: "images/anim/leaf_3.png",
            numFrames: 6,
            frameDelay: 20,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: true

        },
        
        
                {
            // Gust Animation  
			type: "Sprite",
			x: 15,
			y: -20,
			url: "images/anim/wind_gust2.png",
            numFrames: 8,
            frameDelay: 25,
            startDelay: 1490,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: false,

        },
        
                        {
            // Gust Animation  
			type: "Sprite",
			x: 15,
			y: -20,
			url: "images/anim/wind_gust2.png",
            numFrames: 8,
            frameDelay: 23,
            startDelay: 1370,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: false,

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
			// Gull Cycler
			type: "Cycler",
    			content: [
        			{
            			type: "Sprite",
            			id: "blank",
            			x: "181px",
            			y: "794px",
            			numFrames: 1,
            			url: "images/anim/gull_cycle_2.png"
        			},
        			{
            			type: "Sprite",
            			id: "fountain",
            			x: "181px",
            			y: "794px",
            			numFrames: 1,
            			frameDelay: 1,
            			url: "images/anim/gull_cycle_1.png"
        			}
    			]
		},
        {
			type: "TextArea",
            width: "500px",
			x: "50px",
			y: "50px",
			align: "left",
			color: "#222222",
			size: 48,
			font: "Gill Sans",
			text: "Finally they got to the top of the school drive. They sat down to wait for Millie.",
            sound: {
		      startTime: 142,
		      endTime: 149,
		      loop: false
	       }
		},
        {
			type: "TextArea",
            width: "400px",
			x: "50px",
			y: "300px",
			align: "left",
			color: "#222222",
			size: 48,
			font: "Gill Sans",
			text: "But the wind had not finished its game.",
            sound: {
		      startTime: 151,
		      endTime: 155,
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
			text: "Page 21"
		}
	]
});

PBS.KIDS.storybook.config.pages.push({
 
		
	
	
	content: [
	



		{
	        // background
			type: "Sprite",
			x: "0px",
			y: "0px",
			url: "images/pages/page-24/page-24_2SEPERATE_TREE_0003s_0000_Roseneath--School.png",
        },
	
   

        
       
        
                                             {
            // Rustle Animation 3
			type: "Sprite",
			x: 28,
			y: 7,
			url: "images/anim/leaf_1_Green3_right2.png",
            numFrames: 6,
            frameDelay: 9,
            startDelay:1390,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: true

        },
        
        
        

        
        
        	{
	        // Foreground
			type: "Sprite",
			x: "0px",
			y: "0px",
			url: "images/pages/page-24/page-24_2SEPERATE_FOREGROUND_0003s_0000_Roseneath--School.png",
        },

	              
	          /*  {
            // nest
			type: "Sprite",
			x: -84,
			y: -10,
			url: "images/pages/page-24/Tree_Shake2.png",
            numFrames: 2,
            startDelay:1080,
            frameDelay: 10,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: true

        }, */

	                
                                                    {
            // Rustle Animation 4
			type: "Sprite",
			x: 20,
			y: 2,
			url: "images/anim/leaf_1_Green3_right2.png",
            numFrames: 6,
            frameDelay: 9,
            startDelay:1390,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: true

        },
        
        
        
                                                            {
            // Rustle Animation 5
			type: "Sprite",
			x: 8,
			y: -10,
			url: "images/anim/leaf_1_Green3_right2.png",
            numFrames: 6,
            frameDelay: 9,
            startDelay:1390,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: true

        },


		                                                         {
            // Rustle Animation 6
			type: "Sprite",
			x: -13,
			y: -20,
			url: "images/anim/leaf_1_Green3_right2.png",
            numFrames: 6,
            frameDelay: 9,
            startDelay:1390,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: true

        },



                {
            // Gust Animation  
			type: "Sprite",
			x: 15,
			y: -20,
			url: "images/anim/wind_gust2.png",
            numFrames: 8,
            frameDelay: 25,
            startDelay: 1490,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: false,

        },
        
                        {
            // Gust Animation  
			type: "Sprite",
			x: 15,
			y: -20,
			url: "images/anim/wind_gust2.png",
            numFrames: 8,
            frameDelay: 23,
            startDelay: 1370,
            autoStart: true,
            autoReset: true,
            playOnPress: false,
            loop: false,

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
			// Gull Cycler2
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
		},

        
        
        
        {
			type: "TextArea",
            width: "600px",
			x: "80px",
			y: "50px",
			align: "right",
			color: "#222222",
			size: 48,
			font: "Gill Sans",
			text: "\“Now what are we going to give Millie?\” asked Sally. ",
            sound: {
		      startTime: 155,
		      endTime: 160,
		      loop: false
	       }
		},
        {
			type: "TextArea",
			x: "50px",
			y: "650px",
            width: "650px",
			align: "right",
			color: "#222222",
			size: 48,
			font: "Gill Sans",
			text: "The wind came rushing down. It swooped over them, and landed in the big tree behind them. It played and chattered in the leaves, as if it was negotiating a deal.",
            sound: {
		      startTime: 161,
		      endTime: 175,
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
			text: "Page 22"
		}
	]
});
