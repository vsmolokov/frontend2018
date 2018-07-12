
// Task 4 ------------------------- Отсортировать элементы массива в порядке возрастания

var a=[8,4,5,6,1,89];

for (i=0; i<a.length-1;i++){
    for (j=0; j<a.length-1-i;j++){
    if (a[j]>a[j+1]){
        var bufer = a[j+1];
        a[j+1]=a[j];
        a[j]=bufer;
    }
        }
}
alert(a);
