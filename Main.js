vindow = document.getElementById("window")
vindowb = window.getComputedStyle(vindow,"::before")
vindowb.style.height = `${vindow.style.getPropertyValue("height")}`