/*
BasketBall Game by Ahmed Osman, Grade 11, Computer Science: ICS3U. 
Completed on January 11th 2024.
It has 2000 lines of code including comments, and uses 39 Functions, 1 Object, 3
Array of Objects and more.

Summary:
Lines 8 - 81.

Starting Screen:
The starting Screen has the title of the game, a basketball bouncing and two buttons.
One of the buttons starts the game while the other one takes you to the description
screen.

Description Screen:
When you are first taken to the description screen you will see text saying "How To
Play?" and under it there is a button. That button will start the description slides
that will tell the user how to play the game. The first slide tells the user the
objective of the game. The next slide tells the users what the different difficulty
modes are and the third slide tells the user how to play. The user can then click the
"Go Back" button on the bottom left corner of the screen to go back to the starting
screen.
                                 Description:
                            *On the description slides*
Objective of the game:
First choose a Streak Goal, TO WIN shoot the ball into the net and get a streak that
is equal to your streak goal. There will be a moving wall that will temporarily block
the net. Shoot the ball at the right time because if the ball hits the wall your
streak will be reset.

Difficulty Modes:
Easy Mode has a Streak Goal of 3
Medium Mode has a Streak Goal of 5
Hard Mode has a Streak Goal of 7

How To Play
Click the UP key to dribble the ball. 
Click the DOWN key to stop dribbling the ball.
Click the shoot button on the bottom left corner to shoot the ball
And click the reset button on the bottom right corner after you’ve gotten the ball
into the net or if the ball hit the wall.


Difficulty Screen:
Once the user goes back to the starting screen and clicks the "Start Game" button
they will be taken to a screen where they can choose their difficulty setting. On the
screen there are three buttons, one is labeled "Easy" the other is labeled "Normal"
and the final one is labeled "Hard". If they click the easy button they will be taken
to the game and will be playing on easy mode with a streak goal of 3, they will only
have to get the ball into the net 3 times in a row without hitting the moving wall.
If they click the normal button the streak goal will be 5 and if they hit the hard
button the streak goal will be 7.

Game Screen:
Once the user chooses their difficulty they will be taken to the game screen. On the
screen there will be a basketball court with a net and lamppost. On the court there
is a player with a basketball and above the court there will be a moving wall that
will temporarily block the net. Behind the court there is a road with cars driving on
it and behind the road you can see the Toronto skyline. In the sky there will be a
setting sun, once the sun sets the moon comes out, the sky turns dark and the
lamppost turns on. 

To reiterate on the game screen there will be three buttons, the shoot button on the
bottom left corner of the screen, if the user clicks that button the player will
shoot the ball. Below the shoot button there is a "Go Back" button that will return
the user to the starting screen and on the bottom right corner there will be a reset
button, if the user clicks that button the ball will return to the players hand. If 
the user wants the player to dribble the ball they can click the UP key, if the user
wants the player to stop dribbling the ball they can click the DOWN key.

On the top left corner of the screen the user can see the streak goal that they chose
and on the top right screen the user can see their current streak.

If the user achieves their streak goal they will be taken to the ending screen.

Ending Screen:
If the user achieves their streak goal they will be taken to a screen that says "YOU
WIN". There will be a simple animation that makes a large ball in the center of the
screen rapidly become smaller until the user can see the ending screen. On the screen
there will be two buttons. One of them will allow the user to play the game again
while the other will take the user back the the starting screen.

Table of Contents
************************************

The List of my Functions:
Can be found from lines 230 - 1244.

The drawGrass(); function.
The drawTrees(); function.
The drawNet(); function.
The drawLampPost(); function.
The drawCourt(); function.
The drawTorontoSkyLine(); function.
The drawSun(); function.
The drawMoon(); function.
The startTimeCycle(); function.
The drawClouds(); function.
The drawPlayer(); function.
The mouseTracker(); function.
The drawGoBackButton(); function.
The drawResetButton(); function.
The reset(); function.
The drawBall(); function.
The dribbleBall(); function.
The moveWhileDribbling(); function.
The drawShootButton(); function.
The shootBall(); function.
The shoot(); function.
The drawWall(); function.
The moveWall(); function.
The createCollision(); function.
The recordStreak(); function.
The drawLargeBalll(); function.
The autoBounceLargeBall(); function.
The drawRoad(); function.
The Car Object.
The drawCars(); function.
The driveCars(); function.
The drawArrow(); function.
The drawXButton(); function.


The Main Program:
Can be found on lines 1245 - 1967.

The startingScreen(); function.
The descriptionScreen(); function.
The gameScreen(); function.
The youWinScreen(); function.
The difficutltyScreen(); function.
The draw function:
The mouseClicked function.
************************************
*/


/*
*************************************
My Main Global Variables
Can be found from lines 140 - 227
*************************************
*/
// Stores the basketball on the game screen's x coordinate.
var ballX = 300; 
// Stores the basketball on the game screen's y coordinate.
var ballY = 260;
// Stores the sun on both the game and description screen's x coordinate.
var sunX = 0;
// Stores the sun on both the game and description screen's y coordinate.
var sunY = 155;
// Stores the moon on both the game and description screen's x coordinate.
var moonX = 500;
// Stores the moon on both the game and description screen's y coordinate.
var moonY = 155;
// Stores the wall on the game screen's x coordinate. This never changes.
var wallX = 110;
// Stores the wall on the game screen's y coordinate.
var wallY = 20;
// Stores the basketball on both the starting and description screen's y coordinate.
var largerBallY = 365;
// Stores the first car's x coordinate.
var firstCarX = 0;
// Stores the second car's x coordinate.
var secondCarX = -10000;
// Stores the third car's x coordinate.
var thirdCarX = - 10000;
// Stores the y coordinates for all of my cars.
var carY = 245;
// Stores the x coordinates for my slides.
var slideX = 50;

// This variable stores the grass block image from Khan Academy's image catalog. 
var grassBlock = getImage("cute/GrassBlock");
// This variable stores the night background image from Khan Academy's image catalog.
var nightBackground = getImage("space/background");
// This variable stores the tall tree image from Khan Academy's image catalog. 
var tree = getImage("cute/TreeTall");
// This variable stores the star image from Khan Academy's image catalog. 
var star = getImage("cute/Star");

// This variable stores how fast the sun moves across the screen.
var sunSpeed = 0;
// This variable stores how fast any of my basketballs go up and down.
var ballSpeed = 0;
// This variable stores how fast the moon moves across the screen.
var moonSpeed = 0;
// This variable stores how fast the player shoots the ball, it records how fast the ball moves across the screen when the shoot(); function is called.
var shootSpeed;
// This variable stores how fast the wall goes up or down.
var wallSpeed;
// This variable stores how fast the car drives across the road.
var carSpeed = 2;
//This variable stores how fast my description slides move to the left.
var slideSpeed;

//This variable stores the angle that the player's arm is at.
var rotateArmAngle = 80;
//This variable stores the angle that the player's sleeve is at.
var rotateSleeveAngle = rotateArmAngle + 90;

// This variable records the user's streak while playing the game.
var streak = 0;
//This variable stores the user's current streak goal.
var streakGoal;
// This variable that starts a function if it is equal to a certain number.
var startFunction;
// This variable stores the current scene number.
var currentScene = 1;

