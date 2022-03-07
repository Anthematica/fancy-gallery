const imagesContainerEL = document.querySelector(".images-container");




//Function which modify the width and height
function changeUrlImageSize(url, width, height) {
    const arr = url.split("/"); //El split separa con un espacio segun el patron que se le de.
    // console.log(arr);

    arr.splice(
        -2,
        2,
        width * window.devicePixelRatio,
      height * window.devicePixelRatio
    );

    return arr.join("/"); //El join une una cadena que contenga espacio con lo que se especifique ¿
}


//Funcion que obtiene la funcion de modificar el tamaño de la imagen y le envia los argumentos que especifiquemos
const  getImages = (url) => {
    return changeUrlImageSize(url, 170, 300);
}

//Create Image 
const createImage = (url) => {
    const image = getImages(url);

    const imageEl = document.createElement("img");
    imageEl.classList.add("image-item");
    imageEl.src= image;
    return imageEl;
}


fetch("https://picsum.photos/v2/list?limit=20")
.then((resp) => {
    return resp.json();
})
.then((images) => {
    
    images.forEach(function (img) {
        const imageEl = createImage(img.download_url);
        console.log(imageEl);
        imagesContainerEL.appendChild(imageEl);
    });
})
