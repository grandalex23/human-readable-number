module.exports = function toReadable(number) {

  // TODO TASK: Ваша задача "написать" функцию которая конвертирует данное число в читаемую строку
  // TODO: 123 -> "сто двадцать три"

  // TODO 1. Нужно понять разрядность числа
  // TODO 2. по if внутри 1й разрядности по строковому значению по switch определить первое число
  // TODO 3. Иначе если разрядность 2 и 1е число = 1 -> по строковому значению 1й цифры по switch определить от 10 -19
  // TODO 4. Иначе если разрядность 2 и 1е число !=ё -> по строковому значению 1й цифры по switch определить десятки (20, 30, 40...)
  // TODO 4. А по 2й цифре определит единицы (Х1, Х2, Х3 ...) -> вернуть конкатенацию 1й и 2й цифры
  // TODO 5. Иначе если разрядность 3 и 2я цифра !=1 (например не 317) -> вернуть сотки десятки и единицы
  // TODO 5. Иначе если разрядность 3 и 2я цифра =1 (например 317) -> вернуть сотки и "17" 

  let first;                                      // Первая цифра числа
  let second;                                     // Вторая цифра числа
  let third;                                      // Третья цифра числа
  stringNumber = number.toString();               // приведение числа в строковое
  let capacity = number.toString().length;        // разрядность заданного числа

  if (capacity == 1) {
    switch (number) {
      case 0:
        return 'zero';
        break;
      case 1:
        return 'one';
        break;
      case 2:
        return 'two';
        break;
      case 3:
        return 'three';
        break;
      case 4:
        return 'four';
        break;
      case 5:
        return 'five';
        break;
      case 6:
        return 'six';
        break;
      case 7:
        return 'seven';
        break;
      case 8:
        return 'eight';
        break;
      case 9:
        return 'nine';
        break;
    }
  } else if ((capacity == 2) && (stringNumber[0] == '1')) {
    switch (stringNumber[1]) {
      case '0':
        return 'ten';
        break;
      case '1':
        return 'eleven';
        break;
      case '2':
        return 'twelve';
        break;
      case '3':
        return 'thirteen';
        break;
      case '4':
        return 'fourteen';
        break;
      case '5':
        return 'fifteen';
        break;
      case '6':
        return 'sixteen';
        break;
      case '7':
        return 'seventeen';
        break;
      case '8':
        return 'eighteen';
        break;
      case '9':
        return 'nineteen';
        break;
    }
  } else if ((capacity == 2) && (stringNumber[0] != '1')) {
    switch (stringNumber[0]) {
      case '2':
        second = 'twenty';
        break;
      case '3':
        second = 'thirty';
        break;
      case '4':
        second = 'forty';
        break;
      case '5':
        second = 'fifty';
        break;
      case '6':
        second = 'sixty';
        break;
      case '7':
        second = 'seventy';
        break;
      case '8':
        second = 'eighty';
        break;
      case '9':
        second = 'ninety';
        break;
    };
    switch (stringNumber[1]) {
      case '0':
        third = '';
        break;
      case '1':
        third = ' one';
        break;
      case '2':
        third = ' two';
        break;
      case '3':
        third = ' three';
        break;
      case '4':
        third = ' four';
        break;
      case '5':
        third = ' five';
        break;
      case '6':
        third = ' six';
        break;
      case '7':
        third = ' seven';
        break;
      case '8':
        third = ' eight';
        break;
      case '9':
        third = ' nine';
        break;
    };
    return (second + third);
  } else if ((capacity == 3) && (stringNumber[1] != '1')) {
    switch (stringNumber[0]) {
      case '1':
        first = 'one hundred';
        break;
      case '2':
        first = 'two hundred';
        break;
      case '3':
        first = 'three hundred';
        break;
      case '4':
        first = 'four hundred';
        break;
      case '5':
        first = 'five hundred';
        break;
      case '6':
        first = 'six hundred';
        break;
      case '7':
        first = 'seven hundred';
        break;
      case '8':
        first = 'eight hundred';
        break;
      case '9':
        first = 'nine hundred';
        break;
    };
    switch (stringNumber[1]) {
      case '0':
        second = '';
        break;
      case '2':
        second = ' twenty';
        break;
      case '3':
        second = ' thirty';
        break;
      case '4':
        second = ' forty';
        break;
      case '5':
        second = ' fifty';
        break;
      case '6':
        second = ' sixty';
        break;
      case '7':
        second = ' seventy';
        break;
      case '8':
        second = ' eighty';
        break;
      case '9':
        second = ' ninety';
        break;
    };
    switch (stringNumber[2]) {
      case '0':
        third = '';
        break;
      case '1':
        third = ' one';
        break;
      case '2':
        third = ' two';
        break;
      case '3':
        third = ' three';
        break;
      case '4':
        third = ' four';
        break;
      case '5':
        third = ' five';
        break;
      case '6':
        third = ' six';
        break;
      case '7':
        third = ' seven';
        break;
      case '8':
        third = ' eight';
        break;
      case '9':
        third = ' nine';
        break;
    };
    return (first + second + third);
  } else if ((capacity == 3) && (stringNumber[1] == '1')) {
    switch (stringNumber[0]) {
      case '1':
        first = 'one hundred';
        break;
      case '2':
        first = 'two hundred';
        break;
      case '3':
        first = 'three hundred';
        break;
      case '4':
        first = 'four hundred';
        break;
      case '5':
        first = 'five hundred';
        break;
      case '6':
        first = 'six hundred';
        break;
      case '7':
        first = 'seven hundred';
        break;
      case '8':
        first = 'eight hundred';
        break;
      case '9':
        first = 'nine hundred';
        break;
    };
    switch (stringNumber[2]) {
      case '0':
        second = ' ten';
        break;
      case '1':
        second = ' eleven';
        break;
      case '2':
        second = ' twelve';
        break;
      case '3':
        second = ' thirteen';
        break;
      case '4':
        second = ' fourteen';
        break;
      case '5':
        second = ' fifteen';
        break;
      case '6':
        second = ' sixteen';
        break;
      case '7':
        second = ' seventeen';
        break;
      case '8':
        second = ' eighteen';
        break;
      case '9':
        second = ' nineteen';
        break;
    };
    return (first + second);
  }
}

