class Article {
    constructor(id, code, description, quantity) {
        this.id = id;
        this.code = code;
        this.description = description;
        this.quantity = quantity
    }

}
let array = [];

function insertArticle() {
    let ids = array.length + 1;
    let codes = document.getElementById("code").value;
    let descriptions = document.getElementById("description").value;
    let quantitys = document.getElementById("quantity").value;
    let myArticle = new Article(ids, codes, descriptions, quantitys);

    console.log(myArticle);

    array.push(myArticle);

    console.log(array);

    let articoli = document.getElementById("articoli");

    let p = document.createElement("p");

    p.innerText = `codice: ${myArticle.code}, descrizione: ${myArticle.description}, quantity: ${myArticle.quantity}`;

    articoli.appendChild(p);

    //  let qtMax=0;
    //     let c= array.filter(el=>{
    //     if(qtMax<el.quantity){
    //     qtMax=el.quantity
    //     }
    //     if(el.quantity=qtMax){
    //         return el;
    //     }

    // })
    let quant = array.map(el => el.quantity);
    let max = Math.max(...quant)
    let res = array.filter(el => {
        if (el.quantity == max) {
            return el;
            
        }
        
    })[0];

   
    let qtMax=document.getElementById("qtMax");
    let h=document.createElement("h2");
    let p=document.createElement("p");
    h.innerText="Articolo con quantità massima : "
    qtMax.append(h);
    pi.innerText=`codice: ${res.code}, descrizione: ${res.description}, quantity: ${res.quantity}`;
    qtMax.append(pi);
   

    
    




}