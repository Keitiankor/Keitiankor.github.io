$(function () {
    $("#back").on("click", function () {
        location.href = "bbs";
    });

    $("#edit").on("click", function () {
        location.href = "editpost";
    });

    $("#delete").on("click", function () {
        $.ajax({
            url: "deletepost",
            type: "POST",
            data: {
                id: $("#id").text(),
                writer: $("#writer").text(),
            },
            success: function () {
                location.href = "bbs";
            },
        });
    });
});
