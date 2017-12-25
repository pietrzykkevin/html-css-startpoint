$(document).ready(function(){

    function getCatLink(){
        const pictureSize = $(".pictureSize :selected").val();
        const pictureType = $('input[name="group1"]:checked').val();
        return "http://thecatapi.com/api/images/get?format=xml&type=" + pictureType + "&size=" + pictureSize + "&results_per_page=1";

    }

    var link = getCatLink();

    $.ajax({
        type: "get",
        url: link,
        dataType: "xml",
        success: function (data) {
            const realURL = $(data).find("url").text();
            const id = $(data).find("id").text();
            //const srcURL = $(data).find("source_url").text();

           // $(".def").text(id + "!!!").show();
            $(".catImage").attr("src", realURL);
            $(".catImage").attr("data-id", id);
            $(".catImage").attr("data-saved", "0");

        }

    });


    $(".addToFav").on("click", function(){

        const $catImage = $('.catImage')

        if($catImage.attr("data-saved") === "0") {
            $(".catImage").attr("data-saved", "1");
            const newID = $(".catImage").attr("data-id");
            const newURL = $catImage.attr("src");
            const URLView = '<a href="' + newURL + '"  target="_blank">' + newURL + '</a>';
            const newInsight = '<a href="http://thecatapi.com"><img src="' + newURL + '"></a>';
            $(".myTable").append("<tr> <td>" + newID + "</td> <td>" + URLView + "</td> <td> " + newInsight + "</td> </tr>");
        }
    });


    $(".addNewKit").on("click", function(){

        var link = getCatLink();

        $.ajax({
            type: "get",
            url: link,
            dataType: "xml",
            success: function (data) {
                const realURL = $(data).find("url").text();
                const id = $(data).find("id").text();
                //const srcURL = $(data).find("source_url").text();

                //$(".def").text(id + "!!!").show();
                $(".catImage").attr("src", realURL);
                $(".catImage").attr("data-id", id);
                $(".catImage").attr("data-saved", "0");

            }

        });

    });

});
