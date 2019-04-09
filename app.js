function display() {
    document.getElementById('app').innerHTML = moment().format('MMMM Do YYYY, HH:mm:ss')
}

window.onload = () => {
    display()
    setInterval(display, 1000)
}
