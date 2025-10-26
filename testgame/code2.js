gdjs.room2Code = {};
gdjs.room2Code.localVariables = [];
gdjs.room2Code.idToCallbackMap = new Map();
gdjs.room2Code.GDclosetObjects1= [];
gdjs.room2Code.GDclosetObjects2= [];
gdjs.room2Code.GDclosetObjects3= [];
gdjs.room2Code.GDclosetObjects4= [];
gdjs.room2Code.GDsafeObjects1= [];
gdjs.room2Code.GDsafeObjects2= [];
gdjs.room2Code.GDsafeObjects3= [];
gdjs.room2Code.GDsafeObjects4= [];
gdjs.room2Code.GDtextbackObjects1= [];
gdjs.room2Code.GDtextbackObjects2= [];
gdjs.room2Code.GDtextbackObjects3= [];
gdjs.room2Code.GDtextbackObjects4= [];
gdjs.room2Code.GDtextboxObjects1= [];
gdjs.room2Code.GDtextboxObjects2= [];
gdjs.room2Code.GDtextboxObjects3= [];
gdjs.room2Code.GDtextboxObjects4= [];
gdjs.room2Code.GDclickableObjects1= [];
gdjs.room2Code.GDclickableObjects2= [];
gdjs.room2Code.GDclickableObjects3= [];
gdjs.room2Code.GDclickableObjects4= [];
gdjs.room2Code.GDitemObjects1= [];
gdjs.room2Code.GDitemObjects2= [];
gdjs.room2Code.GDitemObjects3= [];
gdjs.room2Code.GDitemObjects4= [];
gdjs.room2Code.GDbackgroundObjects1= [];
gdjs.room2Code.GDbackgroundObjects2= [];
gdjs.room2Code.GDbackgroundObjects3= [];
gdjs.room2Code.GDbackgroundObjects4= [];
gdjs.room2Code.GDleftObjects1= [];
gdjs.room2Code.GDleftObjects2= [];
gdjs.room2Code.GDleftObjects3= [];
gdjs.room2Code.GDleftObjects4= [];
gdjs.room2Code.GDrightObjects1= [];
gdjs.room2Code.GDrightObjects2= [];
gdjs.room2Code.GDrightObjects3= [];
gdjs.room2Code.GDrightObjects4= [];


gdjs.room2Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("closet"), gdjs.room2Code.GDclosetObjects2);
{for(var i = 0, len = gdjs.room2Code.GDclosetObjects2.length ;i < len;++i) {
    gdjs.room2Code.GDclosetObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("closet"), gdjs.room2Code.GDclosetObjects2);
{for(var i = 0, len = gdjs.room2Code.GDclosetObjects2.length ;i < len;++i) {
    gdjs.room2Code.GDclosetObjects2[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("safe"), gdjs.room2Code.GDsafeObjects1);
{for(var i = 0, len = gdjs.room2Code.GDsafeObjects1.length ;i < len;++i) {
    gdjs.room2Code.GDsafeObjects1[i].hide();
}
}
}

}


};gdjs.room2Code.mapOfGDgdjs_9546room2Code_9546GDclickableObjects1Objects = Hashtable.newFrom({"clickable": gdjs.room2Code.GDclickableObjects1});
gdjs.room2Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs.room2Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs.room2Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs.room2Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs.room2Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("item"), gdjs.room2Code.GDitemObjects3);
gdjs.copyArray(runtimeScene.getObjects("safe"), gdjs.room2Code.GDsafeObjects3);
gdjs.copyArray(gdjs.room2Code.GDtextboxObjects1, gdjs.room2Code.GDtextboxObjects3);

