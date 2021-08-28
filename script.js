const sections = document.querySelectorAll('.services-ui'),
    tabs = document.querySelectorAll('.tab')

// работа

function deleteClass(section, name) {
    let sections = document.querySelectorAll(`.${name}`)
    sections.forEach((element) => {
        element != section ? element.classList.remove(`${searchPos(name)}`) : false
    })
}

function searchPos(name) {
    for (let key in classes) {
        if (name === key) {
            return classes[name]
        }
    }
}

let classes = {
    'tab': 'active-tab',
    'services-ui': 'services-active'
}


for (const section of sections) {
    section.addEventListener('click', () => {
        section.classList.add('services-active')
        deleteClass(section, 'services-ui')
    })
}

for (const tab of tabs) {
    tab.addEventListener('click', () => {
        tab.classList.add('active-tab')
        deleteClass(tab, 'tab')
    })
}
