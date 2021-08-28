const sections = document.querySelectorAll('.services-ui'),
    tabs = document.querySelectorAll('.tab')

// работа

for (const section of sections) {
    section.addEventListener('click', () => {
        section.classList.add('services-active')
        deleteClass(section, 'services-ui')
    })
}

function deleteClass(section, name) {
    let sections = document.querySelectorAll(name)
    sections.forEach((element) => {
        element != section ? element.classList.remove(`${searchPos(name)}`) : false
    })
}

function searchPos(name) {
    for (key in classes) {
        name == key ? classes[key] : false
    }
}

let classes = {
    'tab': 'active-tab',
    'services-ui': 'services-active'
}

searchPos('services-ui')