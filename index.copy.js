var typed = new Typed('.typing', {
    strings: [
      '',
      'Full stack Web Developer,',
      'Web Designer,',
      'Logo Designer,',
      'Graphics Designer,',
      'Database Administrator.',
    ],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true,
  })
  
  // Aside
  const nav = document.querySelector('.nav'),
    navList = nav.querySelectorAll('li'),
    totalNavList = navList.length,
    allSection = document.querySelectorAll('.section'),
    totalSection = allSection.length
  for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector('a')
    a.addEventListener('click', function () {
      removeBackSection()
      for (let j = 0; j < totalNavList; j++) {
        if (navList[j].querySelector('a').classList.contains('active')) {
          addBackSection(j)
        }
        navList[j].querySelector('a').classList.remove('active')
      }
      this.classList.add('active')
      showSection(this)
  
      if (window.innerWidth < 1200) {
        asideSectionTogglerBtn()
      }
    })
  }
  
  function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove('back-section')
    }
  }
  
  function addBackSection(num) {
    allSection[num].classList.add('back-section')
  }
  
  function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove('active')
    }
    const target = element.getAttribute('href').split('#')[1]
    document.querySelector('#' + target).classList.add('active')
  }
  
  function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
      navList[i].querySelector('a').classList.remove('active')
      const target = element.getAttribute('href').split('#')[1]
      if (
        target ===
        navList[i].querySelector('a').getAttribute('href').split('#')[1]
      ) {
        navList[i].querySelector('a').classList.add('active')
      }
    }
  }
  
  document.querySelector('.hire-me').addEventListener('click', function () {
    const sectionIndex = this.getAttribute('data-section-index')
    showSection(this)
    updateNav(this)
    removeBackSection()
    addBackSection(sectionIndex)
  })
  
  // Toggler Button
  const navTogglerBtn = document.querySelector('.nav-toggler')
  aside = document.querySelector('.aside')
  navTogglerBtn.addEventListener('click', () => {
    asideSectionTogglerBtn()
  })
  
  function asideSectionTogglerBtn() {
    aside.classList.toggle('open')
    navTogglerBtn.classList.toggle('open')
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.toggle('open')
    }
  }
  
  // Loader script
  
  function loader() {
    document.querySelector('.loader-container').classList.add('fade-out')
  }
  function fadeOut() {
    setInterval(loader, 3000)
  }
  window.onload = fadeOut()
  
  // header Logo img
  function changeLogo() {
    var img = document.getElementById('logoImg').src
    if (img.indexOf('sixtus-logo.png') != -1) {
      document.getElementById('logoImg').src = 'images/sixtus-logo-2.png'
    } else {
      document.getElementById('logoImg').src = 'images/sixtus-logo.png'
    }
  }
  
  const errMsgRemove = document.querySelector('#error-hidden')
  const sucMsgRemove = document.querySelector('#success-hidden')
  
  // Cancel error message after submit
  function delete_error_msg() {
    errMsgRemove.style.display = 'none'
  }
  
  // Cancel success message after submit
  function delete_success_msg() {
    sucMsgRemove.style.display = 'none'
  }
  



  // var typed = new Typed('.typing', {
  //   strings: [
  //     '',
  //     'Full stack Web Developer,',
  //     'Web Designer,',
  //     'Logo Designer,',
  //     'Graphics Designer,',
  //     'Database Administrator.',
  //   ],
  //   typeSpeed: 100,
  //   BackSpeed: 60,
  //   loop: true,
  // })
  
  // // Aside
  // const nav = document.querySelector('.nav'),
  //   navList = nav.querySelectorAll('li'),
  //   totalNavList = navList.length,
  //   allSection = document.querySelectorAll('.section'),
  //   totalSection = allSection.length
  // for (let i = 0; i < totalNavList; i++) {
  //   const a = navList[i].querySelector('a')
  //   a.addEventListener('click', function () {
  //     removeBackSection()
  //     for (let j = 0; j < totalNavList; j++) {
  //       if (navList[j].querySelector('a').classList.contains('active')) {
  //         addBackSection(j)
  //       }
  //       navList[j].querySelector('a').classList.remove('active')
  //     }
  //     this.classList.add('active')
  //     showSection(this)
  
  //     if (window.innerWidth < 1200) {
  //       asideSectionTogglerBtn()
  //     }
  //   })
  // }
  
  // function removeBackSection() {
  //   for (let i = 0; i < totalSection; i++) {
  //     allSection[i].classList.remove('back-section')
  //   }
  // }
  
  // function addBackSection(num) {
  //   allSection[num].classList.add('back-section')
  // }
  
  // function showSection(element) {
  //   for (let i = 0; i < totalSection; i++) {
  //     allSection[i].classList.remove('active')
  //   }
  //   const target = element.getAttribute('href').split('#')[1]
  //   document.querySelector('#' + target).classList.add('active')
  // }
  
  // function updateNav(element) {
  //   for (let i = 0; i < totalNavList; i++) {
  //     navList[i].querySelector('a').classList.remove('active')
  //     const target = element.getAttribute('href').split('#')[1]
  //     if (
  //       target ===
  //       navList[i].querySelector('a').getAttribute('href').split('#')[1]
  //     ) {
  //       navList[i].querySelector('a').classList.add('active')
  //     }
  //   }
  // }
  
  // document.querySelector('.hire-me').addEventListener('click', function () {
  //   const sectionIndex = this.getAttribute('data-section-index')
  //   showSection(this)
  //   updateNav(this)
  //   removeBackSection()
  //   addBackSection(sectionIndex)
  // })
  
  // // Toggler Button
  // const navTogglerBtn = document.querySelector('.nav-toggler')
  // aside = document.querySelector('.aside')
  // navTogglerBtn.addEventListener('click', () => {
  //   asideSectionTogglerBtn()
  // })
  
  // function asideSectionTogglerBtn() {
  //   aside.classList.toggle('open')
  //   navTogglerBtn.classList.toggle('open')
  //   for (let i = 0; i < totalSection; i++) {
  //     allSection[i].classList.toggle('open')
  //   }
  // }
  
  // // Loader script
  
  // function loader() {
  //   document.querySelector('.loader-container').classList.add('fade-out')
  // }
  // function fadeOut() {
  //   setInterval(loader, 3000)
  // }
  // window.onload = fadeOut()
  
  // // header Logo img
  // function changeLogo() {
  //   var img = document.getElementById('logoImg').src
  //   if (img.indexOf('sixtus-logo.png') != -1) {
  //     document.getElementById('logoImg').src = 'images/sixtus-logo-2.png'
  //   } else {
  //     document.getElementById('logoImg').src = 'images/sixtus-logo.png'
  //   }
  // }
  
  // const errMsgRemove = document.querySelector('#error-hidden')
  // const sucMsgRemove = document.querySelector('#success-hidden')
  
  // // Cancel error message after submit
  // function delete_error_msg() {
  //   errMsgRemove.style.display = 'none'
  // }
  
  // // Cancel success message after submit
  // function delete_success_msg() {
  //   sucMsgRemove.style.display = 'none'
  // }
  //   strings: [
  //     '',
  //     'Full stack Web Developer,',
  //     'Web Designer,',
  //     'Logo Designer,',
  //     'Graphics Designer,',
  //     'Database Administrator.',
  //   ],
  //   typeSpeed: 100,
  //   BackSpeed: 60,
  //   loop: true,
  // })
  
  // // Aside
  // const nav = document.querySelector('.nav'),
  //   navList = nav.querySelectorAll('li'),
  //   totalNavList = navList.length,
  //   allSection = document.querySelectorAll('.section'),
  //   totalSection = allSection.length
  // for (let i = 0; i < totalNavList; i++) {
  //   const a = navList[i].querySelector('a')
  //   a.addEventListener('click', function () {
  //     removeBackSection()
  //     for (let j = 0; j < totalNavList; j++) {
  //       if (navList[j].querySelector('a').classList.contains('active')) {
  //         addBackSection(j)
  //       }
  //       navList[j].querySelector('a').classList.remove('active')
  //     }
  //     this.classList.add('active')
  //     showSection(this)
  
  //     if (window.innerWidth < 1200) {
  //       asideSectionTogglerBtn()
  //     }
  //   })
  // }
  
  // function removeBackSection() {
  //   for (let i = 0; i < totalSection; i++) {
  //     allSection[i].classList.remove('back-section')
  //   }
  // }
  
  // function addBackSection(num) {
  //   allSection[num].classList.add('back-section')
  // }
  
  // function showSection(element) {
  //   for (let i = 0; i < totalSection; i++) {
  //     allSection[i].classList.remove('active')
  //   }
  //   const target = element.getAttribute('href').split('#')[1]
  //   document.querySelector('#' + target).classList.add('active')
  // }
  
  // function updateNav(element) {
  //   for (let i = 0; i < totalNavList; i++) {
  //     navList[i].querySelector('a').classList.remove('active')
  //     const target = element.getAttribute('href').split('#')[1]
  //     if (
  //       target ===
  //       navList[i].querySelector('a').getAttribute('href').split('#')[1]
  //     ) {
  //       navList[i].querySelector('a').classList.add('active')
  //     }
  //   }
  // }
  
  // document.querySelector('.hire-me').addEventListener('click', function () {
  //   const sectionIndex = this.getAttribute('data-section-index')
  //   showSection(this)
  //   updateNav(this)
  //   removeBackSection()
  //   addBackSection(sectionIndex)
  // })
  
  // // Toggler Button
  // const navTogglerBtn = document.querySelector('.nav-toggler')
  // aside = document.querySelector('.aside')
  // navTogglerBtn.addEventListener('click', () => {
  //   asideSectionTogglerBtn()
  // })
  
  // function asideSectionTogglerBtn() {
  //   aside.classList.toggle('open')
  //   navTogglerBtn.classList.toggle('open')
  //   for (let i = 0; i < totalSection; i++) {
  //     allSection[i].classList.toggle('open')
  //   }
  // }
  
  // // Loader script
  
  // function loader() {
  //   document.querySelector('.loader-container').classList.add('fade-out')
  // }
  // function fadeOut() {
  //   setInterval(loader, 3000)
  // }
  // window.onload = fadeOut()
  
  // // header Logo img
  // function changeLogo() {
  //   var img = document.getElementById('logoImg').src
  //   if (img.indexOf('sixtus-logo.png') != -1) {
  //     document.getElementById('logoImg').src = 'images/sixtus-logo-2.png'
  //   } else {
  //     document.getElementById('logoImg').src = 'images/sixtus-logo.png'
  //   }
  // }
  
  // const errMsgRemove = document.querySelector('#error-hidden')
  // const sucMsgRemove = document.querySelector('#success-hidden')
  
  // // Cancel error message after submit
  // function delete_error_msg() {
  //   errMsgRemove.style.display = 'none'
  // }
  
  // // Cancel success message after submit
  // function delete_success_msg() {
  //   sucMsgRemove.style.display = 'none'
  // }
  //   strings: [
  //     '',
  //     'Full stack Web Developer,',
  //     'Web Designer,',
  //     'Logo Designer,',
  //     'Graphics Designer,',
  //     'Database Administrator.',
  //   ],
  //   typeSpeed: 100,
  //   BackSpeed: 60,
  //   loop: true,
  // })
  
  // // Aside
  // const nav = document.querySelector('.nav'),
  //   navList = nav.querySelectorAll('li'),
  //   totalNavList = navList.length,
  //   allSection = document.querySelectorAll('.section'),
  //   totalSection = allSection.length
  // for (let i = 0; i < totalNavList; i++) {
  //   const a = navList[i].querySelector('a')
  //   a.addEventListener('click', function () {
  //     removeBackSection()
  //     for (let j = 0; j < totalNavList; j++) {
  //       if (navList[j].querySelector('a').classList.contains('active')) {
  //         addBackSection(j)
  //       }
  //       navList[j].querySelector('a').classList.remove('active')
  //     }
  //     this.classList.add('active')
  //     showSection(this)
  
  //     if (window.innerWidth < 1200) {
  //       asideSectionTogglerBtn()
  //     }
  //   })
  // }
  
  // function removeBackSection() {
  //   for (let i = 0; i < totalSection; i++) {
  //     allSection[i].classList.remove('back-section')
  //   }
  // }
  
  // function addBackSection(num) {
  //   allSection[num].classList.add('back-section')
  // }
  
  // function showSection(element) {
  //   for (let i = 0; i < totalSection; i++) {
  //     allSection[i].classList.remove('active')
  //   }
  //   const target = element.getAttribute('href').split('#')[1]
  //   document.querySelector('#' + target).classList.add('active')
  // }
  
  // function updateNav(element) {
  //   for (let i = 0; i < totalNavList; i++) {
  //     navList[i].querySelector('a').classList.remove('active')
  //     const target = element.getAttribute('href').split('#')[1]
  //     if (
  //       target ===
  //       navList[i].querySelector('a').getAttribute('href').split('#')[1]
  //     ) {
  //       navList[i].querySelector('a').classList.add('active')
  //     }
  //   }
  // }
  
  // document.querySelector('.hire-me').addEventListener('click', function () {
  //   const sectionIndex = this.getAttribute('data-section-index')
  //   showSection(this)
  //   updateNav(this)
  //   removeBackSection()
  //   addBackSection(sectionIndex)
  // })
  
  // // Toggler Button
  // const navTogglerBtn = document.querySelector('.nav-toggler')
  // aside = document.querySelector('.aside')
  // navTogglerBtn.addEventListener('click', () => {
  //   asideSectionTogglerBtn()
  // })
  
  // function asideSectionTogglerBtn() {
  //   aside.classList.toggle('open')
  //   navTogglerBtn.classList.toggle('open')
  //   for (let i = 0; i < totalSection; i++) {
  //     allSection[i].classList.toggle('open')
  //   }
  // }
  
  // // Loader script
  
  // function loader() {
  //   document.querySelector('.loader-container').classList.add('fade-out')
  // }
  // function fadeOut() {
  //   setInterval(loader, 3000)
  // }
  // window.onload = fadeOut()
  
  // // header Logo img
  // function changeLogo() {
  //   var img = document.getElementById('logoImg').src
  //   if (img.indexOf('sixtus-logo.png') != -1) {
  //     document.getElementById('logoImg').src = 'images/sixtus-logo-2.png'
  //   } else {
  //     document.getElementById('logoImg').src = 'images/sixtus-logo.png'
  //   }
  // }
  
  // const errMsgRemove = document.querySelector('#error-hidden')
  // const sucMsgRemove = document.querySelector('#success-hidden')
  
  // // Cancel error message after submit
  // function delete_error_msg() {
  //   errMsgRemove.style.display = 'none'
  // }
  
  // // Cancel success message after submit
  // function delete_success_msg() {
  //   sucMsgRemove.style.display = 'none'
  // }
  //   strings: [
  //     '',
  //     'Full stack Web Developer,',
  //     'Web Designer,',
  //     'Logo Designer,',
  //     'Graphics Designer,',
  //     'Database Administrator.',
  //   ],
  //   typeSpeed: 100,
  //   BackSpeed: 60,
  //   loop: true,
  // })
  
  // // Aside
  // const nav = document.querySelector('.nav'),
  //   navList = nav.querySelectorAll('li'),
  //   totalNavList = navList.length,
  //   allSection = document.querySelectorAll('.section'),
  //   totalSection = allSection.length
  // for (let i = 0; i < totalNavList; i++) {
  //   const a = navList[i].querySelector('a')
  //   a.addEventListener('click', function () {
  //     removeBackSection()
  //     for (let j = 0; j < totalNavList; j++) {
  //       if (navList[j].querySelector('a').classList.contains('active')) {
  //         addBackSection(j)
  //       }
  //       navList[j].querySelector('a').classList.remove('active')
  //     }
  //     this.classList.add('active')
  //     showSection(this)
  
  //     if (window.innerWidth < 1200) {
  //       asideSectionTogglerBtn()
  //     }
  //   })
  // }
  
  // function removeBackSection() {
  //   for (let i = 0; i < totalSection; i++) {
  //     allSection[i].classList.remove('back-section')
  //   }
  // }
  
  // function addBackSection(num) {
  //   allSection[num].classList.add('back-section')
  // }
  
  // function showSection(element) {
  //   for (let i = 0; i < totalSection; i++) {
  //     allSection[i].classList.remove('active')
  //   }
  //   const target = element.getAttribute('href').split('#')[1]
  //   document.querySelector('#' + target).classList.add('active')
  // }
  
  // function updateNav(element) {
  //   for (let i = 0; i < totalNavList; i++) {
  //     navList[i].querySelector('a').classList.remove('active')
  //     const target = element.getAttribute('href').split('#')[1]
  //     if (
  //       target ===
  //       navList[i].querySelector('a').getAttribute('href').split('#')[1]
  //     ) {
  //       navList[i].querySelector('a').classList.add('active')
  //     }
  //   }
  // }
  
  // document.querySelector('.hire-me').addEventListener('click', function () {
  //   const sectionIndex = this.getAttribute('data-section-index')
  //   showSection(this)
  //   updateNav(this)
  //   removeBackSection()
  //   addBackSection(sectionIndex)
  // })
  
  // // Toggler Button
  // const navTogglerBtn = document.querySelector('.nav-toggler')
  // aside = document.querySelector('.aside')
  // navTogglerBtn.addEventListener('click', () => {
  //   asideSectionTogglerBtn()
  // })
  
  // function asideSectionTogglerBtn() {
  //   aside.classList.toggle('open')
  //   navTogglerBtn.classList.toggle('open')
  //   for (let i = 0; i < totalSection; i++) {
  //     allSection[i].classList.toggle('open')
  //   }
  // }
  
  // // Loader script
  
  // function loader() {
  //   document.querySelector('.loader-container').classList.add('fade-out')
  // }
  // function fadeOut() {
  //   setInterval(loader, 3000)
  // }
  // window.onload = fadeOut()
  
  // // header Logo img
  // function changeLogo() {
  //   var img = document.getElementById('logoImg').src
  //   if (img.indexOf('sixtus-logo.png') != -1) {
  //     document.getElementById('logoImg').src = 'images/sixtus-logo-2.png'
  //   } else {
  //     document.getElementById('logoImg').src = 'images/sixtus-logo.png'
  //   }
  // }
  
  // const errMsgRemove = document.querySelector('#error-hidden')
  // const sucMsgRemove = document.querySelector('#success-hidden')
  
  // // Cancel error message after submit
  // function delete_error_msg() {
  //   errMsgRemove.style.display = 'none'
  // }
  
  // // Cancel success message after submit
  // function delete_success_msg() {
  //   sucMsgRemove.style.display = 'none'
  // }
  //   strings: [
  //     '',
  //     'Full stack Web Developer,',
  //     'Web Designer,',
  //     'Logo Designer,',
  //     'Graphics Designer,',
  //     'Database Administrator.',
  //   ],
  //   typeSpeed: 100,
  //   BackSpeed: 60,
  //   loop: true,
  // })
  
  // // Aside
  // const nav = document.querySelector('.nav'),
  //   navList = nav.querySelectorAll('li'),
  //   totalNavList = navList.length,
  //   allSection = document.querySelectorAll('.section'),
  //   totalSection = allSection.length
  // for (let i = 0; i < totalNavList; i++) {
  //   const a = navList[i].querySelector('a')
  //   a.addEventListener('click', function () {
  //     removeBackSection()
  //     for (let j = 0; j < totalNavList; j++) {
  //       if (navList[j].querySelector('a').classList.contains('active')) {
  //         addBackSection(j)
  //       }
  //       navList[j].querySelector('a').classList.remove('active')
  //     }
  //     this.classList.add('active')
  //     showSection(this)
  
  //     if (window.innerWidth < 1200) {
  //       asideSectionTogglerBtn()
  //     }
  //   })
  // }
  
  // function removeBackSection() {
  //   for (let i = 0; i < totalSection; i++) {
  //     allSection[i].classList.remove('back-section')
  //   }
  // }
  
  // function addBackSection(num) {
  //   allSection[num].classList.add('back-section')
  // }
  
  // function showSection(element) {
  //   for (let i = 0; i < totalSection; i++) {
  //     allSection[i].classList.remove('active')
  //   }
  //   const target = element.getAttribute('href').split('#')[1]
  //   document.querySelector('#' + target).classList.add('active')
  // }
  
  // function updateNav(element) {
  //   for (let i = 0; i < totalNavList; i++) {
  //     navList[i].querySelector('a').classList.remove('active')
  //     const target = element.getAttribute('href').split('#')[1]
  //     if (
  //       target ===
  //       navList[i].querySelector('a').getAttribute('href').split('#')[1]
  //     ) {
  //       navList[i].querySelector('a').classList.add('active')
  //     }
  //   }
  // }
  
  // document.querySelector('.hire-me').addEventListener('click', function () {
  //   const sectionIndex = this.getAttribute('data-section-index')
  //   showSection(this)
  //   updateNav(this)
  //   removeBackSection()
  //   addBackSection(sectionIndex)
  // })
  
  // // Toggler Button
  // const navTogglerBtn = document.querySelector('.nav-toggler')
  // aside = document.querySelector('.aside')
  // navTogglerBtn.addEventListener('click', () => {
  //   asideSectionTogglerBtn()
  // })
  
  // function asideSectionTogglerBtn() {
  //   aside.classList.toggle('open')
  //   navTogglerBtn.classList.toggle('open')
  //   for (let i = 0; i < totalSection; i++) {
  //     allSection[i].classList.toggle('open')
  //   }
  // }
  
  // // Loader script
  
  // function loader() {
  //   document.querySelector('.loader-container').classList.add('fade-out')
  // }
  // function fadeOut() {
  //   setInterval(loader, 3000)
  // }
  // window.onload = fadeOut()
  
  // // header Logo img
  // function changeLogo() {
  //   var img = document.getElementById('logoImg').src
  //   if (img.indexOf('sixtus-logo.png') != -1) {
  //     document.getElementById('logoImg').src = 'images/sixtus-logo-2.png'
  //   } else {
  //     document.getElementById('logoImg').src = 'images/sixtus-logo.png'
  //   }
  // }
  
  // const errMsgRemove = document.querySelector('#error-hidden')
  // const sucMsgRemove = document.querySelector('#success-hidden')
  
  // // Cancel error message after submit
  // function delete_error_msg() {
  //   errMsgRemove.style.display = 'none'
  // }
  
  // // Cancel success message after submit
  // function delete_success_msg() {
  //   sucMsgRemove.style.display = 'none'
  // }
  