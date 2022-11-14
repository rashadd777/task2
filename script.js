
function retrntime() {
    let vrema =new Date();
    return `${vrema.getHours()}:${vrema.getMinutes()}`
}

class Message{
constructor(name, time, text){
this.name = name;
this.time = time;
this.text = text;
}
toString() {
    return this.time + ' ' + this.name + ': ' + this.text;
}

}
class Messenger{
        constructor() {
          this.history = [ ];
      }
      
      showHistory() {
          for (const msg of this.history) {
            console.log(msg.toString());
        }
      }
      
      send(name, txt) {
          this.history.push(new Message( name, retrntime(), txt));
      }
    }
let messenger = new Messenger();
messenger.send('Rashad','Salam ')
messenger.send('Ruslan','Alekuma salam ')
messenger.showHistory()
