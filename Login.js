function Login({navigate}) {
   //Create the layout.
   const lay = app.CreateLayout("Linear", "FillXY,VCenter");

   //Add some text.
   var s = "This is your <strong>login page</strong>."
   const txtHome = app.CreateText(s, 1, -1, "Html")

   //Add a button with primary color.
   const btnHello = app.CreateButton("go to app", 0.5, -1,
      "primary")
   btnHello.SetOnTouch(() => {
      console.log("go to app !")
      navigate("App")
   })
   lay.AddChild(btnHello)
   return lay
}