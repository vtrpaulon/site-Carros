//alert('javascript funcionando!');

//RECUPERANDO O EMAIL ENVIADO
let btnSubmit = document.getElementById('btn-submit');
btnSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    let inputEmail = document.getElementById('email').value;
    let inputCarroPreferido = document.querySelector('input[name="carroPreferido"]:checked').value;

    let select = document.getElementById('tipocarros');
    let value = select.options[select.selectedIndex].value;


    /*let inputTipoPreferido = document.getElementById('tipocarro').value;
    inputTipoPreferido = select.options[select.selectedIndex].value;*/

    let inputCor = document.querySelector('input[name="corCarro"]:checked').value;
    alert('O email '+inputEmail+' prefere '+inputCarroPreferido+' do tipo '+value+' e da cor '+inputCor);
})