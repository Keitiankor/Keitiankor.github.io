$(function () {
    $("#basket").on("click", function () {
        $.ajax({
            url: "basket",
            type: "POST",
            data: {
                id: $("#id").text(),
            },
            success: function () {
                let item = sessionStorage.getItem("basket");
                alert(item);
            },
        });
    });
});
