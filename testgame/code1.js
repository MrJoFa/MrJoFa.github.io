gdjs.menuCode = {};
gdjs.menuCode.localVariables = [];
gdjs.menuCode.idToCallbackMap = new Map();
gdjs.menuCode.GDmenu_9595backgroundObjects1= [];
gdjs.menuCode.GDmenu_9595backgroundObjects2= [];
gdjs.menuCode.GDnewgameObjects1= [];
gdjs.menuCode.GDnewgameObjects2= [];
gdjs.menuCode.GDloadgameObjects1= [];
gdjs.menuCode.GDloadgameObjects2= [];
gdjs.menuCode.GDsettingsObjects1= [];
gdjs.menuCode.GDsettingsObjects2= [];
gdjs.menuCode.GDtextbackObjects1= [];
gdjs.menuCode.GDtextbackObjects2= [];
gdjs.menuCode.GDtextboxObjects1= [];
gdjs.menuCode.GDtextboxObjects2= [];
gdjs.menuCode.GDclickableObjects1= [];
gdjs.menuCode.GDclickableObjects2= [];
gdjs.menuCode.GDitemObjects1= [];
gdjs.menuCode.GDitemObjects2= [];
gdjs.menuCode.GDbackgroundObjects1= [];
gdjs.menuCode.GDbackgroundObjects2= [];
gdjs.menuCode.GDleftObjects1= [];
gdjs.menuCode.GDleftObjects2= [];
gdjs.menuCode.GDrightObjects1= [];
gdjs.menuCode.GDrightObjects2= [];


gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDnewgameObjects1Objects = Hashtable.newFrom({"newgame": gdjs.menuCode.GDnewgameObjects1});
gdjs.menuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "room1", false);
}
}

}


};gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDnewgameObjects1Objects = Hashtable.newFrom({"newgame": gdjs.menuCode.GDnewgameObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDloadgameObjects1Objects = Hashtable.newFrom({"loadgame": gdjs.menuCode.GDloadgameObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDloadgameObjects1Objects = Hashtable.newFrom({"loadgame": gdjs.menuCode.GDloadgameObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDsettingsObjects1Objects = Hashtable.newFrom({"settings": gdjs.menuCode.GDsettingsObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDsettingsObjects1Objects = Hashtable.newFrom({"settings": gdjs.menuCode.GDsettingsObjects1});
gdjs.menuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("newgame"), gdjs.menuCode.GDnewgameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDnewgameObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDnewgameObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDnewgameObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDnewgameObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}

{ //Subevents
gdjs.menuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("newgame"), gdjs.menuCode.GDnewgameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDnewgameObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDnewgameObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDnewgameObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDnewgameObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("loadgame"), gdjs.menuCode.GDloadgameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDloadgameObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDloadgameObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDloadgameObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDloadgameObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("loadgame"), gdjs.menuCode.GDloadgameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDloadgameObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDloadgameObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDloadgameObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDloadgameObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("settings"), gdjs.menuCode.GDsettingsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDsettingsObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDsettingsObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDsettingsObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDsettingsObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("settings"), gdjs.menuCode.GDsettingsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDsettingsObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDsettingsObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDsettingsObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDsettingsObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDmenu_9595backgroundObjects1.length = 0;
gdjs.menuCode.GDmenu_9595backgroundObjects2.length = 0;
gdjs.menuCode.GDnewgameObjects1.length = 0;
gdjs.menuCode.GDnewgameObjects2.length = 0;
gdjs.menuCode.GDloadgameObjects1.length = 0;
gdjs.menuCode.GDloadgameObjects2.length = 0;
gdjs.menuCode.GDsettingsObjects1.length = 0;
gdjs.menuCode.GDsettingsObjects2.length = 0;
gdjs.menuCode.GDtextbackObjects1.length = 0;
gdjs.menuCode.GDtextbackObjects2.length = 0;
gdjs.menuCode.GDtextboxObjects1.length = 0;
gdjs.menuCode.GDtextboxObjects2.length = 0;
gdjs.menuCode.GDclickableObjects1.length = 0;
gdjs.menuCode.GDclickableObjects2.length = 0;
gdjs.menuCode.GDitemObjects1.length = 0;
gdjs.menuCode.GDitemObjects2.length = 0;
gdjs.menuCode.GDbackgroundObjects1.length = 0;
gdjs.menuCode.GDbackgroundObjects2.length = 0;
gdjs.menuCode.GDleftObjects1.length = 0;
gdjs.menuCode.GDleftObjects2.length = 0;
gdjs.menuCode.GDrightObjects1.length = 0;
gdjs.menuCode.GDrightObjects2.length = 0;

gdjs.menuCode.eventsList1(runtimeScene);
gdjs.menuCode.GDmenu_9595backgroundObjects1.length = 0;
gdjs.menuCode.GDmenu_9595backgroundObjects2.length = 0;
gdjs.menuCode.GDnewgameObjects1.length = 0;
gdjs.menuCode.GDnewgameObjects2.length = 0;
gdjs.menuCode.GDloadgameObjects1.length = 0;
gdjs.menuCode.GDloadgameObjects2.length = 0;
gdjs.menuCode.GDsettingsObjects1.length = 0;
gdjs.menuCode.GDsettingsObjects2.length = 0;
gdjs.menuCode.GDtextbackObjects1.length = 0;
gdjs.menuCode.GDtextbackObjects2.length = 0;
gdjs.menuCode.GDtextboxObjects1.length = 0;
gdjs.menuCode.GDtextboxObjects2.length = 0;
gdjs.menuCode.GDclickableObjects1.length = 0;
gdjs.menuCode.GDclickableObjects2.length = 0;
gdjs.menuCode.GDitemObjects1.length = 0;
gdjs.menuCode.GDitemObjects2.length = 0;
gdjs.menuCode.GDbackgroundObjects1.length = 0;
gdjs.menuCode.GDbackgroundObjects2.length = 0;
gdjs.menuCode.GDleftObjects1.length = 0;
gdjs.menuCode.GDleftObjects2.length = 0;
gdjs.menuCode.GDrightObjects1.length = 0;
gdjs.menuCode.GDrightObjects2.length = 0;


return;

}

gdjs['menuCode'] = gdjs.menuCode;
