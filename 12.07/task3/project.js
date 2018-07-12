
// Есть 2 массива: первый - массив ссылок, второй - массив подписей var links = [“http://google.com”,”http://fb.com”, “http://vk.com”]; var names = [“google”,”facebook”,”vkontakte”];
//
//    вывести в документ в виде списка ссылок

var names = ["google","facebook","vkontakte"];
var links = ["http://google.com", "http://fb.com", "http://vk.com"];

for (i=0; i<names.length; i++){
    names[i]+=" - "+links[i];
}
console.log(names);
