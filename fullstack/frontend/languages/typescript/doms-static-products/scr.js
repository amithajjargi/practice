let div=document.getElementById('root')


let myproducts=[
    {name:'jacket',Image:'./1.jpg'},
    {name:'watch',Image:'./2.jpg'},
    {name:'jacket',Image:'./3.jpg'},
    {name:'shorts',Image:'./4.jpg'},
    {name:'watch',Image:'./5.jpg'},
    {name:'cap',Image:'./6.jpg'},
    {name:'mobile',Image:'./7.jpg'},
    {name:'mobile',Image:'./8.jpg'},
    {name:'bag',Image:'./9.jpg'},
    {name:'bag',Image:'./10.jpg'},
    {name:'shoes',Image:'./11.jpg'},
    {name:'pant',Image:'./12.jpg'},
    {name:'cooker',Image:'./13.jpg'},
    {name:'belt',Image:'./14.jpg'},
    {name:'cycle',Image:'./15.jpg'},
    {name:'helmet',Image:'./16.jpg'},
    {name:'bedsheets',Image:'./17.jpg'}
]

function displayproducts(){

myproducts.map((item)=>{
    let Image=document.createElement('img')
Image.src=item.Image
Image.style.width="200px"
div.appendChild(image)
})



}