class Animal{
    speak(){
        return console.log("Animal make a Sound");
    }
}

class Dog extends Animal{
    speak(){
        return console.log("Dog make sound like Woff~");
    }
}

class Cat extends Animal{
    speak(){
        super.speak();
        return console.log("Cat make sound like Meoww~");
    }
}

const dog = new Dog();
const cat = new Cat();

dog.speak();
cat.speak();


