gdjs.room1Code = {};
gdjs.room1Code.localVariables = [];
gdjs.room1Code.idToCallbackMap = new Map();
gdjs.room1Code.GDtextbackObjects1= [];
gdjs.room1Code.GDtextbackObjects2= [];
gdjs.room1Code.GDtextbackObjects3= [];
gdjs.room1Code.GDtextbackObjects4= [];
gdjs.room1Code.GDtextboxObjects1= [];
gdjs.room1Code.GDtextboxObjects2= [];
gdjs.room1Code.GDtextboxObjects3= [];
gdjs.room1Code.GDtextboxObjects4= [];
gdjs.room1Code.GDclickableObjects1= [];
gdjs.room1Code.GDclickableObjects2= [];
gdjs.room1Code.GDclickableObjects3= [];
gdjs.room1Code.GDclickableObjects4= [];
gdjs.room1Code.GDitemObjects1= [];
gdjs.room1Code.GDitemObjects2= [];
gdjs.room1Code.GDitemObjects3= [];
gdjs.room1Code.GDitemObjects4= [];
gdjs.room1Code.GDbackgroundObjects1= [];
gdjs.room1Code.GDbackgroundObjects2= [];
gdjs.room1Code.GDbackgroundObjects3= [];
gdjs.room1Code.GDbackgroundObjects4= [];
gdjs.room1Code.GDleftObjects1= [];
gdjs.room1Code.GDleftObjects2= [];
gdjs.room1Code.GDleftObjects3= [];
gdjs.room1Code.GDleftObjects4= [];
gdjs.room1Code.GDrightObjects1= [];
gdjs.room1Code.GDrightObjects2= [];
gdjs.room1Code.GDrightObjects3= [];
gdjs.room1Code.GDrightObjects4= [];


gdjs.room1Code.mapOfGDgdjs_9546room1Code_9546GDclickableObjects1Objects = Hashtable.newFrom({"clickable": gdjs.room1Code.GDclickableObjects1});
gdjs.room1Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "victory", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.room1Code.GDtextboxObjects2 */
{for(var i = 0, len = gdjs.room1Code.GDtextboxObjects2.length ;i < len;++i) {
    gdjs.room1Code.GDtextboxObjects2[i].getBehavior("Text").setText("Nyckeln passar!");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(2);
}
}

}


};gdjs.room1Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.room1Code.GDclickableObjects1, gdjs.room1Code.GDclickableObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.room1Code.GDclickableObjects2.length;i<l;++i) {
    if ( gdjs.room1Code.GDclickableObjects2[i].getVariableString(gdjs.room1Code.GDclickableObjects2[i].getVariables().getFromIndex(0)) == "door" ) {
        isConditionTrue_0 = true;
        gdjs.room1Code.GDclickableObjects2[k] = gdjs.room1Code.GDclickableObjects2[i];
        ++k;
    }
}
gdjs.room1Code.GDclickableObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.room1Code.GDtextboxObjects1, gdjs.room1Code.GDtextboxObjects2);

{for(var i = 0, len = gdjs.room1Code.GDtextboxObjects2.length ;i < len;++i) {
    gdjs.room1Code.GDtextboxObjects2[i].getBehavior("Text").setText("Dörren är låst. Jag behöver en nyckel för att komma ut.");
}
}

{ //Subevents
gdjs.room1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.room1Code.GDclickableObjects1, gdjs.room1Code.GDclickableObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.room1Code.GDclickableObjects2.length;i<l;++i) {
    if ( gdjs.room1Code.GDclickableObjects2[i].getVariableString(gdjs.room1Code.GDclickableObjects2[i].getVariables().getFromIndex(0)) == "window" ) {
        isConditionTrue_0 = true;
        gdjs.room1Code.GDclickableObjects2[k] = gdjs.room1Code.GDclickableObjects2[i];
        ++k;
    }
}
gdjs.room1Code.GDclickableObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.room1Code.GDtextboxObjects1, gdjs.room1Code.GDtextboxObjects2);

{for(var i = 0, len = gdjs.room1Code.GDtextboxObjects2.length ;i < len;++i) {
    gdjs.room1Code.GDtextboxObjects2[i].getBehavior("Text").setText("Det är alldeles för högt för att hoppa. Men utsikten är fin!");
}
}
}

}


