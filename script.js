// =============================================
// Peta UMKM & Warung Lokal - script.js
// =============================================

// --- Data contoh UMKM ---
// Dalam proyek nyata, data ini bisa diambil dari API atau backend
const dataUMKM = [
  {
    id: 1,
    nama: "Warung Bu Siti",
    pemilik: "Siti Rahayu",
    kategori: "Warung Makan",
    alamat: "Jl. Melati No. 15, RT 03/RW 02",
    jam: "07.00 – 21.00",
    whatsapp: "081234567890",
    deskripsi: "Warung makan rumahan yang menyajikan masakan Jawa seperti nasi pecel, soto ayam, dan aneka lauk pauk. Cocok untuk makan siang maupun malam.",
    produk: "Nasi Pecel, Soto Ayam, Nasi Goreng, Es Teh",
    emoji: "🍽️",
    lat: -6.180,
    lng: 106.830,
    mapsLink: "https://maps.google.com/?q=-6.180,106.830"
  },
  {
    id: 2,
    nama: "Kedai Kopi Pak Haji",
    pemilik: "Haji Mahmud",
    kategori: "Kedai Kopi",
    alamat: "Jl. Sudirman No. 8",
    jam: "06.00 – 22.00",
    whatsapp: "081298765432",
    deskripsi: "Kedai kopi legendaris yang sudah berdiri sejak tahun 1990. Terkenal dengan kopi robusta lokal yang kuat dan harga yang sangat terjangkau.",
    produk: "Kopi Hitam, Kopi Susu, Teh Tarik, Gorengan",
    emoji: "☕",
    lat: -6.182,
    lng: 106.827,
    mapsLink: "https://maps.google.com/?q=-6.182,106.827"
  },
  {
    id: 3,
    nama: "Toko Kelontong Maju Bersama",
    pemilik: "Budi Santoso",
    kategori: "Toko Kelontong",
    alamat: "Jl. Kenanga No. 22",
    jam: "05.30 – 22.00",
    whatsapp: "082113344556",
    deskripsi: "Toko kelontong lengkap yang menyediakan kebutuhan sehari-hari. Mulai dari bahan makanan, alat kebersihan, hingga alat tulis tersedia di sini.",
    produk: "Sembako, Minuman, Snack, ATK, Produk Rumah Tangga",
    emoji: "🛒",
    lat: -6.178,
    lng: 106.833,
    mapsLink: "https://maps.google.com/?q=-6.178,106.833"
  },
  {
    id: 4,
    nama: "Jajanan Mbak Dewi",
    pemilik: "Dewi Lestari",
    kategori: "Jajanan",
    alamat: "Jl. Anggrek No. 5, Depan SDN 04",
    jam: "06.00 – 14.00",
    whatsapp: "089677889900",
    deskripsi: "Aneka jajanan pasar dan cemilan yang dibuat langsung setiap hari. Semua bahan alami tanpa pengawet. Cocok untuk bekal anak sekolah.",
    produk: "Lemper, Klepon, Onde-onde, Martabak Mini, Pukis",
    emoji: "🧁",
    lat: -6.183,
    lng: 106.825,
    mapsLink: "https://maps.google.com/?q=-6.183,106.825"
  },
  {
    id: 5,
    nama: "Bengkel Motor Jaya",
    pemilik: "Jaya Kusuma",
    kategori: "Bengkel",
    alamat: "Jl. Raya Timur No. 101",
    jam: "08.00 – 18.00",
    whatsapp: "081355667788",
    deskripsi: "Bengkel motor terpercaya yang sudah melayani warga sekitar selama lebih dari 15 tahun. Berpengalaman menangani berbagai merek motor.",
    produk: "Servis Rutin, Ganti Oli, Tambal Ban, Sparepart",
    emoji: "🔧",
    lat: -6.176,
    lng: 106.835,
    mapsLink: "https://maps.google.com/?q=-6.176,106.835"
  },
  {
    id: 6,
    nama: "Laundry Bersih & Wangi",
    pemilik: "Rina Marlina",
    kategori: "Laundry",
    alamat: "Jl. Flamboyan Gang III No. 2",
    jam: "07.00 – 20.00",
    whatsapp: "085612223344",
    deskripsi: "Layanan laundry kiloan dan satuan dengan hasil bersih dan wangi. Tersedia layanan express 1 hari jadi. Antar jemput tersedia untuk area terdekat.",
    produk: "Laundry Kiloan, Cuci Setrika, Express 1 Hari, Dry Cleaning",
    emoji: "👕",
    lat: -6.181,
    lng: 106.828,
    mapsLink: "https://maps.google.com/?q=-6.181,106.828"
  },
  {
    id: 7,
    nama: "Kerajinan Tangan Bu Asih",
    pemilik: "Asih Widyawati",
    kategori: "Kerajinan",
    alamat: "Jl. Dahlia No. 9",
    jam: "09.00 – 17.00",
    whatsapp: "087811223344",
    deskripsi: "Kerajinan tangan berbahan daur ulang dan anyaman bambu. Produk bisa dipesan sesuai keinginan untuk souvenir, dekorasi rumah, atau hadiah.",
    produk: "Tas Anyaman, Tempat Tisu, Vas Bunga, Souvenir Custom",
    emoji: "🎨",
    lat: -6.177,
    lng: 106.832,
    mapsLink: "https://maps.google.com/?q=-6.177,106.832"
  },
  {
    id: 8,
    nama: "Warung Sate Pak Darsono",
    pemilik: "Darsono",
    kategori: "Warung Makan",
    alamat: "Jl. Cempaka No. 33",
    jam: "11.00 – 22.00",
    whatsapp: "081299887766",
    deskripsi: "Warung sate kambing dan sate ayam yang sudah terkenal di lingkungan sekitar. Bumbu kacang dan kecap dibuat sendiri dengan resep turun-temurun.",
    produk: "Sate Kambing, Sate Ayam, Tongseng, Gule, Nasi Goreng",
    emoji: "🍢",
    lat: -6.185,
    lng: 106.826,
    mapsLink: "https://maps.google.com/?q=-6.185,106.826"
  },
  {
    id: 9,
    nama: "Toko Sembako Pak Udin",
    pemilik: "Udin Harahap",
    kategori: "Toko Kelontong",
    alamat: "Jl. Mawar RT 05/RW 03",
    jam: "05.00 – 21.30",
    whatsapp: "082144556677",
    deskripsi: "Toko kelontong yang selalu menjaga stok kebutuhan pokok agar selalu tersedia. Harga bersaing dan bisa pesan via WhatsApp untuk warga sekitar.",
    produk: "Beras, Minyak, Gula, Telur, Gas LPG, Minuman",
    emoji: "🏪",
    lat: -6.179,
    lng: 106.831,
    mapsLink: "https://maps.google.com/?q=-6.179,106.831"
  }
];

