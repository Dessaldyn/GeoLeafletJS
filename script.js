var map = L.map('map').setView([-6.875216300933416, 107.57631716977924], 19
);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker1 = L.marker([-6.874364165192638, 107.57563052420554]).addTo(map);
marker1.bindPopup("<b>Kampus ULBI</b><br>Jl. Sariasih No.54, Sarijadi, Kec. Sukasari, Kota Bandung, Jawa Barat 40151").openPopup();

var marker2 = L.marker([-6.871616017048443, 107.5738924527162]).addTo(map);
marker2.bindPopup("<b>Kampus Polban</b><br>Jl. Ciwaruga, Ciwaruga, Kec. Parongpong, Kabupaten Bandung Barat, Jawa Barat 40559").openPopup();

var marker3 = L.marker([-6.877347965094127, 107.57223486891476]).addTo(map);
marker3.bindPopup("<b>Nu Art Studio</b><br>Setra Duta Raya No.L6, Ciwaruga, Kec. Parongpong, Bandung, Jawa Barat 40151").openPopup();

var marker4 = L.marker([-6.859978818161022, 107.59208991197777]).addTo(map);
marker4.bindPopup("<b>Kampus UPI</b><br>Jl. Dr. Setiabudi No.229, Isola, Kec. Sukasari, Kota Bandung, Jawa Barat 40154").openPopup();

var marker5 = L.marker([-6.884480515660006, 107.5814405834837]).addTo(map);
marker5.bindPopup("<b>Kampus Kristen Maranatha</b><br>Jl. Prof. drg. Soeria Soemantri No.65, Sukawarna, Kec. Sukajadi, Kota Bandung, Jawa Barat 40164").openPopup();

var marker6 = L.marker([-6.885335296104482, 107.57359511232212]).addTo(map);
marker6.bindPopup("<b>Mie Soobek - Sukajadi</b><br>Jl. Sarimadu No.28a Blok 26, RT./RW/RW.008/001, Sukawarna, Kec. Sukajadi, Kota Bandung, Jawa Barat 40164").openPopup();

var marker7 = L.marker([-6.89323861381658, 107.58762842991543]).addTo(map);
marker7.bindPopup("<b>Aston Pasteur</b><br>Jl. Dr. Djunjunan No.162, Sukagalih, Kec. Sukajadi, Kota Bandung, Jawa Barat 40162").openPopup();

var marker8 = L.marker([-6.892371864883478, 107.58530989871242]).addTo(map);
marker8.bindPopup("<b>D'Botanica Bandung Mall</b><br>Jl. Dr. Djunjunan No.143-149, Pajajaran, Kec. Cicendo, Kota Bandung, Jawa Barat 40173").openPopup();

var marker9 = L.marker([-6.905021448856857, 107.59703993788277]).addTo(map);
marker9.bindPopup("<b>Istana Plaza</b><br>Jl. Pasir Kaliki No.121-123, Pamoyanan, Kec. Cicendo, Kota Bandung, Jawa Barat 40173").openPopup();

var marker10 = L.marker([-6.9146871486949, 107.5945495068129]).addTo(map);
marker10.bindPopup("<b>23 PASKAL Shopping Center</b><br>Jl. Pasir Kaliki No.25-27, Kb. Jeruk, Kec. Andir, Kota Bandung, Jawa Barat 40241").openPopup();

var marker11 = L.marker([-6.920587654954713, 107.60965570803566]).addTo(map);
marker11.bindPopup("<b>Museum Konferensi Asia Afrika</b><br>Jl. Asia Afrika No.65, Braga, Kec. Sumur Bandung, Kota Bandung, Jawa Barat 40111").openPopup();

var marker12 = L.marker([-6.921602129975671, 107.607854604615]).addTo(map);
marker12.bindPopup("<b>Alun-alun Kota Bandung</b><br>Jl. Asia Afrika, Kb. Pisang, Kec. Regol, Kota Bandung, Jawa Barat").openPopup();

var marker13 = L.marker([-6.902250598616198, 107.61869127563682]).addTo(map);
marker13.bindPopup("<b>Gedung Sate</b><br>Jl. Diponegoro No.22, Citarum, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40115").openPopup();

var marker14 = L.marker([-6.900475583917257, 107.62133222128729]).addTo(map);
marker14.bindPopup("<b>Museum Geologi Bandung</b><br>Jl. Diponegoro No.57, Cihaur Geulis, Kec. Cibeunying Kaler, Kota Bandung, Jawa Barat 40122").openPopup();

var marker15 = L.marker([-6.899987046609887, 107.61867487227096]).addTo(map);
marker15.bindPopup("<b>Lapangan Gasibu</b><br>Jl. Diponegoro, Citarum, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40115").openPopup();

var marker16 = L.marker([-6.86626214198315, 107.59322908970702]).addTo(map);
marker16.bindPopup("<b>Universitas Pasundan</b><br>Jl. Dr. Setiabudi No.193, Gegerkalong, Kec. Sukasari, Kota Bandung, Jawa Barat 40153").openPopup();

var marker17 = L.marker([-6.870391062111474, 107.55510259998994]).addTo(map);
marker17.bindPopup("<b>Pemerintah Kota Cimahi</b><br>Jl. Raden Demang Hardjakusumah Blok, Jl. Jati Jl. Cihanjuang No.1, Cibabat, Kec. Cimahi Utara, Kota Cimahi, Jawa Barat 40513").openPopup();

var marker18 = L.marker([-6.872113986905789, 107.55368739357638]).addTo(map);
marker18.bindPopup("<b>Borma Cihanjuang</b><br>Jl. Cihanjuang No.102, Cihanjuang, Kec. Parongpong, Kabupaten Bandung Barat, Jawa Barat 40559").openPopup();

var marker19 = L.marker([-6.887341301710596, 107.55505323282765]).addTo(map);
marker19.bindPopup("<b>SAMSAT Cimahi</b><br>Jl. Jend. H. Amir Machmud No.331A, Cigugur Tengah, Kec. Cimahi Tengah, Kota Cimahi, Jawa Barat 40522").openPopup();

var marker20 = L.marker([-6.8729392879367195, 107.54272334648249]).addTo(map);
marker20.bindPopup("<b>Taman Alun-Alun Kota Cimahi</b><br>Jl. Alun-Alun Tim. No.57, Cimahi, Kec. Cimahi Tengah, Kota Cimahi, Jawa Barat 40525").openPopup();

var circle = L.circle([-6.875237604298394, 107.57530865911491], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
circle.bindPopup("Daerah Kampus Sarijadi");

var polygon = L.polygon([
    [-6.921602129975671, 107.607854604615],
    [-6.920587654954713, 107.60965570803566],
    [-6.900475583917257, 107.62133222128729],
    [-6.859978818161022, 107.59208991197777],
    [-6.8729392879367195, 107.54272334648249],
    [-6.887341301710596, 107.55505323282765],
    [-6.9146871486949, 107.5945495068129]

]).addTo(map);
polygon.bindPopup("Kampus Kampus");

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);