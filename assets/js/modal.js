document.addEventListener("DOMContentLoaded", function() {
    var modal = document.createElement("div");
    modal.id = "imageModal";
    modal.className = "modal";
    modal.innerHTML = `
        <span class="close" onclick="closeModal()">&times;</span>
        <img class="modal-content" id="modalImg">
    `;
    document.body.appendChild(modal);
});

function openModal(imageSrc) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "flex";
    modalImg.src = imageSrc;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Attach event listeners to images
document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".teaser.img-fluid");
    images.forEach(function(img) {
        img.style.cursor = "pointer"; // Add cursor effect
        img.onclick = function() {
            openModal(this.src);
        };
    });
});
