let daftarTugas = [];

function tambahTugas() {
    let tugas = document.getElementById("input_tugas").value;
    let tanggal = document.getElementById("input_tanggal").value;

    if (tugas === "" || tanggal === "") {
        alert("mohon isi tugas dan tanggal terlebih dahulu!");
    } else{
        let objTugas = {
        namaTugas: tugas,
        tanggal: tanggal
    };

    daftarTugas.push(objTugas);
        tampilkanTugas();
    }
}

    function hapusTugas() {
        daftarTugas = [];
        tampilkanTugas();
}

function tampilkanTugas() {
    let daftar_tugas = document.getElementById("list_tugas");
    daftar_tugas.innerHTML = ""; 

    daftarTugas.forEach(function(_, i) {
    daftar_tugas.innerHTML += `<li><div class="tugas"><p>${daftarTugas[i].namaTugas}</p> <p>${daftarTugas[i].tanggal}</p></div></li>`;
    });
}

function filterTanggal() {
    let filter_tgl = document.getElementById("filter_tanggal").value;

    if (filter_tgl === "") {
        alert("Mohon isi tanggal sebelum filter!");
        return;
    }

    let daftar_tugas = document.getElementById("list_tugas");
    daftar_tugas.innerHTML = "";  

    daftarTugas.forEach(function(_, i) {
    if (daftarTugas[i].tanggal === filter_tgl) {

        daftar_tugas.innerHTML += `<li><div class="tugas"><p>${daftarTugas[i].namaTugas}</p> <p>${daftarTugas[i].tanggal}</p></div></li>`;
    }
    });
}







