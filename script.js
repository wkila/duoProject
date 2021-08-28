const sections = document.querySelectorAll('.services-ui'),
    tabs = document.querySelectorAll('.tab')

const methods = {
    classes: {
        'services-ui' : 'services-active',
        'tab': 'active-tab'
    }
}

methods.addClass(sections[0], 'services-active')





// работа

// for (const section of sections) {
//     section.addEventListener('click', methods.addClass(section, 'services-active'))
// }

// function deleteClass(section) {
//     sections.forEach((element) => {
//         element != section ? element.classList.remove('services-active') : false
//     })
// }