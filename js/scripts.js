$(document).ready(function() {
  // init Isotope
  var $grid = $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });
  $('.filters-categories').on( 'click', 'button', function() {
    let filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    let $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.active').removeClass('active');
      $( this ).addClass('active');
    });
  });

  var $gridC = $('.grid-c').isotope({
    // options
    itemSelector: '.grid-c-item',
    layoutMode: 'fitRows'
  });
  $('.card-categories').on( 'click', 'button', function() {
    let filterValueC = $(this).attr('data-filter');
    $gridC.isotope({ filter: filterValueC });
  });

  // filter with selects and checkboxes
  var $checkboxes = $('.card-categories input');

  $checkboxes.change( function() {
    $('#categoryFilterClear').removeClass('disabled');
    $('#categoryFilterClear').removeClass('btn-outline-secondary');
    $('#categoryFilterClear').addClass('btn-outline-danger');
    // map input values to an array
    var inclusives = [];
    // inclusive filters from checkboxes
    $checkboxes.each( function( i, elem ) {
      // if checkbox, use value if checked
      if ( elem.checked ) {
        inclusives.push( elem.value );
      }
    });

    // combine inclusive filters
    var filterValue = inclusives.length ? inclusives.join(', ') : '*';
    $gridC.isotope({ filter: filterValue })
  });

  $('#categoryFilterClear').click(function() {
    $('.card-categories').find('.active').button('toggle');
    $gridC.isotope({ filter: '*' });
    $('#categoryFilterClear').addClass('disabled');
    $('#categoryFilterClear').addClass('btn-outline-secondary');
    $('#categoryFilterClear').removeClass('btn-outline-danger');
  });
});