{for(var i = 0, len = gdjs.room2Code.GDsafeObjects3.length ;i < len;++i) {
    gdjs.room2Code.GDsafeObjects3[i].hide(false);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}
{for(var i = 0, len = gdjs.room2Code.GDtextboxObjects3.length ;i < len;++i) {
    gdjs.room2Code.GDtextboxObjects3[i].getBehavior("Text").setText("Det fanns ett kassaskåp bakom tavlan! Koden på lappen passade och det ligger en nyckel här.");
}
}
{for(var i = 0, len = gdjs.room2Code.GDitemObjects3.length ;i < len;++i) {
    gdjs.room2Code.GDitemObjects3[i].getBehavior("Animation").setAnimationIndex(2);
}
}

{ //Subevents
gdjs.room2Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("safe"), gdjs.room2Code.GDsafeObjects3);
gdjs.copyArray(gdjs.room2Code.GDtextboxObjects1, gdjs.room2Code.GDtextboxObjects3);

{for(var i = 0, len = gdjs.room2Code.GDsafeObjects3.length ;i < len;++i) {
    gdjs.room2Code.GDsafeObjects3[i].hide(false);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}
{for(var i = 0, len = gdjs.room2Code.GDtextboxObjects3.length ;i < len;++i) {
    gdjs.room2Code.GDtextboxObjects3[i].getBehavior("Text").setText("Jag kan inte koden.");
}
}

{ //Subevents
gdjs.room2Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("safe"), gdjs.room2Code.GDsafeObjects3);
gdjs.copyArray(gdjs.room2Code.GDtextboxObjects1, gdjs.room2Code.GDtextboxObjects3);

{for(var i = 0, len = gdjs.room2Code.GDsafeObjects3.length ;i < len;++i) {
    gdjs.room2Code.GDsafeObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.room2Code.GDtextboxObjects3.length ;i < len;++i) {
    gdjs.room2Code.GDtextboxObjects3[i].getBehavior("Text").setText("Det fanns ett kassaskåp bakom tavlan! Synd att jag inte kan koden.");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}

{ //Subevents
gdjs.room2Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("item"), gdjs.room2Code.GDitemObjects2);
gdjs.copyArray(gdjs.room2Code.GDtextboxObjects1, gdjs.room2Code.GDtextboxObjects2);

{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}
{for(var i = 0, len = gdjs.room2Code.GDtextboxObjects2.length ;i < len;++i) {
    gdjs.room2Code.GDtextboxObjects2[i].getBehavior("Text").setText("Kassaskåpet gick att öppna med koden på lappen. Det ligger en nyckel här.");
}
}
{for(var i = 0, len = gdjs.room2Code.GDitemObjects2.length ;i < len;++i) {
    gdjs.room2Code.GDitemObjects2[i].getBehavior("Animation").setAnimationIndex(2);
}
}

{ //Subevents
gdjs.room2Code.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.room2Code.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("closet"), gdjs.room2Code.GDclosetObjects1);
{for(var i = 0, len = gdjs.room2Code.GDclosetObjects1.length ;i < len;++i) {
    gdjs.room2Code.GDclosetObjects1[i].hide(false);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}
}

}


};gdjs.room2Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.room2Code.GDclickableObjects1, gdjs.room2Code.GDclickableObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.room2Code.GDclickableObjects2.length;i<l;++i) {
    if ( gdjs.room2Code.GDclickableObjects2[i].getVariableString(gdjs.room2Code.GDclickableObjects2[i].getVariables().getFromIndex(0)) == "lamp" ) {
        isConditionTrue_0 = true;
        gdjs.room2Code.GDclickableObjects2[k] = gdjs.room2Code.GDclickableObjects2[i];
        ++k;
    }
}
gdjs.room2Code.GDclickableObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.room2Code.GDtextboxObjects1, gdjs.room2Code.GDtextboxObjects2);

{for(var i = 0, len = gdjs.room2Code.GDtextboxObjects2.length ;i < len;++i) {
    gdjs.room2Code.GDtextboxObjects2[i].getBehavior("Text").setText("Det är bäst om lampan får vara tänd.");
}
}
}

}


