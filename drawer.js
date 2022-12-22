// Handle menu item selection.
function onMenuItemTouch(title, body, type, index)
{
   //Close the drawer.
   app.CloseDrawer("Left");
}

// Create the drawer contents.
function CreateDrawer()
{
   //Create a layout for the drawer.
   //(Here we also put it inside a scroller to allow for long menus)
   drawerWidth = 0.75;
   drawerScroll = app.CreateScroller(drawerWidth, 1);
   drawerScroll.SetBackColor("White");
   layDrawer = app.CreateLayout("Linear", "Left");
   drawerScroll.AddChild(layDrawer);

   //Create layout for top of drawer.
   layDrawerTop = app.CreateLayout("Linear",
      "Horizontal,Left,FillY,VCenter");
   layDrawerTop.SetBackColor("#4285F4");
   layDrawerTop.SetSize(drawerWidth);
   layDrawer.AddChild(layDrawerTop);

   //Add an icon to top layout.
   var img = app.CreateImage("Img/Icon.png", 0.15);
   img.SetMargins(0.02, 0.02, 0.02, 0.02);
   layDrawerTop.AddChild(img);

   //Add app name to top layout.
   var txtName = app.CreateText("Nowmad", -1, -1, "Bold");
   txtName.SetTextColor("White");
   txtName.SetTextSize(16);
   layDrawerTop.AddChild(txtName);

   //Create menu layout.
   var layMenu = app.CreateLayout("Linear", "Left");
   layDrawer.AddChild(layMenu);

   //Add a list to menu layout (with the menu style option).
   var listItems =
      "Home::[fa-home],About::[fa-question-circle],New File::[fa-plus]";
   lstMenuMain = app.CreateList(listItems, drawerWidth, -1,
      "Menu,Expand");
   lstMenuMain.SetColumnWidths(-1, 0.35, 0.18);
   lstMenuMain.SelectItemByIndex(0, true);
   lstMenuMain.SetItemByIndex(0, "Home");
   lstMenuMain.SetOnTouch(onMenuItemTouch);
   layMenu.AddChild(lstMenuMain);
   curMenuList = lstMenuMain;
   
   app.AddDrawer(drawerScroll, "Left", drawerWidth);
}