const scrollAmount = 300; // Ubah ini sesuai keinginan Anda

const gallery = document.getElementById('galleryContainer');
const backButton = document.getElementById('kembali');
const nextButton = document.getElementById('lanjut');

backButton.addEventListener('click', () => {
    gallery.style.scrollBehavior = "smooth"
    gallery.scrollLeft -= scrollAmount;
});

nextButton.addEventListener('click', () => {
    gallery.style.scrollBehavior = "smooth"
    gallery.scrollLeft += scrollAmount;
});