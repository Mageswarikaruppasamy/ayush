function showPlantInfo(name, description, image) {
    document.getElementById("plantName").textContent = name;
    document.getElementById("plantDescription").textContent = description;
    document.getElementById("plantImage").src = "/static/images/" + image;
    document.getElementById("plantModal").style.display = "block";
}

function closeModal() {
    document.getElementById("plantModal").style.display = "none";
}

// Close modal if user clicks outside the box
window.onclick = function(event) {
    let modal = document.getElementById("plantModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
