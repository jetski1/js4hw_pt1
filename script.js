let usName = prompt(' Введите свое имя ')
let birth = +prompt("Введите год рождения")
let year = +prompt("Введите нынешный год")
function age() {
    let result = year - birth
    return result
}
let result = age()
alert( 'Ваше имя ' + usName +' ваш возраст ' + result ) 