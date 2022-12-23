cfg.Light
cfg.MUI

app.Script("utils.navigation.js");

function OnStart() {
   app.SetOrientation("Portrait");

   app.InitializeUIKit(MUI.colors.teal)

   //Create the main app layout with objects vertically centered.
   layMain = MUI.CreateLayout("Linear", "FillXY");
   
   layContent = app.CreateLayout("Frame", "VCenter,FillXY");
   layContent.SetSize(1, 0.95);
   layMain.AddChild(layContent);

   RootNavigator(layContent)

   //Add main layout and drawer to app.	
   app.AddLayout(layMain);

   //Prevent back key closing the app.
   // app.EnableBackKey(false);
}