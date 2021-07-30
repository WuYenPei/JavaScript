// 07月23日上課練習    


const lists = [2, 4, 1, 8, 7, 3, 5]

// for ... of 
for (xx of lists) {
  console.log(xx);
}

// 傳統 for
for (let i = 0; i < lists.length; i++) {
  console.log(lists[i]);
}

// HOF for
lists.forEach( (el) => {
  console.log(el);
})


// -----------------------------------------

function heroCreator(name, action) {
}

const h1 = heroCreator("悟空", "龜派氣功")

h1.attack()
h1.greeting()
使用 Object.create 方法

// ----------------------------------------------

// construct 建構
// constructor 建構的傢伙 建構子
class Hero {
}

let h = new Hero("悟空", "龜派氣功")
h.attack()  // 印出 悟空使用絕招龜派氣功


// ------------------------------------------------

class 靈長類 {
    squash() {
      console.log("!!!!");
    }
  }
  
  // is-a
  class 黑猩猩 extends 靈長類 {
  }
  
  class 人 extends 靈長類 {
    squash() {
      console.log("ZZZZZ");
    }
  }
  
  me = new 人()
  me.squash()
  
  you = new 黑猩猩()
  you.squash()
  練習：請說明何謂「抽象類別」

//   -------------------------------------------

// Q1
// 請說明何謂「抽象類別」

// Q2
let r = [[0, 1], [2, 3]].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2],
  );
  
  console.log(r);  // 會印出什麼？為什麼？
  
  // Q3
  function getInfo(member, year) {
    member.name = 'Lydia';
    year = '1998';
  }
  
  const person = { name: 'Sarah' };
  const birthYear = '1997';
  
  getInfo(person, birthYear);
  
  console.log(person, birthYear); // 會印出什麼？為什麼？
  
  // Q4
  function sayHi(name) {
    return `Hi there, ${name}`;
  }
  
  console.log(sayHi());  // 會印出什麼？為什麼？