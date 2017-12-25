

$(document).ready(() =>{

    // $('#input').validate({
    //     rules: {
    //         Username: {
    //             required: true,
    //             equalTo: "ala"
    //
    //         },
    //
    //         Password: {
    //             required: true,
    //             equalTo: "ala123"
    //         }
    //     },
    //
    //     messages: {
    //         Username: {
    //             required: "username needed",
    //             equalTo: "username: ala"
    //         },
    //         Password: {
    //             required: "password needed",
    //             equalTo: "password: ala123"
    //         }
    //     }
    //
    // });



    const $submit = $(".button");
    $submit.click(function(){

        // = $("#Username").val();
        // if($("#Username").val() !== "ala"){
        //     $("#Username").attr('data-error','The username field is ala');
        // }
        // if( $("#Password").val() !== "ala123"){
        //
        //     $("#Password").attr('data-error','The password field is ala123');
        // }

        if($("#Username").val() === "ala" &&
            $("#Password").val() === "ala123"){
            window.open("CatForm/catForm.html", "_self");
        }
    });



});