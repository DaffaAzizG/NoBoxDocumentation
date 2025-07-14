require(["gitbook", "jquery"], function(gitbook, $) {

  gitbook.events.on("page.change", function() {
    
    // ---- LOGIKA SIDEBAR DROPDOWN UNTUK THEME-COMSCORE ----
    
    var $sidebar = $('.book-summary');
    var $chapters = $sidebar.find('ul.summary .chapter');

    $chapters.each(function() {
      var $chapter = $(this);
      var $children = $chapter.find('> ul.articles'); // Daftar sub-bab

      // Jika chapter ini punya anak...
      if ($children.length > 0) {
        // 1. Tambahkan kelas 'has-children' untuk styling
        $chapter.addClass('has-children');

        // 2. Buat dan sisipkan tombol panah (toggle)
        var $toggle = $('<i class="toggle-children fa fa-angle-right"></i>');
        $chapter.find('> a').after($toggle);

        // 3. Sembunyikan anak-anaknya secara default
        $children.hide();
      }
    });

    // 4. Tambahkan event listener untuk klik pada tombol panah
    $sidebar.off('click', '.toggle-children'); // Hapus listener lama
    $sidebar.on('click', '.toggle-children', function(e) {
      e.preventDefault();
      e.stopPropagation();

      var $chapter = $(this).closest('.chapter');
      var $children = $chapter.find('> ul.articles');
      var $icon = $(this);

      // Buka/tutup dengan animasi slide
      $children.slideToggle(200);

      // Ubah kelas untuk styling (ikon dan status terbuka)
      $chapter.toggleClass('open');
      $icon.toggleClass('fa-angle-right fa-angle-down');
    });

    // 5. Secara otomatis buka dropdown untuk halaman yang sedang aktif dan parent-nya
    var $activeItem = $sidebar.find('li.active');
    if ($activeItem.length) {
      $activeItem.parents('.chapter.has-children').each(function() {
        var $parentChapter = $(this);
        $parentChapter.addClass('open');
        $parentChapter.find('> ul.articles').show();
        $parentChapter.find('> .toggle-children').removeClass('fa-angle-right').addClass('fa-angle-down');
      });
    }
  });
});