$(function () {
    $("#edit").on("click", function () {
        $.ajax({
            url: "posting",
            type: "POST",
            data: {},
            success: function (data) {
                if (data > 0) {
                    alert("수정되었습니다.");
                    location.href = "post?id=";
                }
            },
        });
    });

    $("#cancel").on("click", function () {
        location.href = "post?id=" + $("#id").text();
    });
});
