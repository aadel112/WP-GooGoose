(function ( $ ) {

    $('div.googoose-wrapper').each(function() {
      
        $(this)[0].innerHTML = $(this)[0].innerHTML.replace(/{%Current Page%}/g, '<span class="googoose currentpage"></span>'); 

        $(this)[0].innerHTML = $(this)[0].innerHTML.replace(/{%Total Pages%}/g, '<span class="googoose totalpage"></span>'); 

        $(this)[0].innerHTML = $(this)[0].innerHTML.replace(/{%Page Break%}/g, '<div class="googoose break"></div>'); 

        $(this).after('<button class="googoose" type="button">MS Word</button><dic class="clearfix"></div>');
        $('button.googoose').css({
            'float': 'right',
            'padding': '10px',
            'margin' : '10px'
        });

        var gg_json = $('.googoose_options').val();
        var gg = JSON.parse( gg_json );
        $('button.googoose').click(function() {
            var t = $(this).prev('div.googoose-wrapper');

            t.googoose({
                initobj: t,
                margin: gg.top_margin + ' ' + gg.right_margin + ' ' + gg.bottom_margin + ' ' + gg.left_margin,
                zoom: gg.zoom,
                size: gg.size,
                headermargin: gg.top_header_margin + ' ' + gg.right_header_margin + ' ' + gg.bottom_header_margin + ' ' + gg.left_header_margin,
                footermargin: gg.top_footer_margin + ' ' + gg.right_footer_margin + ' ' + gg.bottom_footer_margin + ' ' + gg.left_footer_margin
//                 , debug: 1
//                 , finishaction: null
            });
        });
    });

}( jQuery ));