// This variable stores which description slide is being showed on screen.
var slide = 0;
/*
This variable stores two possible numbers, 0 or 1. If it is equal to 0 than the
description slides do not play and if it is equal to 1 than the description slides
will play.
*/
var currentSlide = 0;

// This variable store the ball on the ending screen's size.
var ballSize = 450;
//This variable stores where the center of the ball on the ending screen will be.
var centerOfBall = 200;
/*
This variable will store how fast the ball on the ending screen will decrease in 
size.
*/
var decreaseSize;
//*************************************

/*
**************************
My Functions
**************************
*/
/* 
The drawGrass(); function is used to draw grass blocks across the bottom the the
screen. It is called in the drawCourt(); function and the descriptionScreen();
function.
*/

var drawGrass = function()
{
    /*
    This for loop draws grass in 50 by 50 squares grass across the bottom of the    
    screen.
    */
    for(var grassX = 0; grassX < 400; grassX += 50) 
    {
        image(grassBlock, grassX, 350, 50, 50);   
    }
};

/*
This function uses an Array of Objects and a for loop to draw two trees at each 
corner of the court. It is called in the drawCourt(); function.
*/

var drawTrees = function()
{
    // This array of objects store positions for the trees.
    var positions = [
        
        {x : -20, y : 130},
        {x : 370, y : 130},
        {x : 20, y : 130},
        {x : 330, y : 130}
    ];
    
    // This for loop iterates through the array, drawing a tree at each position.
    for(var i = 0; i < positions.length; i++)
    {
        var position = positions[i]; // This variable stores the values in the array                                          at index i.
        image(tree, position.x, position.y, 60, 200);
        
    }
};

/*
This function draws the net on the court. It is called in the gameScreen(); function.
It is not called in the drawCourt(); function because it needs to be called after the
drawBall(); function since when the ball is at the same coords it needs to look like
the ball is going in the net. The drawBall(); function also needs to be called after 
the drawCourt function.
*/

var drawNet = function()
{
    //draws the pole
    stroke(166, 146, 146);   // Changes stroke to grey.
    strokeWeight(15);        //Increases the stroke size so that the pole is thicker.
    line(20, 300, 20, 100);  
    
    strokeWeight(1);         // Resets stroke size.
    stroke(3, 3, 3);         // Resets stroke colour to black.
    
    fill(15, 13, 13);        // Makes fill colour black.
    rect(28, 130, 11, 10);   // Draws the backboard and pole connection.
    rect(40, 74, 5, 100);    // Draws the backboard.
    
    // Draws the net
    fill(240, 9, 63);        // Makes fill orange.
    noStroke();
    rect(46, 120, 3, 4);     // Draws the net rim and backboard connection.
    strokeWeight(1);         // Resets stroke size.
    stroke(0, 0, 0);         // Resets stroke colour to black.
    
    // All these lines draw the net strings.
    line(50, 120, 55, 175);
    line(90, 120, 85, 175);
    line(70, 120, 71, 175);
    line(60, 120, 63, 175);
    line(80, 120, 77, 175);
    line(55, 175, 71, 174);
    line(85, 175, 71, 174);
    
    // Simulates net rim gap.
    strokeWeight(3);         
    stroke(201, 87, 26);        // Makes the rim orange.
    if(sunX < 415)
    {
        fill(20, 203, 209);     // Makes fill blue when it is day.
    }
    else  
    {
        fill(129, 117, 168);    // Makes fill dark blue when itis night.
    }
    ellipse(70, 122, 40, 7);  
};

/*
This function draws a lamp post. Its if and else statements make it so that the lamp 
post turns "on" when it becomes "night" and "off" when it becomes "day". It is called
in the drawCourt(); function.
*/

var drawLampPost = function()
{
    strokeWeight(1);
    stroke(110, 96, 96);
    /*
    This if/else statement makes it so that the "bulb" turns on and on as the day   
    becomes night and vise versa.
    */
    if(sunX > 415)
    {
        fill(252, 239, 0);                      // Turns fill Yellow.
        image(star, 260, 150, 40, 40);          // Draws a star.
        ellipse(280, 170, 20, 20);              // Draws the light bulb.
    }
    else if(sunX < 415)
    {
        fill(214, 206, 206);                    // Turns fill gray.
        ellipse(280, 170, 20, 20);              // Draws the light bulb.
    }
     
    // Draws the half circle holding the light bulb and the pole/arc connection.
    fill(97, 97, 97);
    rect(275, 146, 35, 10, 100);
    arc(280, 170, 50, 30, 180, 360);
    
    // Draws the lamp post pole
    strokeWeight(10);
    stroke(97, 97, 97);
    line(310, 300, 310, 150);
    
    strokeWeight(1);                            // Resets stroke weight.
};

/*
This function draws the court, it is called in the gameScreen(); function.
*/

var drawCourt = function()
{
    strokeWeight(1);               // Resets Stroke Size.
    stroke(0, 0, 0);               // Resets Stroke Colour.
    fill(84, 72, 72);              // Makes fill slate gray.
    rect(0, 300, 400, 100);        // Draws the court.
    drawGrass();                   // Uses the drawGrass(); function to draw grass.
    drawTrees();                   // Calls the drawsTrees(); function.
    drawLampPost();                // Calls the drawsLampPost(); function.
};

/*
This function draws the Toronto Skyline behind the court and road. It includes a  
variety of different buildings, the CN Tower and the Sky Dome. This function is 
called in the gameScreen(); function.
*/

var drawTorontoSkyline = function()
{
    stroke(168, 151, 151);               // Makes stroke a light gray.
    // Draws the CN Tower.
    fill(115, 111, 115);                 // Makes fill a light gray.
    triangle(210, 275, 220, 120, 230, 275);
    ellipse(220, 160, 30, 20);
    
    // Draws many building with varying heights.
    fill(84, 78, 78);                    // Makes fill gray.
    rect(250, 235, 20, 100);
    rect(150, 206, 20, 100);
    rect(100, 212, 20, 100);
    rect(200, 239, 20, 100);
    rect(300, 203, 20, 100);
    rect(184, 218, 20, 100);
    rect(168, 225, 20, 100);
    rect(133, 196, 20, 100);
    rect(265, 208, 20, 100);
    rect(234, 224, 20, 100);
    rect(115, 234, 20, 100);
    rect(75, 225, 20, 100);
    rect(315, 223, 20, 100);
    rect(280, 238, 20, 100);
    rect(239, 239, 20, 100);
    
    // Draws the Sky Dome.
    fill(64, 50, 50);                  // Makes fill a dark gray.
    arc(159, 275, 75, 50, 180, 360);
    
};

//This function draws the sun. It is called in the startTimeCycle(); function.

var drawSun = function()
{
    noStroke();
    fill(255, 208, 0);                  // Makes fill yellow.
    ellipse(sunX, sunY, 30, 30);
};

//This function draws the moon. It is called in the startTimeCycle(); function.

var drawMoon = function()
{
    fill(163, 174, 181);                // Makes fill a dark gray.
    ellipse(moonX, moonY, 30, 30); 
};

