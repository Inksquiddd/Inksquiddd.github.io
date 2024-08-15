function playCraps(){
    //this is a one line comment 
    /* function to play craps in game.html
    Rules for craps 
    Role 2 Die
    add up to 7 or 11 you lose!
    If they are doubles and event, you win!
    Everything else is a push! (keep playing)

    Diego Garcia 27jun2024
    */
   console.log("playCraps() started");
    //roll dice
    var die1 = Math.floor(Math.random() * 6) + 1;
    console.log(die1);
    document.getElementById("die1Res").innerHTML = "die 1 result" + die1;

    var die2 = Math.floor(Math.random() * 6) + 1;
    console.log(die2);
    document.getElementById("die2Res").innerHTML = "die 2 result" + die2;

    var sum= die1 +die2;
    console.log(sum);
    document.getElementById("sumRes").innerHTML = "die 1 result" + sum;
   
    //look for a loss
    if(sum == 7 || sum == 11){
        console.log("loss");
        document.getElementById("gameRes").innerHTML = "The Knights know your location! (you lose)" + sum;
    } else if (die1 == die2 && die1 % 2 ==0 ){//look for a win 
        console.log("win");
        document.getElementById("gameRes").innerHTML = "Welcome to Cyberia please come again! (you win)" + sum;
    }else {//look for a push
        console.log("tie");
        document.getElementById("gameRes").innerHTML = "Fix your navi (try again)" + sum
    }

    //adding check creds for strings.html input validation//
    
    

}

function checkCreds() {

    console.log("checkCreds() started");
    document.getElementById("loginStatus").innerHTML = "status of login";
    //make requird veriiable//
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLength;
    var zipCodeNumb;
    //extract required variables//
    firstName = document.getElementById("fName").value; 
    console.log("the first name was entered as:" + firstName);
    
    lastName = document.getElementById("lName").value; 
    console.log("the last name was entered as:" + lastName);
   
    zipCode = document.getElementById("zipCode").value; 
    console.log("the zipCode was entered as:" + zipCode);

    fullName = firstName + " " + lastName; 
    console.log("the Fullname name was entered as:" + fullName);

    fullNameLength = fullName.length - 1; 
    console.log("the variable fullName has " + fullNameLength + " characters")

    zipCodeNumb= parseInt(zipCode);
    console.log("The actual zip code number is: " + zipCodeNumb);



    //testing 2 full name and zip code//
  
    if(fullNameLength > 20 || fullNameLength < 2){
        console.log("Invalid Full name");
        document.getElementById("loginStatus").innerHTML = "Invalid full name";
    } else if(zipCode.length != 5){
        console.log("Invalid zip code");
        document.getElementById("loginStatus").innerHTML = "invalid zipcode";

    } else {
        alert("user credentials passed, welcome to the site, " + fullName);
        document.getElementById("loginStatus").innerHTML = " credentials passed";

    }
}


//button movements for stopping and starting the train image//
function startfun(){
    console.log("startFun()started");
    document.getElementById("startButton").disabled= true;
    document.getElementById("stopButton").disabled= false;
    document.getElementById("myMarquee").start();
}

function stopfun(){
    console.log("startFun()stopped");
    document.getElementById("stopButton").disabled= true;
    document.getElementById("startButton").disabled= false;
    document.getElementById("myMarquee").stop();
}


function checkPalin(){
    console.log("checkPalin() started");

    //record the text input as a string
    var entStr;
    entStr = document.getElementById("palinInput").value;
    console.log("entStr is : "+entStr);

    //take away spaces
    var entStrNoSpace;
    entStrNoSpace = entStr.split(" ").join("");
    console.log("entStr with no spaces is: " + entStrNoSpace);

    //create revArray var and reverse string
    var revStr;
    const revArray = [];
    var length = entStrNoSpace.length -1;
    console.log("sting length is "+length);


    //input into array and reverse it
    for(var i = length; i >= 0; i-- ){
        revArray.push(entStrNoSpace[i]);
    }
        
    //convert to a string from array
    revStr = revArray.join("");
    console.log("reversed is "+ revStr);

    //compare rev to string and write to status
var equal = 0;
    equal = (entStrNoSpace ==revStr);
    console.log("the entry and reversed being equal is " + equal);
    //write the palindrome status
    if(equal == true){
        document.getElementById("palinStatus").innerHTML = entStr + " <b>is</b> a palindrome"
    }else{
          document.getElementById("palinStatus").innerHTML = entStr + " is <b>not</b> a palindrome"
    }
}

//assignment 11.1 play sound

function trainSounds(){
    console.log("trainSounds() started");
    mySound = new Sound("Train sounds.mp3");
    mySound.play();



function Sound(srcFile){
   console.log("sound function started with" + srcFile + "source file");
   this.sound = document.createElement("audio");
   this.sound.src = srcFile;
   //this.sound.setAttribute("preload","audio");
   this.sound.setAttribute("controls","none");
   document.body.appendChild(this.sound);
   this.play = function(){
        this.sound.play();
   }
   document.body.appendChild(this.sound);
   this.stop = function(){
    this.sound.pause();
    this.sound.currentTime = 0;
    }
    

  //audio will duplicate the more the image is clicked it is normal
}
}
//code for 12-1 Putting it all together  2024 july 29 
//alarm bell for the countdown
    function alarmSounds(){
    console.log("alarmSounds() started");
    mySound = new Audio("temBell.mp3");
    mySound.play();
    }

    function startTimer(){
        console.log("startTimer() started");
        var steps = document.getElementById("secInput").value;
        document.getElementById("timeLeft").innerHTML
        var currtime = steps;
        for(var i = 0; i<= steps; i++)
        setTimeout(function(){
          //the countdown result for timer and text and alarm
            if(currtime != 0 ){
                 document.getElementById("timeLeft").innerHTML = currtime;
            }else{
                document.getElementById("timeLeft").innerHTML = "Time is up!";
                alarmSounds();
            }
            console.log(currtime);
            currtime--;
        }, i*1000)
    }

