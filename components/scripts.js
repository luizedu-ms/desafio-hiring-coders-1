const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

const getStyle = (element, style) => 
    window.getComputedStyle(element).getPropertyValue(style)
const coresiniciais = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorText: getStyle(html, "--color-text"),
}
const modeluz = {
    bg: "#FFFFFF",
    bgPanel: "#7FE3A7",
    colorText: "#000000"
}
const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()
const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}
checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(modeluz) : changeColors(coresiniciais)
});


