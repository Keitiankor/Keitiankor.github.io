$(function () {
    $("#edit").on("click", function () {
        let content = $("#content").var();

        $.ajax({
            url: "editpost",
            type: "POST",
            data: {
                id: $("#id").text(),
                title: $("#title").val(),
                content: content.replace(/(?:\r\n|\r|\n)/g, "<br>"),
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
