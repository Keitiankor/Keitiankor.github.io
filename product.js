function before() {
    let page = new URL(location.href).searchParams.get("offset");
    let beforepage = Number(page) + 1;
    console.log(beforepage);
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
    let nextpage = Number(page) + 1;
    console.log(nextpage);
    $.ajax({
        url: "product",
        type: "GET",
        data: {
            limit: "10",
            p: nextpage,
        },
    });
}
