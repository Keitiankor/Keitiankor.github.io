$(function () {
    $("#back").on("click", function () {
        location.href = "bbs";
    });

    $("#edit").on("click", function () {
        location.href = "editpost?id='#id'";
    });

    $("#delete").on("click", function () {
        $.ajax({
            url: "deletepost",
            type: "POST",
            data: {
                id: sessionStorage.getItem("id"),
            },
            success: function () {
                location.href = "bbs";
            },
        });
    });
});
