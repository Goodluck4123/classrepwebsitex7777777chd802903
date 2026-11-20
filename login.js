let enterButton = document.getElementById("enterButton") 
let classRepName = document.getElementById("name")
let password = document.getElementById("password")
let error = document.getElementById("error")
let showOrHideButton = document.getElementById("showOrHideButton")



 enterButton.addEventListener("click", (event) => {
  if (classRepName.value !== "Class Representative") {
    error.textContent = "Name Invalid"
    password.type = "password"
  } else if(password.value !== "classrepresentative1234") {
    password.type = "password"
    error.textContent = "Password Invalid"
  } else {
    password.type = "password"
    document.getElementById("loginPage").style.display = "none"
    document.getElementById("welcome").style.display = "block"
    sessionStorage.setItem("loggedIn", "yes")
    setTimeout(() => {
        window.location.href = "dashboard.html"
    }, 2000)
    
  }
 })
 




showOrHideButton.addEventListener("click", (event) => {
    if(showOrHideButton.textContent == "Show") {
    event.target.textContent = "Hide"
    password.type = "text"
}else {
    if(showOrHideButton.textContent == "Hide") {
        event.target.textContent = "Show"
        password.type = "password"
    }
}
    

    
})
 
