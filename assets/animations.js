//GENERAL


//TWINKLE
gsap.to("#stars1", {scrollTrigger: "#stars1", opacity:.01, duration:1, stagger:{each:.2, yoyo:true, repeat:-1}});
gsap.to("#stars2", {scrollTrigger: "#stars2", opacity:.05, duration:1.3, stagger:{each:0.15, yoyo:true, repeat:-1}});
gsap.to("#stars3", {scrollTrigger: "#stars3", opacity:.02, duration:1.5, stagger:{each:0.2, yoyo:true, repeat:-1}});
gsap.to("#stars4", {scrollTrigger: "#stars4", opacity:.05, duration:2, stagger:{each:0.15, yoyo:true, repeat:-1}});

//FLOAT
gsap.to(".float", {scrollTrigger: ".float", y:25, duration:1.9,  transformOrigin:"50%,50%", stagger:{each:0.6, yoyo:true, yoyoease: true, repeat:-1}});
gsap.to(".eyeball", {scrollTrigger: ".eyeball", y:25, duration:1.9,  transformOrigin:"50%,50%", stagger:{each:0.6, yoyo:true, yoyoease: true, repeat:-1}});


//HOMEPAGE

//SUN SPIN
gsap.to("#sun", {rotation:360, duration:15, ease:Power0.easeNone,  repeat:-1, transformOrigin:"50%,50%"});

//MOON FLOAT
gsap.to("#moon", { y:35, duration:3, yoyo:true, yoyoease:Power0.easeNone, repeat:-1,});
gsap.to("#moonsmall", { y:10, duration:3, yoyo:true, yoyoease:Power0.easeNone, repeat:-1,});
gsap.to("#moontiny", { y:7, duration:1.5, yoyo:true, yoyoease:Power0.easeNone, repeat:-1,});










// JavaScript Document






