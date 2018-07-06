/* Карусель */

const [fontColor, mainColor] = ["#232323", "#4EC2F8"];

const [worksScreens, worksDescription, indicators] = [
    document.getElementsByClassName("works__screens"),
    document.getElementsByClassName("works__description"),
    document.getElementsByClassName("works__indicators_dot")
];

/* Задаём начальный state */
for (let i = 0; i < worksScreens.length; i++) {
    worksScreens[i].style.opacity = "0";
    worksScreens[i].style.animation = "none";
    worksScreens[i].style.left = "-50rem";

    worksDescription[i].style.opacity = "0";
    worksDescription[i].style.animation = "none";
}

for (let i = 0; i < indicators.length; i++) {
    indicators[i].addEventListener("click", function() {
        let id = this.getAttribute("data-id");
        
        /* Снимаем предыдущие интерфалы */
        clearInterval(screenCarousel);
        clearInterval(descriptionCarousel);
        clearInterval(indicatorsCarousel);

        /* Анимируем необходимый элемент */
        initializeCarousel(worksScreens, id, "active_screen")();
        initializeCarousel(worksDescription, id, "active_description")();
        initializeCarousel(indicators, id, "works__indicators_dot-active")();

        /* Снова запускаем интервалы */
        screenCarousel = setInterval(initializeCarousel(worksScreens, +id + 1, "active_screen"), carouselTick);
        descriptionCarousel = setInterval(initializeCarousel(worksDescription, +id + 1, "active_description"), carouselTick);
        indicatorsCarousel = setInterval(initializeCarousel(indicators, +id + 1, "works__indicators_dot-active"), carouselTick);
    });
}

/**
 * Функция для старта карасели
 * @param {Array<HTMLElement>} elements Массив элементов, которые нужно использовать в кареселе
 * @param {number} current Индекс элемента, с которого нужно начать
 * @param {string} className Название класса, анимарующий карусель
 */
function initializeCarousel(elements, current = 1, className) {
    let elems = elements;
    
    let next = current;
    next = next >= elems.length ? 0 : next;

    return () => {
        for (let i = 0; i < elems.length; i++) {
            elems[i].classList.remove(className);
        }

        elems[next].classList.add(className);

        next++;
        
        next = next >= elems.length ? 0 : next;
    };
}

const carouselTick = 3000;

/* Запускаем карусель */
let screenCarousel = setInterval(initializeCarousel(worksScreens, 1, "active_screen"), carouselTick);
let descriptionCarousel = setInterval(initializeCarousel(worksDescription, 1, "active_description"), carouselTick);
let indicatorsCarousel = setInterval(initializeCarousel(indicators, 1, "works__indicators_dot-active"), carouselTick);