// --- State pencarian & filter aktif ---
let filterAktif = "semua";
let pencarianAktif = "";
let lokasiPengguna = null; // menyimpan {lat, lng} jika user izinkan

// =============================================
// FUNGSI: Hitung jarak antara dua titik koordinat
// Menggunakan formula Haversine
// =============================================
function hitungJarak(lat1, lng1, lat2, lng2) {
  const R = 6371; // radius bumi dalam km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
    Math.cos((lat2 * Math.PI) / 180) *
    Math.sin(dLng / 2) *
    Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// =============================================
// FUNGSI: Format tampilan jarak
// =============================================
function formatJarak(km) {
  if (km < 1) {
    return (km * 1000).toFixed(0) + " m";
  }
  return km.toFixed(1) + " km";
}

// =============================================
// FUNGSI: Render daftar kartu UMKM
// =============================================
function renderKartu(data) {
  const grid = document.getElementById("umkmGrid");
  const emptyState = document.getElementById("emptyState");
  const hasilInfo = document.getElementById("hasilInfo");

  grid.innerHTML = "";

  if (data.length === 0) {
    emptyState.style.display = "block";
    hasilInfo.textContent = "Tidak ada hasil ditemukan";
    return;
  }

  emptyState.style.display = "none";

  // Update info jumlah hasil
  if (filterAktif === "semua" && pencarianAktif === "") {
    hasilInfo.textContent = `Menampilkan ${data.length} usaha`;
  } else {
    hasilInfo.textContent = `Ditemukan ${data.length} usaha`;
  }

  data.forEach((item) => {
    const jarakText = lokasiPengguna
      ? `· ${formatJarak(hitungJarak(lokasiPengguna.lat, lokasiPengguna.lng, item.lat, item.lng))}`
      : "";

    const kartu = document.createElement("div");
    kartu.className = "umkm-card";
    kartu.innerHTML = `
      <div class="card-foto-placeholder">${item.emoji}</div>
      <div class="card-body">
        <span class="card-kategori">${item.kategori}</span>
        <h3 class="card-nama">${item.nama}</h3>
        <p class="card-info"><span>📍</span> ${item.alamat} ${jarakText}</p>
        <p class="card-info"><span>🕐</span> ${item.jam}</p>
        <p class="card-info"><span>💬</span> ${item.whatsapp}</p>
        <div class="card-footer">
          <button class="btn-card btn-detail" onclick="bukaModal(${item.id})">Detail</button>
          <a class="btn-card btn-maps" href="${item.mapsLink}" target="_blank" rel="noopener">📍 Lihat Lokasi</a>
        </div>
      </div>
    `;
    grid.appendChild(kartu);
  });
}

// =============================================
// FUNGSI: Filter dan pencarian data UMKM
// =============================================
function filterData() {
  let hasil = [...dataUMKM];

  // Filter berdasarkan kategori
  if (filterAktif !== "semua") {
    hasil = hasil.filter((item) => item.kategori === filterAktif);
  }

  // Filter berdasarkan teks pencarian
  if (pencarianAktif !== "") {
    const query = pencarianAktif.toLowerCase();
    hasil = hasil.filter(
      (item) =>
        item.nama.toLowerCase().includes(query) ||
        item.pemilik.toLowerCase().includes(query) ||
        item.kategori.toLowerCase().includes(query) ||
        item.alamat.toLowerCase().includes(query)
    );
  }

  // Urutkan berdasarkan jarak jika lokasi pengguna tersedia
  if (lokasiPengguna) {
    hasil.sort((a, b) => {
      const jarakA = hitungJarak(lokasiPengguna.lat, lokasiPengguna.lng, a.lat, a.lng);
      const jarakB = hitungJarak(lokasiPengguna.lat, lokasiPengguna.lng, b.lat, b.lng);
      return jarakA - jarakB;
    });
  }

  renderKartu(hasil);
}

// =============================================
// FUNGSI: Buka modal detail usaha
// =============================================
function bukaModal(id) {
  const item = dataUMKM.find((u) => u.id === id);
  if (!item) return;

  const jarakText = lokasiPengguna
    ? `<div class="modal-row"><span class="icon">📏</span><span>Jarak: ${formatJarak(hitungJarak(lokasiPengguna.lat, lokasiPengguna.lng, item.lat, item.lng))} dari lokasi Anda</span></div>`
    : "";

  const konten = document.getElementById("modalContent");
  konten.innerHTML = `
    <div class="modal-foto-placeholder">${item.emoji}</div>
    <h2>${item.nama}</h2>
    <span class="modal-badge">${item.kategori}</span>
    <div class="modal-row"><span class="icon">👤</span><span>Pemilik: <strong>${item.pemilik}</strong></span></div>
    <div class="modal-row"><span class="icon">📍</span><span>${item.alamat}</span></div>
    <div class="modal-row"><span class="icon">🕐</span><span>Buka: ${item.jam}</span></div>
    <div class="modal-row"><span class="icon">💬</span><span>WhatsApp: ${item.whatsapp}</span></div>
    ${jarakText}
    <p class="modal-deskripsi">${item.deskripsi}</p>
    <div class="modal-row"><span class="icon">🛍️</span><span><strong>Produk/Layanan:</strong> ${item.produk}</span></div>
    <div class="modal-actions">
      <a class="btn btn-primary" href="https://wa.me/62${item.whatsapp.replace(/^0/, '')}" target="_blank" rel="noopener">💬 WhatsApp</a>
      <a class="btn btn-secondary" href="${item.mapsLink}" target="_blank" rel="noopener">🗺️ Buka di Maps</a>
    </div>
  `;

  document.getElementById("modalOverlay").classList.add("aktif");
  document.body.style.overflow = "hidden";
}

// =============================================
// FUNGSI: Tutup modal
// =============================================
function tutupModal() {
  document.getElementById("modalOverlay").classList.remove("aktif");
  document.body.style.overflow = "";
}

// =============================================
// FUNGSI: Animasi angka statistik
// =============================================
function animasiAngka() {
  const elemen = document.querySelectorAll(".stat-number");

  elemen.forEach((el) => {
    const target = parseInt(el.dataset.target);
    const durasi = 1200;
    const langkah = durasi / target;
    let angkaSekarang = 0;

    const interval = setInterval(() => {
      angkaSekarang++;
      el.textContent = angkaSekarang;
      if (angkaSekarang >= target) {
        clearInterval(interval);
      }
    }, langkah);
  });
}

// Jalankan animasi angka saat elemen terlihat di layar (Intersection Observer)
function setupAnimasiStatistik() {
  const statistikSection = document.querySelector(".statistik");
  if (!statistikSection) return;

  let sudahJalan = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !sudahJalan) {
        sudahJalan = true;
        animasiAngka();
      }
    });
  }, { threshold: 0.4 });

  observer.observe(statistikSection);
}

