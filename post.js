$(function () {
    $("#back").on("click", function () {
        location.href = "bbs";
    });

    $("#edit").on("click", function () {
        location.href = "editpost?id=" + $("#id").text();
    });

    $("#delete").on("click", function () {
        $.ajax({
            url: "deletepost",
            type: "POST",
            data: {
                id: $("#id").text(),
                writer: $("#writer").text(),
            },
            success: function (data) {
                if (data > 0) {
                    alert("삭제되었습니다.");
                    location.href = "bbs";
                }
            },
        });
    });

    $("#comment").on("click", function () {
        $.ajax({
            url: "comment",
            type: "POST",
            data: {
                id: $("#id").text(),
                content: $("#reply").val(),
            },
        });
    });
});