/*
This function makes it so that is appears as if time is passing. It makes it so that
the sun rises and sets, when the sun sets the moon rises and then sets and so on. It 
is called in the gameScreen(); function.
*/

var startTimeCycle = function()
{
    /*
    This if/else statement makes it so the when the sun is on the canvas the sky
    is a light blue and when it is not then the sky becomes a dark blue
    It say 415 and not 400 since the coords of the sun and moon is at the center of
    the ellipse. So since the sun is 30 pixels wide it would need an extra 15 pixels
    for the sun to get completely off the canvas.
    */
    if(sunX < 415)         
    {
        background(0, 225, 255);    
    }
    else
    {
        image(nightBackground, 0, 0, 400, 400);
    }
    
    sunX+= 0.5;                 // This makes it so that the sun moves to the left.
    
    /*
    The next two if statements make it so that the sun goes in a arc across the       
    screen. It simulates the sun setting.
    */
    if(sunY > 150)
    {
        sunSpeed = -0.30;
    }
    
    if(sunY < 30) 
    {
        sunSpeed = +0.23;
    }
    sunY += sunSpeed;           //This increment sunSpeed to the sun's y coordinate.
    
    moonX+= 0.5;                // This makes it so that the sun moves to the left.
    
    /*
    The next two if statements make it so that the moon goes in a arc across the  
    screen. It simulates the moon setting.
    */
    
    if(moonY > 150)
    {
        moonSpeed = -0.30;
    }
    
    if(moonY < 30) 
    {
        moonSpeed = +0.23;
    }
   
    if(sunX === 415)
    {
        moonX = 0;   
        moonY = 151;
    }
    if(moonX === 415)
    {
        sunX = 0;
        sunY = 151;
    }
    moonY += moonSpeed;        //This increments moonSpeed to the moon's y coordinate
    drawSun();                 // Calls the drawSun(); function.
    drawMoon();                // Calls the drawSun(); function.
    
};

/*
This functions uses an array of objects to draw two clouds on the canvas. It also 
makes it so that the clouds go from white to a dark gray when it becomes night. It is
called in the gameScreen(); function.
*/

var drawClouds = function()
{
    // This array of Objects stores the cloud positions.
    var cloudPositions = [
        {x : 100, y : 100},
        {x : 300, y : 120}
    ];
    
    stroke(178, 189, 199);               // Makes the stroke a light gray.
    
    // This if/else statement makes it so that the clouds change colour as it turns       from day to night.
    if(sunX < 415)
    {
        fill(242, 234, 234);             // Makes fill white.
    } 
    else
    {
        fill(174, 180, 194);             // Makes fill a light gray.
    }
    
    /*
    This for loop iterates through the array of objects and draws a cloud at each   
    position.
    */
    for(var i = 0; i < cloudPositions.length; i++)
    {
        var position = cloudPositions[i];  // Stores the value of the array at index         i in a variable called position.
        ellipse(position.x, position.y, 135, 40);
        ellipse(position.x - 20, position.y - 5, 60, 45);
        ellipse(position.x + 20, position.y, 60, 45);
    }
};


/*
This function draws the player. It is called in the gameScreen(); function.
*/

var drawPlayer = function()
{
    // Resets stroke colour and weight.
    strokeWeight(1);       
    stroke(0, 0, 0);
    
    /*
    This code draws the right arm and sleeve at an angle, since I used the rotate
    function I had to use the translate function to put my objects in the places that
    I wanted them to be. The push and pop matrixes make it so that after rotating and
    translating the grid restores, otherwise the whole canvas would be rotated as  
    well.
    */
    pushMatrix(); 
    {
        
        translate(335, 238);
        rotate(rotateArmAngle);
        fill(181, 147, 112);
        rect(0, 0, 10, 39, 10);     // Draws the back arm
        
        translate(14, 14); 
        rotate(rotateSleeveAngle);
        fill(255, 0, 0);
        rect(0, 0, 15, 20);         // Draws the back sleeve.
    }
    popMatrix();
    
    
    fill(181, 147, 112);            // Makes fill a light brown.
    ellipse(340, 215, 30, 30);      // Draws the head.
    rect(335, 230, 10, 10);         // Draws the neck.
    
    fill(0, 0, 0);                  // Makes fill black.
    ellipse(330, 212, 2.5, 5);      // Draws the left eye.
    arc(330, 220, 5, 5, 0, 180);    // Draws the right eye.
    
    // Draws the hat.
    fill(255, 0, 0);
    arc(341, 205, 28, 22, 179, 384);  
    stroke(255, 0, 0);
    strokeWeight(5);
    line(340, 202, 319, 202);
    
    // Resets stroke colour and weight.
    strokeWeight(1);                
    stroke(0, 0, 0);
    
    /*
    The next few lines of code draws the rest of the body. It may look like the 
    ordering is odd since I had to change the colour multiple times but it had to be
    this way so that all the shapes overlapped properly.
    */
    
    
    fill(255, 0, 0);                 // Makes fill red.
    rect(330, 234, 20, 59);          // Draws the shirt.

    fill(181, 147, 112);             // Makes fill tan.
    rect(334, 276, 12, 45);          // Draws the leg.
    
    fill(56, 52, 52);                // Makes fill grey.
    rect(330, 276, 20, 20);          // Draws the shorts.
    
    fill(181, 147, 112);             // Makes fill tan.
    rect(335, 245, 10, 39, 10);      // Draws the arm.
    
    fill(255, 0, 0);                 // Makes fill red.
    rect(333, 240, 15, 15);          // Draws the sleeve.
    
    fill(0, 0, 0);                   // Makes fill black.
    rect(327, 320, 20, 7, 10);       // Draws the shoe.
};

/*
I made this function so that I could find specific coordinates a lot easier.
Currently it isn't called anywhere but I did use it while making my game.
*/

var mouseTracker = function()
{
    /*
    Creates a mouse tracker displaying a circle where your mouse is and displays
    the x and y coordinates
    */
    fill(20, 19, 19);
    ellipse(mouseX, mouseY, 10, 10);
    text(mouseX + ", " + mouseY, mouseX + 10, mouseY - 10);
};

/*
This function draws a go back button in the description and game screens. The 
parameters customize the coordinates, the size, the text size and the text's y 
postition. The parameters makes it so that I can customize the button size but to do 
that I would need to adjust the text size and y position. It does not do anything 
here but when called in the gameScreen(); and descriptionScreen(); functions it makes
the currentScene equal to 1 and makes the startingScreen start playing.
*/

var drawGoBackButton = function(x, y, w, h, sizeText, textYPos)
{
    /*
    This if/else statement makes it so that if the mouse is hovering over the go back
    button and the current scene is 3 or 2, the stroke of the button becomes bigger.
    */
    if(currentScene === 3)
    {
        if(mouseX > 20 && mouseX < 70 && mouseY > 375 && mouseY < 395)
        {
            strokeWeight(5);
            stroke(4, 46, 6);
        }
    }
    else if(currentScene === 2)
    {
        if(mouseX > 25 && mouseX < 100 && mouseY > 300 && mouseY < 340)
        {
            strokeWeight(5);
            stroke(4, 46, 6);
        }
    }
    fill(13, 110, 31);                  // Makes fill green.
    rect(x, y, w, h);                   // Draws a the custom button.
    
    strokeWeight(1);                    // Resets stroke weight.
    stroke(5, 5, 5);                    // Resets stroke color.
    fill(255, 255, 255);                // Makes fill white.
    textSize(sizeText);                 // Makes a custom text size.
    text("Go Back", x + 3, textYPos);   // Writes "Go Back" at custom positions.
};

