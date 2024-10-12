let year;
let month = '';
let day;
let birthday; 

const personGenerator = {
    surnameJson: `{  
        "count": 15,
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

    middleNameJson: `{
        "count": 10,
        "list": {     
            "id_1": "Алексеев",
            "id_2": "Александров",
            "id_3": "Владиславов",
            "id_4": "Викторов",
            "id_5": "Михаилов",
            "id_6": "Борисов",
            "id_7": "Дмитриев",
            "id_8": "Олегов",
            "id_9": "Андреев",
            "id_10": "Иванов"
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

    month28Json: `{
        "count": 1,
        "list": {     
            "id_1": "Февраля"
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
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.middleNameJson) + "ич";
        } else {
            return this.randomValue(this.middleNameJson) + "на";
        }
    },

     randomSurname: function() { //Генерация Фамилии
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + "а";
        }
    },

/*    randomYear: function(){
       year = this.randomIntNumber(1960, 2010);
 },*/

   /* randomDay: function() { //генерация числа
        return this.randomIntNumber(1, 31);
    },*/


   /* randomBirthday: function() { //генерация числа
      if  (Math.floor(Math.random() * 3) == 0) {
        month = this.randomValue(this.month31Json);
        day = this.randomIntNumber(1, 31);
        console.log(year, month, day);
      } else 
      if (Math.floor(Math.random() * 2) == 1) {
        month = this.randomValue(this.month30Json);
        day = this.randomIntNumber(1, 30);
        console.log(year, month, day);
    } else 
      if (Math.floor(Math.random() * 2) == 2) {
        month = this.randomValue(this.month28Json);
            if (year % 4 == 0) {
                day = this.randomIntNumber(1, 28);
            } else {
                day = this.randomIntNumber(1, 29);
            }
            console.log(year, month, day);
        }
      birthday = day + month + year + "года рождения"; 
      console.log(year, month, day);
      return birthday;
    },*/

    randomBirthday: function() { //генерация даты рождения
        if  (Math.floor(Math.random() * 3) == 0) {
            year = this.randomIntNumber(2006, 1960);
            month = this.randomValue(this.month31Json);
            day = this.randomIntNumber(31, 1);
            //console.log(year, month, day);
        } else 
        if (Math.floor(Math.random() * 2) == 1) {
            year = this.randomIntNumber(2006, 1960);
            month = this.randomValue(this.month30Json);
            day = this.randomIntNumber(30, 1);
          //  console.log(year, month, day);
        } else 
        if (Math.floor(Math.random() * 2) == 2) {
            year = this.randomIntNumber(2006, 1960);
            month = this.randomValue(this.month28Json);
                if (year % 4 == 0) {
                    day = this.randomIntNumber(28, 1);
              } else {
                    day = this.randomIntNumber(29, 1);
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
