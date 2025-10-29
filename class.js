// class karyawan
class Karyawan{
    constructor(nama, jabatan, gaji){
        this.nama = nama;
        this.jabatan = jabatan;
        this.gaji = gaji;
    }
    info(){
        return `${this.nama} bekerja sebagai ${this.jabatan} dengan gaji ${this.gaji}`;
    }
}

const karyawan1 = new Karyawan("Kirana", "Admin", 5500000);
const karyawan2 = new Karyawan("Widi", "Programmer", 8500000);

console.log(karyawan1.info());

// class animal

class Animal{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    makeSound(){
        if(this.type == "mengeong"){
            console.log(`Suara ${this.name} adalah Nyaooo~`);
        } else if (this.type == "berkokok"){
            console.log(`Suara ${this.name} adalah Kukuruyukk~`);
        } else if (this.type == "mengaung"){
            console.log(`Suara ${this.name} adalah Rawrr~`);
        } else if (this.type == "menggonggong"){
            console.log(`Suara ${this.name} adalah Gukgukk~`);
        }else if (this.type == "melolong"){
            console.log(`Suara ${this.name} adalah Awuuu~`);
        } else {
            console.log(`Suara ${this.name} belum terdaftar`);
        }
    }
}

const animal1 = new Animal("Kucing", "mengeong");
const animal2 = new Animal("Burung", "berkicau");

animal1.makeSound();
animal2.makeSound();