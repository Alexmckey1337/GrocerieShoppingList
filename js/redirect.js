$(document).ready(()=>{
    var id = window.location.href.split('?')[1]
    var name = window.location.href.split('?')[2].replace(/%20/g,' ')
    var username = 'john@groshapp.com'
    var password = 'Jd1234'
    var nameNode = document.querySelector('body > h1')
    var root = document.querySelector('ul')
    nameNode.innerText = name
    $.ajax('https://gr1.compellingsoftware.com/households/'+id+'/current',{
            type: 'GET',
            headers: {
                Authorization: "Basic " + btoa(username + ":" +password),
                }
        }).done((result)=>{
            console.log(result)
            result.forEach(element => {
            element.groceries.forEach(item=>{
                var li = document.createElement('li')
                li.innerHTML = item.name+' | '+'Amount:'+item.amount
                root.appendChild(li)
            })        
        });
            })
})