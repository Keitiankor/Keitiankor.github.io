$(function () {
    $("#post").on("click", function () {
        let content = $("#content").val();
        $.ajax({
            url: "posting",
            type: "POST",
            data: {
                title: $("#title").val(),
                content: content.replace(13, "<br>"),
            },
            success: function () {
                location.href = "bbs";
            },
        });
    });
});
