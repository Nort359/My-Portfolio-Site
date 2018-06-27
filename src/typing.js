export default function typingText(message, whereToWrite, delay = 0) {
    const fullMessage = message, // Текст, который нужно записывать
        element = whereToWrite, // элемент куда записывать
        del = delay, // Задержка перед написанием
        tick = 30; // Время на написание одного символа в ms


    let currentMessage = ""; // Переменная для поочерёдной записи сообщения

    return () => {
        for (let j = 0; j < fullMessage.length; j++) {
            setTimeout(function () {
                currentMessage += fullMessage[j];
                element.innerHTML = currentMessage;
                element.innerHTML += j != (fullMessage.length - 1) ? '|' : '';
            }, tick * j + del * tick);
        }
    }
}