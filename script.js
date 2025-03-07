// 1. Menghitung luas persegi panjang
function areaOfRectangle(length, width) {
  return length * width;
}
console.log(areaOfRectangle(5, 3)); // Output: 15

// 2. Menghitung diameter, keliling, dan luas lingkaran
function circleCalculations(radius) {
  const diameter = 2 * radius;
  const circumference = 2 * Math.PI * radius;
  const area = Math.PI * Math.pow(radius, 2);
  return { diameter, circumference: circumference.toFixed(4), area: area.toFixed(3) };
}
console.log(circleCalculations(5)); // Output: { diameter: 10, circumference: '31.4159', area: '78.539' }

// 3. Menghitung sudut segitiga jika dua sudut diberikan
function thirdAngle(a, b) {
  return 180 - (a + b);
}
console.log(thirdAngle(80, 65)); // Output: 35

// 4. Menghitung selisih hari antara dua tanggal
function dateDifference(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const diffTime = Math.abs(d2 - d1);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}
console.log(dateDifference("2024-03-19", "2024-03-21")); // Output: 2

// 5. Mengambil inisial dari nama dan mengubahnya menjadi huruf besar
function getInitials(name) {
  return name.split(' ').map(word => word[0].toUpperCase()).join('');
}
console.log(getInitials("John Doe")); // Output: JD