/*
This function draws a small reset button on the bottom right corner of the game 
screen. It is called in the gameScreen(); function.
*/

var drawResetButton = function()
{
    fill(0, 0, 0);                      // Makes fill black.
    
    // This if statement makes it so that if the mouse is hovering over the reset        button the stroke weight increases and if it is pressed it turns red.
    if(mouseX > 360 && mouseX < 390 && mouseY > 325 && mouseY < 355)
    {
        strokeWeight(2);
        stroke(255, 0, 0);
        if(mouseIsPressed)
        {
            fill(255, 0, 0);
        }
    }
    
    text("RESET", 355, 320);              // Writes reset above the button.
    ellipse(375, 340, 15, 15);            // Draws the button.
    
    // Resets stroke colour and weight
    strokeWeight(1);
    stroke(3, 3, 3);
    
};

/*
This function makes it so that if the reset button is pressed the ball returns to the
players hand, it would also reset the hand position. It also makes my startFunction 
variable equal to 0 so that the shoot function will stop running.It is called in the 
gameScreen(); function.
*/

var reset = function()
{
    // This if statement is explained above.
    if(mouseX > 360 && mouseX < 390 && mouseY > 325 && mouseY < 355 && mouseIsPressed     )
    {
        ballX = 300;
        ballY = 259;
        rotateArmAngle = 80;
        startFunction = 0;
    }
};

//This Function draws a ball on the screen. It is called in the gameScreen(); function.

var drawBall = function()
{
    fill(255, 162, 0);                          // Makes the basketball orange.
    ellipse(ballX, ballY, 30, 30);              // Draws the basketball.
    line(ballX + 15, ballY, ballX - 15, ballY); // Draws a horizontal line for the       basketball.
    line(ballX, ballY + 15, ballX, ballY - 15); // Draws a vertical line for the         basketball.
    
};

/*
This function makes it so that when the UP key is pressed my startFunction variable 
is equal to 3 which will make the ball start dribbling. It also makes it so that when
the down key is clicked the ball stops dribbling. It is called in the gameScreen(); 
function.
*/

var dribbleBall = function()
{
    /*
    Everything in this if statement runs when the UP key is pressed, it makes it so      that the ball bounces.
    */
    if(keyIsPressed && keyCode === UP)
    {
        startFunction = 3;
    }
    if(startFunction === 3)
    {
        // Simulates bouncing.
        //Only runs if the ball is at x 300.
        if(ballX === 300)
        {
            // Makes it so that the y coords of the ball decreases if it is more than             314 which it is when it starts.
            if(ballY > 314) 
            {
                ballSpeed = -5;
                rotateArmAngle = 60;
            }
            // Makes it so that the y coords of the ball increases if it goes to y               260.
            if(ballY < 261)
            {
                ballSpeed = 5;
            }
            ballY += ballSpeed;  
        }
    }
    
    /*
    Everything in these if statements happens whenever the UP button isn't pressed.
    It makes it so that the ball returns to the player's hand when the user doens't
    want the player to dribble it anymore.
    */
    if(keyIsPressed && keyCode === DOWN)
    {
        startFunction = 4;
    }
    if(startFunction === 4)
    {
        if(ballY < 325 && ballX === 300)
        {
            ballSpeed = -2;  

            if(ballY > 260)
            {
                ballY += ballSpeed;   
            }
            if(ballY > 259 && ballY < 275)
            {
                rotateArmAngle = 80;
            }
        }
    }
};

/*
This function makes it so that when the ball starts dribbling the player moves his
hand. It is called in the gameScreen(); function.
*/

var moveWhileDribbling = function()
{
    // Only runs if ballX is equal to 300.
    if(ballX === 300)
    {
        //Only runs if the UP key was clicked.
        if(keyIsPressed && keyCode === UP)
        {
            rotateArmAngle = 60;
            
        }
        // Resets the arm angle if the ball is more than 259 and less than 265.
        if(ballY > 259 && ballY < 265)
        {
            rotateArmAngle = 80;
        }
    }
};

/*
This function draws a shoot button at the bottom left corner of the game screen. It
is called in the gameScreen(); function.
*/

var drawShootButton = function()
{
    fill(10, 7, 10);                    // Makes fill black.
    text("Click to Shoot!!", 15, 355);  // Writes "click to shoot under the button.
    /*
    This if statement makes it so that the button's stroke only increases if the    
    mouse is within the button's x and y boundaries. It also makes it so that the  
    button turns red when the mouse is clicked.
    */
    if(mouseX > 35 && mouseX < 65 && mouseY > 310 && mouseY < 340)
    {
        strokeWeight(3);
        stroke(250, 10, 10);
        if(mouseIsPressed)
        {
            fill(255, 0, 0);            // Makes button red if button is pressed.
        }
    }
    ellipse(50, 325, 30, 30);           // Draws button.
    
    // Resets stroke weight and color.
    strokeWeight(1);                    
    stroke(0, 0, 0);
    
    
};

/*
This is not one of my main variables. I made it specifically for my shootBall();
function so that I could store it as true or false if a certain condition was met.
*/

var isBallMoreThan299;

/*
This function makes it so that the ball goes into the net. It is called in the 
shoot(); function but is in a if statement so it only runs if the shoot button was
clicked.
*/

var shootBall = function()
{
    /*
    If the ballX is more than 299, which it would be when the shoot(); function 
    can be called. It makes it so that shootSpeed = -2.
    */
    if(ballX > 299)
    {
        shootSpeed = -2;
        isBallMoreThan299 = true;
    }
    
    //This if statement makes it so that if the ballX is less than 130,shootSpeed = 2
    if(ballX < 130)
    {
        shootSpeed = 2;
        isBallMoreThan299 = false;
    }
    
    /*
    These if/ else if statements makes it so that the ball goes in an arc, it   
    makes it so that the ball goes up until ballX is less than 130, when it is less
    than 130 it goes down. When ballX is less than 70 the ball's x coordinates stop
    decreasing and the balls y coordinates drops so that it looks like the ball     
    is falling into the net.
    */
    if(ballX > 128 && ballX < 301)
    {
        ballX += shootSpeed;
        ballY += shootSpeed;
    }
    
    else if(ballX < 70)
    {
        if(ballY < 300)
        {
            ballY += shootSpeed * 2;
        }
    }
    
    else if(ballX < 130)
    {
        ballX -= shootSpeed;
        ballY += shootSpeed;
    }

    // Makes the arm go down when ballX is less than 200.
    if(ballX < 200)
    {
        rotateArmAngle = 30;
    }
};

/*
This function calls the shootBall(); function when the shoot button is pressed. It is
called in the gameScreen(); function.
*/

