function before() {
    let page = new URL(location.href).searchParams.get("p");
    let beforepage = Number(page);
    beforepage = beforepage - 1;
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
    let page = new URL(location.href).searchParams.get("p");
    let nextpage = Number(page);
    console.log(page);
    $.ajax({
        url: "product",
        type: "GET",
        data: {
            limit: "10",
            p: nextpage,
        },
    });
}
