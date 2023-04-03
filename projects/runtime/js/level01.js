var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "basketball", "x": 400, "y": groundY - 125 },
                { "type": "basketball", "x": 600, "y": groundY - 10},
                { "type": "basketball", "x": 800, "y": groundY - 125},
                { "type": "basketball", "x": 1200, "y": groundY - 125},


                { "type": "enemy", "x": 1700, "y": groundY - 50},
                { "type": "enemy", "x": 2000, "y": groundY - 50},
                { "type": "enemy", "x": 2200, "y": groundY - 50},


                { "type": "nike", "x": 2500, "y": groundY - 10},
                { "type": "nike", "x": 2700, "y": groundY - 10},
                { "type": "nike", "x": 3000, "y": groundY - 10},
                { "type": "nike", "x": 3300, "y": groundY - 10},

                { "type": "enemy2", "x": 3600, "y": groundY - 50},
                { "type": "enemy2", "x": 4000, "y": groundY - 50},
                { "type": "enemy2", "x": 4200, "y": groundY - 50},

                { "type": "fist", "x": 4600, "y": groundY - 10},
                { "type": "fist", "x": 4900, "y": groundY - 120},
                { "type": "fist", "x": 5100, "y": groundY - 10},
                { "type": "fist", "x": 5400, "y": groundY - 120},

                { "type": "enemy3", "x": 5800, "y": groundY - 50},
                

                { "type": "reward", "x": 6200, "y": groundY - 75},

                
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        
        
        function createBasketball(x, y){
            var hitZoneSize = 25;//assigns a value of 25 as the size of the hitzone
            var damageFromObstacle = 10;//assigns the value as the damage from the obstacle
            var basketballHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);//create the obstacle and stores it in the saw blade hit zone
            basketballHitZone.x = x;//stores a value as the x position for the hit zone
            basketballHitZone.y = y;//stores a value as the y position for the hit zone
            game.addGameItem(basketballHitZone);//adds the hit zone as a game item
            var obstacleImage = draw.bitmap("img/basketball.png");//draws the image and stores it in the variable obstacle image
            basketballHitZone.addChild(obstacleImage);//adds the obstacle image as a child of basketballHitZone
            obstacleImage.x = -20;//assigns the obstacleImage an x position value
            obstacleImage.y = -19;//assigns the obstacleImage an y position value
        }

        


        function createNike(x, y){
            var hitZoneSize = 25;//assigns a value of 25 as the size of the hitzone
            var damageFromObstacle = 30;//assigns the value as the damage from the obstacle
            var nikeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);//create the obstacle and stores it in the nike hit zone
            nikeHitZone.x = x;//stores a value as the x position for the hit zone
            nikeHitZone.y = y;//stores a value as the y position for the hit zone
            game.addGameItem(nikeHitZone);//adds the hit zone as a game item
            var obstacleImage = draw.bitmap("img/Nike-Logo.png");//draws the image and stores it in the variable obstacle image
            nikeHitZone.addChild(obstacleImage);//adds the obstacle image as a child of nikeHitZone
            obstacleImage.x = -14;//assigns the obstacleImage an x position value
            obstacleImage.y = -22;//assigns the obstacleImage an y position value
        
        }

        function createFist(x, y){
            var hitZoneSize = 25;//assigns a value of 25 as the size of the hitzone
            var damageFromObstacle = 40;//assigns the value as the damage from the obstacle
            var fistHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);//create the obstacle and stores it in the fist hit zone
            fistHitZone.x = x;//stores a value as the x position for the hit zone
            fistHitZone.y = y;//stores a value as the y position for the hit zone
            game.addGameItem(fistHitZone);//adds the hit zone as a game item
            var obstacleImage = draw.bitmap("img/fist-Logo.png");//draws the image and stores it in the variable obstacle image
            fistHitZone.addChild(obstacleImage);//adds the obstacle image as a child of fistHitZone
            obstacleImage.x = -25;//assigns the obstacleImage an x position value
            obstacleImage.y = -25;//assigns the obstacleImage an y position value
        
        }

        

        
        function createEnemy(x, y){
            var enemy = game.createGameItem("enemy", 25);
            var gameItem = draw.bitmap("img/level-1-enemy.png");
            gameItem.x = -25;
            gameItem.y = -115;
            enemy.addChild(gameItem);
            enemy.x = x;
            enemy.y = y;
            game.addGameItem(enemy);
            enemy.velocityX = -2;
            

            enemy.onPlayerCollision = function (){
                game.changeIntegrity(-15);
            }

            enemy.onProjectileCollision = function (){
                enemy.flyTo(900, 0);
                game.increaseScore(20);
            }

        }
        
        
        function createEnemyTwo(x, y){
            var enemy = game.createGameItem("enemy", 25);
            var gameItem = draw.bitmap("img/level-2-enemy.png");
            gameItem.x = -70;
            gameItem.y = -80;
            enemy.addChild(gameItem);
            enemy.x = x;
            enemy.y = y;
            game.addGameItem(enemy);
            enemy.velocityX = -2;
            

            enemy.onPlayerCollision = function (){
                game.changeIntegrity(-25);
            }

            enemy.onProjectileCollision = function (){
                enemy.flyTo(900, 0);
                game.increaseScore(30);
            }

        }

        function createEnemyThree(x, y){
            var enemy = game.createGameItem("enemy", 25);
            var gameItem = draw.bitmap("img/Villain.png");
            gameItem.x = -100;
            gameItem.y = -80;
            enemy.addChild(gameItem);
            enemy.x = x;
            enemy.y = y;
            game.addGameItem(enemy);
            enemy.velocityX = -2;
            

            enemy.onPlayerCollision = function (){
                game.changeIntegrity(-70);
            }

            enemy.onProjectileCollision = function (){
                enemy.flyTo(900, 0);
                game.increaseScore(150);
            }

        }
        

        function createReward(x, y){
            var reward = game.createGameItem("reward", 25);
            var gameItem = draw.bitmap("img/reward.png");
            gameItem.x = -25;
            gameItem.y = -25;
            reward.addChild(gameItem);
            reward.x = x;
            reward.y = y;
            game.addGameItem(reward);
            reward.velocityX = -2;

            reward.onPlayerCollision = function (){
                game.increaseScore(10000);
                reward.shrink();
            }

        }


        for (var i = 0; i < levelData.gameItems.length; i++){
            var gameItem = levelData.gameItems[i];

            if(gameItem.type === "basketball"){
                createBasketball(gameItem.x, gameItem.y);
            }
            if(gameItem.type === "enemy"){
                createEnemy(gameItem.x, gameItem.y);
            }
            if(gameItem.type === "reward"){
                createReward(gameItem.x, gameItem.y);
            }
            if(gameItem.type === "nike"){
                createNike(gameItem.x, gameItem.y);
            }
            if(gameItem.type === "fist"){
                createFist(gameItem.x, gameItem.y);
            }
            if(gameItem.type === "enemy2"){
                createEnemyTwo(gameItem.x, gameItem.y);
            }
            if(gameItem.type === "enemy3"){
                createEnemyThree(gameItem.x, gameItem.y);
            }
            
        }
        
        
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