{

gdjs.copyArray(gdjs.room2Code.GDclickableObjects1, gdjs.room2Code.GDclickableObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.room2Code.GDclickableObjects2.length;i<l;++i) {
    if ( gdjs.room2Code.GDclickableObjects2[i].getVariableString(gdjs.room2Code.GDclickableObjects2[i].getVariables().getFromIndex(0)) == "bed" ) {
        isConditionTrue_0 = true;
        gdjs.room2Code.GDclickableObjects2[k] = gdjs.room2Code.GDclickableObjects2[i];
        ++k;
    }
}
gdjs.room2Code.GDclickableObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.room2Code.GDtextboxObjects1, gdjs.room2Code.GDtextboxObjects2);

{for(var i = 0, len = gdjs.room2Code.GDtextboxObjects2.length ;i < len;++i) {
    gdjs.room2Code.GDtextboxObjects2[i].getBehavior("Text").setText("Jag är inte trött.");
}
}
}

}


{

gdjs.copyArray(gdjs.room2Code.GDclickableObjects1, gdjs.room2Code.GDclickableObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.room2Code.GDclickableObjects2.length;i<l;++i) {
    if ( gdjs.room2Code.GDclickableObjects2[i].getVariableString(gdjs.room2Code.GDclickableObjects2[i].getVariables().getFromIndex(0)) == "drawers" ) {
        isConditionTrue_0 = true;
        gdjs.room2Code.GDclickableObjects2[k] = gdjs.room2Code.GDclickableObjects2[i];
        ++k;
    }
}
gdjs.room2Code.GDclickableObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.room2Code.GDtextboxObjects1, gdjs.room2Code.GDtextboxObjects2);

{for(var i = 0, len = gdjs.room2Code.GDtextboxObjects2.length ;i < len;++i) {
    gdjs.room2Code.GDtextboxObjects2[i].getBehavior("Text").setText("Lådorna är tomma.");
}
}
}

}


{

gdjs.copyArray(gdjs.room2Code.GDclickableObjects1, gdjs.room2Code.GDclickableObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.room2Code.GDclickableObjects2.length;i<l;++i) {
    if ( gdjs.room2Code.GDclickableObjects2[i].getVariableString(gdjs.room2Code.GDclickableObjects2[i].getVariables().getFromIndex(0)) == "painting" ) {
        isConditionTrue_0 = true;
        gdjs.room2Code.GDclickableObjects2[k] = gdjs.room2Code.GDclickableObjects2[i];
        ++k;
    }
}
gdjs.room2Code.GDclickableObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.room2Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.room2Code.GDclickableObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.room2Code.GDclickableObjects1.length;i<l;++i) {
    if ( gdjs.room2Code.GDclickableObjects1[i].getVariableString(gdjs.room2Code.GDclickableObjects1[i].getVariables().getFromIndex(0)) == "closet" ) {
        isConditionTrue_0 = true;
        gdjs.room2Code.GDclickableObjects1[k] = gdjs.room2Code.GDclickableObjects1[i];
        ++k;
    }
}
gdjs.room2Code.GDclickableObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.room2Code.GDtextboxObjects1 */
{for(var i = 0, len = gdjs.room2Code.GDtextboxObjects1.length ;i < len;++i) {
    gdjs.room2Code.GDtextboxObjects1[i].getBehavior("Text").setText("Det finns ingenting i garderoben.");
}
}

