$(document).ready(()=>{
    console.log('ready')
    console.log('making request')
    var username = 'john@groshapp.com'
    var password = 'Jd1234'
    var url = 'https://gr1.compellingsoftware.com/users/me/households'
    var root = document.querySelector('#root ul')
    $.ajax(url,{
        type: 'GET',
        async:false,
        headers: {
            Authorization: "Basic " + btoa(username + ":" +password),
            }
    }).done((result)=>{

        document.querySelector('h1').innerText = ''+ result[0].adminName
        result.forEach(element => {
            var li = document.createElement('li')
            li.innerHTML= element.name+' '+'Size is:'+element.size
            li.dataset.id = element.id
            li.dataset.name = element.name
            li.className =li.className + 'groceryListItem'
            root.appendChild(li)
        });
    })
    document.querySelector('ul').addEventListener('click',(e)=>{
        var target = e.target
        console.log(target.dataset.id)
        window.location.href = 'listdetails.html?'+target.dataset.id+'?'+target.dataset.name
    })

})