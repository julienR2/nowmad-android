app.Script("screen.login.js")
app.Script("screen.app.js")

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
   var listeners = []

   const listen = (fn) => {
      listeners.push(fn)

      return() => listeners.filter(cb => cb !== fn)
   }

   const navigate = (key) => {
      if(current) {
         const previous = current
         current.Animate("FadeOut", () => {
            layout.RemoveChild(previous)
         })
      }

      current = ROOT_ROUTES[key].component({
         navigate, listen
      })

      current.Hide()
      layout.AddChild(current)
      current.Animate("FadeIn")
   }

   if(app.LoadText('accessToken')) {
      navigate('App')
   } else {
      navigate("Login")
   }
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