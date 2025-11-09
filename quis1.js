import readline from 'node:readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Karyawan{
    constructor(nama, tipe, gaji){
        this.nama = nama;
        this.tipe = tipe;
        this.gaji = parseFloat(gaji);
    }
    bonus(){
        if(this.tipe == 'tetap'){ //karyawan tetap
            return this.gaji * 0.1;
        } else if (this.tipe == 'kontrak'){ //karyawan kontrak
            return this.gaji * 0.05;
        } else {
            console.log("tipe karyawan tidak diketahui, silahkan ulangi!");
            return null;
        }
    }
}

function hitungBonus(karyawan){
    console.log("==========================")
    const bonus = karyawan.bonus();
    if(bonus !== null){
        console.log(`Nama  : ${karyawan.nama}  (Karyawan ${karyawan.tipe})`); 
        console.log(`Gaji  : Rp ${karyawan.gaji}`);
        console.log(`Bonus : Rp ${bonus}`);
        console.log("==========================")
    
    }

    rl.close();
    
}

function inputData(){
    rl.question("Masukkan nama karyawan: ", (nama) =>{
        rl.question("Pilih jenis karyawan (tetap/kontrak): ", (tipe) =>{
            rl.question("Masukkan gaji karyawan: ", (gaji)=>{
                const karyawan = new Karyawan(nama, tipe, gaji);   
                hitungBonus(karyawan);
            })
        })
    })
}

inputData();
