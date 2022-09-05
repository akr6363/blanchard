new Swiper('.hero__swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

const swiperGallery = new Swiper('.gallery__swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 12,
  slidesPerGroup: 1,
  a11y: {
    nextSlideMessage: 'Следующий слайд',
    prevSlideMessage: 'Предыдущий слайд',
    slideLabelMessage: '{{index}} слайд из {{slidesLength}}'
  },

  pagination: {
    el: '.gallery__pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.gallery__next',
    prevEl: '.gallery__prev',
  },

  breakpoints: {

    577: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 12,
    },

    767: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    1366: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    }
  },

  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: "slide-visible",

  on: {
    init: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    },
    slideChange: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    },
    update: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    },
  }
});

const swiperEvents = new Swiper('.events__body', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 12,
  slidesPerGroup: 1,
  a11y: {
    nextSlideMessage: 'Следующий слайд',
    prevSlideMessage: 'Предыдущий слайд',
    slideLabelMessage: '{{index}} слайд из {{slidesLength}}',
    paginationBulletMessage: 'Перейти на слайд {{index}}',
  },

  navigation: {
    nextEl: '.events__button-next',
    prevEl: '.events__button-prev',
  },

  pagination: {
    el: '.events__pagination',
    clickable: true,
  },

  breakpoints: {

    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 12,
    },

    767: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
    },

    1366: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    }
  },

  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: "slide-visible",
  notificationClass: false,

  on: {
    init: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.querySelector('.item-events__link').tabIndex = "-1";
        } else {
          slide.querySelector('.item-events__link').tabIndex = "";
        }
      });
    },
    slideChange: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.querySelector('.item-events__link').tabIndex = "-1";
        } else {
          slide.querySelector('.item-events__link').tabIndex = "";
        }
      });
    },
    update: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.querySelector('.item-events__link').tabIndex = "-1";
        } else {
          slide.querySelector('.item-events__link').tabIndex = "";
        }
      });
    },
  }
});

const swiperProgects = new Swiper('.progects__partners', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 34,

  a11y: {
    nextSlideMessage: 'Следующий слайд',
    prevSlideMessage: 'Предыдущий слайд',
    slideLabelMessage: '{{index}} слайд из {{slidesLength}}'
  },

  navigation: {
    nextEl: '.progects__button-next',
    prevEl: '.progects__button-prev',
  },

  breakpoints: {

    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    992: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  },

  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: "slide-visible",
  notificationClass: false,

  on: {
    init: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.querySelector('.progects__link').tabIndex = "-1";
        } else {
          slide.querySelector('.progects__link').tabIndex = "";
        }
      });
    },
    slideChange: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.querySelector('.progects__link').tabIndex = "-1";
        } else {
          slide.querySelector('.progects__link').tabIndex = "";
        }
      });
    },
    update: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.querySelector('.progects__link').tabIndex = "-1";
        } else {
          slide.querySelector('.progects__link').tabIndex = "";
        }
      });
    },
  }
});

// ---------------------------------------------------------------------------

const element = document.querySelector('.filter-gallery__select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: false,
  shouldSort: false,
  position: 'bottom',
});

// ---------------------------------------------------------------------------

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.75846806898367, 37.60108849999989],
    zoom: 14,
    controls: [],
  });

  let myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/mark.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-10, -10]
  });

  myMap.behaviors.disable('scrollZoom')
  myMap.geoObjects.add(myPlacemark);
  myMap.controls.add('zoomControl', {
    size: "small",
    position: {
      top: '260px',
      right: '10px',
    }
  });

  myMap.controls.add('geolocationControl', {
    position: {
      top: '330px',
      right: '10px',
    }
  });
}

// --------------------------------------------------------------------------------

const inputTel = document.querySelector("input[type='tel']");
let im = new Inputmask("+7 (999)-999-99-99");
im.mask(inputTel);

// --------------------------------------------------------------------------------

const itemBottom = document.querySelectorAll('.header__bottom .header__item');
const itemTop = document.querySelectorAll('.header__top .header__item');

itemBottom.forEach(item => {

  item.addEventListener('click', () => {
    if (item.classList.contains('header__item--active')) {
      item.classList.remove('header__item--active');
      return;
    }
    itemBottom.forEach(item => {
      item.classList.remove('header__item--active');
    })
    item.classList.add('header__item--active');
  })
});


itemTop.forEach(item => {
  item.addEventListener('click', () => {
    itemBottom.forEach(item => {
      item.classList.remove('header__item--active');
    })
  })
});

// --------------------------------------------------------------------------------
let popup = document.querySelector('.popup');
let galleryItems = document.querySelectorAll('.gallery__item');
let popupCloseBtn = popup.querySelector('.popup__close');
let popupGalleryItems = popup.querySelectorAll('.popup__gallery');
let focusableElements = document.querySelectorAll('a, button, input');

