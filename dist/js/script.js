$(document).ready(function() {
    console.log("Testing")
})
//Hide navbar
$(document).ready(function(){
    $(".navButton").click(function(){
        $(".navbar").toggleClass("hidden");
        $(".menuItems").toggle();
        $("#navButton").toggleClass("down");
    });
});

//controls of Cube
$(document).ready(function(){
    $(".show").click(function(){
        $(".cube").toggleClass("showHide");
    });
    $(".width").click(function(){
        $(".cube").toggleClass("widthChange")
    });
    $(".height").click(function(){
        $(".cube").toggleClass("heightChange")
    });
    $(".center").click(function(){
        $(".cube").toggleClass("centerChange")
    });
    $(".position").click(function(){
        $(".cube").toggleClass("positionChange")
    });
});

//colors of cubes

$(".pallet").click(function(e){
    (e).preventDefault();

    function pallet() {
        return "rgb("+Math.ceil(Math.random()*255)+","+Math.ceil(Math.random()*255)+","+Math.ceil(Math.random()*255)+")";
    };


    let color1 = pallet();
    let color2 = pallet();
    let color3 = pallet();
    let color4 = pallet();

    $("#color1").css({
        "background-color": color1,
    });
    $("#color2").css({
        "background-color": color2,
    });
    $("#color3").css({
        "background-color": color3,
    });
    $("#color4").css({
        "background-color": color4,
    });

    $("#color1").text(color1);
    $("#color2").text(color2);
    $("#color3").text(color3);
    $("#color4").text(color4);
});
//************************ *//

//forma

$("#submit").click(function(e) {
    e.preventDefault();


let name = $("#name").val();
let lastname = $("#lastname").val();
let birthdate = $("#age").val();
let year = new Date();
let now = year.getFullYear();

if(!name || !lastname || !birthdate) {
    alert("Tušti laukeliai!!!")
}
else if(birthdate.length != 4 || parseInt(birthdate)/parseInt(birthdate) !=1) {
    alert("Gimimo metu formatas yra MMMM")
}
else if(parseInt(birthdate) > now) {
    alert("Blogai ivesti gimimo metai, jus gimsite po "+(parseInt(birthdate)-now)+" metu...")
}
else if(parseInt(birthdate)-now == 0) {
    alert("Jus gimete siais metai")
} else {


    document.getElementById("table").style = "";

    let year = new Date();
    let now = year.getFullYear();
    let age = now - parseInt(birthdate);
    let names = [];
    let lastnames = [];
    let birthdates = [];
    let indexes = [];
    let index = 0;

    names.push(name);
    lastnames.push(lastname);
    birthdates.push(age);
    indexes.push(index);
    indexes = index + 1;

    let tr = "<tr class='duomenys'><td>"+indexes+"</td><td>"+name+"</td><td>"+lastname+"</td><td>"+age+"</td></tr>";

    $("#tableData").append(tr);

    $("#name").val("");
    $("#lastname").val("");
    $("#age").val("");

}
$("#clear").click(function(){
    alert("duomenys bus istrinti!!!")
    tr.splice(0, tr.length);
    $("#tableData").empty();
    

})
});




//************************** */





