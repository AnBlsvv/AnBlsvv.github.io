
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