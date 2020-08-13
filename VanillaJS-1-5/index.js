//alert('Im Working. Im JS. ');
//console.log('Im Working. IM JS. Im worth it');
//const Nico가 들고있는건 데이터가 들어있는 저장소의 위치 = 리스트안의 내용은 변경 가능
const Nico = ["Nico",55,"Seoul"]
let Songmi = ["SM",24,"Busan"]

const people = {
    Songmi:Songmi,
    Nicoinfo:Nico
};

console.log(people)

Songmi.push("Female")
console.log(people.Songmi)
Nico.push("Female")
console.log(people.Nicoinfo)