class switchButton {
    status;
    constructor() {

        this.status = false;
    }
    onLight(lamp){
        this.status = true;
        lamp.lampOn();
        document.write(lamp.nameLamp + 'đã sáng');
        document.write('<br>');
        document.write(lamp.statusLamp);
        document.write('<br>');
    }
    ofLight(lamp){
        this.status = false;
        lamp.lampOff();
        document.write(lamp.nameLamp + 'đã tắt');;document.write('<br>');
        document.write(lamp.statusLamp);document.write('<br>');
    }
}
class lamp{
    nameLamp;
    statusLamp;
    constructor(nameLamp){
        this.statusLamp = false;
        this.nameLamp = nameLamp;
    }
    lampOn(){
        this.statusLamp = true;
    }
    lampOff(){
        this.statusLamp = false;
    }
}