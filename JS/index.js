function menu() {
    var list = document.getElementsByClassName('list')[0]
    var display = list.style.display
    if (!display) {
        list.style.display = 'block'
    } else {
        list.style.display = ''
    }
    
}