document.getElementById("c-submit").onclick = () => {
    let fields = [document.getElementById("c-email"), document.getElementById("c-message")]

    fields.forEach(f => {
        f.style.borderColor = ""
    })

    if (fields[0].value == "" || fields[1].value == "") {
        fields.forEach(f => {
            if (f.value == "") {
                f.style.borderColor = "#ab4b52"
            }
        })
        return
    }

    let reg = /^\S+@\S+\.\S+$/

    if (!reg.test(fields[0].value)) {
        fields[0].style.borderColor = "#ab4b52"
        return
    }

    document.getElementById("c-success").hidden = false
}