/*let classDues = document.getElementById("classDues")
let manual1 = document.getElementById("manual1")
let manual2 = document.getElementById("manual2")
let manual3 = document.getElementById("manual3")
let manual4 = document.getElementById("manual4")
let manual5 = document.getElementById("manual5")
let manual6 = document.getElementById("manual6")
let manual7 = document.getElementById("manual7")
let manual8 = document.getElementById("manual8")
let manual9 = document.getElementById("manual9")
let nameOfStudent = document.getElementsByClassName("studentName")
let numOfStudents = document.getElementById("numOfStudents")
numOfStudents.textContent = nameOfStudent.length



//for class dues
Array.from(nameOfStudent).forEach((element) => {
    let myP = null
    element.children[1].children[0].addEventListener("click", (event) => {
        
        if(element.children[1].children[0].checked){ 
        
        let newP = document.createElement("p")
        newP.style.margin = "0px"
        newP.textContent = element.children[0].textContent + " paid"
        classDues.append(newP)
        myP = newP
    } else {
        if(myP) {
            myP.remove() 
            myP = null
        }
        
        
    }
    })
})

//for manual1
Array.from(nameOfStudent).forEach((element) => {
    let myP = null
    element.children[2].children[0].addEventListener("click", (event) => {
        
        if(element.children[2].children[0].checked){ 
        
        let newP = document.createElement("p")
        newP.style.margin = "0px"
        newP.textContent = element.children[0].textContent + " paid"
        manual1.append(newP)
        myP = newP
    } else {
        if(myP) {
            myP.remove() 
            myP = null
        }
        
        
    }
    })
})



//for manual2
Array.from(nameOfStudent).forEach((element) => {
    let myP = null
    element.children[3].children[0].addEventListener("click", (event) => {
        
        if(element.children[3].children[0].checked){ 
        
        let newP = document.createElement("p")
        newP.style.margin = "0px"
        newP.textContent = element.children[0].textContent + " paid"
        manual2.append(newP)
        myP = newP
    } else {
        if(myP) {
            myP.remove() 
            myP = null
        }
        
        
    }
    })
})



//for manual3
Array.from(nameOfStudent).forEach((element) => {
    let myP = null
    element.children[4].children[0].addEventListener("click", (event) => {
        
        if(element.children[4].children[0].checked){ 
        
        let newP = document.createElement("p")
        newP.style.margin = "0px"
        newP.textContent = element.children[0].textContent + " paid"
        manual3.append(newP)
        myP = newP
    } else {
        if(myP) {
            myP.remove() 
            myP = null
        }
        
        
    }
    })
})




//for manual4
Array.from(nameOfStudent).forEach((element) => {
    let myP = null
    element.children[5].children[0].addEventListener("click", (event) => {
        
        if(element.children[5].children[0].checked){ 
        
        let newP = document.createElement("p")
        newP.style.margin = "0px"
        newP.textContent = element.children[0].textContent + " paid"
        manual4.append(newP)
        myP = newP
    } else {
        if(myP) {
            myP.remove() 
            myP = null
        }
        
        
    }
    })
})




//for manual5
Array.from(nameOfStudent).forEach((element) => {
    let myP = null
    element.children[6].children[0].addEventListener("click", (event) => {
        
        if(element.children[6].children[0].checked){ 
        
        let newP = document.createElement("p")
        newP.style.margin = "0px"
        newP.textContent = element.children[0].textContent + " paid"
        manual5.append(newP)
        myP = newP
    } else {
        if(myP) {
            myP.remove() 
            myP = null
        }
        
        
    }
    })
})



//for manual6
Array.from(nameOfStudent).forEach((element) => {
    let myP = null
    element.children[7].children[0].addEventListener("click", (event) => {
        
        if(element.children[7].children[0].checked){ 
        
        let newP = document.createElement("p")
        newP.style.margin = "0px"
        newP.textContent = element.children[0].textContent + " paid"
        manual6.append(newP)
        myP = newP
    } else {
        if(myP) {
            myP.remove() 
            myP = null
        }
        
        
    }
    })
})


//for manual7
Array.from(nameOfStudent).forEach((element) => {
    let myP = null
    element.children[8].children[0].addEventListener("click", (event) => {
        
        if(element.children[8].children[0].checked){ 
        
        let newP = document.createElement("p")
        newP.style.margin = "0px"
        newP.textContent = element.children[0].textContent + " paid"
        manual7.append(newP)
        myP = newP
    } else {
        if(myP) {
            myP.remove() 
            myP = null
        }
        
        
    }
    })
})



//for manual8
Array.from(nameOfStudent).forEach((element) => {
    let myP = null
    element.children[9].children[0].addEventListener("click", (event) => {
        
        if(element.children[9].children[0].checked){ 
        
        let newP = document.createElement("p")
        newP.style.margin = "0px"
        newP.textContent = element.children[0].textContent + " paid"
        manual8.append(newP)
        myP = newP
    } else {
        if(myP) {
            myP.remove() 
            myP = null
        }
        
        
    }
    })
})



//for manual9
Array.from(nameOfStudent).forEach((element) => {
    let myP = null
    element.children[10].children[0].addEventListener("click", (event) => {
        
        if(element.children[10].children[0].checked){ 
        
        let newP = document.createElement("p")
        newP.style.margin = "0px"
        newP.textContent = element.children[0].textContent + " paid"
        manual9.append(newP)
        myP = newP
    } else {
        if(myP) {
            myP.remove() 
            myP = null
        }
        
        
    }
    })
})


//to show or hide display
let dues = document.getElementById("dues")
let m1 = document.getElementById("1")
let m2 = document.getElementById("2")
let m3 = document.getElementById("3")
let m4 = document.getElementById("4")
let m5 = document.getElementById("5")
let m6 = document.getElementById("6")
let m7 = document.getElementById("7")
let m8 = document.getElementById("8")
let m9 = document.getElementById("9")


dues.addEventListener("click", (event) => {
    if(dues.textContent.startsWith("Show")) {
        classDues.style.display = "block"
        dues.textContent = "Hide class dues paid students"
    } else {
        classDues.style.display = "none"
        dues.textContent = "Show class dues paid students"
    }
})

m1.addEventListener("click", (event) => {
    if(m1.textContent.startsWith("Show")) {
        manual1.style.display = "block"
        m1.textContent = "Hide manual1 paid students"
    } else {
        manual1.style.display = "none"
        m1.textContent = "Show manual1 paid students"
    }
})

m2.addEventListener("click", (event) => {
    if(m2.textContent.startsWith("Show")) {
        manual2.style.display = "block"
        m2.textContent = "Hide manual2 paid students"
    } else {
        manual2.style.display = "none"
        m2.textContent = "Show manual2 paid students"
    }
})

m3.addEventListener("click", (event) => {
    if(m3.textContent.startsWith("Show")) {
        manual3.style.display = "block"
        m3.textContent = "Hide manual3 paid students"
    } else {
        manual3.style.display = "none"
        m3.textContent = "Show manual3 paid students"
    }
})

m4.addEventListener("click", (event) => {
    if(m4.textContent.startsWith("Show")) {
        manual4.style.display = "block"
        m4.textContent = "Hide manual4 paid students"
    } else {
        manual4.style.display = "none"
        m4.textContent = "Show manual4 paid students"
    }
})

m5.addEventListener("click", (event) => {
    if(m5.textContent.startsWith("Show")) {
        manual5.style.display = "block"
        m5.textContent = "Hide manual5 paid students"
    } else {
        manual5.style.display = "none"
        m5.textContent = "Show manual5 paid students"
    }
})

m6.addEventListener("click", (event) => {
    if(m6.textContent.startsWith("Show")) {
        manual6.style.display = "block"
        m6.textContent = "Hide manual6 paid students"
    } else {
        manual6.style.display = "none"
        m6.textContent = "Show manual6 paid students"
    }
})

m7.addEventListener("click", (event) => {
    if(m7.textContent.startsWith("Show")) {
        manual7.style.display = "block"
        m7.textContent = "Hide manual7 paid students"
    } else {
        manual7.style.display = "none"
        m7.textContent = "Show manual7 paid students"
    }
})

m8.addEventListener("click", (event) => {
    if(m8.textContent.startsWith("Show")) {
        manual8.style.display = "block"
        m8.textContent = "Hide manual8 paid students"
    } else {
        manual8.style.display = "none"
        m8.textContent = "Show manual8 paid students"
    }
})

m9.addEventListener("click", (event) => {
    if(m9.textContent.startsWith("Show")) {
        manual9.style.display = "block"
        m9.textContent = "Hide manual9 paid students"
    } else {
        manual9.style.display = "none"
        m9.textContent = "Show manual9 paid students"
    }
})*/
let classDues = document.getElementById("classDues")
let manual1 = document.getElementById("manual1")
let manual2 = document.getElementById("manual2")
let manual3 = document.getElementById("manual3")
let manual4 = document.getElementById("manual4")
let manual5 = document.getElementById("manual5")
let manual6 = document.getElementById("manual6")
let manual7 = document.getElementById("manual7")
let manual8 = document.getElementById("manual8")
let manual9 = document.getElementById("manual9")
let nameOfStudent = document.getElementsByClassName("studentName")
let numOfStudents = document.getElementById("numOfStudents")
numOfStudents.textContent = nameOfStudent.length

