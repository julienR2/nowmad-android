app.Script("Login.js")
app.Script("App.js")

function RootNavigator(layout) {
   const ROOT_ROUTES = {
      Login: {
         key: "Login",
         component: Login
      },
      App: {
         key: "App",
         component: App
      }
   }

   var current = null

   const navigate = (key) => {
      if(current) {
         const previous = current
         current.Animate("FadeOut", () => {
            layout.RemoveChild(previous)
         })
      }

      current = ROOT_ROUTES[key].component({
         navigate
      })

      current.Hide()
      layout.AddChild(current)
      current.Animate("FadeIn")
   }


   navigate("Login")
}

const APP_ROUTES = {
   Home: {
      icon: "fa::",
      key: "Home",
      //component: Home
   },
   About: {
      icon: "fa",
      key: "About",
      //component: About
   }
}

function AppNavigator(layout) {

}