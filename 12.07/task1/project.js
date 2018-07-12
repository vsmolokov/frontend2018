//Task 1
// -------------------------
// Поменять местами минимальный и максимальный элементы массива
var a = [3, 43, 14, 26 , 5, 2];

var min = 0;
var max = 0;
for (var i=0;i<a.length;i++){
    if(a[i]<a[min]) min=i;
    if(a[i]>a[max]) max=i;
}
var bufer = a[min];
a[min] = a[max];
a[max] = bufer;
alert(a);

