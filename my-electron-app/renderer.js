const func = async () => {
    const response = await window.versions.ping()
    alert(response)
}

const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${window.versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`
func()