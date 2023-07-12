const darkModeButton = document.getElementById('toggle-dark-mode')
const setSystemButton = document.getElementById('reset-to-system')

darkModeButton.addEventListener('click', async () => {
    const isDark = await window.theme.toggle()
    document.getElementById('current-theme').innerHTML = isDark ? 'Dark' : 'Light'
})


setSystemButton.addEventListener('click', async () => {
    await window.theme.setSystem()
    document.getElementById('current-theme').innerHTML = "System"
})
