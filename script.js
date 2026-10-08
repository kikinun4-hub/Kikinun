console.log("JavaScript berhasil terhubung!");

const form = document.getElementById("formkontak");

form.addEventListener("submit", function (event) {

    // Mencegah form berpindah ke halaman lain
    event.preventDefault();

    // ===== NOMOR WHATSAPP TUJUAN =====
    const nomorWhatsApp = "6281339814916";

    // ===== MENGAMBIL DATA DARI FORM =====
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const telpon = document.getElementById("telpon").value;
    const minat = document.getElementById("minat").value;
    const pesan = document.getElementById("pesan").value;

    // ===== MEMBUAT ISI PESAN WHATSAPP =====
    const isipesan = `Halo, saya menghubungi melalui website CV.

Nama Lengkap : ${nama}
Email        : ${email}
No. Telpon   : ${telpon}
Bidang Minat : ${minat}
Pesan        : ${pesan}`;

    // ===== MENGUBAH PESAN AGAR BISA DIBACA URL =====
    const pesanEncoded = encodeURIComponent(isipesan);

    // ===== MEMBUAT LINK WHATSAPP =====
    const urlWhatsApp =
        `https://wa.me/${nomorWhatsApp}?text=${pesanEncoded}`;

    // ===== MEMBUKA WHATSAPP DI TAB BARU =====
    window.open(urlWhatsApp, "_blank");

});