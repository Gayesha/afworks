/**
 * Created by it15107206 on 2/18/2017.
 */
function sayhello(callback) {
        var g="Hello world";
        callback(g);

}
var func=function (greetings) {
    console.log(greetings);

}
sayhello(func);



