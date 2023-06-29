function before() {
    let page = new URL(location.href).searchParams.get("p");
    let beforepage = Number(page) - 1;
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
    let page = new URL(location.href).searchParams.get("p");
    let nextpage = Number(page) + 1;
    $.ajax({
        url: "product",
        type: "GET",
        data: {
            limit: "10",
            p: nextpage,
        },
    });
}
