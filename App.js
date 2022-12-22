function App({
   navigate
}) {
   //Create the layout.
   const lay = app.CreateLayout("Linear", "FillXY,VCenter");

   //Add some text.
   var s = "This is your <strong>app page</strong>."
   var txtHome = app.CreateText(s, 1, -1, "Html")

   //Add a button with primary color.
   const btnHello = app.CreateButton("go to login", 0.5, -1,
      "primary")
   btnHello.SetOnTouch(() => {
      navigate("Login")
   })
   
   lay.AddChild(btnHello )
   
   return lay
}