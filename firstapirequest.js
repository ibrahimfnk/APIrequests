let url = 'https://catfact.ninja/fact';

fetch(url)
.then( (res) => {
    res.json().then( (data) => {
        console.log(data.fact);
    })
})
.catch( (err) => {
    console.log(err);
})