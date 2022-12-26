app.Script("utils.api.js")

function Login({
   navigate
}) {
   const layout = MUI.CreateLayout("Linear", "FillXY,VCenter");

   const logo = app.CreateImage("Img/Icon.png", 0.25)
   logo.SetMargins(0, 0, 0, 0.05)
   layout.AddChild(logo)

   const emailInput = MUI.CreateTextEditFilled(0.8, "Left",
      "Email", true)
   layout.AddChild(emailInput)

   const passwordInput = MUI.CreateTextEditFilled(0.8,
      "Left,Password",
      "Password", true)
   passwordInput.SetMargins(0, 0.05, 0, 0.1)
   passwordInput.SetOnEnter(onSubmit)
   layout.AddChild(
      passwordInput)

   const submitButton = MUI.CreateButtonRaised("Login", 0.35)
   submitButton.SetOnTouch(onSubmit)
   layout.AddChild(submitButton)

   function onSubmit() {
      emailInput.ClearFocus()
      passwordInput.ClearFocus()
      app.HideKeyboard()
      app.ShowProgress("Loading...")

      api.post('/auth/login', {
         email: emailInput.GetText(),
         password: passwordInput.GetText()
      }).then(({
         message, accessToken
      }) => {
         app.HideProgress()

         if(message) {
            app.ShowPopup(message)
            return
         }


         app.SaveText('accessToken', accessToken)
         navigate('App')
      }).catch(() => {
         app.HideProgress()
         app.ShowPopup('Something went wrong...')
      })
   }

   return {
      layout
   }
}