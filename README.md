# Perpustakaan
Tugas UAS Desain Web
Unsur Penilaian :
- Kesesuaian Tema & Originalitas (25)
- Desain Visual (35)
- Inovasi & Fungsional (25)
- Responsif & Browser Friendly (15)
## Nama Anggota Kelompok:
1. Heparia Arum Ndaru Ramdhani (K3522034)
2. Seli Agustina (K3522076)
## Penjelasan
### 1. Project menggunakan:
- Bootstrap
- webpack
- NPM
- Git
- Github deskop
### 2. Branches
- Main berisi code lengkap beserta node_modules dan konfigurasi webpack serta package.json & package-lock.json
- pages-github sebagai sub-branche yang berasal dari folder dist untuk kebutuhan hosting atau web live
### 3. API
- Api pertama berasal dari Google Books Api dengan mengikuti tutorial dari link berikut ini: https://developers.google.com/books/docs/v1/using?hl=id#APIKey
- Api kedua berasal darri NewsData.io dengan mengikuti tutorial dari link berikut ini: https://newsdata.io/documentation
### 4. Menulis .env-sample
- Copy api key dari kedua api yang sudah didapatkan
- Buka .env-sample kemudian paste masing-masing api key sesuai dengan nama variabel GOOGLE_BOOKS_API_KEY untuk api key dari Google Books Api dan NEWS_DATA_IO_API_KEY untuk api dari NewsData.io, jangan sertakan tanda kutip ("...") maupaun titik koma diakhir line (...;)
- Ubah nama .env-sample menjadi .env
### 5. Cara menjalankan project:
- Pastikan memiliki git dan github deskop
- Lakukan langkah 3 dan 4 terlebih dahulu
- Pada terminal, berikan perintah **npm install** agar node modules terinstal di local repository laptop
- Kemudian ketik **npm run start** untuk menjalankan project mode development
- Ketik **npm run build** untuk menjalankan project mode production
- Push ke dalam repository github menggunakan git atau github deskop
- Ketik **npm run deploy** untuk membuat sub-branche dan ikuti petunjuk yang ada
- Masuk ke menu settings, kemudian ubah deploy ke sub-brance
- Project sudah berhasil di hosting melalui github pages
