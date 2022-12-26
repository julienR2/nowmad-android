app.Script('comp.drawer.js')

function App() {
   const routes = {
      Home: {
         icon: "fa-home",
         key: "Home",
         component: Home
      },
      About: {
         icon: "fa-book",
         key: "About",
         component: About
      }
   }

   const layout = MUI.CreateLayout("Linear", "FillXY")

   const appBar = MUI.CreateAppBar(routes.Home.key, "menu")
   appBar.SetOnMenuTouch(() => {
      app.OpenDrawer()
   })

   layout.AddChild(appBar)

   const {
      navigate, listen
   } = Navigator(layout, routes, true)

   listen(({
      key
   }) => {
      appBar.SetTitleText(key)
   })

   navigate('Home')

   CreateDrawer({
      navigate, routes
   })

   return {
      layout
   }
}