{

gdjs.copyArray(gdjs.room1Code.GDclickableObjects1, gdjs.room1Code.GDclickableObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.room1Code.GDclickableObjects2.length;i<l;++i) {
    if ( gdjs.room1Code.GDclickableObjects2[i].getVariableString(gdjs.room1Code.GDclickableObjects2[i].getVariables().getFromIndex(0)) == "fries" ) {
        isConditionTrue_0 = true;
        gdjs.room1Code.GDclickableObjects2[k] = gdjs.room1Code.GDclickableObjects2[i];
        ++k;
    }
}
gdjs.room1Code.GDclickableObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.room1Code.GDtextboxObjects1, gdjs.room1Code.GDtextboxObjects2);

{for(var i = 0, len = gdjs.room1Code.GDtextboxObjects2.length ;i < len;++i) {
    gdjs.room1Code.GDtextboxObjects2[i].getBehavior("Text").setText("Kalla pommes. Usch!");
}
}
}

}


{

/* Reuse gdjs.room1Code.GDclickableObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.room1Code.GDclickableObjects1.length;i<l;++i) {
    if ( gdjs.room1Code.GDclickableObjects1[i].getVariableString(gdjs.room1Code.GDclickableObjects1[i].getVariables().getFromIndex(0)) == "trash" ) {
        isConditionTrue_0 = true;
        gdjs.room1Code.GDclickableObjects1[k] = gdjs.room1Code.GDclickableObjects1[i];
        ++k;
    }
}
gdjs.room1Code.GDclickableObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("item"), gdjs.room1Code.GDitemObjects1);
/* Reuse gdjs.room1Code.GDtextboxObjects1 */
{for(var i = 0, len = gdjs.room1Code.GDtextboxObjects1.length ;i < len;++i) {
    gdjs.room1Code.GDtextboxObjects1[i].getBehavior("Text").setText("Det ligger en ihopknycklad lapp här.");
}
}
{for(var i = 0, len = gdjs.room1Code.GDitemObjects1.length ;i < len;++i) {
    gdjs.room1Code.GDitemObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}
}

}


};gdjs.room1Code.mapOfGDgdjs_9546room1Code_9546GDclickableObjects1Objects = Hashtable.newFrom({"clickable": gdjs.room1Code.GDclickableObjects1});
gdjs.room1Code.mapOfGDgdjs_9546room1Code_9546GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.room1Code.GDleftObjects1});
gdjs.room1Code.mapOfGDgdjs_9546room1Code_9546GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.room1Code.GDleftObjects1});
gdjs.room1Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "UIlayout", 0, 0, 0);
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "click");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "UILayer");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.room1Code.GDleftObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.room1Code.GDleftObjects1.length;i<l;++i) {
    if ( gdjs.room1Code.GDleftObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.room1Code.GDleftObjects1[k] = gdjs.room1Code.GDleftObjects1[i];
        ++k;
    }
}
gdjs.room1Code.GDleftObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.room1Code.GDleftObjects1 */
{for(var i = 0, len = gdjs.room1Code.GDleftObjects1.length ;i < len;++i) {
    gdjs.room1Code.GDleftObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.room1Code.GDrightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.room1Code.GDrightObjects1.length;i<l;++i) {
    if ( gdjs.room1Code.GDrightObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.room1Code.GDrightObjects1[k] = gdjs.room1Code.GDrightObjects1[i];
        ++k;
    }
}
gdjs.room1Code.GDrightObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.room1Code.GDrightObjects1 */
{for(var i = 0, len = gdjs.room1Code.GDrightObjects1.length ;i < len;++i) {
    gdjs.room1Code.GDrightObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clickable"), gdjs.room1Code.GDclickableObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.room1Code.mapOfGDgdjs_9546room1Code_9546GDclickableObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("textbox"), gdjs.room1Code.GDtextboxObjects1);
{gdjs.evtTools.camera.showLayer(runtimeScene, "UILayer");
}
{for(var i = 0, len = gdjs.room1Code.GDtextboxObjects1.length ;i < len;++i) {
    gdjs.room1Code.GDtextboxObjects1[i].getBehavior("Text").setText("...");
}
}

{ //Subevents
gdjs.room1Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clickable"), gdjs.room1Code.GDclickableObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.room1Code.mapOfGDgdjs_9546room1Code_9546GDclickableObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("item"), gdjs.room1Code.GDitemObjects1);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "UILayer");
}
{for(var i = 0, len = gdjs.room1Code.GDitemObjects1.length ;i < len;++i) {
    gdjs.room1Code.GDitemObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.room1Code.GDleftObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.room1Code.mapOfGDgdjs_9546room1Code_9546GDleftObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.room1Code.GDleftObjects1 */
{for(var i = 0, len = gdjs.room1Code.GDleftObjects1.length ;i < len;++i) {
    gdjs.room1Code.GDleftObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.room1Code.GDleftObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.room1Code.mapOfGDgdjs_9546room1Code_9546GDleftObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "room2", false);
}
}

}


};

gdjs.room1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.room1Code.GDtextbackObjects1.length = 0;
gdjs.room1Code.GDtextbackObjects2.length = 0;
gdjs.room1Code.GDtextbackObjects3.length = 0;
gdjs.room1Code.GDtextbackObjects4.length = 0;
gdjs.room1Code.GDtextboxObjects1.length = 0;
gdjs.room1Code.GDtextboxObjects2.length = 0;
gdjs.room1Code.GDtextboxObjects3.length = 0;
gdjs.room1Code.GDtextboxObjects4.length = 0;
gdjs.room1Code.GDclickableObjects1.length = 0;
gdjs.room1Code.GDclickableObjects2.length = 0;
gdjs.room1Code.GDclickableObjects3.length = 0;
gdjs.room1Code.GDclickableObjects4.length = 0;
gdjs.room1Code.GDitemObjects1.length = 0;
gdjs.room1Code.GDitemObjects2.length = 0;
gdjs.room1Code.GDitemObjects3.length = 0;
gdjs.room1Code.GDitemObjects4.length = 0;
gdjs.room1Code.GDbackgroundObjects1.length = 0;
gdjs.room1Code.GDbackgroundObjects2.length = 0;
gdjs.room1Code.GDbackgroundObjects3.length = 0;
gdjs.room1Code.GDbackgroundObjects4.length = 0;
gdjs.room1Code.GDleftObjects1.length = 0;
gdjs.room1Code.GDleftObjects2.length = 0;
gdjs.room1Code.GDleftObjects3.length = 0;
gdjs.room1Code.GDleftObjects4.length = 0;
gdjs.room1Code.GDrightObjects1.length = 0;
gdjs.room1Code.GDrightObjects2.length = 0;
gdjs.room1Code.GDrightObjects3.length = 0;
gdjs.room1Code.GDrightObjects4.length = 0;

gdjs.room1Code.eventsList2(runtimeScene);
gdjs.room1Code.GDtextbackObjects1.length = 0;
gdjs.room1Code.GDtextbackObjects2.length = 0;
gdjs.room1Code.GDtextbackObjects3.length = 0;
gdjs.room1Code.GDtextbackObjects4.length = 0;
gdjs.room1Code.GDtextboxObjects1.length = 0;
gdjs.room1Code.GDtextboxObjects2.length = 0;
gdjs.room1Code.GDtextboxObjects3.length = 0;
gdjs.room1Code.GDtextboxObjects4.length = 0;
gdjs.room1Code.GDclickableObjects1.length = 0;
gdjs.room1Code.GDclickableObjects2.length = 0;
gdjs.room1Code.GDclickableObjects3.length = 0;
gdjs.room1Code.GDclickableObjects4.length = 0;
gdjs.room1Code.GDitemObjects1.length = 0;
gdjs.room1Code.GDitemObjects2.length = 0;
gdjs.room1Code.GDitemObjects3.length = 0;
gdjs.room1Code.GDitemObjects4.length = 0;
gdjs.room1Code.GDbackgroundObjects1.length = 0;
gdjs.room1Code.GDbackgroundObjects2.length = 0;
gdjs.room1Code.GDbackgroundObjects3.length = 0;
gdjs.room1Code.GDbackgroundObjects4.length = 0;
gdjs.room1Code.GDleftObjects1.length = 0;
gdjs.room1Code.GDleftObjects2.length = 0;
gdjs.room1Code.GDleftObjects3.length = 0;
gdjs.room1Code.GDleftObjects4.length = 0;
gdjs.room1Code.GDrightObjects1.length = 0;
gdjs.room1Code.GDrightObjects2.length = 0;
gdjs.room1Code.GDrightObjects3.length = 0;
gdjs.room1Code.GDrightObjects4.length = 0;


return;

}

gdjs['room1Code'] = gdjs.room1Code;