// =============================================
// FUNGSI: Geolocation — cari lokasi pengguna
// =============================================
function gunakanLokasi() {
  const btn = document.getElementById("btnLokasiku");

  if (!navigator.geolocation) {
    alert("Browser kamu tidak mendukung fitur lokasi.");
    return;
  }

  btn.textContent = "⏳ Mencari...";
  btn.disabled = true;

  navigator.geolocation.getCurrentPosition(
    (posisi) => {
      lokasiPengguna = {
        lat: posisi.coords.latitude,
        lng: posisi.coords.longitude
      };
      btn.textContent = "✅ Lokasi Aktif";
      btn.style.background = "#d0f0e0";
      btn.disabled = false;

      // Simpan ke localStorage supaya tidak perlu izin ulang di sesi ini
      localStorage.setItem("lokasiLat", lokasiPengguna.lat);
      localStorage.setItem("lokasiLng", lokasiPengguna.lng);

      // Re-render dengan urutan berdasarkan jarak
      filterData();
    },
    (error) => {
      btn.textContent = "📍 Lokasi Saya";
      btn.disabled = false;

      if (error.code === error.PERMISSION_DENIED) {
        alert("Akses lokasi ditolak. Izinkan akses lokasi di pengaturan browser kamu.");
      } else {
        alert("Tidak bisa mendapatkan lokasi kamu saat ini.");
      }
    }
  );
}

