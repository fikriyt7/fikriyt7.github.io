document.getElementById('interaktifBtn').addEventListener('click', function() {
    // Menambahkan animasi ketika tombol diklik
    this.style.animation = 'scaleAnimation 0.5s ease-out';
    // Menambahkan kelas 'animated' dari Animate.css untuk efek yang lebih baik
    this.classList.add('animated');

    // Mengatur agar animasi reset setelah selesai
    setTimeout(() => {
        this.style.animation = '';
        this.classList.remove('animated');
        
        // Menampilkan konten interaktif setelah tombol diklik
        document.getElementById('kontenInteraktif').style.display = 'block';
    }, 500);
});

// Optional: Menambahkan animasi ketika gambar dihover
document.getElementById('interaktifImg').addEventListener('mouseover', function() {
    this.style.transition = 'transform 0.5s ease-out';
    this.style.transform = 'scale(1.1)';
});

document.getElementById('interaktifImg').addEventListener('mouseout', function() {
    this.style.transition = 'transform 0.5s ease-out';
    this.style.transform = 'scale(1)';
});
