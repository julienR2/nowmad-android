// Create an action bar at the top.
function CreateActionBar(layMain)
{
   //Create horizontal layout for top bar.
   layHoriz = app.CreateLayout("Linear", "Horizontal,FillX,Left");
   layHoriz.SetBackColor("#4285F4");
   layMain.AddChild(layHoriz);

   //Create menu (hamburger) icon .
   txtMenu = app.CreateText("[fa-bars]", -1, -1, "FontAwesome");
   txtMenu.SetPadding(12, 10, 12, 10, "dip");
   txtMenu.SetTextSize(28);
   txtMenu.SetTextColor("#eeeeee");
   txtMenu.SetOnTouchUp(function()
   {
      app.OpenDrawer()
   });
   layHoriz.AddChild(txtMenu);

   //Create layout for title box.
   layBarTitle = app.CreateLayout("Linear", "Horizontal");
   layBarTitle.SetSize(0.73);
   layHoriz.AddChild(layBarTitle);

   //Create title.
   txtBarTitle = app.CreateText("Home", -1, -1, "Left");
   txtBarTitle.SetMargins(0, 10, 0, 0, "dip");
   txtBarTitle.SetTextSize(22);
   txtBarTitle.SetTextColor("#ffffff");
   layBarTitle.AddChild(txtBarTitle);
}