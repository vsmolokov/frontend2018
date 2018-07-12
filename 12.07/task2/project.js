
// Task 2
// -------------------------
//     Изменить порядок элементов массива на противоположный (перевернуть массив)
var a = [3, 43, 14, 26 , 5, 2];


var half = a.length/2;
for (var i=0; i<half; i++){
    a[i]+=a[a.length-1-i];
    a[a.length-1-i]=a[i]-a[a.length-1-i];
    a[i]=a[i]-a[a.length-1-i];
}
alert(a);

