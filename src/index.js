module.exports = function toReadable (number) {
  let units = [
    '', 'one', 'two', 'three', 'four', 'five', 
    'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ]   
  let dozens = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty',
    'seventy', 'eighty', 'ninety'
  ]
  let hundred = 'hundred';
  
  let result = '';
  number = String(number);
  console.log(number);

  //numbers from 1 to 19
  if (number < 20) {
    result = units[number]
    return result;
  }
  
  //numbers from 20 to 99
  if (number.length === 2) {
    result = dozens[number.charAt(0)] + ' ';
    result += units[number.charAt(1)];
    return result;
  }

  //numbers from 100 to 999  
  if (number.length === 3 && number.charAt(1) == 1) {     
        result = units[number.charAt(0)] + ' ' + hundred + ' ';
       result += units[number.slice(1)];
        return result;
  } else if (number.length === 3 && number.charAt(2) == 0) {
        result = units[number.charAt(0)] + ' ' + hundred + ' ';     
        result += dozens[number.charAt(1)] + '';
        result += units[number.charAt(2)];
        return result;
    } else {
        result = units[number.charAt(0)] + ' ' + hundred + ' ';
        result += dozens[number.charAt(1)] + ' ';
        result += units[number.charAt(2)];
      return result;
    }
}