let containers = [classDues, manual1, manual2, manual3, manual4, manual5, manual6, manual7, manual8, manual9]

// --- 1. Get saved data ---
function getSavedData() {
  try {
    return JSON.parse(localStorage.getItem("paidList") || "{}")
  } catch(e) {
    return {}
  }
}

function saveData(data) {
  localStorage.setItem("paidList", JSON.stringify(data))
}

// Get matric number for a row. This is used as the key.
function getMatric(row) {
  let text = row.children[0].textContent.trim().split("\n")
  // Last non-empty line is the matric number
  for (let i = text.length - 1; i >= 0; i--) {
    let line = text[i].trim()
    if (line) return line
  }
  return row.children[0].textContent.trim()
}

// Create the "paid" line in a container
function addPaidLine(container, row) {
  let newP = document.createElement("p")
  newP.style.margin = "0px"
  newP.textContent = row.children[0].textContent.trim() + " paid"
  newP.dataset.matric = getMatric(row)
  container.append(newP)
  return newP
}

function removePaidLine(container, matric) {
  let line = container.querySelector('p[data-matric="' + matric + '"]')
  if (line) line.remove()
}

// --- 2. Restore saved ticks on page load ---
let saved = getSavedData()

Array.from(nameOfStudent).forEach((row) => {
  let matric = getMatric(row)
  let savedRow = saved[matric]

  // This keeps track of the <p> for each of the 10 columns
  let myPs = [null, null, null, null, null, null, null, null, null, null]

  for (let col = 1; col <= 10; col++) {
    let checkbox = row.children[col].children[0]
    let container = containers[col - 1]

    // If it was saved as checked before, restore it
    if (savedRow && savedRow[col - 1] === true) {
      checkbox.checked = true
      myPs[col - 1] = addPaidLine(container, row)
    }

    checkbox.addEventListener("change", () => {
      let data = getSavedData()
      if (!data[matric]) data[matric] = [false,false,false,false,false,false,false,false,false,false]

      if (checkbox.checked) {
        data[matric][col - 1] = true
        myPs[col - 1] = addPaidLine(container, row)
      } else {
        data[matric][col - 1] = false
        // Remove from container, even after reload
        removePaidLine(container, matric)
        myPs[col - 1] = null
      }
      saveData(data)
    })
  }
})

