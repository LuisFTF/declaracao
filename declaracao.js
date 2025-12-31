// Compatível com jQuery e com JavaScript puro
function _openContainer(){
  var c = document.querySelector('.container');
  if(c) c.classList.add('open');
}
function _closeContainer(){
  var c = document.querySelector('.container');
  if(c) c.classList.remove('open');
}

document.addEventListener('DOMContentLoaded', function(){
  var title = document.querySelector('.title');
  var closeBtn = document.querySelector('.endtext .close') || document.querySelector('.close');
  if(title) title.addEventListener('click', _openContainer);
  if(closeBtn) closeBtn.addEventListener('click', _closeContainer);

  // Se jQuery estiver presente, conecta também (evita dependência completa)
  if(window.jQuery){
    jQuery(function($){
      $('.title').off('click.declaracao').on('click.declaracao', _openContainer);
      $('.close').off('click.declaracao').on('click.declaracao', _closeContainer);
    });
  }
});