// =============================================
// FUNGSI: Validasi form tambah UMKM
// =============================================
function validasiForm(id, errId, pesan) {
  const el = document.getElementById(id);
  const err = document.getElementById(errId);
  if (!el.value.trim()) {
    el.classList.add("error");
    err.textContent = pesan;
    return false;
  }
  el.classList.remove("error");
  err.textContent = "";
  return true;
}

function handleFormTambah(e) {
  e.preventDefault();

  // Cek semua field wajib
  const valid = [
    validasiForm("namaUsaha", "errNamaUsaha", "Nama usaha tidak boleh kosong."),
    validasiForm("namaPemilik", "errNamaPemilik", "Nama pemilik tidak boleh kosong."),
    validasiForm("kategoriUsaha", "errKategori", "Pilih salah satu kategori."),
    validasiForm("jamOp", "errJamOp", "Jam operasional tidak boleh kosong."),
    validasiForm("alamat", "errAlamat", "Alamat tidak boleh kosong."),
    validasiForm("whatsapp", "errWhatsapp", "Nomor WhatsApp tidak boleh kosong."),
    validasiForm("deskripsi", "errDeskripsi", "Deskripsi usaha tidak boleh kosong.")
  ];

  // Jika semua valid, tampilkan pesan sukses
  if (valid.every(Boolean)) {
    document.getElementById("formTambah").style.display = "none";
    document.getElementById("suksesMsg").style.display = "block";

    // Simpan ke localStorage sebagai simulasi pengiriman data
    const dataBaru = {
      namaUsaha: document.getElementById("namaUsaha").value,
      namaPemilik: document.getElementById("namaPemilik").value,
      kategori: document.getElementById("kategoriUsaha").value,
      jam: document.getElementById("jamOp").value,
      alamat: document.getElementById("alamat").value,
      whatsapp: document.getElementById("whatsapp").value,
      deskripsi: document.getElementById("deskripsi").value,
      tanggalDaftar: new Date().toLocaleDateString("id-ID")
    };

    // Ambil data yang sudah ada, tambahkan data baru
    const riwayat = JSON.parse(localStorage.getItem("pendaftaranUMKM") || "[]");
    riwayat.push(dataBaru);
    localStorage.setItem("pendaftaranUMKM", JSON.stringify(riwayat));
  }
}

