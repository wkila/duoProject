const sections = document.querySelectorAll('.services-ui'),
    tabs = document.querySelectorAll('.tab')

let methods = {
    classes: {
        'tab': 'active-tab',
        'services-ui': 'services-active'
    },
    searchPos(name) {
        for (let key in this.classes) {
            if (name === key) {
                return this.classes[name]
            }
        }
    },
    deleteClass(section, name) {
        let sections = document.querySelectorAll(`.${name}`)
        sections.forEach((element) => {
            element != section ? element.classList.remove(`${this.searchPos(name)}`) : false
        })
    }
}


for (const section of sections) {
    section.addEventListener('click', () => {
        section.classList.add(`${methods.searchPos('services-ui')}`)
        methods.deleteClass(section, 'services-ui')
    })
}

for (const tab of tabs) {
    tab.addEventListener('click', () => {
        tab.classList.add(`${methods.searchPos('tab')}`)
        methods.deleteClass(tab, 'tab')
    })
}
