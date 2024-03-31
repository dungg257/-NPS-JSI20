
// //Spread cho phép bạn "mở rộng" một interable object(arr, string, object) 
// thành các phần tử riêng lẻ trong một biểu thức,nó được biểu thị bằng dấu
// chấm (...)//

/// ứng dụng 




// let b = a 
// let a =2

// const arr1 = [1,2,3]
// const arr2= [1,2,3]

// const arr3= [...arr1,...arr2]



// const str1 = [hihihi]
// const str2= [hahaha]

// const str3= [...astr1,...str2]



// const obj1 = {name:"vudung", age :111 }

// const obj2 = {address: "trong tim em"}

// const obj3 = {"obj3",.. obj3}


// let arr = [1,2,3,4,5,6,7,8];
//  let ar2 =[]
// for(let i = 0;i< arr.length;i++){
//     ar2 [i] = ar []
// }



// console.log(arr2)

// let arr3 = arr.map(item=>item*item)

// console.log("arr3",arr3)


/*
Cú pháp của map gồm:
let <tên biến> = <array>.map(<tên tham số> => ... thực hiện hành động sau mỗi lần lặp)
- map(); trả về kết quả là 1 array mới đã thực thi hành động với ô chứa mới không trùng lặp với cũ

*/

// let arr = [1,2,3, 'hello',4,5,6 ,"hi",null,0]
// let arr1 = arr.filter(item=>typeof item == 'number');
// console.log("arr1",ar1);


 

// let arrsochan = arr.filter(item=> item %2 ==0);
// console.log("arrsochan",arsochan);


// let NPS_JSI20 = [
//     {
//         name: "Lê Anh",
//         age: 15,
//         job: "student"
//     },
//     {
        
//         name: "Vũ Dũng",
//         age: 16,
//         job: "student"
//     },
//     {
//         name: "Trung Hiếu",
//         age: 14,
//         job: "Dev"
//     },
//     {
//         name: "Hoàng Quân",
//         age: 14,
//         job: "student"
//     }
// ];
 

// let arrjobstudent = NPS_JSI20.filter(item)
// // let arrsochan = arr.filter(item=> item %2 ==0);
// // console.log("arrsochan",arsochan);




// let nhaptuoi = Number(prompt("mời người dùng nhập vào tuổi học sinh"));
// let arrAgestudent = NPS_LSI20.filter(item => item.age==nhaptuoi)
//  arrAgestudent.array.forEach(element => {
//     console.log(element.name+"với số tuổi là" + element.age)
    
//  });




let arr = ["abc", "abcd", "qwertyuiop"];

arr.sort((a, b) => a.length - b.length);

console.log(arr);  ["abc", "abcd", "qwertyuiop"]







for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i].length > arr[j].length) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}


























