function before() {
    $.ajax({
        url: product,
        type: "GET",
        data: {
            limits: "10",
            offsets: URLSearchParams.get("offset"),
        },
    });
}
