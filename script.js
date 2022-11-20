const clear = document.getElementById('clear')
const minus = document.getElementById('minus')
const hapus = document.getElementById('hapus')
const bagi = document.getElementById('bagi')
const tujuh = document.getElementById('7')
const delapan = document.getElementById('8')
const sembilan = document.getElementById('9')
const kali = document.getElementById('kali')
const empat = document.getElementById('4')
const lima = document.getElementById('5')
const enam = document.getElementById('6')
const kurang = document.getElementById('kurang')
const satu = document.getElementById('1')
const dua = document.getElementById('2')
const tiga = document.getElementById('3')
const tambah = document.getElementById('tambah')
const nol = document.getElementById('0')
const titik = document.getElementById('titik')
const jumlah = document.getElementById('jumlah')
const output = document.getElementById('nilai')

// output
let final = 0
let string = ''
// =====
// endpoint untuk click
let dikali
let dikurang
let ditambah
let dikoma
let dibagi
let diminus
// =====
// endpoint aritmatika
let nilai
// =====
function setValue(e) {
   switch (e.target.id) {
      case '0':
         string === '0' ? (string = '0') : (string += 0)
         output.textContent = string
         break
      case '1':
         string === '0' ? (string = '1') : (string += 1)
         output.textContent = string
         break
      case '2':
         string === '0' ? (string = '2') : (string += 2)
         output.textContent = string
         break
      case '3':
         string === '0' ? (string = '3') : (string += 3)
         output.textContent = string
         break
      case '4':
         string === '0' ? (string = '4') : (string += 4)
         output.textContent = string
         break
      case '5':
         string === '0' ? (string = '5') : (string += 5)
         output.textContent = string
         break
      case '6':
         string === '0' ? (string = '6') : (string += 6)
         output.textContent = string
         break
      case '7':
         string === '0' ? (string = '7') : (string += 7)
         output.textContent = string
         break
      case '8':
         string === '0' ? (string = '8') : (string += 8)
         output.textContent = string
         break
      case '9':
         string === '0' ? (string = '9') : (string += 9)
         output.textContent = string
         break
      case 'hapus':
         string === '0' ? '' : (string = string.slice(0, -1))
         output.textContent = string
         break
      case 'kali':
         break
      case 'bagi':
         break
      case 'clear':
         final = 0
         nilai = ''
         string = '0'
         output.textContent = string
         break
      case 'minus':
         break
      case 'kurang':
         break
      case 'tambah':
         break
      case 'titik':
         break
      case 'jumlah':
         if (final == 0) {
         } else {
            output.textContent = final
            final = 0
            string = ''
         }
         break
   }
}
jumlah.onclick = setValue
titik.onclick = setValue
nol.onclick = setValue
tambah.onclick = setValue
tiga.onclick = setValue
dua.onclick = setValue
satu.onclick = setValue
kurang.onclick = setValue
enam.onclick = setValue
lima.onclick = setValue
empat.onclick = setValue
kali.onclick = setValue
sembilan.onclick = setValue
delapan.onclick = setValue
tujuh.onclick = setValue
bagi.onclick = setValue
hapus.onclick = setValue
minus.onclick = setValue
clear.onclick = setValue
