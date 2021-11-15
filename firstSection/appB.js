//private members
var gender = 'a'

//public members
var height = 160
var log = function (height) {
  console.log('Height', height)
}
/*Bu modülden dışarıdan erişelebilir olmasını istediğimiz func ve değişkenleri export edebiliriz.*/

/*
module.exports.height = height;
module.exports.log = log;
*/
module.exports = {
  height: height,
  log: log,
}

/*
module.exports = {
     height,
     log
}*/
