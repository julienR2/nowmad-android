function About({
   navigate
}) {
   //Create the layout.
   const layout = app.CreateLayout("Linear", "FillXY,VCenter");

   const button = MUI.CreateButtonRaised('to Home', 1, -1)
   button.SetOnTouch(() => navigate('Home'))
   layout.AddChild(button)

   return {
      layout
   }
}