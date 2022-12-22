//Load external scripts.
app.Script("navigators.js");
app.Script("theme.js");

//Init some global variables.
var curMenu = "Home";
var curPage = null;

//Called when application is started.
function OnStart()
{
   //Lock screen orientation to Portrait.
   app.SetOrientation("Portrait");

   //Create and set a 'material style' theme.
   CreateTheme();

   //Create the main app layout with objects vertically centered.
   layMain = app.CreateLayout("Linear", "FillXY");
   layMain.SetBackColor("#ffffff");

   layContent = app.CreateLayout("Frame", "VCenter,FillXY");
   layContent.SetSize(1, 0.95);
   layMain.AddChild(layContent);
   
   RootNavigator(layContent)

   //Add main layout and drawer to app.	
   app.AddLayout(layMain);

   //Prevent back key closing the app.
   app.EnableBackKey(false);
}

//Swap the page content.
function ChangePage(page, title, force)
{
   //Check for changes.
   if(!force && curPage.IsChanged())
   {
      var yesNoSave = app.CreateYesNoDialog("Discard Changes?");
      yesNoSave.SetOnTouch(function(ret)
      {
         if(ret == "Yes") ChangePage(page, title, true)
      });
      yesNoSave.Show();
      return;
   }

   //Fade out current content.
   if(home.IsVisible()) home.Show(false);
   if(file.IsVisible()) file.Show(false);

   //Fade in new content.
   page.Show(true, title);

   //Highlight the chosen menu item in the appropriate list.
   if(curMenuList == lstMenuMain) lstMenuFiles.SelectItemByIndex(-
      1);
   else lstMenuMain.SelectItemByIndex(-1);
   curMenuList.SelectItem(title);

   //Set title and store current page.
   txtBarTitle.SetText(title);
   curMenu = title;
   curPage = page;
}

//Called when back button is pressed.
function OnBack()
{
   if(curMenu !== "Home")
   {
      curMenu = "Home";
      ChangePage(home, curMenu);
   }
   else
   {
      var yesNo = app.CreateYesNoDialog("Exit the app?");
      yesNo.SetOnTouch(function(result)
      {
         if(result == "Yes") app.Exit()
      });
      yesNo.Show();
   }
}