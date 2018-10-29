/**
 * Created by usamaahmed on 5/18/17.
 */

$(document).ready(function() {
    $('#dataTable').DataTable({
        "order": [[0, "desc"]],
        "bPaginate": true,
        "bLengthChange": true,
        "bFilter": true,
        "bInfo": true,
        "bAutoWidth": true,
        "pageLength": 20
    });
    $('#secondDataTable').DataTable({
        "order": [[0, "desc"]],
        "bPaginate": true,
        "bLengthChange": true,
        "bFilter": true,
        "bInfo": true,
        "bAutoWidth": true,
        "pageLength": 20
    });
    $(document).on('show.bs.modal', function(event) {
        var element = $(event.relatedTarget) // Button that triggered the modal
        console.log('the element', element)
        $('.modal-body').html(element.data('content'));
        $('.modal-title').html(element.data('title'));
        formId = element.data('form_id');
        $('.modal-save').on('click', function () {
            $('#' + formId).submit();
        });
    });
    $('#my_multi_select3').multiSelect();
});
tinymce.init({
    selector: '.tinymce',
    height: 300,
    plugins: 'code print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools  contextmenu colorpicker textpattern help',
    toolbar1: 'code formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
    content_css: [
        '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
        '//www.tinymce.com/css/codepen.min.css'
    ],
    style_formats: [
        { title: 'Headers', items: [
                { title: 'h1', block: 'h1' },
                { title: 'h2', block: 'h2' },
                { title: 'h3', block: 'h3' },
                { title: 'h4', block: 'h4' },
                { title: 'h5', block: 'h5' },
                { title: 'h6', block: 'h6' }
            ] },

        { title: 'Blocks', items: [
                { title: 'p', block: 'p' },
                { title: 'div', block: 'div' },
                { title: 'pre', block: 'pre' }
            ] },

        { title: 'Containers', items: [
                { title: 'section', block: 'section', wrapper: true, merge_siblings: false },
                { title: 'article', block: 'article', wrapper: true, merge_siblings: false },
                { title: 'blockquote', block: 'blockquote', wrapper: true },
                { title: 'hgroup', block: 'hgroup', wrapper: true },
                { title: 'aside', block: 'aside', wrapper: true },
                { title: 'figure', block: 'figure', wrapper: true }
            ] }
    ],
    visualblocks_default_state: true,
    end_container_on_empty_block: true
});



