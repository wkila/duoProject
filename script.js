const sections = document.querySelectorAll('.services-ui'),
    tabs = document.querySelectorAll('.tab'),
    draggbles = document.querySelectorAll('.drag')

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

// перемещение табов

draggbles.forEach((element) => {
    element.addEventListener('dragstart', dragStart)
    element.addEventListener('dragenter', dragEnter)
    element.addEventListener('dragover', dragOver)
    element.addEventListener('dragleave', dragLeave)
    element.addEventListener('drop', dragDrop)
    element.addEventListener('dragend', dragEnd)
    
})

let dragThis = null;

function dragStart(event) {
    dragThis = this;

    this.classList.add('active-move')
    setTimeout(() => event.target.classList.add('hide'), 0)

    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('img/html', this.innerHTML);
}

function dragEnter(event) {
    this.classList.add('over')
}

function dragOver(event) {
    event.preventDefault()
    this.classList.remove('active-move')

    return false
}

function dragLeave(event) {
    this.classList.remove('over')
}

function dragEnd(event) {
    draggbles.forEach((el) => {
        el.classList.remove('hide')
        el.classList.remove('over')
        el.classList.remove('active-move')
    })
    event.target.className = 'drag'
}

function dragDrop(event) {
    if (dragThis != this) {
        dragThis.innerHTML = this.innerHTML;
        this.innerHTML = event.dataTransfer.getData('img/html');
    }
    
    return false;
}
