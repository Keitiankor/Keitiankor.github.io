$(function () {
    $("#back").on("click", function () {
        location.href = "bbs";
    });

    $("#edit").on("click", function () {
        location.href = "editpost?id='#id'";
    });

    $("#delete").on("click", function () {
        $.ajax({
            url: "deletepost?id='#id'",
            type: "POST",
            success: function () {
                location.href = "bbs";
            },
        });
    });
});
