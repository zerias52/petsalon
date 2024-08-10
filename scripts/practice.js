// JS vs jQuery

// document.getElementById("results");
// $("#results");

// document.getElementsByTagName("p");
// $("p");

// document.getElementsByClassName("text");
// $(".text");
function register(){
    // let testEntry = document.getElementById("testInput").value;
    // let results = document.getElementById("results");
    // results.innerHTML += `<li> ${testEntry} </li>`

    let testEntry = $("#testInput").val();
    $("#results").append(`<li> ${testEntry} </li>`);
}

function clickMe(){
    $("#results").text("The button was clicked!");
    $("p:first").hide()
    $("p:last").css('background-color','red');
}

function init(){
    //hook events

    // $("#btn1").on("click", clickMe)
    //
    // $("#btn1").on("mouseover", function(){
    //     $(this).addClass("btn")
    // })
    // $("#btn1").on("mouseleave", function(){
    //     $(this).removeClass("btn")
    // })
    $("#btnRegister").on("click", register);

    $("#op1").hide()
    $("#op2").hide()

    $("#op1link").on("click", function(){
        $("#op1").show();
        $("#op2").hide();
    })
    $("#op2link").on("click", function(){
        $("#op2").show();
        $("#op1").hide();
    })


}

window.onload=init;