const [inputContainer, buttonContainer] = [
    document.getElementsByClassName("write-me__input__container"),
    document.getElementsByClassName("write-me__button")
];

function checkInput(input) {
    const [value, type] = [
        input.value,
        input.getAttribute("type")
    ];
    
    const [textRegExp, emailRegExp] = [
        /[A-Za-zА-Яа-я]/,
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ];

    switch (type) {
        case "email":
            return emailRegExp.test(value);
    
        case "text":
            return textRegExp.test(value);

        default:
            return "Unknow input's type";
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

    /*
    // Прикрепляем событие onBlur на каждый input
    input.addEventListener("blur", function() {


        if (checkInput(input)) {
            underline.style.cssText = `
                background-color: green;
                transform: scale(1);
            `;
        } else {
            underline.style.cssText = `
                background-color: red;
                transform: scale(1);
            `;
        }
    });
    */
}
