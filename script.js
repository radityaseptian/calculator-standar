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
// string sementara
let nilai = ''
// =====
function setValue(e) {
   switch (e.target.id) {
      case '0':
         if (string !== '0') {
            string += '0'
            nilai += '0'
         }
         output.textContent = string
         break
      case '1':
         if (string !== '0') {
            string += '1'
            nilai += '1'
         } else {
            string = '1'
            nilai = '1'
         }
         output.textContent = string
         break
      case '2':
         if (string !== '0') {
            string += '2'      
            nilai += '2'
         } else {
            string = '2'
            nilai = '2'
         }
         output.textContent = string
         break
      case '3':
         if (string !== '0') {
            string += '3'
            nilai += '3'
         } else {
            string = '3'
            nilai = '3'
         }
         output.textContent = string
         break
      case '4':
         if (string !== '0') {
            string += '4'
            nilai += '4'
         } else {
            string = '4'
            nilai = '4'
         }
         output.textContent = string
         break
      case '5':
         if (string !== '0') {
            string += '5'
            nilai += '5'
         } else {
            string = '5'
            nilai = '5'
         }
         output.textContent = string
         break
      case '6':
         if (string !== '0') {
            string += '6'
            nilai += '6'
         } else {
            string = '6'
            nilai = '6'
         }
         output.textContent = string
         break
      case '7':
         if (string !== '0') {
            string += '7'
            nilai += '7'
         } else {
            string = '7'
            nilai = '7'
         }
         output.textContent = string
         break
      case '8':
         if (string !== '0') {
            string += '8'
            nilai += '8'
         } else {
            string = '8'
            nilai = '8'
         }
         output.textContent = string
         break
      case '9':
         if (string !== '0') {
            string += '9'
            nilai += '9'
         } else {
            string = '9'
            nilai = '9'
         }
         output.textContent = string
         break
      case 'hapus':
         if (string.length <= 1) {
            string = '0'
            nilai = ''
         } else {
            let index = nilai.length
            if (nilai[index - 1] === ' ') {
               string = string.slice(0,-3)
               nilai = nilai.slice(0,-3)
            } else {
               string = string.slice(0, -1)
               nilai = nilai.slice(0, -1)
            }
         }
         output.textContent = string
         break
      case 'kali':
         if (string !== '0') {
            string += ' x '
            nilai += ' * '
            output.textContent = string
         }
         break
      case 'bagi':
         if (string !== '0') {
            string += ' / '
            nilai += ' / '
            output.textContent = string
         }
         break
      case 'clear':
         nilai = ''
         string = '0'
         output.textContent = string
         break
      case 'kurang':
         if (string !== '0') {
            string += ' - '
            nilai += ' - '
            output.textContent = string
         }
         break
      case 'tambah':
         if (string !== '0') {
            string += ' + '
            nilai += ' + '
            output.textContent = string
         }
         break
      case 'titik':
         if (string !== '0') {
            string += '.'
            nilai += '.'
            output.textContent = string
         }
         break
      case 'jumlah':
         if (nilai !== '') {
            output.textContent = `=${eval(nilai)}`
            nilai = ''
            string = '0'
         }
         break
   }
}
