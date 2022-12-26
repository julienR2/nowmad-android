app.Script("screen.home.js")
app.Script("screen.about.js")

function Navigator(parentLayout, routes, keepAlive = false) {
   var current = null
   var listeners = []
   var mounted = {}

   const layout = app.CreateLayout("Frame", "VCenter,FillXY");
   parentLayout.AddChild(layout);

   const listen = (fn) => {
      listeners.push(fn)

      return() => listeners.filter(cb => cb !== fn)
   }

   const navigate = (key) => {
      if(current) {
         const previous = current
         current.layout.Animate("FadeOut", () => {
            previous.onBlur && previous.onBlur()

            if(keepAlive) return

            previous.onUnmount && previous.onUnmount()

            layout.RemoveChild(previous.layout)
         })
      }

      current = mounted[key] || routes[key].component({
         navigate, listen
      })

      current.layout.Hide()
      layout.AddChild(current.layout)
      current.layout.Animate("FadeIn")

      if(!keepAlive || !mounted[key]) {
         current.onMount && current.onMount()
      }

      current.onFocus && current.onFocus()

      mounted[key] = current

      listeners.map(fn => fn(routes[key]))
   }

   return {
      navigate, listen
   }
}