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

function startNext(){}
function cancelNext(){}


function next(){
	
//active becomes previous
//previous is removed
//next becomes active
//add next

activeVid.removeClass('active');
activeVid.addClass('previous');
prevVid.remove();
nextVid.removeClass('next');
nextVid.addClass('active');
appendElement();	
	
	
}

function startPrev(){}
function cancelPrev(){}

function prev(){
	
//active becomes next
//next is removed
//previous becomes active
//add previous

activeVid.removeClass('active');
activeVid.addClass('next');
nextVid.remove();
prevVid.removeClass('previous');
prevVid.addClass('active');
prependElement();	

	
	
}

function startUp(){}
function cancelUp(){}


function up(){
	
//characters becomes below
//sub characters becomes active	

characterSection.removeClass('sectionActive');	
characterSection.addClass('sectionBelow');
subCharacterSection.removeClass('sectionAbove');
subCharacterSection.addClass('sectionActive');	
	
}

function startDown(){}
function cancelDown(){}

function down(){

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

var nextButton = $('#buttonNext');
var prevButton = $('#buttonNext');
var upButton = $('#buttonNext');
var downButton = $('#buttonNext');
var nextTitle = $('.next').find('.title');
var prevTitle = $('.previous').find('.title');
var activeTitle = $('.active').find('.title');
var nextSubtitle = $('.next').find('.subtitle');
var prevSubtitle = $('.previous').find('.subtitle');
var activeSubtitle = $('.active').find('.subtitle');
var activeVid = $('.active').find('video');
var nextVid = $('.next').find('video');
var prevVid = $('.previous').find('video');
var pauseMenu = $('.pauseMenu');
var characterSection = $('#characters');
var subCharacterSection = $('subCharacters');
	
}


function appendElement(){}
function prependElement(){}


//-----------------sub actions-----------------

function animateUI(){}

