class student{
    id;
    name;
    email
    birthday;
    constructor(id,name,email,birthday){
        this.id=id;
        this.name=name;
        this.email=email;
        this.birthday=birthday;
    }
    getinfor(){
       return `${this.id} ${this.name} ${this.email} ${this.birthday} `;
    }
    setname(nname){
        this.name = nname;
    }
}

