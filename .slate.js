var screenWidth = 1920;
var screenHeight = 1080;

var fullscreen = slate.operation("move", {
    "x" : "screenOriginX",
    "y" : "screenOriginY",
    "width" : "screenSizeX",
    "height" : "screenSizeY"
});
var topRightTwoThird = slate.operation("move", {
    "x" : screenWidth / 3,
    "y" : "screenOriginY",
    "width" : "screenSizeX*2/3",
    "height" : "screenSizeY*2/3"
});
var topRightOneThird = slate.operation("move", {
    "x" : "screenOriginX",
    "y" : "screenOriginY",
    "width" : "screenSizeX/3",
    "height" : "screenSizeY*2/3"
});
var bottomRightTwoThird = slate.operation("move", {
    "x" : screenWidth / 3,
    "y" : screenHeight * 2 / 3,
    "width" : "screenSizeX*2/3",
    "height" : "screenSizeY*2/3"
});
var bottomLeftTwoThird = slate.operation("move", {
    "x" : "screenOriginX",
    "y" : screenHeight * 2 / 3,
    "width" : "screenSizeX*2/3",
    "height" : "screenSizeY/3"
});
var halfLeft = slate.operation("move", {
    "x" : "screenOriginX",
    "y" : "screenOriginY",
    "width" : "screenSizeX/2",
    "height" : "screenSizeY"
});
var halfRight = slate.operation("move", {
    "x" : screenWidth / 2,
    "y" : "screenOriginY",
    "width" : "screenSizeX/2",
    "height" : "screenSizeY"
});
var halfTop = slate.operation("move", {
    "x" : "screenOriginX",
    "y" : "screenOriginY",
    "width" : "screenSizeX",
    "height" : "screenSizeY/2"
});
var halfBottom = slate.operation("move", {
    "x" : "screenOriginX",
    "y" : screenHeight / 2, 
    "width" : "screenSizeX",
    "height" : "screenSizeY/2"
});

slate.bindAll({
    "m:ctrl,alt,cmd"        : fullscreen,
    "up:ctrl,alt,shift"     : topRightTwoThird,
    "left:ctrl,alt,shift"   : topRightOneThird,
    "right:ctrl,alt,shift"  : bottomRightTwoThird,
    "down:ctrl,alt,shift"   : bottomLeftTwoThird,
    "left:ctrl,alt,cmd"     : halfLeft,
    "right:ctrl,alt,cmd"    : halfRight,
    "up:ctrl,alt,cmd"       : halfTop,
    "down:ctrl,alt,cmd"     : halfBottom
})
