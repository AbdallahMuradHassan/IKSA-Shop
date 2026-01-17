console.log("ssss");
var x = 0;
let prodect = [
    { name: "char", dicrption: "thidsafasdfs sdfasd asdf asdf adsf asdf asdf ", price: 5 },
    { name: "char", dicrption: "thidsafasdfs sdfasd asdf ssdasdfsvcasdfvg sdfg  ", price: 10 },
    { name: "table", dicrption: "thidsafasdfs sdfasd asdf asdf adsf asdf asdf ", price: 20 },

];


const html = prodect.map(prodect => {
    return ` <div class="single-card">
             <div class="img-area">
            <img src="../requirements/imges/prodects/${prodect.name}s/${prodect.name}${++x}.jpeg" alt="">
            <div class="overlay">
                <button class="view-details"
                    onclick="window.location.href='#'">View
                    Details
                </button>
            </div>
        </div>
             <div class="info">
            <h3>${prodect.name}</h3>
            <h5>Category Name: ${prodect.name}</h5>
            <p>
                ${prodect.dicrption}
            </p>
            <Br>
            <p class="price">
                Price: ${prodect.price}JOD
            </p>
        </div>
        </div>
    `;
}).join("");
document.getElementById("box").innerHTML = html;


