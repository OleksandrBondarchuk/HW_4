/*
Спросить пользователя год его рождения.
Спросить у него, в каком городе он живет.
Спросить его любимый вид спорта.
При нажатии на ОК показываем ему окно, где должна быть отображена следующая информация:
Его возраст.
Если пользователь введет Киев, Вашингтон или Лондон, то показать ему сообщение – “Ты живешь в столице …” и на место точек подставляем название страны, столицей которой является город, который ввел пользователь. Иначе показываем ему “ты живешь в городе …” и на место точек – введенный город.
Выбираем сами три вида спорта и три чемпиона в этих видах. Соответственно, если пользователь введет один из этих видов спорта, то показываем ему сообщение “Круто! Хочешь стать …?” и подставляем на место точек имя и фамилию чемпиона.

Всё это должно быть отображено в одном окне (алерте).

Если в каком-то из случаев он не захочет вводить информацию и нажмет "Отмена", показать ему сообщение – “Жаль, что Вы не захотели ввести свой(ю) …” и указываем, что он не захотел вводить – дату рождения, город или вид спорта.
*/
//Variant #1: with If, else if

// const age = parseInt(prompt("Please add year of your birth"));
// ageValue = (age>=0)?'Твой год рождения:'+age : 'Жаль, что Вы не захотели ввести свой год рождения'
// console.log(ageValue);

// //
// let city = prompt("From which city are you?", '...');
// if (city === "Киев") {
//     var capitalCityUkr = 'Ты живешь в столице Украины';
// } else if (city === "Вашингтон") {
//     var capitalCityUsa = 'Ты живешь в столице США';
// } else if (city === "Лондон") {
//     var capitalCityUk = 'Ты живешь в столице Англии';
// } else if (city === null) {
//     var canselCity = 'Жаль, что Вы не захотели ввести свой город';
// } else {
//     var otherCity = "Ты живешь в городе:" + city;
// };

// let valeuCity = capitalCityUkr || capitalCityUsa || capitalCityUk || canselCity || otherCity;

// //

// const favoriteSport = prompt("Add your favorite sport");
// if (favoriteSport === "Баскетбол") {
//     var firstSport = 'Круто! Хочешь стать как Kobe Bryant?'
// } else if (favoriteSport === 'F1') {
//     var secondSport = 'Круто! Хочешь стать как Michael Schumacher?'
// } else if (favoriteSport === 'Snooker') {
//     var thirdSport = 'Круто! Хочешь стать как Ronnie O`Sullivan?'
// } else if (favoriteSport === null) {
//     var canselSport = 'Жаль, что Вы не захотели ввести свой любимый спорт';
// } else var otherSport = 'Круто! Твой любимый спорт:' + favoriteSport;


// let valeuSport = firstSport || secondSport || thirdSport || canselSport || otherSport;


// //

// let conf = confirm('Confirm your information');
// conf === true ? alert(ageValue + '\n'+valeuCity +'\n'+ valeuSport) : alert('Жаль, что Вы не захотели ввести свою информацию ):');

/*variant № 2, switch
*/
let addAge = prompt("Add your year of birth");
switch (addAge) {
    case null:
        addAge= ('Жаль, что Вы не захотели ввести свой Год Рождения');
        break;
    default:
        addAge = ('Ваш возраст: ' + addAge);
}

let addCity = prompt("Add your City");
switch (addCity) {
    case 'Киев':
        addCity ='Ты живешь в столице Украины';
        break;
    case 'Вашингтон':
        addCity = 'Ты живешь в столице США';
        break;
    case 'Лондон':
        addCity = 'Ты живешь в столице Англии';
        break;
    case null:
        addCity = 'Жаль, что Вы не захотели ввести свой Город';
        break;
    default:
        addCity= 'Ваш город: ' + addCity ;
}

let addSport = prompt('Add our favorite sport');
switch (addSport) {
    case "Баскетболл":
        addSport = "Круто! Хочешь стать Coby Bryant?";
        break;
    case "Сокер":
        addSport= "Круто! Хочешь стать Ronaldo?";
        break;
    case "Футбол":
        addSport = "Круто! Хочешь стать Aaron Rodgers?";
        break;
    case null:
        addSport = 'Жаль, что Вы не захотели ввести свой любимый Спорт';
        break;
    default:
        addCity= 'Ваш любимый Спорт: ' + addSport;
}

alert(addAge + '\n' + addCity+'\n' + addSport);
