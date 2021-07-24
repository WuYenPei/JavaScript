// -------------------2021年07月23日------------------

function heroCreator(name, action) {
    name(h1)
    acyion(h1)
}
Object.create()

const h1 = heroCreator("悟空", "龜派氣功")

h1.attack()
h1.greeting()


// -------------------------------------------------------

// construct 建構
// constructor 建構的傢伙 建構子
class Hero {
    constructor(name,action) {
    this.name = name;
    this.action = action;}
{
console.log(`${this.name}使用絕招${this.name}`)
}} 
let h = new Hero("悟空", "龜派氣功")
h.attack() // 印出 悟空使用絕招龜派氣功




