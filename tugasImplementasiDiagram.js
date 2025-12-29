class Guitar {
    constructor(serialNumber, price, builder, model, type, backWood, topWood) {
        this.serialNumber = serialNumber;
        this.price = price;
        this.builder = builder;
        this.model = model;
        this.type = type;
        this.backWood = backWood;
        this.topWood = topWood;
    }

    getSerialNumber() {
        return this.serialNumber;
    }

    getPrice() {
        return this.price;
    }

    getBuilder() {
        return this.builder;
    }

    getModel() {
        return this.model;
    }

    getType() {
        return this.type;
    }

    getBackWood() {
        return this.backWood;
    }

    getTopWood() {
        return this.topWood;
    }
}

class Inventory {
    constructor() {
        this.guitars = [];
    }

    addGuitar(serialNumber, price, builder, model, type, backWood, topWood) {
        const guitar = new Guitar(
            serialNumber,
            price,
            builder,
            model,
            type,
            backWood,
            topWood
        );
        this.guitars.push(guitar);
        console.log("Gitar berhasil ditambahkan");
    }

    getGuitar(serialNumber) {
        for (let guitar of this.guitars) {
            if (guitar.getSerialNumber() === serialNumber) {
                console.log("Gitar ditemukan");
                return guitar;
            }
        }
        console.log("Gitar tidak ditemukan");
        return null;
    }

    search(searchGuitar) {
        for (let guitar of this.guitars) {
            if (
                (searchGuitar.getBuilder() && guitar.getBuilder() !== searchGuitar.getBuilder()) ||
                (searchGuitar.getModel() && guitar.getModel() !== searchGuitar.getModel()) ||
                (searchGuitar.getType() && guitar.getType() !== searchGuitar.getType()) ||
                (searchGuitar.getBackWood() && guitar.getBackWood() !== searchGuitar.getBackWood()) ||
                (searchGuitar.getTopWood() && guitar.getTopWood() !== searchGuitar.getTopWood())
            ) {
                continue;
            }
            console.log(`Gitar sesuai kriteria ditemukan`);
            return guitar;
        }
        console.log("Gitar sesuai kriteria tidak ditemukan");
        return null;
    }
}

const inventory = new Inventory();

inventory.addGuitar(
    "Gitar001",
    1500000,
    "Mulia",
    "MPertama",
    "Elektrik",
    "Maple",
    "Maple"
);

const guitarDicari = new Guitar(
    null,
    null,
    "Mulia",
    null,
    null,
    null,
    null
);

inventory.search(guitarDicari);
