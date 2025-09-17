const accountId = 13345       
let accountEmail = "shaan@google.com"
var accountPassword = "12345"
accountCity = "Khordha"
let accountState;

// accountId = 2 //
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Cuttack"

/*
Prefer not to use var
because of issue in block scope and functonal scope
*/


console.log (accountId);
console.table([accountId, accountPassword, accountEmail, accountCity, accountState])
