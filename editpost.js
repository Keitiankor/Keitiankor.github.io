$(function () {
    $("#edit").on("click", function () {
        $.ajax({
            url: "editpost",
            type: "POST",
            data: {
                id: $("#id").text(),
                title: $("#title").val(),
                content: $("#content").val(),
                writer: $("#writer").text(),
            },
            success: function (data) {
                if (data > 0) {
                    alert("수정되었습니다.");
                    location.href = "post?id=" + $("#id").text();
                }
            },
        });
    });

    $("#cancel").on("click", function () {
        location.href = "post?id=" + $("#id").text();
    });
});
