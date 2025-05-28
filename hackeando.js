function hackeando () {
    document.getElementById("nomeComp").innerText = "João Santana";
    document.getElementById("navNome").innerHTML = "João Santana";
    document.title = "Currículo - João";
    let foto = document.getElementById("foto");
    foto.src = "https://avatars.githubusercontent.com/u/180411063?s=400&u=2b2ab2a2cfa8ac09f11d908ee96666849a7616ee&v=4";
    foto.classList.add("rounded-circle");
    foto.classList.add("mt-5")
}
