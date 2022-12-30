function Home({
   navigate
}) {
   const layout = app.CreateLayout("Linear", "FillXY,VCenter");

   const text = MUI.CreateTextParagraph('', 1, -1)
   layout.AddChild(text)

   const onMount = () => {
      /*  api.get('/users/profile').then((profile) => {
         text.SetText(JSON.stringify(profile, undefined,
            2))
      }).catch(() => {})
*/
      setTimeout(() => {
         var uri =
            "content://media/external/images/media";
         var columns = "_data"
         var rows = app.QueryContent(uri, columns)
         var image = rows[0]
         app.AddImage(layout, app.Path2Uri(image._data),
            0.4)
         text.SetText(JSON.stringify(image, undefined, 2))
         
         app.UploadFile(
            'http://nowmad.io:5000/api/storage/upload',
            image._data, 'test.png', (error, file,
               result) => {
               console.log('error', error)
               console.log('file', file)
               console.log('result', result)
            })

      }, 1000)
   }

   return {
      layout,
      onMount
   }
}