{ //Subevents
gdjs.room2Code.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.room2Code.mapOfGDgdjs_9546room2Code_9546GDclickableObjects1Objects = Hashtable.newFrom({"clickable": gdjs.room2Code.GDclickableObjects1});
gdjs.room2Code.mapOfGDgdjs_9546room2Code_9546GDrightObjects1Objects = Hashtable.newFrom({"right": gdjs.room2Code.GDrightObjects1});
gdjs.room2Code.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "room1", false);
}
}

}


};gdjs.room2Code.eventsList9 = function(runtimeScene) {

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

{ //Subevents
gdjs.room2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.room2Code.GDrightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.room2Code.GDrightObjects1.length;i<l;++i) {
    if ( gdjs.room2Code.GDrightObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.room2Code.GDrightObjects1[k] = gdjs.room2Code.GDrightObjects1[i];
        ++k;
    }
}
gdjs.room2Code.GDrightObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.room2Code.GDrightObjects1 */
{for(var i = 0, len = gdjs.room2Code.GDrightObjects1.length ;i < len;++i) {
    gdjs.room2Code.GDrightObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.room2Code.GDleftObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.room2Code.GDleftObjects1.length;i<l;++i) {
    if ( gdjs.room2Code.GDleftObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.room2Code.GDleftObjects1[k] = gdjs.room2Code.GDleftObjects1[i];
        ++k;
    }
}
gdjs.room2Code.GDleftObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.room2Code.GDleftObjects1 */
{for(var i = 0, len = gdjs.room2Code.GDleftObjects1.length ;i < len;++i) {
    gdjs.room2Code.GDleftObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clickable"), gdjs.room2Code.GDclickableObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.room2Code.mapOfGDgdjs_9546room2Code_9546GDclickableObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("textbox"), gdjs.room2Code.GDtextboxObjects1);
{gdjs.evtTools.camera.showLayer(runtimeScene, "UILayer");
}
{for(var i = 0, len = gdjs.room2Code.GDtextboxObjects1.length ;i < len;++i) {
    gdjs.room2Code.GDtextboxObjects1[i].getBehavior("Text").setText("...");
}
}

{ //Subevents
gdjs.room2Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clickable"), gdjs.room2Code.GDclickableObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.room2Code.mapOfGDgdjs_9546room2Code_9546GDclickableObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("item"), gdjs.room2Code.GDitemObjects1);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "UILayer");
}
{for(var i = 0, len = gdjs.room2Code.GDitemObjects1.length ;i < len;++i) {
    gdjs.room2Code.GDitemObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.room2Code.GDrightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.room2Code.GDrightObjects1.length;i<l;++i) {
    if ( gdjs.room2Code.GDrightObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.room2Code.GDrightObjects1[k] = gdjs.room2Code.GDrightObjects1[i];
        ++k;
    }
}
gdjs.room2Code.GDrightObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.room2Code.GDrightObjects1 */
{for(var i = 0, len = gdjs.room2Code.GDrightObjects1.length ;i < len;++i) {
    gdjs.room2Code.GDrightObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.room2Code.GDrightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.room2Code.mapOfGDgdjs_9546room2Code_9546GDrightObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.room2Code.GDrightObjects1 */
{for(var i = 0, len = gdjs.room2Code.GDrightObjects1.length ;i < len;++i) {
    gdjs.room2Code.GDrightObjects1[i].hide(false);
}
}

{ //Subevents
gdjs.room2Code.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.room2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.room2Code.GDclosetObjects1.length = 0;
gdjs.room2Code.GDclosetObjects2.length = 0;
gdjs.room2Code.GDclosetObjects3.length = 0;
gdjs.room2Code.GDclosetObjects4.length = 0;
gdjs.room2Code.GDsafeObjects1.length = 0;
gdjs.room2Code.GDsafeObjects2.length = 0;
gdjs.room2Code.GDsafeObjects3.length = 0;
gdjs.room2Code.GDsafeObjects4.length = 0;
gdjs.room2Code.GDtextbackObjects1.length = 0;
gdjs.room2Code.GDtextbackObjects2.length = 0;
gdjs.room2Code.GDtextbackObjects3.length = 0;
gdjs.room2Code.GDtextbackObjects4.length = 0;
gdjs.room2Code.GDtextboxObjects1.length = 0;
gdjs.room2Code.GDtextboxObjects2.length = 0;
gdjs.room2Code.GDtextboxObjects3.length = 0;
gdjs.room2Code.GDtextboxObjects4.length = 0;
gdjs.room2Code.GDclickableObjects1.length = 0;
gdjs.room2Code.GDclickableObjects2.length = 0;
gdjs.room2Code.GDclickableObjects3.length = 0;
gdjs.room2Code.GDclickableObjects4.length = 0;
gdjs.room2Code.GDitemObjects1.length = 0;
gdjs.room2Code.GDitemObjects2.length = 0;
gdjs.room2Code.GDitemObjects3.length = 0;
gdjs.room2Code.GDitemObjects4.length = 0;
gdjs.room2Code.GDbackgroundObjects1.length = 0;
gdjs.room2Code.GDbackgroundObjects2.length = 0;
gdjs.room2Code.GDbackgroundObjects3.length = 0;
gdjs.room2Code.GDbackgroundObjects4.length = 0;
gdjs.room2Code.GDleftObjects1.length = 0;
gdjs.room2Code.GDleftObjects2.length = 0;
gdjs.room2Code.GDleftObjects3.length = 0;
gdjs.room2Code.GDleftObjects4.length = 0;
gdjs.room2Code.GDrightObjects1.length = 0;
gdjs.room2Code.GDrightObjects2.length = 0;
gdjs.room2Code.GDrightObjects3.length = 0;
gdjs.room2Code.GDrightObjects4.length = 0;

gdjs.room2Code.eventsList9(runtimeScene);
gdjs.room2Code.GDclosetObjects1.length = 0;
gdjs.room2Code.GDclosetObjects2.length = 0;
gdjs.room2Code.GDclosetObjects3.length = 0;
gdjs.room2Code.GDclosetObjects4.length = 0;
gdjs.room2Code.GDsafeObjects1.length = 0;
gdjs.room2Code.GDsafeObjects2.length = 0;
gdjs.room2Code.GDsafeObjects3.length = 0;
gdjs.room2Code.GDsafeObjects4.length = 0;
gdjs.room2Code.GDtextbackObjects1.length = 0;
gdjs.room2Code.GDtextbackObjects2.length = 0;
gdjs.room2Code.GDtextbackObjects3.length = 0;
gdjs.room2Code.GDtextbackObjects4.length = 0;
gdjs.room2Code.GDtextboxObjects1.length = 0;
gdjs.room2Code.GDtextboxObjects2.length = 0;
gdjs.room2Code.GDtextboxObjects3.length = 0;
gdjs.room2Code.GDtextboxObjects4.length = 0;
gdjs.room2Code.GDclickableObjects1.length = 0;
gdjs.room2Code.GDclickableObjects2.length = 0;
gdjs.room2Code.GDclickableObjects3.length = 0;
gdjs.room2Code.GDclickableObjects4.length = 0;
gdjs.room2Code.GDitemObjects1.length = 0;
gdjs.room2Code.GDitemObjects2.length = 0;
gdjs.room2Code.GDitemObjects3.length = 0;
gdjs.room2Code.GDitemObjects4.length = 0;
gdjs.room2Code.GDbackgroundObjects1.length = 0;
gdjs.room2Code.GDbackgroundObjects2.length = 0;
gdjs.room2Code.GDbackgroundObjects3.length = 0;
gdjs.room2Code.GDbackgroundObjects4.length = 0;
gdjs.room2Code.GDleftObjects1.length = 0;
gdjs.room2Code.GDleftObjects2.length = 0;
gdjs.room2Code.GDleftObjects3.length = 0;
gdjs.room2Code.GDleftObjects4.length = 0;
gdjs.room2Code.GDrightObjects1.length = 0;
gdjs.room2Code.GDrightObjects2.length = 0;
gdjs.room2Code.GDrightObjects3.length = 0;
gdjs.room2Code.GDrightObjects4.length = 0;


return;

}

gdjs['room2Code'] = gdjs.room2Code;