// =============================================
// FUNGSI: Validasi form kontak
// =============================================
function handleFormKontak(e) {
  e.preventDefault();

  const valid = [
    validasiForm("kontakNama", "errKontakNama", "Nama tidak boleh kosong."),
    validasiForm("kontakEmail", "errKontakEmail", "Email tidak boleh kosong."),
    validasiForm("kontakPesan", "errKontakPesan", "Pesan tidak boleh kosong.")
  ];

  // Cek format email sederhana
  const emailEl = document.getElementById("kontakEmail");
  const emailErr = document.getElementById("errKontakEmail");
  if (emailEl.value.trim() && !emailEl.value.includes("@")) {
    emailEl.classList.add("error");
    emailErr.textContent = "Format email tidak valid.";
    valid[1] = false;
  }

  if (valid.every(Boolean)) {
    document.getElementById("formKontak").style.display = "none";
    document.getElementById("suksesKontak").style.display = "block";
  }
}

// =============================================
// FUNGSI: Setup navigasi mobile (hamburger)
// =============================================
function setupNavMobile() {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("buka");
  });

  // Tutup menu saat link diklik
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("buka");
    });
  });
}

// =============================================
// FUNGSI: Highlight nav link aktif saat scroll
// =============================================
function setupScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let posisiSekarang = window.scrollY + 80;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (posisiSekarang >= top && posisiSekarang < top + height) {
        navLinks.forEach((link) => link.classList.remove("active"));
        const linkAktif = document.querySelector(`.nav-link[href="#${section.id}"]`);
        if (linkAktif) linkAktif.classList.add("active");
      }
    });
  });
}

// =============================================
// INIT — Jalankan semua fungsi saat halaman siap
// =============================================
document.addEventListener("DOMContentLoaded", () => {

  // Render semua kartu UMKM pertama kali
  filterData();

  // Setup animasi statistik
  setupAnimasiStatistik();

  // Setup navigasi mobile
  setupNavMobile();

  // Setup scroll spy
  setupScrollSpy();

  // Cek apakah ada lokasi tersimpan di localStorage
  const simpanLat = localStorage.getItem("lokasiLat");
  const simpanLng = localStorage.getItem("lokasiLng");
  if (simpanLat && simpanLng) {
    lokasiPengguna = { lat: parseFloat(simpanLat), lng: parseFloat(simpanLng) };
    const btn = document.getElementById("btnLokasiku");
    btn.textContent = "✅ Lokasi Aktif";
    btn.style.background = "#d0f0e0";
    filterData();
  }

  // Event: pencarian real-time
  document.getElementById("searchInput").addEventListener("input", (e) => {
    pencarianAktif = e.target.value.trim();
    filterData();
  });

  // Event: filter kategori
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      filterAktif = btn.dataset.kategori;
      filterData();
    });
  });

  // Event: tombol lokasi saya
  document.getElementById("btnLokasiku").addEventListener("click", gunakanLokasi);

  // Event: tutup modal
  document.getElementById("modalClose").addEventListener("click", tutupModal);
  document.getElementById("modalOverlay").addEventListener("click", (e) => {
    if (e.target === document.getElementById("modalOverlay")) tutupModal();
  });

  // Event: tekan Escape untuk tutup modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") tutupModal();
  });

  // Event: form tambah UMKM
  document.getElementById("formTambah").addEventListener("submit", handleFormTambah);

  // Event: form kontak
  document.getElementById("formKontak").addEventListener("submit", handleFormKontak);

  // Bersihkan error saat user mulai mengetik lagi
  document.querySelectorAll(".form-group input, .form-group select, .form-group textarea").forEach((el) => {
    el.addEventListener("input", () => {
      el.classList.remove("error");
    });
  });
});

