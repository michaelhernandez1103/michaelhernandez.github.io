var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        


        // TODO 1 : Declare and initialize our variables
            var circle;  //variable to hold 1 circle
            var circles = []; //variable to hold all circles in an array


        // TODO 2 : Create a function that draws a circle 
            function drawCircle(){
                // Code to draw a circle
                circle = draw.randomCircleInArea(canvas, true, true, '#999', 2); //draws a random circle anywhere on the canvas
                physikz.addRandomVelocity(circle, canvas); // the velocity of the circles
                view.addChild(circle); //allows circles to be viewed on screen
                circles.push(circle); //saves all the circles that are made
            }

        // TODO 3 / 7 : Call the drawCircle() function
        
        //all 5 of these function calls draws a new circle
            /*drawCircle();
            drawCircle();
            drawCircle();
            drawCircle();
            drawCircle();*/

            for(var circlesDrawn = 0; circlesDrawn < 100; circlesDrawn++){
                drawCircle();
            }//draws circles until the condition is false, the codition is false once there has been 100 circles drawn
            

        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the circle's position //
                /*physikz.updatePosition(circles[0]);//causes the first circle in the array to change position
                physikz.updatePosition(circles[1]);//causes the second circle to change position
                physikz.updatePosition(circles[2]);//causes the third circle to change position
                physikz.updatePosition(circles[3]);//causes the fourth circle to change position
                physikz.updatePosition(circles[4]);//causes the fifth circle to change position*/
            
            // TODO 5 / 10 : Call game.checkCirclePosition() on your circles.
                /*game.checkCirclePosition(circles[0]);//makes the first circle in the array come back to the other side of the screen when it moves off
                game.checkCirclePosition(circles[1]);//makes the second circle in the array come back to the other side of the screen when it moves off
                game.checkCirclePosition(circles[2]);//makes the third circle in the array come back to the other side of the screen when it moves off
                game.checkCirclePosition(circles[3]);//makes the fourth circle in the array come back to the other side of the screen when it moves off
                game.checkCirclePosition(circles[4]);//makes the fifth circle in the array come back to the other side of the screen when it moves off*/


                
            // TODO 9 : Iterate over the array
                for(var i = 0; i < circles.length; i++){
                    var eachCircle = circles[i];
                    physikz.updatePosition(eachCircle);
                    game.checkCirclePosition(eachCircle);
                }  //the allows each circle created by the array to be put into a certain position based on what i is and then the circle position is update from the 
                //physikz function. The checkCirclePosition function allows the circles to stay on the screen


            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            }
            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            if (circle.y > canvas.height){
                circle.y = 0;
            }//if the circle goes out the bottom of the screen, then the condition becomes true and the circle will come back through the top
            if (circle.y < 0){
                circle.y = canvas.height;
            }//if the circles goes off the top of the screen then it will come back through the bottom
            if (circle.x < 0){
                circle.x = canvas.width
            }
            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
