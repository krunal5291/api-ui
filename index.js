
const ui = (products) => {

    products.map((ele)=>{
        let id=document.createElement("h1")
        id.innerHTML=ele.id

        let titel=document.createElement("h2")
        titel.innerHTML=ele.title

        let description=document.createElement("p")
        description.innerHTML=ele.description

        let price=document.createElement("h4")
        price.innerHTML=ele.price

        let discountPercentage=document.createElement("h2")
        discountPercentage.innerHTML=ele.discountPercentage

        let rating=document.createElement("h6")
        rating.innerHTML=ele.rating

        let stock=document.createElement("h4")
        stock.innerHTML=ele.stock

        let brand=document.createElement("h3")
        brand.innerHTML=ele.brand

        let category=document.createElement("h5")
        category.innerHTML=ele.category

        let thumbnail=document.createElement("img")
        thumbnail.src=ele.thumbnail

        // ele.images.map((k,i)=>{
        //     let id4=document.createElement("img")
        //     id4.src=k[0]
        //     let id1=document.createElement("img")
        //     id1.src=k[1]
        //     let id2=document.createElement("img")
        //     id2.src=k[2]
        //     let id3=document.createElement("img")
        //     id3.src=k[3]
        //     images.appendChild(id4);

        // })

        // div.appendChild(images);

        
        let div=document.createElement("div")
        div.append(id,titel,description,price,discountPercentage,rating,stock,brand,category,thumbnail)

        document.getElementById("ui").append(div)
    })

}


fetch("https://dummyjson.com/products")
.then((product)=>product.json())
.then((data)=>ui(data.products))
// .then((data)=>console.log(data.products))
