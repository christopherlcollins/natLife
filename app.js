//-----attributes
var timeoutDelay = 1250;

//-----components


var nextButton;
var prevButton;
var upButton;
var downButton;
var nextTitle;
var prevTitle;
var activeTitle;
var nextSubtitle;
var prevSubtitle;
var activeSubtitle;
var activeElement;
var nextElement;
var prevElement;
var activeVid;
var nextVid;
var prevVid;
var pauseMenu;
var characterSection;
var subCharacterSection;


//-----states
var isViewingMainCharacters;
var isViewingSubCharacters;
var isHoveringOnNext;
var isTransitioningToNext;
var isHoveringOnPrev;
var isTransitioningToPrev;
var isHoveringOnUp;
var isTransitioningToUp;
var isHoveringOnDown;
var isTransitioningToDown;
var isPlaying;
var isPaused;

var nextCountdown;
var prevCountdown;
var upCountdown;
var downCountdown;


//-----------------interactions-----------------

bindComponents();
resizeElement();

nextButton.click(function(){next();});
prevButton.click(function(){prev();});
upButton.click(function(){up();});
downButton.click(function(){down();});

$(nextButton).on({
	
	mouseenter : function(){startNext();},
	mouseleave : function(){cancelNext();}
		
}, nextButton);

$(prevButton).on({
	
	mouseenter : function(){startPrev();},
	mouseleave : function(){cancelPrev();}
		
}, prevButton);

$(upButton).on({
	
	mouseenter : function(){startUp();},
	mouseleave : function(){cancelUp();}
		
}, upButton);

$(downButton).on({
	
	mouseenter : function(){startDown();},
	mouseleave : function(){cancelDown();}
		
}, downButton);







function startNext(){
	isHoveringOnNext = true;
	console.log('startNext');
	nextCountdown = setTimeout(function(){next();}, timeoutDelay);
}
function cancelNext(){
	isHoveringOnNext = false;
	console.log('cancelNext');
	clearTimeout(nextCountdown);
}


function next(){
	
//active becomes previous
//previous is removed
//next becomes active
//add next

console.log('next');

activeElement.removeClass('active');
activeElement.addClass('previous');
prevElement.remove();
nextElement.removeClass('next');
nextElement.addClass('active');
appendElement();
bindComponents();	
	
	
}

function startPrev(){
	isHoveringOnPrev = true;
	console.log('startPrev');
	prevCountdown = setTimeout(function(){prev();}, timeoutDelay);
	
}
function cancelPrev(){
	isHoveringOnPrev = false;
	console.log('cancelPrev');
	clearTimeout(prevCountdown);

	
}

function prev(){
	
//active becomes next
//next is removed
//previous becomes active
//add previous

console.log('prev');

activeElement.removeClass('active');
activeElement.addClass('next');
nextElement.remove();
prevElement.removeClass('previous');
prevElement.addClass('active');
prependElement();
bindComponents();	

	
	
}

function startUp(){
	isHoveringOnUp = true;
	console.log('startUp');
	upCountdown = setTimeout(function(){up();}, timeoutDelay);


}
function cancelUp(){
	isHoveringOnUp = false;
	console.log('cancelUp');
	clearTimeout(upCountdown);

}


function up(){
	
console.log('up');
	
//characters becomes below
//sub characters becomes active	


characterSection.removeClass('sectionActive');	
characterSection.addClass('sectionBelow');

subCharacterSection.removeClass('sectionAbove');
subCharacterSection.addClass('sectionActive');

upButton.hide();
downButton.show();
	
bindComponents();
	
}

function startDown(){
	isHoveringOnDown = true;
	console.log('startDown');
	downCountdown = setTimeout(function(){down();}, timeoutDelay);

}
function cancelDown(){
	isHoveringOnDown = false;
	console.log('cancelDown');
	clearTimeout(downCountdown);

}

function down(){
	
console.log('down');


//subCharacters becomes above
//characters becomes active
	
subCharacterSection.removeClass('sectionActive');	
subCharacterSection.addClass('sectionAbove');

characterSection.removeClass('sectionBelow');
characterSection.addClass('sectionActive');

downButton.hide();
upButton.show();


bindComponents();	
	
	
}

function playPause(){}

function chapterNext(){}


//-----------------major actions-----------------

function bindComponents(){

nextButton = $('#buttonNext');
prevButton = $('#buttonPrevious');
upButton = $('#buttonUp');
downButton = $('#buttonDown');
nextTitle = $('.next').find('.title');
prevTitle = $('.previous').find('.title');
activeTitle = $('.active').find('.title');
nextSubtitle = $('.next').find('.subtitle');
prevSubtitle = $('.previous').find('.subtitle');
activeSubtitle = $('.active').find('.subtitle');
activeElement = $('.sectionActive').find('.active');
nextElement = $('.sectionActive').find('.next');
prevElement = $('.sectionActive').find('.previous');
activeVid = $('.sectionActive').find('.active').find('video');
nextVid = $('.sectionActive').find('.next').find('video');
prevVid = $('.sectionActive').find('.previous').find('video');
pauseMenu = $('.pauseMenu');
characterSection = $('#characters');
subCharacterSection = $('#subCharacters');
	
}

function createElement(elclass,vidurl,title,subtitle){

var template = "<div class='element "+elclass+"' style='width:"+$(window).width()+"; height:"+$( window ).height()+"'><video></video><div class='title'>Jonnathan</div><div class='subtitle'></div></div>";


return template;	

}



function appendElement(){

$('.sectionActive').append(createElement('next','','',''));	
	
}

function prependElement(){

$('.sectionActive').prepend(createElement('previous','','',''));	
	
	
}

function resizeElement(){$('.element').width( $( window ).width() ); $('.element').height( $( window ).height() ); }


//-----------------sub actions-----------------

function animateUI(){}

