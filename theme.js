// Create a theme for all controls and dialogs.
function CreateTheme() {
   theme = app.CreateTheme("Light");
   theme.AdjustColor(35, 0, -10);
   theme.SetBackColor("#ffffffff");
   theme.SetBtnTextColor("#000000");
   theme.SetButtonOptions("custom");
   theme.SetButtonStyle("#fafafa", "#fafafa", 5, "#999999", 0, 1,
      "#ff9000");
   theme.SetCheckBoxOptions("dark");
   theme.SetTextEditOptions("underline");
   theme.SetDialogColor("#ffffffff");
   theme.SetDialogBtnColor("#ffeeeeee");
   theme.SetDialogBtnTxtColor("#ff666666");
   theme.SetTitleHeight(42);
   theme.SetTitleColor("#ff888888");
   theme.SetTitleDividerColor("#ff0099CC");
   theme.SetTextColor("#000000");
   app.SetTheme(theme);
}