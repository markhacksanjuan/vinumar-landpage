import { animateNavbar } from './functions.js'

fetch('../../html/navbarOnFolder2level.html')
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector('navbar').innerHTML = data
        animateNavbar()
    })
fetch('../../html/footerOnFolder2level.html')
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector('footer').innerHTML = data
    })