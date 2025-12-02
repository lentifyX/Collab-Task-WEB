// Mengambil elemen halaman berdasarkan ID
const landingPage = document.getElementById('landing-page');
const loginPage = document.getElementById('login-page');
const dashboardPage = document.getElementById('dashboard-page');

// Fungsi untuk transisi ke halaman Login
function goToLogin() {
    landingPage.classList.add('hidden');
    loginPage.classList.remove('hidden');
}

// Fungsi untuk transisi ke Dashboard
function goToDashboard() {
    // Di sini bisa ditambahkan validasi input email/password
    // Untuk prototype, kita langsung pindah ke dashboard
    loginPage.classList.add('hidden');
    dashboardPage.classList.remove('hidden');
}

// Fungsi Logout (kembali ke Landing Page)
function logout() {
    dashboardPage.classList.add('hidden');
    landingPage.classList.remove('hidden');
}