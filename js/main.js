//windows.scrollY - właściwość o którą kcrollowaliśmy nasza stronę
//document..documentElement.offsetHeight - wysokość naszej całej strony
//window.innerHeight - wysokość okna przeglądarki
//alert('działa')

const bar = document.querySelector(".status");
const statusBar = () => {
   // alert('działa')
    currentScroll = Math.round(window.scrollY / (document.documentElement.offsetHeight - window.innerHeight) * 100);
    bar.style.width = currentScroll + "%";
}


window.addEventListener("scroll", statusBar);