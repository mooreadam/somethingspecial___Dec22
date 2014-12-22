PBS.KIDS.storybook.config.pages.push({
    background: {
		url: "images/pages/page-05/pages-05_0001s_0000_cocoa.png"
	},
    sound: {
		startTime: 25,
		endTime: 44,
		loop: false
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
            text: "Page 3"
        },
        {
			type: "TextArea",
            width: "600px",
			x: "50px",
			y: "50px",
			align: "left",
			color: "#222222",
			size: 48,
			font: "Gill Sans",
			text: "So they measured and stirred and beat the mixture, then Sally helped Mum pipe it onto the baking tray in long yellow sausages.",
            sound: {
		      startTime: 25,
		      endTime: 34,
		      loop: false
	       }
		},
        
        // Bird Spin Anim
        {
            type: "Sprite",
            id: "bird-2",
            x: "248px",
            y: "341px",
            autoStart: false,
            autoReset: true,
            playOnPress: true,
            numFrames: 9,
            frameDelay: 5,
            url: "images/pages/page-05/bird-anim.png"
        },
        {
            // Girl 1, kneeling on chair
			type: "Sprite",
			x: "303px",
			y: "421px",
			url: "images/pages/page-05/girl.png",
            numFrames: 2,
            autoStart: true,
            autoReset: false,
            playOnPress: false,
            frameDelay: 300,
		},
        {
            // Mum 1, standing over stove
			type: "Sprite",
			x: "505px",
			y: "178px",
			url: "images/pages/page-05/page-05_0002s_0001s_0000_mum-1.png",
            numFrames: 2,
            frameDelay: 550,
            loop: false,
            playOnPress: false,
            autoStart: true,
            autoReset: false
		},
        // Pot Stir
        {
			type: "Cycler",
    			content: [
        			{
                        type: "Sprite",
                        id: "bird-2",
                        x: "543px",
                        y: "379px",
                        autoStart: false,
                        autoReset: true,
                        playOnPress: true,
                        numFrames: 1,
                        frameDelay: 15,
                        url: "images/pages/page-05/potme.png"
                    },
        			{
                        type: "Sprite",
                        id: "bird-2",
                        x: "545px",
                        y: "377px",
                        autoStart: false,
                        autoReset: true,
                        loop: true,
                        playOnPress: true,
                        numFrames: 4,
                        frameDelay: 15,
                        url: "images/pages/page-05/stir_pot_anim.png"
                    },
    			]
		},
        
        {
            // Cat 1, looking at stove
			type: "Sprite",
			x: "550px",
			y: "783px",
			url: "images/pages/page-05/cat.png",
            numFrames: 3,
            frameDelay: 300,
            loop: false,
            startDelay: 400,
            playOnPress: false,
            autoStart: true,
            autoReset: false
		},
        {
            // Table Corner
			type: "Sprite",
			x: "584px",
			y: "904px",
			url: "images/pages/page-05/corner.png"
		}
	]
});

PBS.KIDS.storybook.config.pages.push({
    background: {
		url: "images/pages/page-06/page-06_0002s_0000_cocoa.png"
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
      text: "Page 4"
    },
        {
            // Mum 2, with baking tray
			type: "Sprite",
			x: "234px",
			y: "155px",
			url: "images/pages/page-06/p6_mum.png",
            numFrames: 2,
            frameDelay: 550,
            autoStart: true,
            autoReset: false,
            playOnPress: false

		},
        {
            // Girl 2, stirring
			type: "Sprite",
			x: "0px",
			y: "502px",
			url: "images/pages/page-06/p6_girl.png",
            autoStart: true,
            autoReset: false,
            playOnPress: false,
            numFrames: 3,
            frameDelay: 240,
            startDelay: 60

		},
        /*// Mixer Cycler 
        {
            type: "Cycler",
            content: [
            {
                type: "Sprite",
                id: "mixer-1",
                x: "380px",
                y: "560px",
                numFrames: 1,
                frameDelay: 1,
                url: "images/pages/page-06/mixer_1.png"
            },
            {
                type: "Sprite",
                id: "mixer-2",
                x: "380px",
                y: "560px",
                numFrames: 1,
                frameDelay: 1,
                url: "images/pages/page-06/mixer_2.png"
            }
            ]
        },*/
        {
                type: "Sprite",
                id: "mixer",
                x: "380px",
                y: "560px",
                numFrames: 2,
                frameDelay: 100,
                url: "images/pages/page-06/mixer.png",
                autoStart: false,
                autoReset: true,
                playOnPress: true,
                loop: false,
                sound: {
                    startTime: 282,
                    endTime: 287,
                    loop: false,
                }
            },
        {
            // Cream
			type: "Sprite",
			x: "-100px",
			y: "740px",
			url: "images/pages/page-06/new-cream.png",
            numFrames: 6,
            frameDelay: 10,
            startDelay: 660,
            loop: false,
            playOnPress: false,
            autoStart: true,
            autoReset: false
		},                                   
        //microwave
          {
			type: "Sprite",
			x: "80px",
			y: "250px",
			url: "images/pages/page-06/microwave.png",
            numFrames: 4,
            frameDelay: 60,
            loop: false,
            playOnPress: true,
            autoStart: false,
            autoReset: true,
            sound: {
                startTime: 236.8,
                endTime: 238,
                loop: false
	       }
		},                                                      
        {
			type: "TextArea",
            width: "600px",
			x: "0px",
			y: "50px",
			align: "right",
			color: "#222222",
			size: 48,
			font: "Gill Sans",
			text: "They filled the éclairs with whipped cream",
            sound: {
                startTime: 36,
                endTime: 39,
                loop: false
	       }
		},
        {
			type: "TextArea",
			x: "-50px",
			y: "900px",
			align: "right",
			color: "#222222",
			size: 48,
			font: "Gill Sans",
			text: "... and iced them with chocolate icing.",
            sound: {
                startTime: 41,
                endTime: 44,
                loop: false
	       }
		}
	]
});
