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

    $("#register").on("click", function () {
        $.ajax({
            url: "register",
            type: "POST",
            data: {
                id: $("#idr").val(),
                pw: $("#pwr").val(),
                name: $("#name").val(),
                tel: $("#tel").val(),
            },
            success: function (data) {
                console.log(data);
            },
            error: function (status, error) {
                console.log(status);
                console.log(error);
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
