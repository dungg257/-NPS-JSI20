

/*lập trình hướng đooi opp
khái niệm ; là mô hình lập trình dựa trên khái niệm của các đối tượng ,có thể chứa dữ liệu ,
dưới dạng trường thuộc tính phương thức
 */








//// các kiểu dữ liệu : object,number...............


// khởi tạo đối tượng người //

// class người {

//     constructor(id, name, age, address, hobbies, gender,) {   ///TIẾT HÀNH LƯA TRƯ ///
//         this._id = id;

//         this._name = name;

//         this._age = age;

//         this._address = address;

//         this._hobbies = hobbies;

//         this._gender = gender;
//     }

//     introduction() {
//         alert('MY name is ${this._name} add I${this._age} years old')
//     }
//     cry() {
//         alert('I am crying')
//     }
// }


// let DŨN = new nguoi("0111111111111111", "nguyễn vũ dũng ", 26,
//     "trong tym ẻm"["ăn", "ngủ "], "nam");

// console.log(DŨN._name)






// class hs extends Nguoi {
//     constructor(id, name, age, address, hobbies, gender, idTeacher, classs, totaScore) {

//         super(id, name, age, address, hobbies, gender,)


//         this._idTeacher = idTeacher;

//         this._classs = classs;

//         this._totaScore = totaScore;

//     }
//     introduct() {
//         return super.introduct() + 'amd now I am teaching at ${this._classs}'
//     }
// }


// let Dun = new ("0111111111111111",
//     "nguyễn vũ dũng ",
//     26,
//     "trong tym ẻm",
//     ["ăn", "ngủ "],
//     "nam",
//     " th051942",
//     "gda",
//     10000,
// );


// console.log(Dun); alert(dun.introduct)


class Car extends Vehicle{
    constructor(make, model, year, numberOfDoors){
        super(make, model, year);
        this._numberOfDoors = numberOfDoors;
    }

    displayDetails(){
        return super.displayDetails() + `, Number of Doors: ${this._numberOfDoors}`
    }
}

let myCar= new Car('Toyota', 'Corolla', 2021, 4);

console.log(myCar.displayDetails());






































