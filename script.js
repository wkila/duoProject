const sections = document.querySelectorAll('.services-ui'),
    tabs = document.querySelectorAll('.tab'),
    draggbles = document.querySelectorAll('.drag'),
    pages = document.querySelectorAll('.content-section'),
    content = document.querySelector('.widthStandart').clientWidth

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

// changin img

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
    this.classList.remove('over')
    
    return false;
}


// switch content

for (let i = 0; i < pages.length; i++) {
    if (i !== 0) {
        pages[i].style.transform = `translateX(${content}px)`
    }
}

let activePage = 0

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', () => {
        tabs[i].classList.add(methods.searchPos('tab'))
        setPage(i)
        methods.deleteClass(tabs[i], 'tab')
    })
}

function setPage(index) { 
    for (let i = 0; i < pages.length;i++) {
        if (index === i) {
            if (index > activePage) {
                pages[activePage].style.transform = `translateX(-${content}px)`
                pages[i].style.transform = `translateX(${0}px)`
                activePage = index
            }else if (index < activePage){
                pages[activePage].style.transform = `translateX(${content}px)`
                pages[i].style.transform = `translateX(${0}px)`
                activePage = index
            }
        }
    }
}