$(function () {
    $("#basket").on("click", function () {
        $.ajax({
            url: "basket",
            type: "POST",
            data: {
                id: $("#id").text(),
            },
            success: function () {
                location.reload();
            },
        });
    });
});
