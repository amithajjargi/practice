let div=document.getElementById('root')


let myproducts=[
    {name:'clock',image:'./1.jpg'},
    {name:'camera',image:'./2.jpg'},
    {name:'shirt',image:'./3.jpg'},
    {name:'shoes',image:'./4.jpg'},
    {name:'shoes',image:'./5.jpg'},
    {name:'jeans',image:'./6.jpg'},
    {name:'shirt',image:'./7.jpg'},
    {name:'t-shirt',image:'./8.jpg'},
    {name:'bag',image:'./9.jpg'},
    {name:'cooker',image:'./10..jpeg'},
    {name:'towel',image:'./11.jpg'},
    {name:'pillow',image:'./12.jpg'},
    {name:'mobiles',image:'./13.jpg'},
    {name:'earbuds',image:'./14.jpg'},
    {name:'oneplus',image:'./15.jpg'},
    {name:'video',videos:'./1.mp4'}
    
    
]

function displayProducts(){
   



    myproducts.map((item)=>{
        let image=document.createElement('video')
        image.src=item.videos
        image.style.width="200px"
        image.style.height="200px"
        image.controls=true
        div.appendChild(image)
    })

    myproducts.map((item)=>{
        let image=document.createElement('img')
        image.src=item.image
        image.style.width="200px"
        image.style.height="200px"
        image.controls=true
        div.appendChild(image)
    })
    



}
