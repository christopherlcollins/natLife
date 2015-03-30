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


//-----------------interactions-----------------

bindComponents();

nextButton.click(function(){next();});
prevButton.click(function(){prev();});
upButton.click(function(){up();});
downButton.click(function(){down();});

$(nextButton).on({
	
	mouseover : function(){startNext();},
	mouseleave : function(){cancelNext();}
		
}, nextButton);

$(prevButton).on({
	
	mouseover : function(){startPrev();},
	mouseleave : function(){cancelPrev();}
		
}, prevButton);

$(upButton).on({
	
	mouseover : function(){startUp();},
	mouseleave : function(){cancelUp();}
		
}, upButton);

$(downButton).on({
	
	mouseover : function(){startDown();},
	mouseleave : function(){cancelDown();}
		
}, downButton);







function startNext(){
	console.log('startNext');
}
function cancelNext(){
	console.log('cancelNext');
}


function next(){
	
//active becomes previous
//previous is removed
//next becomes active
//add next

console.log('next');

activeVid.removeClass('active');
activeVid.addClass('previous');
prevVid.remove();
nextVid.removeClass('next');
nextVid.addClass('active');
appendElement();	
	
	
}

function startPrev(){
	console.log('startPrev');
}
function cancelPrev(){
	console.log('cancelPrev');
}

function prev(){
	
//active becomes next
//next is removed
//previous becomes active
//add previous

console.log('prev');

activeVid.removeClass('active');
activeVid.addClass('next');
nextVid.remove();
prevVid.removeClass('previous');
prevVid.addClass('active');
prependElement();	

	
	
}

function startUp(){
	console.log('startUp');
}
function cancelUp(){
	console.log('cancelUp');
}


function up(){
	
console.log('up');
	
//characters becomes below
//sub characters becomes active	

characterSection.removeClass('sectionActive');	
characterSection.addClass('sectionBelow');
subCharacterSection.removeClass('sectionAbove');
subCharacterSection.addClass('sectionActive');	
	
}

function startDown(){
	console.log('startDown');
}
function cancelDown(){
	console.log('cancelDown');
}

function down(){
	
console.log('down');


//subCharacters becomes above
//characters becomes active
	
characterSection.removeClass('sectionActive');	
characterSection.addClass('sectionBelow');
subCharacterSection.removeClass('sectionAbove');
subCharacterSection.addClass('sectionActive');	
	
	
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
activeVid = $('.active').find('video');
nextVid = $('.next').find('video');
prevVid = $('.previous').find('video');
pauseMenu = $('.pauseMenu');
characterSection = $('#characters');
subCharacterSection = $('subCharacters');
	
}


function appendElement(){}
function prependElement(){}


//-----------------sub actions-----------------

function animateUI(){}

