function changePic1() {
    //create a new object with the element id
    var pic1 = document.getElementById("img1");
    pic1.src = "https://libertywalk-eu.com/cdn/shop/articles/LB-WORKS-GT-NISSAN-35GT-R-Final-Edition00024_f729e1bd-c08b-40cd-9fce-553c84698dd9.jpg?v=1767954778";

    changeTitle("title1");
    changeContent("content1");
}

function changeTitle(elementID) {
    var title = document.getElementById(elementID);
    title.textContent = "Nissan GT-R (Modified)";
}

function changeContent(elementID) {
    var Articlecontent = document.getElementById(elementID);
    Articlecontent.innerHTML = "<p>The Nissan GT-R (Gran Turismo–Racing; model code: R35; Japanese: 日産・GT-R; Nissan GT-R) is a sports car, built by Japanese marque Nissan from 2007 to 2025. It has a 2+2 seating layout and is also considered a grand tourer. The engine is front-mid mounted and drives all four wheels. It succeeded the Nissan Skyline GT-R, a high-performance variant of the Nissan Skyline. Although this model was the sixth-generation to bear the GT-R name, it was no longer part of the Skyline line-up. The car was built on the PM platform, derived from the FM platform used in the Skyline and Nissan Z models. Production was conducted in a shared production line at Nissan's Tochigi plant in Japan.</p>";
}

function changePic2() {
    //create a new object with the element id
    var pic2 = document.getElementById("img2");
    pic2.src = "https://i.redd.it/tepdnilqhqqh1.jpg";

    changeTitle("title2");
    changeContent("content2");
}

function changeTitle(elementID) {
    var title = document.getElementById(elementID);
    title.textContent = "P-51 Mustang (WW2)";
}

function changeContent(elementID) {
    var Articlecontent = document.getElementById(elementID);
    Articlecontent.innerHTML = "<p>The North American Aviation P-51 Mustang is an American long-range, single-seat fighter and fighter-bomber used during World War II and the Korean War, among other conflicts. The Mustang was designed in 1940 by a team headed by James H. Kindelberger of North American Aviation (NAA) in response to a request from the British Purchasing Commission. The commission approached NAA to build Curtiss P-40 fighters under license for the Royal Air Force (RAF). Rather than build an old design from another company, NAA proposed the design and production of a more modern fighter. The prototype NA-73X airframe was completed on 9 September 1940, 102 days after contract signing, achieving its first flight on 26 October.</p>";
}

function changePic3() {
    //create a new object with the element id
    var pic3 = document.getElementById("img3");
    pic3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZh3LtvIiC4vLh6xOD75MjQZbzU6uk1vn9LT-CsmaP3w&s=10";

    changeTitle("title3");

}

function changeTitle(elementID) {
    var title = document.getElementById(elementID);
    title.textContent = "Lexus IS 250 (Modified)";
}