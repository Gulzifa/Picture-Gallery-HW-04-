const heading = document.querySelector('.body_heading');
const btn = document.querySelector('.body_btn');
const wrap = document.querySelector('.wrap');

function showLoader() {
    document.querySelector(".loader").style.display = "flex";
}

function hideLoader() {
    document.querySelector(".loader").style.display = "none";
}

let data;

btn.addEventListener("click", async () => {
    try {
        showLoader();
        await fetch('https://api.thecatapi.com/v1/images/search?limit=10')
            .then(result => result.json())
            .then(result => {
                data = result;
                loadingImages();
            });
    } catch (error) {
        console.log("Ошибка загрузки изображений:", error);
    } finally {
        hideLoader();
    }
});

function loadingImages() {
    wrap.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        let catImage = `<img src=${data[i].url} alt="Cat Image"></img>`;
        wrap.innerHTML += catImage;
    }
}