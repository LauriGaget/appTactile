;(function($){


var $page = document.getElementById("page");

var sidebar = 0;

var hammertime = new Hammer($page);


// Annime les "swipe"

hammertime.on("swiperight", function(ev) {
            if(sidebar){
                return true
            }

            $("#page").animate({translateX: "650px"}, 500)
            
            sidebar = 1;

});

hammertime.on("swipeleft", function(ev) {
            if(!sidebar){
                return true
            }

            $("#page").animate({translateX: "0px"}, 500)
            
            sidebar = 0;

});

// Annime le Drag 
hammertime.on("pan", function(ev){
         
           if(ev.deltaX > 650){
               return false;
           }
           if(ev.direction == 4 && !sidebar ){
               $("#page").animate({translateX: ev.deltaX + "px"}, 0);
           }

         

           if(ev.direction == 2 && sidebar ){
            $("#page").animate({translateX: (650 + ev.deltaX) + "px"}, 0);
        }

})

// Détermine l'évenement en fin de Drag

hammertime.on("panend", function(ev){
            if(ev.direction == 4 && !sidebar){
                if(ev.deltaX > 250){
                    $("#page").animate({translateX: "650px"}, 200)
                    console.log("dragend")
                    sidebar = 1;

                }

                else{
                    $("#page").animate({translateX: "0px"}, 200)
                    
            
                    
                }
            }
            if(ev.direction == 2 && sidebar){
                if(ev.deltaX < -150){
                    $("#page").animate({translateX: "0px"}, 200)
                    console.log("dragend")
                    sidebar = 0;

                }

                else{
                    $("#page").animate({translateX: "650px"}, 200)
            
                   ;
                }
            }
})

// Faire apparaitre Galerie 

var $galerie = document.getElementById("galerie");

var link = document.getElementById("galerie-link");

var arrow = document.getElementById("arrow");

var hammerlink = new Hammer(link);

var hammerarrow = new Hammer(arrow);



hammerlink.on("tap", function(ev){
    $("#galerie").animate({"top" : "5%", "left" : "5%"}, 300)
    
    $galerie = true
    
})

hammerarrow.on("tap", function(ev){
  $("#galerie").animate({"top" : "-1000px", "left" : "-1000px"}, 300)
  
    $galerie = false
    
})



// Cadre A Deplacer 
// CARD 1

var myBlock = document.getElementById('myElement1');
var mc = new Hammer(myBlock);


mc.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }) );


mc.on("pan", handleDrag);


var lastPosX = 0;
var lastPosY = 0;
var isDragging = false;
function handleDrag(ev) {
  
  
  var elem = ev.target;
  
 
  if ( ! isDragging ) {
    isDragging = true;
    lastPosX = elem.offsetLeft;
    lastPosY = elem.offsetTop;
    
  }
  
  
  var posX = ev.deltaX + lastPosX;
  var posY = ev.deltaY + lastPosY;
  

  elem.style.left = posX + "px";
  elem.style.top = posY + "px";

  if (ev.isFinal) {
    isDragging = false;
    
  }
}

// CARD 2

var myBlock = document.getElementById('myElement2');
var mc = new Hammer(myBlock);


mc.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }) );


mc.on("pan", handleDrag);


var lastPosX = 0;
var lastPosY = 0;
var isDragging = false;
function handleDrag(ev) {
  
  
  var elem = ev.target;
  
 
  if ( ! isDragging ) {
    isDragging = true;
    lastPosX = elem.offsetLeft;
    lastPosY = elem.offsetTop;
    
  }
  
  
  var posX = ev.deltaX + lastPosX;
  var posY = ev.deltaY + lastPosY;
  

  elem.style.left = posX + "px";
  elem.style.top = posY + "px";

  if (ev.isFinal) {
    isDragging = false;
    
  }
}

// CARD 3 

var myBlock = document.getElementById('myElement3');
var mc = new Hammer(myBlock);


mc.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }) );


mc.on("pan", handleDrag);


var lastPosX = 0;
var lastPosY = 0;
var isDragging = false;
function handleDrag(ev) {
  
  
  var elem = ev.target;
  
 
  if ( ! isDragging ) {
    isDragging = true;
    lastPosX = elem.offsetLeft;
    lastPosY = elem.offsetTop;
    
  }
  
  
  var posX = ev.deltaX + lastPosX;
  var posY = ev.deltaY + lastPosY;
  

  elem.style.left = posX + "px";
  elem.style.top = posY + "px";

  if (ev.isFinal) {
    isDragging = false;
    
  }
}
// Galerie Vidéo 



var videoLink = document.getElementById("video-link");

var arrow2 = document.getElementById("arrow2");

var hammerlink = new Hammer(videoLink);

var hammerarrow = new Hammer(arrow2);



hammerlink.on("tap", function(ev){
    $("#galerie-vidéo").animate({"top" : "5%", "left" : "5%"}, 300)
    
    
    
})

hammerarrow.on("tap", function(ev){
  $("#galerie-vidéo").animate({"top" : "-1000px", "right" : "-1000px"}, 300)
  
    
    
})

// Vidéo 

var louvreLink = document.getElementById("louvre-link");
var louvre = false
var hammerLouvre = new Hammer(louvreLink);

hammerLouvre.on("tap", function(ev){
  if(dijon){
    $("#dijon").fadeTo(700, 0)
    $("#dijon").animate({"display": "none"})
  }
  $("#louvre").animate({"display": "block"})
  $("#louvre").fadeTo(900, 1)
  louvre = true
  
    
})



var dijonLink = document.getElementById("dijon-link");
var dijon = false
var hammerDijon = new Hammer(dijonLink);

hammerDijon.on("tap", function(ev){
  if(louvre){
    $("#louvre").fadeTo(700, 0)
    $("#louvre").animate({"display": "none"})
  }
  $("#dijon").animate({"display": "block"})
  $("#dijon").fadeTo(900, 1)
  dijon = true
  
    
})

// A la Une 

// Apparitiion et dispariton de la div
var topLink = document.getElementById("top-link");

var hammerTop = new Hammer(topLink);
var top = false

function rotateIn(){
  $("#top").animate({"transform": "rotateY(0deg)"}, 1000)
}


hammerTop.on("tap",function(ev){
  if(!top){
    $("#top").animate({"display": "block"},)
    setTimeout(rotateIn, 1)
    top = true
  }
  else{
    $("#top").animate({"transform": "rotateY(-180deg)"}, 700)
    top = false
  }

})

// Oeuvre suivante 


var nextLink = document.getElementById("next");

var hammerNext = new Hammer(nextLink);
var el = document.getElementById("top")
var nombre = 1


function changeOeuvre(){
  
  $(el).animate({"background-image": "url('../appTactile/image/oeuvre"+nombre+".jpg')"})
    if(nombre<5){
      nombre += 1
    }
    else{
      nombre = 0
    }  
    console.log(nombre)

}


hammerNext.on("tap", function(ev){


  $("#top").animate({"transform": "rotateY(180deg)"}, 1500)
  setTimeout(changeOeuvre, 1000)
  setTimeout(rotateIn, 1001) 
 
 
})



})(Zepto)