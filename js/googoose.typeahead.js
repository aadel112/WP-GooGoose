jQuery(document).ready(function() {
    var substringMatcher = function(strs) {
      return function findMatches(q, cb) {
        var matches, substringRegex;

        // an array that will be populated with substring matches
        matches = [];

        // regex used to determine if a string contains the substring `q`
        substrRegex = new RegExp(q, 'i');

        // iterate through the pool of strings and for any string that
        // contains the substring `q`, add it to the `matches` array
        jQuery.each(strs, function(i, str) {
          if (substrRegex.test(str)) {
            matches.push(str);
          }
        });

        cb(matches);
      };
    };

    var margins = [];
    for( var i = 0; i < 10; ++i ) {
        for( var j = 0; j < 100; ++j ) {
            margins.push( i.toString() + '.' + j.toString() + 'in' );
        }
    }

    var sizes = [
        'Letter (8.5in x 11in)', 'Tabloid (11in x 17in)', 'Legal (8.5in x 14in)',
        'Executive (7.5in x 10.5in)', 'A3 (11.69in x 16.54in)', 'A4 (8.27in x 11.69in)', 
        'B4 (10.12in x 14.33in)', 'B5 (7.17in x 10.12in)', 'Envelope #10 (4.12in x 9.5in)',
        'Envelope Monarch (3.88in x 7.5in)'
    ];

    var zooms = [];
    for( var i = 5; i < 500; ++i ) {
        if( i % 5 === 0 ) {
            zooms.push( i.toString() + '%' );
        }
    }
    
    // sizes
    jQuery('.sizes.typeahead').typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    },
    {
      name: 'sizes',
      source: substringMatcher(sizes)
    }); 

    //zooms
    jQuery('.zooms.typeahead').typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    },
    {
      name: 'zooms',
      source: substringMatcher(zooms)
    });

    //margins
    jQuery('.margins.typeahead').typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    },
    {
      name: 'margins',
      source: substringMatcher(margins)
    });

});