var shoot = function()
{
    /*This if statement makes it so that if the shoot button is pressed the player       raises his hand, and the ball goes to his upraised hand. It also makes 
    startFunction equal to 1 which will start the shootBall(); function.
    */
    if(mouseX > 35 && mouseX < 65 && mouseY > 310 && mouseY < 340 && mouseIsPressed)
    {
        rotateArmAngle = 150;
        if(ballY > 214 && ballX === 300)
        {
            ballY = 215;
        }
        startFunction = 1;
        
    }
    /*
    This if statement makes it so that if startFunction is equal to one and the     
    ball's Y coordinate is less than 305 the shootBall(); function runs.
    */
    if(startFunction === 1)
    {
        if(ballY < 305)
        {
            shootBall();
        }
    }
    
    /*
    This if statement makes it so that if the the ball falls to the floor beneath the
    net or is behind the player startFunction is equal to 0.
    */
    if(ballX < 71 && ballY > 299 || ballX > 320)
    {
        startFunction = 0;
    }
};

/*
This function draws a wall above the court. It is called in the gameScreen(); function
*/

var drawWall = function()
{
    // Draws wall.
    stroke(255, 0, 0);
    strokeWeight(2);
    fill(0, 0, 0);
    rect(wallX, wallY, 10, 100);
    
    // Resets strokeWeight and colour.
    strokeWeight(1);
    stroke(0, 0, 0);
};

/*
This function makes the wall move up and down. It is called in the gameScreen();
function.
*/

var moveWall = function()
{
    /*
    These if statements make it so that if the wall's Y coordinate is less than 21 
    the wall's y coordinate increases and if the wall's y coordinate is more than 150
    the wall's y coordinate decreases.
    */
    if(wallY < 21)
    {
        wallSpeed = 3;
    }
    if(wallY > 150)
    {
        wallSpeed = -5;
    }
    wallY += wallSpeed;
    
};

/*
This function makes it so that if the ball hits the wall it bounces off of it, falls on the floor, bounces again and reaches the players feet.
*/

var createCollision = function()
{
    /*
    This if statement makes it so that if the ball is at the same coordinates as the
    moving wall startFunction equals 2 and the streak is reset.
    */
    if(ballX > 110 && ballX < 120 && ballY > wallY - 15)
    {
        startFunction = 2;
        streak = 0;
    }
    
    /*
    This if statement simulates the ball bouncing off the wall when startFunction is
    equal to 2. 
    */
    if(startFunction === 2)
    {
        if(ballY < 315 && ballX < 250)
        {
            ballY += shootSpeed * 2;
            ballX += shootSpeed;
        }
        if(ballX >= 249 && ballX < 285)
        {
            ballX += shootSpeed;
            ballY -= shootSpeed; 
        }
        if(ballX > 284 && ballY < 315)
        {
            ballX += shootSpeed;
            ballY += shootSpeed;
        }
    }
};

/*
This function records the user's current streak. It is called in the gameScreen(); function.
*/

var recordStreak = function()
{
    noStroke();
    
    // Draws the boxes that says "Streak:" and "Streak Goal:"
    rect(310, 5, 85, 30);
    rect(10, 5, 105, 30);
    
    // Writes "Streak:" and the current streak and "Streak Goal:" and the user's         streak goal
    textSize(15);
    fill(5, 4, 4);
    text("STREAK: " + streak, 315, 25);
    text("Streak Goal: " + streakGoal, 15, 25);
    textSize(11);
    
    /*
    This if statement makes it so that when the ball goes into the net the streak        increases by one.
    */
    if(ballX < 71 && ballY > 160 && ballY < 164)
    {
        streak++; 
    }
};

/*
This function draws a larger basketball on the starting and description screens. It is called in the startingScreen(); and descriptionScreen(); function.
*/

var drawLargerBall = function()
{
    
    fill(255, 157, 0);                                  // Makes fill orange.
    ellipse(350, largerBallY, 75, 75);                  // Draws the ball.
    line(350 + 37, largerBallY, 350 - 37, largerBallY); // Draws a horizontal line       for the basketball.
    line(350, largerBallY + 37, 350, largerBallY - 37); // Draws a vertical line for     the basketball.
};

/*
This function makes it so that the larger ball bounces from the top of the screen to 
the bottom of the screen.
*/

var autoBounceLargerBall = function()
{
    /*
    These if statements make it so that if the ball goes to y 360 decrease the y
    coordinates until it gets to y 40. If it gets to y 40 increase the y 
    coordinates until it gets back to y 360.
    */
    if(currentScene === 1 || currentScene === 2)
    {
        if(largerBallY > 360) 
        {
            ballSpeed = -10;
        }
        if(largerBallY < 15)
        {
            ballSpeed = +10;
        }
        largerBallY += ballSpeed;
    }
};

//This function draws a road. It is called in the gameScreen(); function.

var drawRoad = function()
{
    fill(163, 140, 140);                // Makes fill a light brownish gray.
    rect(0, 275, 400, 25);              // Draws a rectangle for the road.
    
    //This array of objects stores the x coordinates for each of the road's border       lines
    var borderLineXCoords = [
        {x : 50},
        {x : 100},
        {x : 150}, 
        {x : 200},
        {x : 250},
        {x : 300},
        {x : 350}
    ];
    
    // This for loop increments through the array, then draws a borderline at each x     coordinate.
    for(var i = 0; i < borderLineXCoords.length; i++)
    {
        fill(238, 242, 0);
        var xCoords = borderLineXCoords[i];
        rect(xCoords.x, 280, 25, 5);
    }
};

/*
This Object makes a car. The parameters customize the colour and the x coordinate.
*/
var Car = function(fillR, fillG, fillB, carX)
{
    this.fillR = fillR;
    this.fillG = fillG;
    this.fillB = fillB;
    this.carX = carX;
    
    //This code draws the car.
    noStroke();
    fill(fillR, fillG, fillB);              // Makes a custom colour.
    rect(carX, carY, 60, 30, 10);
    rect(carX + 59, carY + 13, 7.5, 12.5);
    fill(0, 0, 0);
    rect(carX + 45, carY + 5, 15, 10, 10);
    ellipse(carX + 50, carY + 30, 15, 15);
    ellipse(carX + 15, carY + 30, 15, 15);
};

/*
This function is called in the gameScreen(); function. This is where I created new 
objects from my main Object function. It draws the cars at specific coordinates and 
gives them custom colours.
*/

var drawCars = function()
{
    // Draws the first car which is red.
    var firstCar = new Car(255, 0, 0, firstCarX);
    // Draws the second car which is green.
    var secondCar = new Car(89, 135, 65, secondCarX);
    // Draws the third car which is white.
    var thirdCar = new Car(230, 221, 221, thirdCarX);
    
};

/*
This function is called in the gameScreen(); function. It makes it look like my three
cars are driving on the road.
*/

var driveCars = function()
{
    /*
    These if statements make it so that once one car gets to a specific coordinate  
    the next car is drawn back at a specific coordinate. It makes it so that the cars
    drive in a loop.
    */
    if(thirdCarX === 100)
    {
        firstCarX = - 50;
    }
    firstCarX += carSpeed;       
    
    if(firstCarX === 300)
    {
        secondCarX = 0;
    } 
    secondCarX += carSpeed;
    
    if(secondCarX === 200)
    {
        thirdCarX = - 50;
    }
    thirdCarX += carSpeed;
    
    
};

