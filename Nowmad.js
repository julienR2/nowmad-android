cfg.Light
cfg.MUI

var  rootNavigate = () => {}

app.Script("utils.constants.js")
app.Script("utils.navigation.js");
app.Script("screen.login.js")
app.Script("screen.app.js")

function OnStart() {
 //  app.SetOrientation("Portrait");
   app.InitializeUIKit(primaryColor)

   layout = MUI.CreateLayout("Linear", "FillXY");

   const routes = {
      Login: {
         key: "Login",
         component: Login
      },
      App: {
         key: "App",
         component: App
      }
   }

   const {
      navigate, listen
   } = Navigator(layout, routes)
   
   rootNavigate = navigate

   if(app.LoadText('accessToken')) {
      navigate('App')
   } else {
      navigate("Login")
   }

   // app.ClearValue('accessToken')

   app.AddLayout(layout);

   //Prevent back key closing the app.
   // app.EnableBackKey(false);
}