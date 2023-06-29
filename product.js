function before() {
    $.ajax({
        url: product,
        type: "GET",
        data: {
            limit: "10",
            p: URLSearchParams.get("offset") - 1,
        },
    });
}

function next() {
    $.ajax({
        url: product,
        type: "GET",
        data: {
            limit: "10",
            p: URLSearchParams.get("offset") - 1,
        },
    });
}
