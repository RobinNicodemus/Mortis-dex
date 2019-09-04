//rewritten pokedex code comes here
var deadRepository = (function($) {
  //immediate stuff here
  var repository = [];
  var apiUrl = 'https://rickandmortyapi.com/api/character/?status=dead';

  function add(mortuus){
    if (typeof(mortuus) === 'object') {
				repository.push(mortuus);
      } else {
        console.log('Please add an object');
      }
  }

  function getAll() {
    return repository;
  }

  function addListItem(mortuusObj) {
    //append a <li> with a <button> inside:
    $('#data-list').append('<li class="mortuus-list__item"><button class="list-item__button"></button></li>');
    //set button text and functionality:
    $('.list-item__button').last()
      .text(mortuusObj.name);
      .click(function(event){
        showDetails(mortuusObj);
      });
  }

  function loadList() {
    $.ajax(apiUrl, {
      method: 'GET',
      dataType: 'json',
      timeout: 4000
    }).then(function(response){
      console.log(resonse);
    }).catch(function(err){
      console.log('Sorry! Error: '+ err.statusText)
    });
  }

  function loadDetails() {

  }

  function showDetails(mortuusObj) {
    loadDetails(mortuusObj).then(function() {
			console.log(mortuusObj);
			showModal(mortuusObj);
  }

  function showModal(mortuusObj) {
    $('#modal-container')
      .empty()
      .append('<div class="modal"></div>')
      .children('modal')
          .append('<h2 class="modal-title"></h2>')
          .append('<img class="modal-img">')
          .append('<p></p>')
  }

  function hideModal() {

  }
  //two EventListeners here in original

  $(document).ready(function(){
  //here comes stuff that depends on the DOM
  });

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  }
})(jQuery);
