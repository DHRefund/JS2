// //khai bao mang
// const hinhanh = document.querySelectorAll(".hinhanh");
// //in mang
// console.log(hinhanh);
// //duyet qua tung phan tu
// hinhanh.forEach((item) => {
//   console.log(item);
//   //lang nghe su kien
//   item.addEventListener("click", () => {
//     // xoa class active

//     remove();

//     // them class active cho item nay
//     item.classList.add("active");
//   });
// });

// function remove() {
//   hinhanh.forEach((item) => {
//     item.classList.remove("active");
//   });
// }
// const nam = (a, b) => {
//   return a + b;
// };
// console.log(nam(1, 2)
const cachinh = document.querySelectorAll(".hinhanh");
cachinh.forEach((e) => {
  e.addEventListener("click", () => {
    console.log(e);
    function remove() {
      cachinh.forEach((e) => {
        e.classList.remove("active");
      });
    }
    remove();
    e.classList.add("active");
  });
});
