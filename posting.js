$(function () {
    $("#post").on("click", function () {
        $.ajax({
            url: "posting",
            type: "POST",
            data: {
                title: $("#title").val(),
                content: $("#content").val(),
            },
            success: function () {
                location.href = "bbs";
            },
        });
    });
});
