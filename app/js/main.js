$(function () {
  if (!localStorage.theme) localStorage.theme = ""
  document.body.className = localStorage.theme
  checkboxLabel.onclick = () => {
    document.body.classList.toggle("light")
    localStorage.theme = document.body.className || ""
  }
})