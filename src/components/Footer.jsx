export default function Footer({ items }) {
  if(items.length === 0) return <footer className="stats">Daftar materi masih kosong</footer>

  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;
  const percentage = Math.round((checkedItems / totalItems) * 100);

//   bagian ketika di ceklis masih tidak bertambah / eror (tanya ke ka rizal kenapa hehe)
  return     <footer className="stats">Ada {totalItems} materi yang harus di pelajari {checkedItems} materi yang sudah di pelajari ({percentage}%) dan fokus di setiap tahapan</footer>
}