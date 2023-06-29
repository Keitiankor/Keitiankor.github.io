function before() {
    let page = new URL(location.href).searchParams.get("p");
    let beforepage = Number(page) - 1;
    location.href = "product?p=" + beforepage;
}

function next() {
    let page = new URL(location.href).searchParams.get("p");
    let nextpage = Number(page) + 1;
    location.href = "product?p=" + nextpage;
}