// --- 3. Backup / Restore ---
function backupData() {
  let data = localStorage.getItem("paidList") || "{}"
  navigator.clipboard.writeText(data).then(() => {
    alert("Backup copied! Paste it in WhatsApp and send it to yourself to keep it safe.")
  }).catch(() => {
    prompt("Copy this backup code:", data)
  })
}

function restoreData() {
  let data = prompt("Paste the backup code here:")
  if (data) {
    try {
      JSON.parse(data)
      localStorage.setItem("paidList", data)
      location.reload()
    } catch(e) {
      alert("That backup code is not correct. Please try again.")
    }
  }
}

// --- 4. Show / Hide buttons (same as before) ---
let dues = document.getElementById("dues")
let m1 = document.getElementById("1")
let m2 = document.getElementById("2")
let m3 = document.getElementById("3")
let m4 = document.getElementById("4")
let m5 = document.getElementById("5")
let m6 = document.getElementById("6")
let m7 = document.getElementById("7")
let m8 = document.getElementById("8")
let m9 = document.getElementById("9")

function toggleButton(button, container, showText, hideText) {
  button.addEventListener("click", () => {
    if (button.textContent.startsWith("Show")) {
      container.style.display = "block"
      button.textContent = hideText
    } else {
      container.style.display = "none"
      button.textContent = showText
    }
  })
}

toggleButton(dues, classDues, "Show class dues paid students", "Hide class dues paid students")
toggleButton(m1, manual1, "Show manual1 paid student", "Hide manual1 paid students")
toggleButton(m2, manual2, "Show manual2 paid student", "Hide manual2 paid students")
toggleButton(m3, manual3, "Show manual3 paid student", "Hide manual3 paid students")
toggleButton(m4, manual4, "Show manual4 paid student", "Hide manual4 paid students")
toggleButton(m5, manual5, "Show manual5 paid student", "Hide manual5 paid students")
toggleButton(m6, manual6, "Show manual6 paid student", "Hide manual6 paid students")
toggleButton(m7, manual7, "Show manual7 paid student", "Hide manual7 paid students")
toggleButton(m8, manual8, "Show manual8 paid student", "Hide manual8 paid students")
toggleButton(m9, manual9, "Show manual9 paid student", "Hide manual9 paid students")



// Print only one container as PDF
function printContainer(containerId, title) {
  let container = document.getElementById(containerId)
  let items = container.querySelectorAll("p")

  if (items.length === 0) {
    alert("No student has paid for " + title + " yet.")
    return
  }

  let printWindow = window.open("", "_blank")
  printWindow.document.write(`
    <html>
    <head>
      <title>${title} - SEN CLASS 30</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        h1 { text-align: center; font-size: 20px; }
        p { font-size: 16px; border-bottom: 1px solid #ccc; padding: 8px 0; margin: 0; }
        .footer { margin-top: 30px; font-size: 12px; text-align: center; color: #666; }
      </style>
    </head>
    <body>
      <h1>SEN CLASS 30 - ${title}</h1>
      <p><strong>Total: ${items.length} students</strong></p>
      <br>
  `)

  items.forEach((item) => {
    printWindow.document.write(`<p>${item.textContent}</p>`)
  })

  printWindow.document.write(`
      <div class="footer">Printed from SEN CLASS 30 PAYMENT INFO</div>
    </body>
    </html>
  `)

  printWindow.document.close()
  printWindow.focus()
  setTimeout(() => {
    printWindow.print()
  }, 500)
}





