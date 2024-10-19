let year;
let month = '';
let day;
let birthday; 
let middleName;

const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Наталья",
            "id_2": "Марина",
            "id_3": "Анна",
            "id_4": "Кристина",
            "id_5": "Диана",
            "id_6": "Виктория",
            "id_7": "Мария",
            "id_8": "Екатерина",
            "id_9": "Ольга",
            "id_10": "Елена"
        }
    }`,

    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Водитель",
            "id_2": "Слесарь",
            "id_3": "Токарь",
            "id_4": "Каменщик",
            "id_5": "Грузчик",
            "id_6": "Электрик",
            "id_7": "Сантехник",
            "id_8": "Шахтер",
            "id_9": "Летчик",
            "id_10": "Охранник"
        }
    }`,

    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Бухгалтер",
            "id_2": "Швея",
            "id_3": "Кондуктор",
            "id_4": "Секретарь",
            "id_5": "Нянечка",
            "id_6": "Уборщица",
            "id_7": "Библиотекарь",
            "id_8": "Косметолог",
            "id_9": "Парикмахер",
            "id_10": "Медсестра"
        }
    }`,

    month31Json: `{
        "count": 7,
        "list": {     
            "id_1": "Января",
            "id_2": "Марта",
            "id_3": "Мая",
            "id_4": "Июля",
            "id_5": "Августа",
            "id_6": "Октяря",
            "id_7": "Декабря"
        }
    }`,

    month30Json: `{
        "count": 4,
        "list": {     
            "id_1": "Апреля",
            "id_2": "Июня",
            "id_3": "Сентября",
            "id_4": "Ноября"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomGender: function() {
       return Math.floor(Math.random() * 2) == 0 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() { //Генерация Имени
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomMiddleName: function() { //Генерация Отчества
        middleName = this.randomValue(this.firstNameMaleJson);
        if (this.person.gender == 'Мужчина') {
            if (middleName.includes('й')) {
                middleName = middleName.replace("й", "евич");
            } else
            if (middleName.includes('Никита')) {
                middleName = middleName.replace("а", "ич");
            } else
                middleName = middleName + "ович";
        } else
 
        if (this.person.gender == 'Женщина') {
            if (middleName.includes('й')) {
                middleName = middleName.replace("й", "евна");
            } else
            if (middleName.includes('Никита')) {
                middleName = middleName.replace("а", "ична");
            } else
                middleName = middleName + "овна"; 
        }
        return middleName;
    },

     randomSurname: function() { //Генерация Фамилии
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + "а";
        }
    },

    randomBirthday: function() { //Генерация даты рождения
        if (Math.floor(Math.random() * 3) == 0) {
            year = this.randomIntNumber(2006, 1960);
            month = this.randomValue(this.month31Json);
            day = this.randomIntNumber(31, 1);
        } else 
        if (Math.floor(Math.random() * 3) == 1) {
            year = this.randomIntNumber(2006, 1960);
            month = this.randomValue(this.month30Json);
            day = this.randomIntNumber(30, 1);
        } else 
        if (Math.floor(Math.random() * 3) == 2) {
            year = this.randomIntNumber(2006, 1960);
            month = 'Февраля';
                if (year % 4 == 0) {
                    day = this.randomIntNumber(29, 1);
              } else {
                    day = this.randomIntNumber(28, 1);
              }
        }
        birthday = day + ' ' + month + ' ' + year + " года рождения"; 
        return birthday;
      },

    randomProfession: function() { //Генерация Профессии
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson);
        }
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.middleName = this.randomMiddleName();
        this.person.surname = this.randomSurname();
        this.person.profession = this.randomProfession();
        this.person.birthday = this.randomBirthday();
        return this.person;
    }
};
