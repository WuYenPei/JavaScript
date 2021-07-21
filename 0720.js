// for (let i = 1; i <= 10; i++){

//      if ( i != 4 && i !=6){
//          console.log(i)
//      }
//     }
         // 試作不要印出4和6
    // 這是我的答案:


  
//  解答：
//  if ( i == 4 || i ==6 ){
//     continue 
// }
//     console.log(i)
// }

// let item = ["a", "b", "c", "d"]
//   for  (i = 0; i <= 3; i++){
//       console.log(item[i])
// }


// 攝氏 c = 5/9 x (華氏溫度 - 32)
// 華氏 f = (攝氏) x (9/5) + 32


// function c2f(t) {
//    return (t * (9 / 5) + 32)
//   }
  
//   console.log(c2f(85))  // 85度c -> ??f
//-----------------------------------------------------------------
// 印出22.4
65 / (170 / 100)
// BMI值計算公式: BMI = 體重(公斤) / 身高2(公尺2)
// 身高170cm,體重65kg

function bmiCalculator(height,weight){
    let bmiCalculator =(weight/ ((height / 100) * ( height / 100 ))
    return bmiCalculator
}

console.log(bmiCalculator(170, 65))
