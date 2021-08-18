import { animateNavbar } from './functions.js'

fetch('/src/html/navbar.html')
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector('navbar').innerHTML = data
        animateNavbar()
    })
fetch('/src/html/footer.html')
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector('footer').innerHTML = data
    })