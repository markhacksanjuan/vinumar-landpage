export const animateNavbar = () => {
    const productosHide = document.getElementById('productos_hide')
    const productosShow = document.getElementById('productos_show')
    const sobreHide = document.getElementById('sobre_hide')
    const sobreShow = document.getElementById('sobre_show')
    const onClickShow = (item) => {
        item.classList.toggle('hide')
    }
    productosShow.addEventListener('mouseover', () => {
        onClickShow(productosHide)
    })
    productosShow.addEventListener('mouseout', () => {
        onClickShow(productosHide)
    })
    sobreShow.addEventListener('mouseover', () => {
        onClickShow(sobreHide)
    })
    sobreShow.addEventListener('mouseout', () => {
        onClickShow(sobreHide)
    })
}
