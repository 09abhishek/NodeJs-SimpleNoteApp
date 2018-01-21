 var p = {
   name: "Abhi",
   sayHi: () => {
     console.log(`Hi ${this.name}`);
   }.bind()
 };

 p.sayHi();
