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
                if (data == 201) {
                    alert("회원가입 성공.");
                    location.href = "member";
                }
                if (data == 409) {
                    alert("중복된 아이디입니다.");
                }
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
