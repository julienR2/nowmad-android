app.Script('comp.separator.js')

function CreateDrawer({
   navigate, routes
}) {
   const drawerWidth = 0.75;
   const layDrawer = MUI.CreateLayout("Linear",
      "Vertical,Left,Top,FillXY");

   //Create layout for top of drawer.
   const layDrawerTop = MUI.CreateLayout("Linear",
      "Horizontal,Left,VCenter");
   layDrawerTop.SetSize(drawerWidth, -1);
   layDrawer.AddChild(layDrawerTop);

   //Add an icon to top layout.
   var img = app.CreateImage("Img/Nowmad.png", 0.1);
   img.SetMargins(0.02, 0.02, 0.04, 0.02);
   layDrawerTop.AddChild(img);

   //Add app name to top layout.
   var txtName = MUI.CreateTextH5("Nowmad", -1, -1, "Bold");
   layDrawerTop.AddChild(txtName);

   var separator = CreateSeparator(drawerWidth, 2, primaryColor)
   layDrawer.AddChild(separator)

   //Create menu layout.
   const layMenu = MUI.CreateLayout("Linear", "Vertical,Left");
   layDrawer.AddChild(layMenu)

   const items = Object.values(routes).map(({
      key, icon
   }) => key + ':[' + icon + ']')

   const list = MUI.CreateList(items, 1, -1)
   list.SetOnTouch((key) => {
      navigate(key)
      app.CloseDrawer("Left");
   })
   layMenu.AddChild(list)
   
   const layLogout = MUI.CreateLayout("Linear", "Vertical,Left, Bottom,FillXY");
   layDrawer.AddChild(layLogout)
   
   const logout = MUI.CreateList(['Logout:[fa-power-off]'], 1, -1)
   logout.SetOnTouch((key) => {
      app.ClearValue('accessToken')
      app.CloseDrawer("Left");
      rootNavigate('Login')
   })
   layLogout.AddChild(logout)
   
   app.AddDrawer(layDrawer, "Left", drawerWidth);
}