galleryItems.forEach(el => {
  el.addEventListener('click', (event) => {
    const path = event.currentTarget.dataset.path;
    popup.classList.add('_active');
    document.querySelector(`[data-target="${path}"]`).classList.add('popup__gallery--active');
    document.body.classList.add('_lock');
    focusableElements.forEach(elem => {
      elem.tabIndex = "-1";
    })
    popupCloseBtn.tabIndex = "0";
  })
})

// ---------------------------------------------------------------------------
const catalogList = document.querySelector('.catalog__list');
const catalogLink = catalogList.querySelectorAll('.item-catalog__link');
const catalogLinkEmpty = catalogList.querySelectorAll('.empty-item-catalog__link');

const accordion = new Accordion('.catalog__list', {
  elementClass: 'catalog__item',
  triggerClass: 'item-catalog__btn',
  panelClass: 'item-catalog__content',
  activeClass: 'catalog__item--active',
  openOnInit: [0],

  beforeOpen: function (currentElement) {
    catalogLink.forEach(link => {
      link.tabIndex = "-1";
    })
    catalogLinkEmpty.forEach(link => {
      link.tabIndex = "-1";
    })
    currentElement.querySelectorAll('.item-catalog__link').forEach(link => {
      link.tabIndex = "";
    })
    if (currentElement.querySelector('.empty-item-catalog__link')) {
      currentElement.querySelector('.empty-item-catalog__link').tabIndex = "";
    }

  },

  beforeClose: function (currentElement) {
    currentElement.querySelectorAll('.item-catalog__link').forEach(link => {
      link.tabIndex = "-1"
    })
    if (currentElement.querySelector('.empty-item-catalog__link')) {
      currentElement.querySelector('.empty-item-catalog__link').tabIndex = "-1"
    }

  }
})

const catalogItemActiveLinks = catalogList.querySelectorAll('.catalog__item--active .item-catalog__link');

catalogLink.forEach(link => {
  link.tabIndex = "-1";
})

catalogItemActiveLinks.forEach(link => {
  link.tabIndex = "";
})

catalogLinkEmpty.forEach(link => {
  link.tabIndex = "-1";
})

let catalogLinks = document.querySelectorAll('.item-catalog__item');
let catalogItemContent = document.querySelectorAll('.catalog__info');
let catalogItemContentEmpty = document.querySelector('.info-empty');
let catalogItemContentEmptyLink = catalogItemContentEmpty.querySelector('.info-empty__link');

catalogLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    let name = event.currentTarget.firstElementChild.textContent;
    let img = document.querySelector(`[alt="${name}"]`);

    catalogLinks.forEach(link => {
      link.classList.remove('item-catalog__item--active');
    })

    event.currentTarget.classList.add('item-catalog__item--active');

    catalogItemContent.forEach(item => {
      item.classList.remove('catalog__info--active');
    })

    if (img) {
      img.parentNode.parentNode.classList.add('catalog__info--active');
    } else {
      catalogItemContentEmpty.classList.add('catalog__info--active');
      if (document.documentElement.clientWidth > 993) {
        catalogItemContentEmptyLink.focus();
      }
    }

    if (document.documentElement.clientWidth < 993) {
      document.querySelector('.catalog__info--active').scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})


// ----------------------------------------------------------

function closePopup() {
  const target = popup.querySelector('.popup__gallery--active').dataset.target;
  document.body.classList.remove('_lock');
  popupGalleryItems.forEach(item => {
    setTimeout(() => {
      item.classList.remove('popup__gallery--active');
    }, 300)
  })
  popup.classList.remove('_active');
  focusableElements.forEach(elem => {
    elem.tabIndex = "";
  })
  popupCloseBtn.tabIndex = "-1";
  swiperGallery.update();
  swiperEvents.update();
  swiperProgects.update();

  const catalogItemActiveLinks = catalogList.querySelectorAll('.catalog__item--active .item-catalog__link');

  catalogLink.forEach(link => {
    link.tabIndex = "-1";
  })

  catalogItemActiveLinks.forEach(link => {
    link.tabIndex = "";
  })

  catalogLinkEmpty.forEach(link => {
    link.tabIndex = "-1";
  })

  document.querySelector(`[data-path="${target}"]`).focus();
}

popupCloseBtn.addEventListener('click', () => {
  closePopup();
})

popup.addEventListener('click', (event) => {
  if (event.target.classList.contains('popup')) {
    closePopup();
  }
})

// catalogItemContentEmptyLink.addEventListener('blur', (event) => {
//   catalogList.querySelector('.item-catalog__item--active .item-catalog__link').focus()
// })

// --------------------------------------------------------------------------------
const tooltip = document.querySelectorAll('.tooltip');

tooltip.forEach(el => {
  el.addEventListener('click', () => {
    if (el.classList.contains('tooltip--active')) {
      closeTooltip(el)
      return;
    }
    tooltip.forEach(el => {
      closeTooltip(el)
    })
    el.classList.add('tooltip--active');
    let toolID = el.firstElementChild.id;
    el.setAttribute('aria-describedby', `${toolID}`)
  })
  el.addEventListener('blur', () => {
    closeTooltip(el)
  })
  el.addEventListener('mouseover', () => {
    el.classList.add('tooltip--active');
  })
  el.addEventListener('mouseout', () => {
    el.classList.remove('tooltip--active');
  })

})

