let usName = prompt(' Введите свое имя ')
let birth = +prompt("Введите год рождения")
let year = +prompt("Введите нынешный год")
function age() {
    let result = year - birth
    return result
}

birth = !isNaN(birth) && birth > 0 ? birth :  alert('Ошибка, вы на год рождения ввели отрицательное число или не число ')
year= !isNaN(year) && year > 0 ? year : alert('Ошибка, вы на нынешний год ввели отрицательное число или не число ')
console.info('Ваше имя ' + usName +' ваш возраст ' + result)
alert( 'Ваше имя ' + usName +' ваш возраст ' + result ) 
