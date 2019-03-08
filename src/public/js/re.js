function checkForm(event) {
    event.preventDefault();
    var ername = document.getElementById('exampleInputEmail1').value;
    var pass = document.getElementById('exampleInputPassword1').value;
    $.ajax({
        url: 'http://localhost:3000/adduser',
        type: 'POST',
        data: {
            username: ername,
            password: pass
        },
        accepts: {
            mycustomtype: 'application/x-some-custom-type'
        },
    }).done((htmle)=>{
        console.log(htmle);
    })
    console.log(ername)
    console.log(pass)

}