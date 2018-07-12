const [inputContainer, buttonSend, buttonReset] = [
    document.getElementsByClassName("write-me__input__container"),
    document.getElementsByClassName("write-me__button__send")[0],
    document.getElementsByClassName("write-me__button__reset")[0]
];

const [mainColor, greenColor, redColor] = ['#4EC2F8', '#B0F75F', '#F75F5F'];

/**
 * Проверяет input на валидность и возвращает true если значение в input валидно и false в обратном случае
 * @param {HTMLElement} input input, значение которого следует проверить
 */
function checkInput(input) {
    let [value, pattern] = [
        input.value,
        input.getAttribute("pattern")
    ];

    // Если нет патерна, то не проверять
    if (!pattern) return null;

    pattern = new RegExp(pattern);

    return pattern.test(value.toLowerCase());
}

/**
 * Функция контсруктор для создания объектов стилей
 * @param {string} backgroundColor CSS свойство background-color
 * @param {number} transform CSS свойство transform, предполагаемые значения от 0 до 1
 */
const StylesUnderline = function(backgroundColor, transform) {
    this["background-color"] = backgroundColor;
    this.transform = `scale(${transform})`;
}

const stylesOnChange = {
    valid: new StylesUnderline(greenColor, 1),
    invalid: new StylesUnderline(redColor, 1),
    byDefault: new StylesUnderline(mainColor, 1)
}

const stylesOnBlur = Object.create(stylesOnChange);
stylesOnBlur.valid = new StylesUnderline(greenColor, 0);

/**
 * Преобразовывает объект стилей в строку стилей
 * @param {object} object Объект стилей
 */
function objectStyleToString(object) {
    let strStyle = "";

    for (let item in object) {
        strStyle += item + ':';
        strStyle += object[item] + ';';
    }

    return strStyle;
}

/**
 * Функция обработки событий на input, анимирующая HTML объект undeline, в соответствии со стилями переданными 3м параметром
 * @param {object} event Объект события
 * @param {HTMLElement} underline HTML объект, который нужно анимировать (подчёркивание)
 * @param {object} styleObject Объект CSS стилей, которые будут применены к underline
 */
function onInputHandler(event, underline, styleObject) {
    // Если объекты стилей не были переданы
    if (typeof styleObject !== 'object')
        throw "Styles is not an object";

    const input = event.target;

    // Стили для underline
    let [valid, invalid, byDefault] = [
        objectStyleToString(styleObject.valid),
        objectStyleToString(styleObject.invalid),
        objectStyleToString(styleObject.byDefault)
    ];

    if (input.value.length > 0) {
        // Проверка input на валидность
        const checker = checkInput(input);

        if (checker === true)
            underline.style.cssText = valid; // Если проверка прошла успешно
        else if (checker === false)
            underline.style.cssText = invalid; // Если есть ошибка
            
    } else {
        underline.style.cssText = byDefault;
    }
}

for (let i = 0; i < inputContainer.length; i++) {
    const [container, input, placeholder, underline] = [
        inputContainer[i],
        inputContainer[i].children[0],
        inputContainer[i].children[1],
        inputContainer[i].children[2]
    ];

    // Присваиваем текст из placeholder во всплывающе текст в span
    placeholder.innerHTML = input.getAttribute("placeholder");

    // Прикрепляем событие onInput (change) на каждый input
    input.addEventListener("input", event => onInputHandler(event, underline, stylesOnChange));

    // Прикрепляем событие onBlur на каждый input
    input.addEventListener("blur", event => onInputHandler(event, underline, stylesOnBlur));
}

/**
 * Функция обработчик события по кнопке "Отправить"
 * @param {object} event Объект события
 * @param {HTMLCollection} inputContainer Контейнеры, в которых лежат элементы input
 */
function onClickButtonSend(event, inputContainer) {
    event.preventDefault();

    // Проверка полей формы на валидность
    for (let i = 0; i < inputContainer.length; i++) {
        const input = inputContainer[i].children[0];

        if (checkInput(input) === false) {
            var event = new Event("blur");
            input.dispatchEvent(event);
            input.focus();

            return false;
        }
    }

    // TODO: код по нажатию на кнопку ОТПРАВИТЬ
}

/**
 * Функция обработчик события по кнопке "Сбросить"
 * @param {object} event Объект события
 * @param {HTMLCollection} inputContainer Контейнеры, в которых лежат элементы input
 */
function onClickButtonReset(event, inputContainer) {
    event.preventDefault();

    // Проверка полей формы на валидность
    for (let i = 0; i < inputContainer.length; i++) {
        const input = inputContainer[i].children[0];
        input.value = "";
    }
}

// Вешаем событие клика onClick на кнопку "Отправить"
buttonSend.addEventListener("click", event => onClickButtonSend(event, inputContainer));

// Вешаем событие клика onClick на кнопку "Сбросить"
buttonReset.addEventListener("click", event => onClickButtonReset(event, inputContainer));