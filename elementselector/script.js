// Change the text of the heading using getElementById
const heading = document.getElementById("main-heading");
heading.textContent = "DOM Manipulation Practice";

// Change the color of paragraphs with the class "text-content" using getElementsByClassName
const textContentParagraphs = document.getElementsByClassName("text-content");
for (let paragraph of textContentParagraphs) {
    paragraph.style.color = "blue";
}

// Change the source of the image with the id "main-image" using getElementById
const mainImage = document.getElementById("main-image");
mainImage.src = "https://via.placeholder.com/200";

// Change the background color of the div with the class "container" using querySelector
const containerDiv = document.querySelector(".container");
containerDiv.style.backgroundColor = "#f0f8ff";

// Change the text of all paragraphs inside the container div using querySelectorAll
const containerParagraphs = containerDiv.querySelectorAll("p");
containerParagraphs.forEach((paragraph, index) => {
    paragraph.textContent = `Updated paragraph ${index + 1} inside the container.`;
});
