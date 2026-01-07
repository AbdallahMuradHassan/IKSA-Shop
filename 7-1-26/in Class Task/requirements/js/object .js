console.log("ssss");
var x = 0;
let prodect = [
    { name: "char", dicrption: "thidsafasdfs sdfasd asdf asdf adsf asdf asdf ", price: "5 jd" },
    { name: "door stap", dicrption: "thidsafasdfs sdfasd asdf ssdasdfsvcasdfvg sdfg  ", price: "5 jd" },
    { name: "ceramic table", dicrption: "thidsafasdfs sdfasd asdf asdf adsf asdf asdf ", price: "5 jd" },

];


const html = prodect.map(prodect => {
    return `
        <div class="cards col-lg-4 col-md-6">
            <img src="../requirements/imges/prdects${++x}.jpg"
                 class="bd-placeholder-img rounded-circle"
                 width="140" height="140" />

            <h2>${prodect.name}</h2>
            <p>discrption: ${prodect.dicrption}</p>
            <p>Phone: ${prodect.price}</p>

            <p>
                <a class="btn btn-secondary login-register" href="#">
                    View details &raquo;
                </a>
            </p>
        </div>
    `; x++;
}).join("");
document.getElementById("box").innerHTML = html;
//accounts.forEach(account => {
console.log(`account: name ${account.name}, email ${account.email}, phone ${account.phonenumper}`);

//});