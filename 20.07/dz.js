// 1. Написать функцию для получения площади
// треугольника по его сторонам
//
// function ploshad(a,b,c){
//     let p = (a+b+c)/2;
//     let s= Math.sqrt((p*(p-a)*(p-b)*(p-c)));
//     return s;
// }
// let x=ploshad(3,4,5);
// alert(x);
//
//
// 2.Написать функцию для нахождения меньшего из
// двух чисел
//
// function sravnenie(a,b) {
//     if (a<b){
//         return a;
//         }
//     else return b;
// }
// var x= sravnenie(12,5);
// alert(x);
//
// 3. На основе предидущей функции написать
// функцию для поиска минимального значения в
// массиве
// function minMassive(a) {
//     let min= a[0];
//     for (let i in a){
//         if (a[i]<min) min=a[i];
//     }
//     return(min);
// }
// k=minMassive([2,5,123,6,78,1,55,0]);
// alert(k);
// 4. Написать функцию для поиска индекса
// минимального элемента в заданном диапазоне
//
// function minMassive(a,b,c) {
//     let min= b;
//     for (let i=b; i<c; i++){
//         if (a[i]<min) min=i;
//     }
//     return(min);
// }
// k=minMassive([2,5,123,6,78,1,55,0],0,3);
// alert(k);
//
// 5. Используя предидущую функцию написать ф-ю
// для сортировки массива методом выбора

// function sort(a) {
//     for(var i in a){
//     var min = i;
//     for(var j=i; j<a.length; j++){
//         if (a[j]<a[min]) min =j;
//     }
//     var buf = a[i];
//     a[i]=a[min];
//     a[min]=buf;
//     }
//     return a;
// }
// k=sort([2,5,124,6,78,1,55,0]);
// alert(k);

//
// 6. Написать функцию для нахождения суммы
// четных числ массива
// function summ(a) {
//     let buff=0;
//     for (let i in a){
//         if(a[i]%2===0) buff+=a[i];
//     }
// return buff;
// }
// k =summ([2,5,6,78,1,55,0]);
// alert(k);

// 7. Написать свою реализацию функции indexOf
// // долго пытался, она везде только мешала в моих идеях.
// a=[1,5,213,6,7,234,17,55];
// var c = a.indexOf(7,0);
// alert(c);