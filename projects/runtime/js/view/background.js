var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        var goal;
        var buildings = [];
     
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.bitmap("img/backgroundPicture.png");
            background.addChild(backgroundFill);


             
            
            // TODO: 3 - Add a moon and starfield

            //Loop that draws 100 stars
            /*for (var i = 0; i < 500; i++){
                var circle = draw.circle(2, "white", "LightGray", 2);//draws a circle and stores it in the variable circle
                circle.x = canvasWidth * Math.random();//multiplies a random decimal times the width of the canvas and stores that as the circles x position
                circle.y = groundY * Math.random();//multiplies a random decimal times the groundY of the canvas and stores that as the circles y position
                background.addChild(circle);//adds circle as a child to background
            }


            var moon = draw.bitmap("img/moon.png");//draws moon using .bitmap and stores it in the moon variable
            moon.x = canvasWidth - 300;//adds an x value to the moon of 300 pixels 
            moon.y = groundY - 450;//adds a y value to the moon of 200 pixels
            moon.scaleX = 0.5;//scales the moons x value 
            moon.scaleY = 0.5;//scales the moons y value
            background.addChild(moon);//add the moon as a child of background*/


        
            
            // TODO 5: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            /*for (var i = 0; i < 5; ++i) {
                var buildingHeights = [150, 120, 300, 225, 100];//created an array that assigned each building a different height
                var buildingColors = ['LightBlue', 'Gray', 'Purple', 'Red', 'green'];//created an array that assigned each building a different color
                var building = draw.rect(75, buildingHeights[i], buildingColors[i], "Black", 1);//created a variable that draws a building and gives it a size, color, and height
                building.x = 200 * i;//gives buildings an x value
                building.y = groundY - buildingHeights[i];//gives buildings a y value
                background.addChild(building);//adds building as a child of background
                buildings.push(building);//pushes the buidlings onto the screen
              }*/
            
            // TODO 4: Part 1 - Add a tree
            goal = draw.bitmap("img/basketball-Goal.png");//uses bitmap to draw the image and stores it in the variable goal
            goal.x = canvasWidth - 200;//gives the goal an x value
            goal.y = groundY - 240;//gives the goal a y value 
            background.addChild(goal);//adds the goal as a child of the background
            

            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            goal.x = goal.x - 3;//takes the current x position and to make it moves left subtracts 1 every 60 ticks

            //tells that once the tree passes the left side of the screen it comes back to the right side
            if (goal.x < -200) {
                goal.x = canvasWidth;
              }
            
            // TODO 5: Part 2 - Parallax

            //created a loop that moves the buildings and resets their x values to the right side if they go off the left
            for (var i = 0; i < buildings.length; i++) {
                var building = buildings[i];//stores an index of the array in the variable building
                building.x = building.x - 1;//subtracts from the x value of the building to make it move to the left


                if (building.x < -75){//checks to see if the buildings x value has gone off the left side of the canvas
                    building.x = canvasWidth;//resets the x value to canvasWidth which is the right side of the screen
                }
                
              }

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