/*
This function draws an arrow. Its parameters ask what the rectangle and triangle's x coordinate will be. It is called in the descriptionScreen(); function.
*/

var drawArrow = function(rectX, triX)
{
    // The next three lines draw the arrow.
    strokeWeight(3);
    rect(rectX, 220, 15, 1);
    triangle(triX , 215, triX, 225, triX + 5, 220);
};

/*
This function draws a x button. It is called in the descriptionScreen(); function.
*/
var drawXButton = function()
{
    fill(22, 110, 32);                          // Makes fill green.
    
    // Draws the x button.
    rect(slideX + 1055, 65, 30, 30);
    line(slideX + 1056, 66, slideX + 1085, 95);
    line(slideX + 1085, 66, slideX + 1056, 95);
    
};
//*********************
// Main Program
//*********************

/*
This function draws the starting screen, it draws a bouncing ball on a red background along with the title and two buttons, one that takes you to the game and the other that takes you to the description. It is called in the draw function.
*/
var startingScreen = function()
{
    background(199, 32, 32);                // Makes background red.
    
    textSize(15);
    text("By Ahmed Osman :)", 260, 380);
    autoBounceLargerBall();                 
    strokeWeight(5);
    drawLargerBall();
    textSize(75);
    fill(0, 0, 0);                          // Makes fill black.
    text("BasketBall", 20, 130);
    textSize(20);
    
    strokeWeight(10);
    stroke(120, 8, 8);
    fill(0, 0, 0);                          // Makes fill black.
    
    /*
    This if statement makes it so that if the mouse is hovering over the start game 
    button the stroke becomes green and if it is pressed it button becomes red.
    */
    if(mouseX > 100 && mouseX < 300 && mouseY > 200 && mouseY < 250)
    {
        strokeWeight(5);
        stroke(6, 59, 8);
        if(mouseIsPressed)
        {
            fill(8, 74, 9);
        }
    }
    rect(100, 200, 200, 50);
    
    strokeWeight(10);
    stroke(120, 8, 8);
    fill(0, 0, 0);
    /*
    This if statement makes it so that if the mouse is hovering over the description 
    button the stroke becomes green and if it is pressed it button becomes red.
    */
    if(mouseX > 100 && mouseX < 300 && mouseY > 275 && mouseY < 325)
    {
        strokeWeight(5);
        stroke(2, 54, 4);
        if(mouseIsPressed)
        {
            fill(8, 77, 24);
        }
    }
    
    rect(100, 275, 200, 50);
    
    // resets strokeWeight and colour.
    strokeWeight(1);
    stroke(0, 0, 0);
    
    fill(255, 247, 255);                        // Makes fill white.
    
    // The next two lines write "Start Game" and "Description" on each of the buttons
    text("Start Game!!!", 140, 230); 
    text("Description?", 145, 304);
    textSize(10);
    
    currentScene = 1;   // makes my currentScene variable equal to 1.
};

/*
This function plays the description screen. It comes with two buttons, a go back 
button and a play slides button. On this screen the user can learn how to play my 
game. It is called in the draw function.
*/
var descriptionScreen = function()
{
    startTimeCycle();
    
    strokeWeight(7);
    //Makes stroke green.
    stroke(0, 110, 11);
    
    //Makes stroke black.
    stroke(0, 0, 0);
    
    autoBounceLargerBall();
    drawLargerBall(); 
    drawSun();
    drawMoon();
    
    strokeWeight(7);
    // Makes stroke green.
    stroke(17, 66, 11);
    // Draws the go back button on the bottom left corner of the screen.
    drawGoBackButton(25, 300, 75, 40, 18, 325);
    
    strokeWeight(7);
    // Makes stroke green.
    stroke(6, 48, 10);
    
    /*
    This if statement makes it so that if currentSlide is equal to 0, which it is 
    when the function is called it draws the Play Description Slides button and 
    writes "How To Play"?
    */
    if(currentSlide === 0)
    {
        // Makes fill white.
        fill(250, 250, 250);
        rect(15, 15, 375, 270);
        // Makes stroke black.
        stroke(13, 12, 12);
        // Makes fill black.
        fill(0, 0, 0);
        
        textSize(50);
        text("How To Play?", 50, 75); 
        
        // Makes stroke green.
        stroke(4, 71, 10);
        strokeWeight(10);
        
        /*
        This if statement makes it so that if the user's mouse is hovering over the 
        play slide button the strokeWeight becomes 5. The nested if statement makes
        it so that if the button is pressed the currentSlide is equal to 1 and the 
        description slides start playing.
        */
        if(mouseX > 90 && mouseX < 310 && mouseY > 150 && mouseY < 225)
        {
            strokeWeight(5);
            if(mouseIsPressed)
            {
                currentSlide = 1;
                slideX = 50;
                slide = 1;
            }
        }
        rect(90, 150, 220, 75);
        // Makes fill white.
        fill(255, 255, 255);
        textSize(20);
        text("Click To Play", 140, 180);
        text("The Description Slides", 100, 210);
    }
    
    /*
    This if statement makes it so that if currentSlide is equal to 1 the first
    slide gets played.
    */
    if(currentSlide === 1)
    {
        rect(slideX, 50, 300, 200);
        
        /*
        This nested if statement makes it so that if the button on the bottom right
        of the slide is clicked the slide variable is equal to 2 and the first slide
        moves off the screen. It also makes it so that if the user's mouse hovers
        over the arrow button the stroke decreases.
        */
        if(mouseX > slideX + 225 && mouseX < slideX + 275 && mouseY > 205 && mouseY <         255)
        {
            strokeWeight(5);
            if(mouseIsPressed)
            {
                if(currentScene === 2)
                {
                    slide = 2;
                    slideSpeed = -5;
                }
            }
        }
        
        fill(0, 0, 0);              // Makes fill black.
        
        // Write the objective of the game on the first slide.
        text("Objective of the Game:", slideX + 60, 70);
        
        textSize(15);
        text("Choose a Streak Goal then shoot the ball", slideX + 10, 90);
        text("into the net and get a streak that is equal ", slideX + 10, 105);
        text("to your Streak Goal.", slideX + 80, 120);
        text("There will be a moving wall that will", slideX + 30, 135);
        text("temporarily block the net.", slideX + 65, 150);
        text("Shoot the ball at the right time because if", slideX + 10, 165);
        text("the ball hits the wall your streak will be ", slideX + 30, 180);
        text("reset.", slideX + 135, 195);
     
        // Makes fill green.
        fill(2, 117, 44);
        rect(slideX + 225, 205, 50, 30);
        // Draws an arrow on the bottom right corner where the button is.
        drawArrow(slideX + 240, slideX + 255);
        
    }
    
    /*
    This if statement makes it so that if slide is equal to 2 or 3 and the 
    currentSlide is equal to 1 the first slide moves off the screen and the second 
    slide is shown.
    */
    if(slide === 2|| slide === 3 && currentSlide === 1)
    {
        strokeWeight(7);
        if(slideX > - 350)
        {
            slideX += slideSpeed;
        }
        if(slideX < -19)
        {
            fill(255, 255, 255);
            rect(slideX + 400, 50, 300, 200);
            
            /*
            This nested if statement makes it so that if the button on the bottom
            right of the slide is clicked slide is equal to 3 and the second
            slide moves off the screen. It also makes it so that if the user's mouse
            hovers over the arrow button the stroke decreases.
            */
            if(mouseX > slideX + 635 && mouseX < slideX + 685 && mouseY > 205 &&                 mouseY < 255)
            {
                strokeWeight(5);
                if(mouseIsPressed)
                {
                    slide = 3;
                    slideSpeed = -5;
                }
            }
            
            // Makes fill green.
            fill(2, 117, 44);  
            
            rect(slideX + 635, 205, 50, 30);
            
            // Draws an arrow on the bottom left corner where the button is.
            drawArrow(slideX + 650, slideX + 667);
            
            // Makes fill black.
            fill(0, 0, 0);
            textSize(25);
            text("Difficulty Modes", slideX + 460, 75);
            textSize(20);
            text("Easy Mode:", slideX + 500, 95);
            text("Medium Mode:", slideX + 485, 135);
            text("Hard Mode:", slideX + 500, 175);
            textSize(15);
            text("has a Streak Goal of 3.", slideX + 475, 115);
            text("has a Streak Goal of 5.", slideX + 475, 155);
            text("has a Streak Goal of 7.", slideX + 475, 195);
        }
    }
    
    /*
    This if statement makes it so that if slide is equal to 3 and the 
    currentSlide is equal to 1 the second slide moves off the screen and the third
    slide comes onto the screen.
    */
    if(slide === 3 && currentSlide === 1)
    {
        strokeWeight(7);
        if(slideX > -750)
        {
            slideX += slideSpeed;
        }
        if(slideX < -755)
        {
            slideX -= slideSpeed;
        }
        
        if(slideX < -350)
        {
            // Makes fill white.
            fill(255, 255, 255);
            rect(slideX + 800, 50, 300, 225);
            strokeWeight(6);
            
            /*
            This if statement makes it so that if the user's mouse hovers over the x
            button in the top right corner of the third slide the stroke decreases. 
            It also makes it so that if the button is clicked currentSlide is equal 
            to 0 and the user is taken back to the original description screen.
            */
            if(mouseX > slideX + 1055 && mouseX < slideX + 1085 && mouseY > 65 &&                mouseY < 95)
            {
                //rect(slideX + 655, 65, 30, 30);
                strokeWeight(4);
                if(mouseIsPressed)
                {
                    if(slide === 3 && currentSlide === 1)
                    {
                        currentSlide = 0;
                    }
                }
            }
            fill(0, 0, 0);
            textSize(25);
            text("How To Play", slideX + 875, 90);
            textSize(15);
            text("Click the UP key to dribble the ball.", slideX + 810, 120);
            text("Click the DOWN key to stop dribbling the", slideX + 810, 150);
            text("ball.", slideX + 810, 165);
            text("Click the Shoot Button on the bottom left", slideX + 810, 195);
            text("corner of the screen to shoot the ball.", slideX + 810, 210);
            text("And click the RESET button on the bottom", slideX + 810, 235);
            text("right corner of the screen if you want to", slideX + 810, 250);
            text("return the ball to the player's hand.", slideX + 810, 265);
            
            
            drawXButton();
            
        }
    }
    
   
    drawGrass();
    
    currentScene = 2;               // Makes my currentScene variable equal to 2
};

