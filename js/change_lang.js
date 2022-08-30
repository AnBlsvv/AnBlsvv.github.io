/*
$('[lang="ru"]').hide();

$('#lang-switch').change(function () {
  var lang = $(this).val();
  switch (lang) {
    case 'en': 
      $('[lang]').hide();
      $('[lang="en"]').show();
      break;
    case 'ru':
      $('[lang]').hide();
      $('[lang="ru"]').show();
      break;
    default:
      $('[lang]').hide();
      $('[lang="en"]').show();
  }
});

*/

switchEnglish();
var label_var = document.getElementById('dn');

label_var.addEventListener('change', e =>{
  if(e.target.checked === true){
    switchRussian();
  }
  if(e.target.checked === false){
    switchEnglish();
  }
});

function switchEnglish(){
  for (let el of document.querySelectorAll('[lang="ru"]')) el.style.display = 'none';
  for (let el of document.querySelectorAll('[lang="en"]')) el.style.display = 'inline-block';
}

function switchRussian(){
  for (let el of document.querySelectorAll('[lang="ru"]')) el.style.display = 'inline-block';
  for (let el of document.querySelectorAll('[lang="en"]')) el.style.display = 'none';
}