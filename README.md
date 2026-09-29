# Stack Up website

Website statis dwibahasa (Indonesia dan Inggris) untuk game Stack Up, berdasarkan `Stack_Up_Store_Listing_Copy_v1.0.pdf` dan dua poster referensi. Berisi beranda dan halaman Privacy Policy. Pilihan bahasa tersimpan saat berpindah halaman.

## Menjalankan

Jalankan server lokal dari folder ini agar URL tanpa `.html` juga berfungsi:

```bash
python preview.py
```

Lalu kunjungi `http://127.0.0.1:4173/`.

Di Vercel, `vercel.json` mengaktifkan URL bersih. Beranda memakai `/`, sedangkan kebijakan privasi memakai `/privacy-policy`; URL lama dengan `.html` dialihkan otomatis.

## Sebelum publikasi

`privacy-policy.html` masih berstatus draf. Konfirmasi praktik pengumpulan data, iklan, analitik, layanan pihak ketiga, retensi data, dan tanggal berlaku sesuai versi aplikasi yang akan dirilis.
