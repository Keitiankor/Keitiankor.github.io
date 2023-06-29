$(function () {
    $("#edit").on("click", function () {
        let content = $("#content").var();

        $.ajax({
            url: "editpost",
            type: "POST",
            data: {
                id: $("#id").text(),
                title: $("#title").val(),
                content: content.replace(13, "<br>"),
            },
            success: function () {
                location.href = "post?id=" + $("#id").text();
            },
        });
    });

    $("#cancel").on("click", function () {
        location.href = "post?id=" + $("#id").text();
    });
});
