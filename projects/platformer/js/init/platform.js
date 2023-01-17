(function (window) {
  "use strict";
  window.opspark = window.opspark || {};
  window.opspark.platform = window.opspark.platform || {};

  let platform = window.opspark.platform;

  /**
   * init: This function initializes the platforms for the level.
   *
   * GOAL: Add as many platforms necessary to make your level challenging.
   *
   * Use the createPlatform Function to create platforms for the level.
   *
   * createPlatform() takes these arguments:
   *
   *      createPlatform(x, y, scaleX, scaleY);
   *
   *      x: The x coordineate for the platform.
   *      y: The y coordineate for the platform.
   *      scaleX: OPTIONAL The scale factor on the x-axis, this value will
   *              stretch the platform in width.
   *      scaleY: OPTIONAL The scale factor on the y-axis, this value will
   *              stretch the platform in height.
   */
  function init(game) {
    let createPlatform = platform.create;

    ////////////////////////////////////////////////////////////////////////
    // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////

    /*
     * ground : here, we create a floor. Given the width of of the platform
     * asset, giving it a scaleX and scaleY of 2 will stretch it across the
     * bottom of the game.
     */
    createPlatform(0, game.world.height - 32, 3, 2); // DO NOT DELETE

    // example:
    createPlatform(290, 500, 0.5, 0.7);//grace token platform
    createPlatform(400, 630, 0.5);//lowest platform
    createPlatform(680, 580, 0.8);// second lowest
    createPlatform(800, 200, 0.5);//highest
    createPlatform(1, 450, 0.3);//max token platform
    createPlatform(670, 430, 0.4, 0.7);//kennedi token platform
    createPlatform(500, 290, 0.5, 0.4);//second highest
    createPlatform(820, 350, 0.4, 0.5);//small wall platform
    //box jump
    createPlatform(200, 200, 0.3, 0.2);//bottom piece
    createPlatform(200, 70, 0.01, 4.3);//side bar
    createPlatform(200, 70, 0.3, 0.2);//top piece
    



    // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
  }
  platform.init = init;
})(window);
