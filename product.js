let page = new URL(location.href).searchParams.get("offset");
let nextpage = toString(Number(page) + 1);
let beforepage = toString(Number(page) + 1);
function before() {
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
    $.ajax({
        url: "product",
        type: "GET",
        data: {
            limit: "10",
            p: nextpage,
        },
    });
}
