const sectionWaterfall = document.querySelector(".waterfall");

sectionWaterfall.addEventListener("scroll", (event) => {
    let percent = sectionWaterfall.scrollTop / (sectionWaterfall.scrollHeight - sectionWaterfall.clientHeight) * 100;
    parallax(percent);
    // let percent = sectionWaterfall.scrollTop / ((sectionWaterfall.scrollHeight - (sectionWaterfall.lastElementChild.clientHeight)) - sectionWaterfall.clientHeight) * 75;
    // if (sectionWaterfall.firstElementChild.getBoundingClientRect().bottom >= window.screen.height) {
    //     parallax(percent);
    // }
})


function parallax(percent) {
    var items = sectionWaterfall.querySelectorAll('.container__waterfall_items');

    items[0].style.transform = `translateY(-${percent * 1}px)`;
    items[1].style.transform = `translateY(${percent * 2.5}px)`;
    items[2].style.transform = `translateY(-${percent * 1}px)`;
    items[3].style.transform = `translateY(${percent * 2.5}px)`;
}