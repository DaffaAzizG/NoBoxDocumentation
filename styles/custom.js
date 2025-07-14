// Tunggu sampai semua HTML dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Cari semua item menu yang punya submenu
    var submenuItems = document.querySelectorAll('.book-summary .summary .has-submenu > a');

    // Tambahkan event listener untuk setiap item
    submenuItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            // Hentikan link agar tidak pindah halaman (jika linknya '#')
            event.preventDefault();

            // Cari parent <li> terdekat
            var parentLi = this.parentElement;
            
            // Toggle class 'open' pada parent <li>
            if (parentLi) {
                parentLi.classList.toggle('open');
            }
        });
    });
});