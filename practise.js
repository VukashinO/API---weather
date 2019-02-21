const form = document.getElementById('form');
const api = 'http://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&appid=256f8d1a53bded780e6ad08095128028';
const units = '&units=metric';



const weatherSkopje = async(c) => {

const response = await fetch(`${api}${c}${apiKey}${units}`);
 if(response.status === 200){
     let data =  await response.json();
     return data;
 }else {
     throw new Error('You cant fetch data');
 }

};



const renderWeather = async(c) => {

let obj =  await weatherSkopje(c)
 
return obj.main
}







form.addEventListener('submit', (e) => {
e.preventDefault();


renderWeather(e.target.elements.text.value).then((obj) => {
let p = document.createElement('p')
p.innerHTML = `the temperature is: ${obj.temp} min Temp is: ${obj.temp_min} max Temp is ${obj.temp_max}`
document.getElementsByTagName('body')[0].appendChild(p)
console.log(obj)
}).catch((err) => {
console.log(err)
})


})