
//fuction for slack profile pix display with natural dimension.
function displaySlsackprofilepic(){
    var imgElement = document.getElementById('profile-px');

    imgElement.onload = function(){
       imgElement.style.width = imgElement.naturalWidth +'px';
       imgElement.style.height = imgElement.naturalHeight +'px';
    };  
};


// fuction for slack email

function displaySlackEmail(slackEmail){
    var container = document.getElementById(slackmailcont);
    container.innerText = slackEmail;
}

var slackEmail = 'slack Email:chidinmauma20@gmail.com';
displaySlackEmail(slackEmail);

// fuction for slack name

function displaySlackName(slackname) {
    var container = document.getElementById(slacknamecont);
    container.innerText = slackname;
    container.setAttribute('data-testid', 'slackname');
    
}
var slackname = 'Slack Name: Dinmz';
displaySlackName(slackname)

// fuction for current time

function displayCurrentUTCTime() {
    var container = document.getElementById('timecont');
    var now = new Date();
    var UTCTime = now.toUTCString();
    container.innerText = UTCTime;
    container.setAttribute('data-testid', 'currentTimeUTC');
    displayCurrentUTCTime();
    setInterval(displayCurrentUTCTime, 1000);
}

// fuction for date

function displayCurrentDayOfWeek(){
var container = document.getElementById('currentday');

var now = new Date();
var dayOfWeek = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' , 'Saturday',];
var currentDay = dayOfWeek[now.getUTCDay()];
container = innerText.currentDay;
displayCurrentDayOfWeek();
}