function closeTooltip(el) {
  el.classList.remove('tooltip--active');
  el.removeAttribute('aria-describedby');
}

// --------------------------------------------------------------------------------

const anchors = document.querySelectorAll('a[href^="#"]')

anchors.forEach(el => {
  el.addEventListener('click', (event) => {
    event.preventDefault();
    const blockID = el.getAttribute('href');
    const block = document.querySelector(blockID);
    block.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })

    setTimeout(() => {
      if (block.querySelector('input')) {
        block.querySelector('input').focus();
      } else if (block.querySelector('button')) {
        block.querySelector('button').focus();
      } else if (block.querySelector('a')) {
        block.querySelector('a').focus();
      }
    }, 800)
  })
})

// --------------------------------------------------------------------------------
function closeMenu() {
  burger.classList.toggle('_active');
  menu.classList.toggle('_active');
  document.body.classList.toggle('_lock');
}

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__top .header__menu');

burger.addEventListener('click', () => {
  closeMenu();
  if (searchMobil.classList.contains('_open')) {
    searchMobil.classList.remove('_open');
  }
  if (burger.classList.contains('_active')) {
    menu.querySelectorAll('a').forEach(a => {
      a.tabIndex = "";
    })
    menu.querySelector('.header__enter--mobile').tabIndex = "";
  } else {
    menu.querySelectorAll('a').forEach(a => {
      a.tabIndex = "-1";
    })
    menu.querySelector('.header__enter--mobile').tabIndex = "-1";
  }
})

const linksTop = document.querySelectorAll('.header__top .header__link');

linksTop.forEach(link => {
  link.addEventListener('click', () => {
    if (burger.classList.contains('_active')) {
      menu.classList.add('_hidden');
      closeMenu();
      setTimeout(() => {
        menu.classList.remove('_hidden');
      }, 300)
    }
  })
})

if (document.documentElement.clientWidth < 1299) {
  menu.querySelectorAll('a').forEach(a => {
    a.tabIndex = "-1";
  })
  menu.querySelector('.header__enter--mobile').tabIndex = "-1";
}

// --------------------------------------------------------------------------------

const searchMobil = document.querySelector('.header__search--mobile');
const searchMobilBtn = document.querySelector('.header__search--mobile .search-header__btn');
const searchMobilCloseBtn = document.querySelector('.search-header__close');

searchMobilBtn.addEventListener('click', () => {
  searchMobil.classList.add('_open');
  if (burger.classList.contains('_active')) {
    closeMenu();
  }
})

searchMobilCloseBtn.addEventListener('click', () => {
  searchMobil.classList.remove('_open');
})

// -------------------------------------------------------------------

document.addEventListener('click', (event) => {
  if (!event.target.classList.contains('header__link')) {
    itemBottom.forEach(link => {
      link.classList.remove('header__item--active');
    })
  }
  if (!event.target.classList.contains('tooltip') && !event.target.classList.contains('_icon-info')) {
    tooltip.forEach(el => {
      el.classList.remove('tooltip--active');
    })
  }
})

// -------------------------------------------------------------------

const form = document.getElementById('form');
form.addEventListener('submit', formSend);

async function formSend(event) {
  event.preventDefault();

  let error = formValidate(form);

  let formData = new FormData(form);

  if (error === 0) {
    let response = await fetch('sendmail.php', {
      method: 'POST',
      body: formData,
    });
    if (response.ok) {
      let result = await response.json();
      alert(result.message);
      form.reset();
    } else {
      alert("Ошибка")
    }
  }

}


function formValidate(form) {
  let error = 0;
  let formReq = form.querySelectorAll('input')
  for (let ind = 0; ind < formReq.length; ind++) {
    const input = formReq[ind];
    formRemoveError(input)
    if (input.classList.contains('footer-form__input--name')) {
      if (!input.value) {
        formAddError(input)
        error++;
      }
      if (input.value && !/^[A-Za-zА-Яа-яЁё\s]{2,15}$/.test(input.value)) {
        formAddError(input, 'Недопустимый формат')
        error++;
      }
    }
    if (input.classList.contains('footer-form__input--tel')) {
      const phone = inputTel.inputmask.unmaskedvalue()
      if (phone.length === 0) {
        formAddError(input)
        error++;
      }
      if (phone.length !== 0 && phone.length !== 10) {
        formAddError(input, 'Недопустимый формат')
        error++;
      }
    }
  }
  return error;
}

function formAddError(input, warning = 'Поле обязательно для заполнения') {
  input.classList.add('_error');
  input.nextElementSibling.textContent = warning;
}

function formRemoveError(input) {
  input.classList.remove('_error');
  input.nextElementSibling.textContent = '';
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.simplebar-content-wrapper').tabIndex = "-1";
  document.querySelector('.simplebar-content-wrapper').removeAttribute('aria-label');
})

