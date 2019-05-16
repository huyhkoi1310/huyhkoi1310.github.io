// Bài 1 :  Cho 1 mảng có độ dài lớn hơn 2, chứa các số khác nhau. Hãy viết hàm tìm ra số lớn thứ nhì trong mảng
console.log("-- Bài 1 --")
function bai1(n){
  let arr = []; 
  arr = n.sort(function(a, b){return b - a}); 
  return arr[1];
}
// Ví dụ : bai1([1, 2, 3, 4, 5, 6]);


// Bài 2: Cho 1 mảng các chuỗi bất kỳ. Hãy viết hàm tìm ra chuỗi có độ dài lớn nhất trong mảng.
console.log('-- Bài 2 --')
function bai2(n){
  let arr = [];
  arr = n.sort(function(a, b){return b.length - a.length});
  return arr[0];
}
// Ví dụ : bai2(['Thiết', 'Khôi', 'Quý', '0', '9999']);



// Bài 3 :  Viết hàm có 2 tham số là 2 chuỗi str và target, dùng để kiểm tra chuỗi str có kết thúc bởi chuỗi target hay không. Kết quả trả về là true hoặc false.
console.log("-- Bài 3 --")
function bai3(str, target){
  if (str.substr(-target.length) === target) {
    return true;
  } else {
    return false;
  }
}
// Ví dụ : bai3("Bạch Huy khôi", "Huy"); kết quả : flase
//         bai3("Bạch Huy Khôi", "Khôi"); kết quả : true


// Bài 4 : Cho 1 mảng bất kỳ. Hãy kiểm tra xem trong mảng đó có phần tử nào bị lặp lại hay không. Kết quả trả về true hoặc false. 
console.log("-- Bài 4 --")
function bai4(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; i < arr.length; j++){
      if(i != j){
        if(arr[i] == arr[j]){
          return true;
        }
      }
    }
  }
  return flase;
}
// Ví dụ : bai4([1, 2, 3, 4, 5, 1]);


// Bài 5 : Viết hàm truyền vào 1 chuỗi là tên thẻ HTML, kiểm tra xem trong file HTML có bao nhiêu thẻ đó. Kết quả trả về là số lượng thẻ (không bao gồm thẻ đóng), nếu không có trả về 0.
console.log("-- Bài 5 --")
function bai5(n){
  
  return document.getElementsByTagName(n).length;

}