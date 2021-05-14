function formatterDate(date) {

    // Adding a zero if the number is less than 10
    function zeroLeft(num) {
        return num <= 10 ? `0${num}` : num
    }

    // Formatting
    const day = zeroLeft(date.getDate());
    const month = zeroLeft(date.getMonth());
    const year = zeroLeft(date.getFullYear());
    const hour = zeroLeft(date.getHours());
    const minute = zeroLeft(date.getMinutes());

    return `${month}/${day}/${year} ${hour}:${minute}`


}

const dateNow = new Date();

console.log(formatterDate(dateNow))