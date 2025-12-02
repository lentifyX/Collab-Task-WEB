// File: dropdown.js

// Fungsi untuk toggle (buka/tutup) dropdown menu
function toggleDropdown() {
    const dropdown = document.getElementById("profileDropdown");
    dropdown.classList.toggle("dropdown-hidden");
}

// Opsional: Menutup dropdown jika klik di luar area dropdown
window.addEventListener('click', function(e) {
    const dropdown = document.getElementById("profileDropdown");
    const avatarBtn = document.querySelector('.header-avatar');

    // Jika yang diklik BUKAN dropdown DAN BUKAN tombol avatar
    if (!dropdown.contains(e.target) && !avatarBtn.contains(e.target)) {
        // Pastikan dropdown tertutup
        if (!dropdown.classList.contains('dropdown-hidden')) {
            dropdown.classList.add('dropdown-hidden');
        }
    }
});