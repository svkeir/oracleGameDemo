function card (name, description, image){
    this.name = name;
    this.description = description;
    this.image = image;
}

var deck = [
    new card(``,`Care and nourishing is what is needed, wether it's affection
        you resist accepting or affection you hesitate to show.`, `affection`),
    new card(``, `What feels out of balance in your life right now?`, `balance`),
    new card(``, `What do you do to bring more beauty into the world? What do 
        you do to notice and honor the beauty around you?`,   `beauty`),
    new card(``, `Proceed carefully with your intention, might be advisable
        to take a step back to reorient yourself`,   `caution`),
    new card(``, `Remember you have the power to choose the path forward.`,   
        `choice`),
    new card(``, `Conflict might be inevitable, but it doesn't need to be 
        devastating, be intentional with your approach.`,   `confrontation`),
    new card(``, `Use you wit, your intuition and all your skills to stay one step 
        ahead, not everything is what it seems.`,   `cunning`),
    new card(``, `The world is full of mysteries and wonder to the inquisitive mind,
        stay curious.`,   `curiosity`),
    new card(``, `We all wear masks at times, but remember who you are behind it so you, 
        they are tools, not truth.`,   `disguise`),
    new card(``, `Two sides of a coin, the yin and yang, everything has two sides,
        we can't forget that if we want to understand the full picture.`,   `duality`),
    new card(``, `The challenge is long and tough, the strength to endure comes from
         within. `,   `endurance`),
    new card(``, `Remember who your support network is, and be mindful to where 
        your support is needed.`,   `family`),
    new card(``, `Sometimes the best we can do is let go of what we are dragging, or what is 
        dragging us, so we can go with the flow.`,   `flow`),
    new card(``, `You have the freedom to explore your inner space and the world 
        around you, to explore what freedom means to you.`,   `freedom`),
    new card(``, `Don't let the focus on where you want to be blind you
        to the reasons to be grateful for where you are.`,   
        `gratitude`),
    new card(``, `There is always joy and happiness to be found if you can look for them
        even in the tiny and mundane.`,   `happiness`),
    new card(``, `Nurture our inner child, remember things you loved that you've tossed aside.`,   `innocence`),
    new card(``, `Allow inspiration to fill you with enthusiasm, channel it joyous ways.`,   `inspiration`),
    new card(``, `You've been searching for answers outside when it's time to look in.`,   `intuition`),
    new card(``, `Even in chaos you can create a quiet place within yourself, if you take time 
        to just sit with it all.`,   `meditation`),
    new card(``, `Energy that remains still becomes stagnant, it is your time to take action.`,   `movement`),
    new card(``, `Sometimes accomplishing something will require a group effort, call on your partners, 
        you are not alone.`,   `partnership`),
    new card(``, `Where patience leaves room, frustration is quick to find a home.`,   `patience`),
    new card(``, `You're going to have to look at this situation a different way if you want
        to understand what's actually going on.`,   `perspective`),
    new card(``, `Approach life with a sense of wonder and whimsy and you will keep
        finding ways to see it around you.`,   `playfulness`),
    new card(``, `We all feel vulnerable at some point, seek protection if you need to feel safe, 
        don't let fear hold you back.`,
        `protection`),
    new card(``, `All things must come to an end so they can start anew.`,   
        `rebirth`),
    new card( ``, `Take the time to check in with your body and take care or yourself.`, 
        `rest`),
    new card(``, `Are you being your true self or are you hiding who you really are?`,   
        `transparency`),
    new card(``, `Know when it's time for introspection and when it's time to seek guidance.`, 
        `wisdom`),

];

function getRandom(num){
    var randomNumber = 
    Math.floor(Math.random() * num);
    return randomNumber;
}


function getRandom2(num){
    var randomNumber2 = 
    Math.floor(Math.random() * num);

  do {
    Math.floor(Math.random() * num);
  } while (getRandom() === randomNumber2);

  return randomNumber2;
}

let randomNumber = getRandom(30);
let randomNumber2 = getRandom2(30);


document.getElementById("displayImg").onload
{
    document.getElementById("displayName").innerHTML 
    = '<h4 style="text-align:center;">Click the cards to Draw</h4>';
    
    document.getElementById("displayImg1").innerHTML 
    = '<img src="imgs/cards/cardBack.png">';
    
     document.getElementById("displayImg2").innerHTML 
    = '<img src="imgs/cards/cardBack.png">';


   
};


const oracleClown = document.querySelector("#oracleClown");

oracleClown.addEventListener("click", () => {
    oracleClown.classList.toggle("hide");
});


document.getElementById("displayImg1").onclick
    = function(){
   
 
    var index = randomNumber;
    var currentCard = deck[index];

    document.getElementById("displayImg1").innerHTML 
    = '<img src="imgs/cards/' + 
    currentCard.image + '.png">';

     document.getElementById("displayDescription1").innerHTML 
    = '<p>' +
    currentCard.description + '</p>';

    resetBtn.classList.toggle("resetDisplay");

    document.getElementById('displayImg1').style.pointerEvents = 'none';

    document.getElementById("displayName").innerHTML 
    = '';


};

document.getElementById("displayImg2").onclick
    = function(){

    var index = randomNumber2;
    var currentCard = deck[index];

    document.getElementById("displayImg2").innerHTML 
    = '<img src="imgs/cards/' + 
    currentCard.image + '.png">';


     document.getElementById("displayDescription2").innerHTML 
    = '<p>' +
    currentCard.description + '</p>';

    document.getElementById('displayImg2').style.pointerEvents = 'none';
};


const resetBtn = document.querySelector("#reset");

// function resetPage(){
//     // document.getElementById("displayImg1").innerHTML 
//     // = '<img src="imgs/cards/cardBack.png">';
    
//     //  document.getElementById("displayImg2").innerHTML 
//     // = '<img src="imgs/cards/cardBack.png">';

//     // document.getElementById("displayName").innerHTML 
//     // = '<h4 style="text-align:center;">Click the cards to Draw</h4>';

//     // document.getElementById("displayDescription1").innerHTML = "";

//     // document.getElementById("displayDescription2").innerHTML = "";

//     // document.getElementById('displayImg1').style.pointerEvents = 'auto';
//     // document.getElementById('displayImg2').style.pointerEvents = 'auto';

//     window.location.reload();
    
    
//     resetBtn.classList.toggle("resetDisplay");

// }

resetBtn.addEventListener('click', function() {
        window.location.reload();
    });

