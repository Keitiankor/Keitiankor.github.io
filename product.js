function before() {
    $.ajax({
        url: "product",
        type: "GET",
        data: {
            limit: "10",
            p: new URL(location.href).searchParams.get("offset") - 1,
        },
    });
}

function next() {
    $.ajax({
        url: "product",
        type: "GET",
        data: {
            limit: "10",
            p: new URL(location.href).searchParams.get("offset") + 1,
        },
    });
}
