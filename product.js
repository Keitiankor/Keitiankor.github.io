function before() {
    let page = new URL(location.href).searchParams.get("offset");
    let beforepage = toString(Number(page) + 1);
    $.ajax({
        url: "product",
        type: "GET",
        data: {
            limit: "10",
            p: beforepage,
        },
    });
}

function next() {
    let page = new URL(location.href).searchParams.get("offset");
    let nextpage = toString(Number(page) + 1);
    $.ajax({
        url: "product",
        type: "GET",
        data: {
            limit: "10",
            p: nextpage,
        },
    });
}
