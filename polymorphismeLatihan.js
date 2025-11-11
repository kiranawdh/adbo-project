// // latihan 1

// class Vehicle{
//     move(){
//         return console.log("Kendaraan Bergerak");
//     }
// }

// class Car extends Vehicle{
//     move(){
//         return console.log("Mobil berjalan di jalan raya");
//     }
// }

// class Boat extends Vehicle{
//     move(){
//         return console.log("Kapal berlayar di laut");
//     }
// }

// const car = new Car();
// const boat = new Boat();

// car.move();
// boat.move();

// latihan 2

class Employee{
    calculateSalary(){
        return console.log("Hitung Gaji");
    }
}

class FullTimeEmployee extends Employee{
    calculateSalary(){
        return console.log("Gaji Pegawai tetap              : Rp 5000000");
    }
}

class PartTimeEmployee extends Employee{
    calculateSalary(jam){
        this.jam = jam;
        return console.log(`Gaji Pegawai kontrak per ${jam} jam : Rp ${jam*50000}`);
    }
}

const fulltime = new FullTimeEmployee();
const parttime = new PartTimeEmployee();

fulltime.calculateSalary();
parttime.calculateSalary(12);

