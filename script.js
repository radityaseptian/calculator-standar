document.getElementById('clear').onclick = setValue
document.getElementById('hapus').onclick = setValue
document.getElementById('bagi').onclick = setValue
document.getElementById('7').onclick = setValue
document.getElementById('8').onclick = setValue
document.getElementById('9').onclick = setValue
document.getElementById('kali').onclick = setValue
document.getElementById('4').onclick = setValue
document.getElementById('5').onclick = setValue
document.getElementById('6').onclick = setValue
document.getElementById('kurang').onclick = setValue
document.getElementById('1').onclick = setValue
document.getElementById('2').onclick = setValue
document.getElementById('3').onclick = setValue
document.getElementById('tambah').onclick = setValue
document.getElementById('0').onclick = setValue
document.getElementById('titik').onclick = setValue
document.getElementById('jumlah').onclick = setValue
const output = document.getElementById('nilai')
output.onclick = setValue
// output
let string = '0'
// =====
// output jumlah
let nilai = 0
// =====
// string sementara
let nilaiSementara = ''
// =====
function setValue(e) {
   switch (e.target.id) {
      case '0':
         if (string !== '0') {
            string += '0'
            nilaiSementara += '0'
         }
         output.textContent = string
         break
      case '1':
         if (string !== '0') {
            string += '1'
            nilaiSementara += '1'
         } else {
            string = '1'
            nilaiSementara = '1'
         }
         output.textContent = string
         break
      case '2':
         if (string !== '0') {
            string += '2'      
            nilaiSementara += '2'
         } else {
            string = '2'
            nilaiSementara = '2'
         }
         output.textContent = string
         break
      case '3':
         if (string !== '0') {
            string += '3'
            nilaiSementara += '3'
         } else {
            string = '3'
            nilaiSementara = '3'
         }
         output.textContent = string
         break
      case '4':
         if (string !== '0') {
            string += '4'
            nilaiSementara += '4'
         } else {
            string = '4'
            nilaiSementara = '4'
         }
         output.textContent = string
         break
      case '5':
         if (string !== '0') {
            string += '5'
            nilaiSementara += '5'
         } else {
            string = '5'
            nilaiSementara = '5'
         }
         output.textContent = string
         break
      case '6':
         if (string !== '0') {
            string += '6'
            nilaiSementara += '6'
         } else {
            string = '6'
            nilaiSementara = '6'
         }
         output.textContent = string
         break
      case '7':
         if (string !== '0') {
            string += '7'
            nilaiSementara += '7'
         } else {
            string = '7'
            nilaiSementara = '7'
         }
         output.textContent = string
         break
      case '8':
         if (string !== '0') {
            string += '8'
            nilaiSementara += '8'
         } else {
            string = '8'
            nilaiSementara = '8'
         }
         output.textContent = string
         break
      case '9':
         if (string !== '0') {
            string += '9'
            nilaiSementara += '9'
         } else {
            string = '9'
            nilaiSementara = '9'
         }
         output.textContent = string
         break
      case 'hapus':
         if (string.length <= 1) {
            string = '0'
            nilaiSementara = ''
         } else {
            string = string.slice(0, -1)
            nilaiSementara = nilaiSementara.slice(0, -1)
         }
         output.textContent = string
         break
      case 'kali':
         if (string !== '0') {
            string += ' x '
            nilai === 0 ? nilai = Number(nilaiSementara) : nilai *= Number(nilaiSementara)
            nilaiSementara = ''
            output.textContent = string
         }
         break
      case 'bagi':
         if (string !== '0') {
            string += ' / '
            nilai === 0 ? nilai = Number(nilaiSementara) : nilai /= Number(nilaiSementara)
            nilaiSementara = ''
            output.textContent = string
         }
         break
      case 'clear':
         nilaiSementara = ''
         nilai = 0
         string = '0'
         output.textContent = string
         break
      case 'kurang':
         if (string !== '0') {
            string += ' - '
            nilai === 0 ? nilai = Number(nilaiSementara) : nilai -= Number(nilaiSementara)
            nilaiSementara = ''
            output.textContent = string
         }
         break
      case 'tambah':
         if (string !== '0') {
            string += ' + '
            nilai === 0 ? nilai = Number(nilaiSementara) : nilai += Number(nilaiSementara)
            nilaiSementara = ''
            output.textContent = string
         }
         break
      case 'titik':
         break
      case 'jumlah':
         if (nilai !== 0) {
            // nilai *= Number(nilaiSementara)
            // nilai /= Number(nilaiSementara)
            // nilai -= Number(nilaiSementara)
            // nilai += Number(nilaiSementara)
            output.textContent = `=${nilai}`
            nilaiSementara = ''
            string = '0'
            nilai = undefined
         }
         break
   }
}
