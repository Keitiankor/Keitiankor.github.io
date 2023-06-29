function before() {
    let page = new URL(location.href).searchParams.get("p");
    let beforepage = Number(page) - 1;
    $.ajax({
        url: "product?p=" + beforepage,
        type: "GET",
    });
}

function next() {
    let page = new URL(location.href).searchParams.get("p");
    let nextpage = Number(page) + 1;
    $.ajax({
        url: "product?p=" + nextpage,
        type: "GET",
    });
}
