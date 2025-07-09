const tombol = document.querySelectorAll("button");
const layar = document.querySelector(".layar");
const jumlah = document.querySelector(".hasil");

// jalankan even klik pada semua tombol
let text = "";
let operator = "";
let angkaPertama = "";
let angkaKedua = "";
let hasil = "";

tombol.forEach((klik) => {
  klik.addEventListener("click", () => {
    text = klik.textContent;
    // jika klik D hapus angka terakhir
    if (text === "D") {
      layar.textContent = layar.textContent.slice(0, -1);

      if (operator === "") {
        angkaPertama = angkaPertama.slice(0, -1);
      } else {
        angkaKedua = angkaKedua.slice(0, -1);
      }
      // hitung ulang jumlah
      if (angkaKedua !== "") {
        if (operator == "+") {
          hasil = Number(angkaPertama) + Number(angkaKedua);
        } else if (operator == "-") {
          hasil = Number(angkaPertama) - Number(angkaKedua);
        } else if (operator == "x") {
          hasil = Number(angkaPertama) * Number(angkaKedua);
        } else if (operator == "/") {
          hasil = Number(angkaPertama) / Number(angkaKedua);
        }else if(operator == '%'){
          hasil = Number(angkaPertama) % Number(angkaKedua);
        }
        jumlah.textContent = hasil;
        jumlah.style.display = "flex";
      } else {
        // jika engga ada angka ke dua maka sembunyikan hasil
        jumlah.textContent = "";
        jumlah.style.display = "none";
        layar.classList.remove("lyr");
      }
      return;
    } else if (text === "+" || text === "-" || text === "x" || text === "/" || text === '%') {
      // jika klik operator
      operator = text;
      layar.textContent += text;
      return operator;
    } else if (text === "=") {
      // jika klik sama dengan munculkan hasil
      layar.textContent = hasil;
      layar.classList.remove("lyr");
      jumlah.style.display = "none";
      angkaPertama = hasil;
      operator = "";
      angkaKedua = "";
      hasil = "";
      return;
    } else if (text === "C") {
      angkaKedua = "";
      angkaPertama = "";
      hasil = "";
      jumlah.style.display = 'none'
      jumlah.textContent = ''
      operator = "";
      layar.textContent = "";
      layar.classList.remove('lyr')
      return;
    } else if (text === '.'){
      layar.textContent += text
      return
    }

    // mencari angka
    if (operator === "") {
      angkaPertama += text;
    } else if (operator !== "") {
      angkaKedua += text;
    }

    // menampilkan  hasil
    if (angkaKedua !== "") {
      if (operator === "+") {
        layar.textContent += text;
        hasil = Number(angkaPertama) + Number(angkaKedua);
        layar.classList.add("lyr");
        jumlah.style.display = "flex";
        jumlah.textContent = hasil;
        return hasil;
      } else if (operator === "-") {
        layar.textContent += text;
        hasil = Number(angkaPertama) - Number(angkaKedua);
        layar.classList.add("lyr");
        jumlah.style.display = "flex";
        jumlah.textContent = hasil;
        return hasil;
      } else if (operator === "x") {
        layar.textContent += text;
        hasil = Number(angkaPertama) * Number(angkaKedua);
        layar.classList.add("lyr");
        jumlah.style.display = "flex";
        jumlah.textContent = hasil;
        return hasil;
      } else if (operator === "/") {
        layar.textContent += text;
        hasil = Number(angkaPertama) / Number(angkaKedua);
        layar.classList.add("lyr");
        jumlah.style.display = "flex";
        jumlah.textContent = hasil;
        return hasil;
      }else if (operator === "%") {
        layar.textContent += text;
        hasil = Number(angkaPertama) / Number(angkaKedua);
        layar.classList.add("lyr");
        jumlah.style.display = "flex";
        jumlah.textContent = hasil;
        return hasil;
      }
    }
    layar.textContent += text;
  });
});
