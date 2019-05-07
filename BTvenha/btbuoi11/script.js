// Bài 1 :  Cho 1 mảng có độ dài lớn hơn 2, chứa các số khác nhau. Hãy viết hàm tìm ra số lớn thứ nhì trong mảng
console.log('-- Bài 1 --')
function bai1(a, b) {
  if (typeof a == "number" && typeof b == "number") {
    if (a < b) {
      return "Số lớn thứ nhì là :" + a;
    } else {
      return "Số lớn thứ nhì là :" + b;
    }
  }else{}
}
console.log(bai1(1, 2));

// Bài 2: Cho 1 mảng các chuỗi bất kỳ. Hãy viết hàm tìm ra chuỗi có độ dài lớn nhất trong mảng.
console.log('-- Bài 2 --')
function bai2(n){
	return n.sort(function (a, b) { return b.length - a.length })[0];
}

// Bài 3 :  Viết hàm có 2 tham số là 2 chuỗi str và target, dùng để kiểm tra chuỗi str có kết thúc bởi chuỗi target hay không. Kết quả trả về là true hoặc false.
