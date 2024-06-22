let url = 'https://catfact.ninja/fact';

let btn = document.querySelector('button');
let para = document.querySelector('p');

btn.addEventListener('click', async () => {
    let fact = await getFacts();
    para.innerText = fact;

})


async function getFacts() {
    try {
    let res = await axios.get(url);
    let data = res.data.fact;
    return data;
    } catch(err) {
        console.log(err);
        return "No fact found";
    }
    
}