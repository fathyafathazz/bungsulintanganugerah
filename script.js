/* ===== PENGATURAN: ubah di sini saja ===== */
      var NOMOR = "6281818787908";
      var PESAN = {
        makloon:
          "Halo BLA, saya ingin konsultasi makloon.\nJenis produk: \nPerkiraan jumlah: \nCara kerja yang diinginkan (full service / potong dan jahit / jahit saja): ",
        rg: "Halo admin Ruang Garis, saya mau tanya produk.\nNama produk: \nUkuran / usia anak: ",
        reseller:
          "Halo admin Ruang Garis, saya tertarik jadi reseller / beli grosir.\nProduk yang dicari: \nPerkiraan jumlah: ",
      };
      var PLATFORM = [
        /* urutan tombol beli; label boleh diganti */ ["shopee", "Shopee"],
        ["tiktok1", "TikTok 1"],
        ["tiktok2", "TikTok 2"],
        ["tokopedia1", "Tokopedia 1"],
        ["tokopedia2", "Tokopedia 2"],
      ];
      var TOKO = {
        /* link toko, dipakai kalau link produk kosong */
        shopee: "https://shopee.co.id/ruanggaris",
        tiktok1: "https://www.tiktok.com/@rg_ruanggaris",
        tiktok2: "https://www.tiktok.com/@rg_ruanggaris3",
        tokopedia1: "https://www.tokopedia.com/ruang-garis-2",
        tokopedia2: "https://www.tokopedia.com/ruang-garis-3",
      };

      /* Size chart contoh. Ganti XX dengan ukuran asli. Satu produk bisa punya size chart sendiri. */
      var H_SET = ["Size", "LD", "PB", "PC", "Est. Usia"];
      var H_ATAS = ["Size", "LD", "PB", "Est. Usia"];
      var H_SWEATER = ["Size", "LD", "PB"];
      var H_JOGER = ["Size", "Lingk. pinggang", "PC"];
      /* Satuan cm. Tanda CEK = angka perlu dicocokkan lagi dengan gambar size chart asli. */
      var C = {
        salur: {
          head: H_SET,
          rows: [
            ["6", 72, 46, 65, "5-6 th"],
            ["8", 84, 51, 69, "7-8 th"],
            ["10", 87, 52, 70, "9-10 th"],
            ["12", 90, 54, 72, "11-12 th"],
          ],
        },
        kiyomi: {
          head: H_ATAS,
          rows: [
            ["6", 68, 45, "5-6 th"],
            ["8", 80, 50, "7-8 th"],
            ["10", 84, 55, "9-10 th"],
            ["12", 88, 58, "11-12 th"],
          ],
        },
        aeris: {
          head: H_SET,
          rows: [
            ["2", 58, 39, 45, "2-3 th"],
            ["4", 64, 43, 48, "3-4 th"],
            ["6", 72, 47, 54, "5-6 th"],
            ["8", 72, 51, 78, "7-8 th"],
          ],
        } /* CEK size 8 */,
        lorenza: {
          head: H_SET,
          rows: [
            ["6", 74, 38, 64, "5-6 th"],
            ["8", 76, 41, 66, "7-8 th"],
            ["10", 78, 43, 68, "9-10 th"],
            ["12", 80, 47, 70, "11-12 th"],
          ],
        },
        malia: {
          head: H_SET,
          rows: [
            ["4", 58, 26, 52, "3-4 th"],
            ["6", 62, 30, 58, "4-6 th"],
            ["8", 66, 34, 70, "7-8 th"],
            ["10", 70, 35, 73, "9-10 th"],
          ],
        },
        mia: {
          head: H_SET,
          rows: [
            ["2", 68, 39, 23, "2-3 th"],
            ["4", 70, 40, 24, "3-4 th"],
            ["6", 74, 42, 25, "4-6 th"],
            ["8", 78, 44, 26, "7-8 th"],
          ],
        },
        nami: {
          head: H_SET,
          rows: [
            ["2", 32, 40, 30, "2-3 th"],
            ["4", 34, 44, 33, "3-4 th"],
            ["6", 36, 48, 36, "5-6 th"],
          ],
        } /* CEK: lebar dada atau lingkar? */,
        yukenzy: {
          head: H_SET,
          rows: [
            ["6", 70, 41, 59, "5-6 th"],
            ["8", 80, 51, 71, "7-8 th"],
            ["10", 86, 53, 75, "9-10 th"],
          ],
        },
        yumi: {
          head: H_SET,
          rows: [
            ["M", 35, 36, 55, "5-6 th"],
            ["L", 38, 40, 60, "7-8 th"],
            ["XL", 40, 42, 65, "9-10 th"],
          ],
        } /* CEK: lebar dada atau lingkar? */,
        kana: {
          head: H_SET,
          rows: [
            ["6", 66, 30, 57, "5-6 th"],
            ["8", 72, 35, 71, "7-8 th"],
            ["10", 74, 36, 74, "9-10 th"],
          ],
        },
        sweater: {
          head: H_SWEATER,
          rows: [
            ["4", 80, 48],
            ["6", 85, 50],
            ["8", 91, 54],
            ["10", 94, 58],
          ],
        },
        joger: {
          head: H_JOGER,
          rows: [
            ["4", 46, 59],
            ["6", 50, 63],
            ["8", 54, 67],
            ["10", 59, 73],
          ],
        },
      };

      /* ===== DAFTAR PRODUK: tambah/hapus blok {…} ===== */
      var PRODUK = [
        {
          nama: "Nami Scuba Set",
          bahan:
            "Atasan japanline knit dengan bordir bunga asli, bukan sablon. Celana scuba premium 280gr, tebal dan tidak menerawang.",
          warna: ["Dusty pink", "Cream", "Sage green", "Hitam"],
          chart: C.nami,
          foto: "",
          link: {},
        },
        {
          nama: "Lorenza One Set",
          bahan:
            "Setelan anak perempuan Korean style. Atasan elora crinkle lembut dan adem, dasar putih motif bunga. Celana cutbray high waist bahan japanline knit.",
          warna: [
            "Mahogany",
            "Moka",
            "Denim",
            "Cream",
            "Beige",
            "Hitam",
            "Dusty pink",
          ],
          chart: C.lorenza,
          foto: "",
          link: {},
        },
        {
          nama: "Yukenzy Rompi Kulot Set",
          bahan:
            "Setelan anak perempuan Korean style, full atas bawah japanline knit tweed halus, adem, premium. Rompi berkancing tengah hidup dengan variasi saku. Celana kulot berkaret di pinggang belakang saja, tanpa saku.",
          warna: [
            "Denim",
            "Cream",
            "Beige",
            "Dusty pink",
            "Mahogany",
            "Hitam",
            "Coklat",
            "Mocca",
          ],
          chart: C.yukenzy,
          foto: "",
          link: {},
        },
        {
          nama: "Mia Vest Sleeveless One Set",
          bahan:
            "Setelan anak perempuan tanpa lengan motif salur. Atas dan bawah katun polymicro salur premium grade A, lembut, halus, adem, dan jatuh. Celana pendek di atas lutut, pinggang full karet.",
          warna: ["Lavender", "Hijau", "Merah"],
          chart: C.mia,
          foto: "",
          link: {},
        },
        {
          nama: "Salur Ribbon Set",
          bahan:
            "Setelan anak perempuan Korean style: blouse pita tanpa lengan dan celana kulot motif salur. Full atas bawah katun polymicro salur premium grade A, lembut dan adem. Pinggang celana full karet.",
          warna: ["Merah", "Kuning", "Hijau", "Hitam", "Biru"],
          chart: C.salur,
          foto: "",
          link: {},
        },
        {
          nama: "Yumi Crop Salur Set",
          bahan:
            "Setelan anak perempuan Korean style: kemeja crop salur dan celana kulot. Full atas bawah katun polymicro salur premium grade A, lembut dan adem.",
          warna: ["Merah", "Kuning", "Hijau", "Hitam", "Biru"],
          chart: C.yumi,
          foto: "",
          link: {},
        },
        {
          nama: "Malia Elephant Set",
          bahan:
            "Setelan anak perempuan motif gajah Thailand. Atasan japanline knit yang adem, bawahan rayon premium.",
          warna: ["Biru tosca", "Merah maroon", "Coklat", "Hitam"],
          chart: C.malia,
          foto: "",
          link: {},
        },
        {
          nama: "Aeris Stripe Set",
          bahan:
            "Setelan anak perempuan Korean style motif salur dengan ruffle. Celana kulot stretch premium, adem.",
          warna: ["Hijau", "Merah", "Lavender"],
          chart: C.aeris,
          foto: "",
          link: {},
        },
        {
          nama: "Kiyomi Stripe Ribbon Top",
          bahan:
            "Blouse atasan anak perempuan motif salur, model peplum dengan aksen pita, tanpa lengan. Lembut dan adem.",
          warna: ["Merah", "Kuning", "Hijau", "Hitam", "Biru"],
          chart: C.kiyomi,
          foto: "",
          link: {},
        },
        {
          nama: "Kana One Set",
          bahan:
            "Setelan anak perempuan crop kemeja dan celana kulot, motif bambu bunga-bunga. Bahan polymicro premium yang adem dan flowy.",
          warna: ["Pink", "Kuning", "Hitam"],
          chart: C.kana,
          foto: "",
          link: {},
        },
        {
          nama: "Setelan Sweater Jogger",
          bahan:
            "Setelan sweater dan jogger anak unisex, laki-laki dan perempuan. Bahan katun fleece premium, hangat dan lembut.",
          warna: [
            "Peach",
            "Broken white",
            "Navy blue",
            "Sage green",
            "Tosca green",
          ],
          charts: [
            Object.assign({ judul: "Sweater" }, C.sweater),
            Object.assign({ judul: "Joger" }, C.joger),
          ],
          foto: "",
          link: {},
        },
        /* Contoh isian lain: warna:["A","B"], foto:"images/nama.jpg", chartImg:"images/size-nama.jpg" (kalau pakai gambar, chart tidak wajib), link:{shopee:"https://..."} */
      ];
      /* ========================================= */

      function waUrl(k) {
        return (
          "https://wa.me/" + NOMOR + "?text=" + encodeURIComponent(PESAN[k])
        );
      }
      function esc(s) {
        return String(s).replace(/[&<>"]/g, function (c) {
          return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
        });
      }
      function tabel(c) {
        return (
          "<table><tr>" +
          c.head
            .map(function (h) {
              return "<th>" + esc(h) + "</th>";
            })
            .join("") +
          "</tr>" +
          c.rows
            .map(function (r) {
              return (
                "<tr>" +
                r
                  .map(function (x) {
                    return "<td>" + esc(x) + "</td>";
                  })
                  .join("") +
                "</tr>"
              );
            })
            .join("") +
          "</table>"
        );
      }
      var html = PRODUK.map(function (p) {
        var foto = p.foto
          ? '<img src="' +
            esc(p.foto) +
            '" alt="' +
            esc(p.nama) +
            '" loading="lazy">'
          : "Foto " + esc(p.nama);
        var cc = p.chart || (p.charts && p.charts[0]);
        var uk =
          p.ukuran ||
          (cc
            ? cc.rows.map(function (r) {
                return r[0];
              })
            : []);
        var chips = uk
          .map(function (u) {
            return "<span>" + esc(u) + "</span>";
          })
          .join("");
        var warna =
          p.warna && p.warna.length
            ? '<p class="meta"><b>Warna:</b> ' +
              p.warna.map(esc).join(", ") +
              "</p>"
            : "";
        var chartHtml = p.chartImg
          ? '<img class="szimg" src="' +
            esc(p.chartImg) +
            '" alt="Size chart ' +
            esc(p.nama) +
            '" loading="lazy">'
          : p.charts
            ? p.charts
                .map(function (c) {
                  return (
                    '<p class="tip"><b>' + esc(c.judul) + "</b></p>" + tabel(c)
                  );
                })
                .join("")
            : tabel(p.chart);
        var tombol = PLATFORM.map(function (pl) {
          var u = p.link[pl[0]];
          return u
            ? '<a class="btn alt" target="_blank" rel="noopener" href="' +
                esc(u) +
                '">' +
                esc(pl[1]) +
                "</a>"
            : "";
        }).join("");
        if (!tombol)
          tombol =
            '<a class="btn" href="#toko" style="grid-column:1/-1">Beli di toko kami</a>';
        tombol +=
          '<a class="btn wa-btn" target="_blank" rel="noopener" href="' +
          waUrl("rg") +
          '">Tanya admin via WhatsApp</a>';
        return (
          '<article class="card">' +
          '<div class="ph">' +
          foto +
          "</div>" +
          "<h2>" +
          esc(p.nama) +
          "</h2>" +
          '<p class="meta">' +
          esc(p.bahan) +
          "</p>" +
          '<div class="chips" aria-label="Ukuran tersedia">' +
          chips +
          "</div>" +
          warna +
          "<details><summary>Size chart</summary>" +
          chartHtml +
          '<p class="tip">Semua ukuran dalam cm. Usia hanya perkiraan. Ukur lingkar dada anak, lalu pilih ukuran yang sama atau sedikit lebih besar.</p></details>' +
          '<div class="buy">' +
          tombol +
          "</div>" +
          "</article>"
        );
      }).join("");
      document.getElementById("grid").innerHTML = html;

      /* Strip toko di atas katalog. Logo opsional: taruh images/shopee.png, tiktok.png, tokopedia.png */
      var GRUP = [
        ["Shopee", "shopee", ["shopee"]],
        ["TikTok Shop", "tiktok", ["tiktok1", "tiktok2"]],
        ["Tokopedia", "tokopedia", ["tokopedia1", "tokopedia2"]],
      ];
      var NAMA = {
        shopee: "Ruang Garis",
        tiktok1: "@rg_ruanggaris",
        tiktok2: "@rg_ruanggaris3",
        tokopedia1: "ruang-garis-2",
        tokopedia2: "ruang-garis-3",
      };
      document.getElementById("storegrid").innerHTML = GRUP.map(function (g) {
        return (
          '<div class="store"><b><img src="images/' +
          g[1] +
          '.png" alt="" onerror="this.remove()">' +
          g[0] +
          "</b>" +
          g[2]
            .map(function (k) {
              return (
                '<a target="_blank" rel="noopener" href="' +
                esc(TOKO[k]) +
                '">' +
                esc(NAMA[k]) +
                "</a>"
              );
            })
            .join("") +
          "</div>"
        );
      }).join("");

      document.querySelectorAll("[data-wa]").forEach(function (el) {
        el.href = waUrl(el.dataset.wa);
        el.target = "_blank";
        el.rel = "noopener";
      });