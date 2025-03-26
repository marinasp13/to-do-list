const select = document.querySelector("#select");

select.addEventListener("change", function(){
    const temaEscolhido = select.value;

    if(temaEscolhido === "Light mode:theme"){
        lightMode();
    }
    if(temaEscolhido === "Cozy:theme"){
        cozy();
    }
    if(temaEscolhido === "Dark mode:theme"){
        darkMode();
    }
    if(temaEscolhido === "Pink:theme"){
        pink();
    }
});

export function cozy(){
    const cor1Cozy ="#f0d9c2";
    const cor2Cozy ="#cca36b";
    const cor3Cozy ="#497576";
    const cor4Cozy ="#bf845a";
    const cor5Cozy ="#132e39";
    const cor6Cozy ="#85422d";

    document.documentElement.style.setProperty("--cor1", cor1Cozy);
    document.documentElement.style.setProperty("--cor2", cor2Cozy);
    document.documentElement.style.setProperty("--cor3", cor3Cozy);
    document.documentElement.style.setProperty("--cor4", cor4Cozy);
    document.documentElement.style.setProperty("--cor5", cor5Cozy);
    document.documentElement.style.setProperty("--cor6", cor6Cozy);
}

export function lightMode(){
    const cor1LighMode ="rgb(29, 13, 77)";
    const cor2LighMode ="rgb(255, 255, 255)";
    const cor3LighMode ="rgb(255, 255, 255)";
    const cor4LighMode ="rgb(255, 255, 255)";
    const cor5LighMode ="rgb(26, 204, 10)";
    const cor6LighMode ="rgb(137, 137, 201)";
    

    document.documentElement.style.setProperty("--cor1", cor1LighMode);
    document.documentElement.style.setProperty("--cor2", cor2LighMode);
    document.documentElement.style.setProperty("--cor3", cor3LighMode);
    document.documentElement.style.setProperty("--cor4", cor4LighMode);
    document.documentElement.style.setProperty("--cor5", cor5LighMode);
    document.documentElement.style.setProperty("--cor6", cor6LighMode);
}

export function darkMode(){
    const cor1DarkMode ="rgb(255, 255, 255)";
    const cor2Darkode = "rgb(97, 94, 94)";
    const cor3DarkMode ="rgb(97, 94, 94)";
    const cor4DarkMode ="rgb(97, 94, 94)";
    const cor5DarkMode ="rgb(255, 255, 255)";
    const cor6DarkMode ="rgb(44, 43, 43)";

    document.documentElement.style.setProperty("--cor1", cor1DarkMode);
    document.documentElement.style.setProperty("--cor2", cor2Darkode);
    document.documentElement.style.setProperty("--cor3", cor3DarkMode);
    document.documentElement.style.setProperty("--cor4", cor4DarkMode);
    document.documentElement.style.setProperty("--cor5", cor5DarkMode);
    document.documentElement.style.setProperty("--cor6", cor6DarkMode);
}

export function pink(){
    const cor1DarkMode ="rgb(255, 255, 255)";
    const cor2Darkode = "rgb(245, 172, 212)";
    const cor3DarkMode ="rgb(245, 172, 212)";
    const cor4DarkMode ="rgb(245, 172, 212)";
    const cor5DarkMode ="rgb(255, 255, 255)";
    const cor6DarkMode ="rgb(156, 0, 109)";

    document.documentElement.style.setProperty("--cor1", cor1DarkMode);
    document.documentElement.style.setProperty("--cor2", cor2Darkode);
    document.documentElement.style.setProperty("--cor3", cor3DarkMode);
    document.documentElement.style.setProperty("--cor4", cor4DarkMode);
    document.documentElement.style.setProperty("--cor5", cor5DarkMode);
    document.documentElement.style.setProperty("--cor6", cor6DarkMode);
}

