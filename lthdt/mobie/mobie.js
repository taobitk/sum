class Mobile {
    // khai bao thuoc tinh
    pin;
    message;
    inbox;
    outbox;
    status;
        constructor() {
            this.message = '';
            this.pin = 100;
            this.inbox = [];
            this.outbox = [];
            this.status = false;
        }
    checkStatus(){
            if(this.status){
                return 'máy đang bật';
            }else {
                return 'máy đang tắt';
            }
    }
    onPhone(){
            this.pin -= 1;
            this.status = true;
    }
    offPhone(){
        this.pin -= 1;
            this.status = false;
    }
    changePin(){
            this.pin = 100;
    }
    composeMessageTo(message,phone){
        this.pin -= 1;
            if(this.status){
                this.message = message;
                phone.inbox += this.message;
                this.outbox += this.message;
            }
    }
    checkInbox(){
        this.pin -= 1;
            if (this.status){
                return this.inbox;
            }else {
                alert('điện thoại đang tắt')
            }
    }
    checkOutbox(){
        this.pin -= 1;
        if (this.status){
            return this.outbox;
        }else {
            alert('điện thoại đang tắt')
        }
    }



}