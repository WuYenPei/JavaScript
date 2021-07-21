

// 規則：
// 如果是 3 的倍數，換成 'Fizz'
// 如果是 5 的倍數，換成 'Buzz'
// 如果是 3 而且也是 5 的倍數，換成 'FizzBuzz'

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

for (var i = 0; i < list.length; i++){
    if(list[i] % 3 ==0 && list[i] % 5 == 0){
        list[i] = "FizzBuzz"
    }
    if(list[i] % 3 == 0){
        list[i] = "Fizz"
    }
    if(list[i] % 5 == 0){
        list[i] = "Buzz"
    }
}



// 印出 [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']


function displayName(firstName, lastName) {
    // 實作
  }
  
  displayName("Hello", "Kitty")   // 印出 "Hello Kitty"
  displayName("Hello", "天線寶寶") // 印出 "Hello 天線寶寶"
  displayName("Hello")            // 印出 "Hello Kitty"
  displayName()                   // 印出 請輸入名稱