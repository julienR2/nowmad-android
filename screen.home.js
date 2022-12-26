function Home({
   navigate
}) {
   const layout = app.CreateLayout("Linear", "FillXY,VCenter");

   const text = MUI.CreateTextParagraph('', 1, -1)
   layout.AddChild(text)

   const onMount = () => {
      api.get('/users/profile').then((profile) => {
         text.SetText(JSON.stringify(profile, undefined,
            2))
      }).catch(() => {})
      
      setTimeout(() => {
         var uri = "content://media/external/images/media";
    var columns = "_data"
    var rows = app.QueryContent( uri, columns )
    
    rows.forEach((row) => console.log(JSON.stringify(row)))
      }, 3000)
   }
   
   return {
      layout,
      onMount
   }
}