let year = parseInt(prompt('Nhap vao gia tri muon kiem tra'));
let ketluan ="";

if (year % 4 == 0) {
    if (year % 100 != 0){
        ketluan = " la nam nhuan";}
    else if (year % 400 !=0){
        ketluan = " khong phai la nam nhuan";}
    else {
        ketluan = " la nam nhuan";}}
else { ketluan = " khong phai la nam nhuan";}

alert(year + ketluan);