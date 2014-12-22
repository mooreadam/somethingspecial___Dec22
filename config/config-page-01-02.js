PBS.KIDS.storybook.config.pages.push({
    background: {
		url: "images/pages/page-03/page-3-bg.png"
	},
    sound: {
		startTime: 11,
		endTime: 25,
		loop: false
	},
	content: [


        {
            // Vic
			type: "Sprite",
			x: "420px",
			y: "50px",
			url: "images/pages/page-03/vic_thinks.png",
            numFrames: 2,
            frameDelay: 580,
            loop: false,
            playOnPress: false,
            autoStart: true,
            autoReset: false
		},

        {
            //bird cycler

			type: "Cycler",
    			content: [
        			{
            			type: "Sprite",
            			id: "b1",
            			x: 0,
            			y: 0,
            			numFrames: 1,
            			frameDelay: 1,
            			url: "images/pages/page-03/bird-2.png"
        			},
        			{
            			type: "Sprite",
            			id: "b2",
            			x: 0,
            			y: 0,
            			numFrames: 1,
            			frameDelay: 1,
            			url: "images/pages/page-03/bird-3.png"
        			},
                    {
            			type: "Sprite",
            			id: "b3",
            			x: 0,
            			y: 0,
            			numFrames: 1,
            			frameDelay: 6,
            			url: "images/pages/page-03/bird-1.png"
        			},
    			]
		},
        {
            // Cat Painting
            type: "Sprite",
            x: "99px",
            y: "258px",
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
			x: "50px",
			y: "100px",
			align: "left",
			color: "#222222",
			size: 48,
			font: "Gill Sans",
			text: "It was Sally’s big sister’s birthday.",
            sound: {
		      startTime: 11,
		      endTime: 14,
		      loop: false
	       }
		},
        {
			type: "TextArea",
			x: "50px",
			y: "800px",
			align: "left",
			color: "#222222",
			size: 48,
			font: "Gill Sans",
			text: "\“I know,\” said Mum.",
            sound: {
		      startTime: 20,
		      endTime: 25,
		      loop: false
        }
      },
      {
      type: "TextArea",
      x: "50px",
      y: "86  0px",
      align: "left",
      color: "#222222",
      size: 48,
      font: "Gill Sans",
      text: "\“Let’s make chocolate éclairs.\”",
            sound: {
          startTime: 20,
          endTime: 25,
          loop: false
         }
       }


	]
});

PBS.KIDS.storybook.config.pages.push({
    background: {
		url: "images/pages/page-04/page-04_0002s_0000_not-flat-copy.png"
	},

	content: [
		{
			type: "TextArea",
			x: 0,
			y: 95,
			align: "center",
			color: "#222222",
			size: 18,
			font: "Gill Sans",
			text: "Page 1"
		},
        {
            // Sally Eating
            type: "Sprite",
            x: "30px",
            y: "370px",
            url: "images/pages/page-04/sally-eat.png",
            numFrames: 3,
            startDelay: 375,
            frameDelay: 60,
            loop: true,
            playOnPress: false,
            autoStart: true,
            autoReset: true

        },
        {
            // Dog Painting
            type: "Sprite",
            x: "197px",
            y: "311px",
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
            width: "540px",
			x: "150px",
			y: "100px",
			align: "right",
			color: "#222222",
			size: 48,
			font: "Gill Sans",
			text: "\“Can we give Millie something special when we pick her up from school?\” Sally asked Mum.",
            sound: {
		      startTime: 14,
		      endTime: 20,
		      loop: false
	       }
		}
	]
});
