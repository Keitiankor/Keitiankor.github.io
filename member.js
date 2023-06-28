$(function () {
    $("#login").on("click", function () {
        $.ajax({
            url: "login",
            type: "POST",
            data: {
                id: $("#id").val(),
                pw: $("#pw").val(),
            },
            success: function (data) {
                console.log(data);
                location.href = "login";
            },
        });
    });

    $("#logout").on("click", function () {
        $.ajax({
            url: "logout",
            type: "POST",
            success: function (data) {
                console.log(data);
                location.href = "login";
            },
        });
    });
});
