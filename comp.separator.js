function CreateSeparator(width, height, color) {
   var sep = app.CreateImage(null, width, height, "fix", 2, 2);
   sep.SetSize(-1, height, "px");
   sep.SetColor(color);

   return sep;
}