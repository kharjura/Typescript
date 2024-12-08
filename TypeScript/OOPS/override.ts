class myfather {
    house() {
        console.log("my father built a house in red color");
    }
}

class son extends myfather {
    house() {
        console.log("son changes the color to blue");
    }
    }
    
    let s1 = new son();
    s1.house();
