/* Карусель */

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
        

    });
}

let next = 1;
let previous = 0;

/*
function checkIndicators(next, previous) {
    let n = next >= elements.length ? 0 : next;
    let prev = previous;

    if (n === 0) {
        prev = elements.length - 1;
    }

    if (next === elements.length - 1) {
        prev = elements.length - 2;
    }

    return [n, prev];
}
*/

/**
 * Функция для старта карасели
 * @param {Array<HTMLElement>} elements Массив элементов, которые нужно использовать в кареселе
 * @param {number} current Индекс элемента, с которого нужно начать
 * @param {string} className Название класса, анимарующий карусель
 */
function initializeCarousel(elements, current = 1, className) {
    let next = current;
    let previous = next - 1;

    return () => {
        elements[previous].classList.remove(className);
        elements[next].classList.add(className);

        next++;
        previous = next - 1;

        next = next >= elements.length ? 0 : next;

        if (next === 0) {
            previous = elements.length - 1;
        }

        if (next >= elements.length - 1) {
            previous = elements.length - 2;
        }
    };
}

const carouselTick = 3000;

/* Запускаем карусель */
setInterval(initializeCarousel(worksScreens, 1, "active_screen"), carouselTick);
setInterval(initializeCarousel(worksDescription, 1, "active_description"), carouselTick);