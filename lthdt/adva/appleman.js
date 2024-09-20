class apple{
    appleWeight = 10;
}
class human extends apple{
    name;
    gender;
    age;

    constructor(name,gender,age){
        super();
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    say(wSay){
        return this.name +': '+ wSay ;
    }
    EatApple(apple){
        if(this.appleWeight > 0){
            apple.appleWeight -= 5;
        }
    }


}