/*
This function calls the majority of my functions. It calls all these functions to 
draw a game with a court, a player, a ball, a net, a sky, a sun and a moon and road, 
the Toronto Skyline, etc. It is called in the draw function.
*/
var gameScreen = function()
{
    strokeWeight(1);                // Resets strokeWeight.
    
    //Calls Functions.
    startTimeCycle();               
    
    drawTorontoSkyline();
    drawClouds(); 
    drawRoad();
    drawCars();
    driveCars();
    drawCourt();
    drawPlayer();
    drawBall();
    drawNet();
    
    dribbleBall();
    moveWhileDribbling();
    
    // Resets stroke colour and weight.
    strokeWeight(1);
    stroke(0, 0, 0);

    drawWall();
    moveWall();
    createCollision();
    
    drawResetButton();
    drawShootButton();
    drawGoBackButton(20, 375, 50, 20, 11, 390);
    shoot();
    reset();
    recordStreak();
    
    currentScene = 3;               // Makes currentScene equal to 3.
};

/*
This function draws the ending screen, I titled it as the YOU WIN screen because it 
only plays if you win my game, which is quite easy to do. It is called in the draw function.
*/
var youWinScreen = function()
{
    background(0, 0, 0);              // Makes background black.
    fill(0, 0, 0);                    // Makes fill black.
    
    strokeWeight(15);                   
    stroke(255, 255, 255);            // Makes the stroke white.
    
    rect(50, 50, 300, 300);           // Draws a black rectangle with a white stroke.
    fill(255, 255, 255);
    
    textSize(50);
    text("YOU WIN!!!", 70, 125);
    textSize(17);
    text("THANKS FOR PLAYING. HOPE YOU ENJOYED!!", 10, 385);
    
    
    /*
    This if statement makes it so that the stroke of the play again button decreases
    if the mouse is hovering above the button. It also makes the stroke red when 
    pressed. You won't see that because the screen will change but it's there.
    */
    if(mouseX > 100 && mouseX < 300 && mouseY > 160 && mouseY < 210)
    {
        strokeWeight(5);
        stroke(42, 117, 62);
        if(mouseIsPressed)
        {
            fill(13, 94, 35);
        }
    }
    
    rect(100, 160, 200, 50);            // Draw the play again button.
    
    strokeWeight(15);
    // Makes stroke and fill white.
    stroke(255, 255, 255);
    fill(255, 250, 255);
    
    /*
    This if statement makes it so that the stroke of the home button decreases
    if the mouse is hovering above the button. It also makes the stroke red when 
    pressed.
    */
    if(mouseX > 100 && mouseX < 300 && mouseY > 250 && mouseY < 300)
    {
        strokeWeight(5);
        stroke(42, 117, 62);
        if(mouseIsPressed)
        {
            fill(24, 79, 13);
        }
    }
    
    rect(100, 250, 200, 50);            // Draw the home button.
    
    // Resets strokeWeight and size.
    strokeWeight(1);
    stroke(0, 0, 0);
    
    fill(8, 7, 7);                      // Makes fill Black.
    textSize(30);
    text("PLAY AGAIN?", 105, 195);
    textSize(25);
    text("GO TO HOME?", 110, 285);
    
    fill(255, 111, 0);                  // Makes fill Orange.
    
    // Resets strokeWeight and colour.
    strokeWeight(1);
    stroke(0, 0, 0);
    
    //Draws a Ball.
    ellipse(centerOfBall, centerOfBall, ballSize, ballSize);
   
    /*
    This if statement makes it so that if the center of the ball is equal to the 
    center of the screen make decreaseSize equal to -10. This is so that when this 
    screen is called it creates an animated transition making a ball become smaller
    and smaller until the user can see the ending screen.
    */
    if(centerOfBall === 200)
    {
        decreaseSize = -15; 
    }
    
    // Increments decreaseSize with ballSize.
    ballSize += decreaseSize;
    
    currentScene = 4;                   // Makes my currentScene variable equal to 4

};

