const btns = document.querySelectorAll('.btn'),
    pages = document.querySelectorAll('.page'),
    content = document.querySelector('.content').clientWidth

for (let i = 0; i < pages.length; i++) {
    if (i !== 0) {
        pages[i].style.transform = `translateX(${content}px)`
    }
}

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        btns[i].classList.add('btn-active')
        setPage(i)
        deleteClass(btns[i])
    })
}

function deleteClass(element) {
    btns.forEach((e) => {
        element != e ? e.classList.remove('btn-active') : false
    })
}

let activePage = 0

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




