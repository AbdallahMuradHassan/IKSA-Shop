console.log("ssss");
var x = 0;
let prodect = [
    { name: "char", dicrption: "thidsafasdfs sdfasd asdf asdf adsf asdf asdf ", price: 5 },
    { name: "door stap", dicrption: "thidsafasdfs sdfasd asdf ssdasdfsvcasdfvg sdfg  ", price: 10 },
    { name: "ceramic table", dicrption: "thidsafasdfs sdfasd asdf asdf adsf asdf asdf ", price: 20 },

];


const html = prodect.filter(price => price.price < 10).map(filter => {
    return `
        <div class="cards col-lg-4 col-md-6">
            <img src="../requirements/imges/prdects${++x}.jpeg"
                 class="bd-placeholder-img rounded-circle"
                 width="140" height="140" />

            <h2>${filter.name}</h2>
            <p>discrption: ${filter.dicrption}</p>
            <p>Phone: ${filter.price}</p>

            <p>
                <a class="btn btn-secondary login-register" href="#">
                    View details &raquo;
                </a>
            </p>
        </div>
    `;
}).join("");
document.getElementById("box").innerHTML = html;
//accounts.forEach(account => {
//console.log(`account: name ${account.name}, email ${account.email}, phone ${account.phonenumper}`);

//});