/*
This function draws the difficulty screen. It has three buttons, one takes the user 
to the easy mode of my game, another takes them to the medium mode and the last takes
them to the hard mode.
*/
var difficultyScreen = function()
{
    background(128, 68, 13);            // Makes background brown
    
    // Makes the stroke black and the weight 5.
    stroke(26, 26, 25);
    strokeWeight(5);
    
    fill(249, 255, 66);                 // Makes fill Yellow.
    rect(50, 50, 320, 320); 
    fill(255, 153, 0);                  // Makes fill Orange.
    rect(40, 40, 320, 320);
    
    fill(0, 0, 0);                      // Makes fill Black.
    textSize(60);
    text("Choose", 95, 95);
    textSize(50);
    text("Your Difficulty", 50, 150);
   
    stroke(115, 73, 17);                // Makes the stroke Brown. 
    fill(255, 242, 0);                  // Makes fill Yellow.
    strokeWeight(10);
    
    /*
    These if statements makes it so that if the user's mouse is hovering over any of
    the difficulty screen buttons the strokeWeight becomes 5.
    */
    if(mouseX > 60 && mouseX < 135 && mouseY > 250 && mouseY < 325)
    {
        strokeWeight(5);
    }
    rect(60, 250, 75, 75);
    strokeWeight(10);
    
    if(mouseX > 160 && mouseX < 235 && mouseY > 250 && mouseY < 325)
    {
        strokeWeight(5);
    }
    rect(160, 250, 75, 75);
    strokeWeight(10);
    
    if(mouseX > 260 && mouseX < 335 && mouseY > 250 && mouseY < 325)
    {
        strokeWeight(5);
    }
    rect(260, 250, 75, 75);
    
    fill(0, 0, 0);                      // Makes fill Black.
    
    textSize(50); 
    text("1", 83, 305);
    text("2", 183, 305);
    text("3", 283, 305);
    textSize(25);
    text("EASY", 65, 240);
    text("NORMAL", 145, 240);
    text("HARD", 260, 240);
    
    currentScene = 5;                   // Makes my currentScene variable equal to 5
};

/*
The draw function animates a certain screen if the currentScene is equal to a certain
number.
*/
draw = function() {
    
    if(currentScene === 1)
    {
        startingScreen();                   // Animates the Starting Screen.
    }
    
    if(currentScene === 2)
    {
        descriptionScreen();                // Animates the Description Screen
    }
    if(currentScene === 3)
    {
        gameScreen();                       // Animates the Game Screen
    }
    if(currentScene === 4)
    {
        youWinScreen();                     // Animates the Ending Screen
    }
    if(currentScene === 5)
    {
        difficultyScreen();                 // Animates the Difficulty Screen
    }
    
    /*
    This if statement makes it so that if the ball on the game screen is on the 
    ground below the net and the streak is equal to the streak goal the ending 
    screen gets played.
    */
    if(streak === streakGoal)
    {
        if(ballX < 71 && ballY > 299)
        {
            if(currentScene === 3)
            {
                ballSize = 450;
                youWinScreen();
            }
        }
    }
};

/*
The mouseClicked(); function makes it so that if a specific button is clicked a 
different scene gets played
*/
mouseClicked = function()
{
    /*
    Makes it so that if the start game button on the starting screen is clicked the 
    difficulty screen gets played.
    */
    if(mouseX > 100 && mouseX < 300 && mouseY > 200 && mouseY < 250)
    {
        if(currentScene === 1)
        {
            difficultyScreen();
        }
    }
    
    /*
    Makes it so that if the EASY button on the difficulty screen gets clicked the 
    user gets taken to the game screen and is playing on easy mode which has a 
    streak goal of 3. It also resets everything on that screen.
    */
    if(mouseX > 60 && mouseX < 135 && mouseY > 250 && mouseY < 325)
    {
        if(currentScene === 5)
        {
            ballX = 300;
            ballY = 259;
            rotateArmAngle = 80;
            startFunction = 0;
            gameScreen();   
            streak = 0;
            streakGoal = 3;
        }
    }
    
    /*
    Makes it so that if the NORMAL button on the difficulty screen gets clicked the 
    user gets taken to the game screen and is playing on normal mode which has a 
    streak goal of 5. It also resets everything on that screen.
    */
    if(mouseX > 160 && mouseX < 235 && mouseY > 250 && mouseY < 325)
    {
        if(currentScene === 5)
        {
            ballX = 300;
            ballY = 259;
            rotateArmAngle = 80;
            startFunction = 0;
            gameScreen();   
            streak = 0;
            streakGoal = 5;
        }
    }
    
    /*
    Makes it so that if the HARD button on the difficulty screen gets clicked the 
    user gets taken to the game screen and is playing on hard mode which has a 
    streak goal of 7. It also resets everything on that screen.
    */
    if(mouseX > 260 && mouseX < 335 && mouseY > 250 && mouseY < 325)
    {
        if(currentScene === 5)
        {
            ballX = 300;
            ballY = 259;
            rotateArmAngle = 80;
            startFunction = 0;
            gameScreen();   
            streak = 0;
            streakGoal = 7;
        }
    }
    
    /*
    Makes it so that if the description button on the starting screen gets clicked 
    the user gets taken to the description screen.
    */
    if(mouseX > 100 && mouseX < 300 && mouseY > 275 && mouseY < 325)
    {
        if(currentScene === 1)
        {
            descriptionScreen();  
            slide = 0;
            slideX = 50;
            currentSlide = 0;
        }
    }
    
    /*
    Makes it so that if the go back button on the description screen gets clicked the
    user gets taken back to the starting screen.
    */
    if(mouseX > 25 && mouseX < 100 && mouseY > 300 && mouseY < 340)
    {
        if(currentScene === 2)
        {
            startingScreen();  
        }
    }
    
    /*
    Makes it so that if the go back button on the game screen gets clicked the user
    is taken back to the starting screen, the streak and streak goal is also reset.
    */
    if(mouseX > 20 && mouseX < 70 && mouseY > 375 && mouseY < 395)
    {
        if(currentScene === 3)
        {
            startingScreen();  
            streak = 0;
            streakGoal = 0;
        }
    }
    /*
    Makes it so that if the play again button on the ending screen gets clicked the 
    user gets taken back to the game and their streak and everything else except the
    streak goal gets reset.
    */
    if(mouseX > 100 && mouseX < 300 && mouseY > 160 && mouseY < 210)
    {
        if(currentScene === 4)
        {
            ballX = 300;
            ballY = 259;
            rotateArmAngle = 80;
            startFunction = 0;
            gameScreen();
            streak = 0;
        }
    }
    
    /*
    Makes it so that if the go home button on the ending screen gets clicked the user
    gets taken back to the starting screen.
    */
    if(mouseX > 100 && mouseX < 300 && mouseY > 250 && mouseY < 300)
    {
        if(currentScene === 4)
        {
            startingScreen();
        }
    }
    
};
