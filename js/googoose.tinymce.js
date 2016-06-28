(function() {
    if( typeof tinymce == 'undefined' ) 
        return;
    tinymce.create('tinymce.plugins.wp_googoose', {
        init : function(ed, url) {
            ed.addButton('Googoosify', {
                title : 'Googoosify',
                cmd : 'Googoosify',
                image : url + '/images/goose.png'
            });
 
            ed.addButton('Googoose_Header', {
                title : 'Googoose Header',
                cmd : 'Googoose_Header',
                image : url + '/images/goose-header.png'
            });
            ed.addButton('Googoose_Footer', {
                title : 'Googoose Footer',
                cmd : ' Googoose_Footer',
                image : url + '/images/goose-footer.png'
            });
            ed.addButton('Googoose_Current_Page_Number', {
                title : 'Googoose Current Page Number',
                cmd : 'Googoose_Current_Page_Number',
                image : url + '/images/goose-current-page.png'
            });
            ed.addButton('Googoose_Total_Page_Count', {
                title : 'Googoose Total Page Count',
                cmd : 'Googoose_Total_Page_Count',
                image : url + '/images/goose-total-page.png'
            });
            ed.addButton('Googoose_Add_Page_Break', {
                title : 'Googoose Add Page Break',
                cmd: 'Googoose_Add_Page_Break',
                image : url + '/images/goose-page-break.png'
            });

            ed.addCommand('Googoosify', function() {
                var selected_text = ed.getContent();
                var return_text = '';
                var t = jQuery('<div>' + selected_text + '</div>');
                t.find('div.googoose-wrapper').contents().unwrap().end().end();
                return_text = '<div class="googoose-wrapper">' + t[0].innerHTML + '</div>';
                ed.setContent(return_text);
            });
           
            ed.addCommand('Googoose_Header', function() {


                var selected_text = ed.selection.getContent();
                var return_text = '';
                return_text = '<div id="googoose-header" class="googoose header nounwrap">' + selected_text + '</div>';
                ed.execCommand('mceInsertContent', 0, return_text);

                var tc = ed.getContent();
                var t = jQuery('<div>' + tc + '</div>');
                t.find('div.googoose.header').not('.nounwrap').contents().unwrap().end().end();
                t.find('div.googoose.header').removeClass('nounwrap').end();
                ed.setContent(t[0].innerHTML); 
            
            });
        
            ed.addCommand('Googoose_Footer', function() {
                var selected_text = ed.selection.getContent();
                var return_text = '';
                return_text = '<div  id="googoose-footer" class="googoose footer">' + selected_text + '</div>';
                ed.execCommand('mceInsertContent', 0, return_text);


                var tc = ed.getContent();
                var t = jQuery('<div>' + tc + '</div>');
                t.find('div.googoose.footer').not('.nounwrap').contents().unwrap().end().end();
                t.find('div.googoose.footer').removeClass('nounwrap').end();
                ed.setContent(t[0].innerHTML); 
            
            });
            ed.addCommand('Googoose_Current_Page_Number', function() {
                var selected_text = ed.selection.getContent();
                var return_text = '';
                return_text = '{%Current Page%}';
                ed.execCommand('mceInsertContent', 0, return_text);
            });
            ed.addCommand('Googoose_Total_Page_Count', function() {
                var selected_text = ed.selection.getContent();
                var return_text = '';
                return_text = '{%Total Pages%}';
                ed.execCommand('mceInsertContent', 0, return_text);
            });
            ed.addCommand('Googoose_Add_Page_Break', function() {
                var selected_text = ed.selection.getContent();
                var return_text = '';
                return_text = '{%Page Break%}';
                ed.execCommand('mceInsertContent', 0, return_text);
            });

        }
    });
    // Register plugin
    tinymce.PluginManager.add( 'wp_googoose', tinymce.plugins.wp_googoose );
})( jQuery );
