/**
 * Created by it15107206 on 2/18/2017.
 */


    var text={
        name:"tom",
        age:18,
        printName:function(){
            console.log(this.name);
        }
};
    text.printName();


    window.vehicleName='VAN';
    
function printVehicleName() {

    console.log(this.vehicleName);
}
 var Vehicle={
    vehicleName:'van',
     getVehicleName:printVehicleName


 }

printVehicleName();
Vehicle.getVehicleName();

var add=function(tax){
    this.tax=0;
    return function (amount) {
        console.log( tax+amount) ;}

}
var ob=add(10);
ob(1000);
