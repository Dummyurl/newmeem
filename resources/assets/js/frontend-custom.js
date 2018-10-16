$(document).ready(function() {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    // Fix Carousal click
    $('.owl-item img').on('click', function() {
        $('.owl-item li').removeClass('active');
        $(this).addClass('active');
    });

    var language = $('#language').val();
    var name = 'name_' + language;
    console.log('the language is :', language);
    // $(document).on('show.bs.modal', function(event) {
    //     $('.old-price-ql').show();
    //     var product = $(event.relatedTarget) // Button that triggered the modal
    //     $('.old-price-ql').html(product.data('price'));
    //     $('.new-price-ql').html(product.data('saleprice'));
    //     $('.product-heading').html(product.data('name'));
    //     $('.view-details').attr('href', product.data('link'));
    //     $('.product-image').attr('src', product.data('image'));
    //     $('.quick-desc').html(product.data('description'));
    //
    //     // hide the on sale node if the product is not on sale
    //     if (product.data('price') == product.data('saleprice')) {
    //         $('.old-price-ql').hide();
    //     }
    // });
    // when the color changes .. fetch all sizes related according to the product attribute.
    $('#color').on('change', function(e) {
        var product_id = $('#product_id').val();
        var color_id = e.target.value;
        console.log('productid', product_id);
        console.log('color id', color_id);
        $('#size').html('<option value="">select size</option>');
        return axios.get('/api/size', {params: {product_id, color_id}}).then(r =>
            r.data.map(s => {
                console.log('the size', `${s.size[name]}`);
                return $('#size').append(`<option value="${s.size.id}">${s.size[name]}</option>`)
            })).catch(e => console.log(e));
    })
    // when the size changes .. should fetch the qty of the current attribute and inject it in max qty.
    $('#size').on('change', function(e) {
        console.log('the size id ', e.target.value);
        var size_id = e.target.value;
        var color_id = $('#color').val();
        var product_id = $('#product_id').val();
        return axios.get('/api/qty', {
            params: {
                product_id,
                color_id,
                size_id
            }
        }).then(r => {
            $('#qty').attr('maxlength', r.data);
            $('#qty').attr('value', 0);
        }).catch(e => console.log(e));
    });
    $('.qty-increase').on('click', function(e) {
        var max = parseInt($('#qty').attr('maxlength') - 1);
        var currentyQty = parseInt($('#qty').attr('value'));
        var qty = parseInt(currentyQty <= max ? currentyQty + 1 : 1);
        $('#qty').attr('value', qty);
    });

    $('.qty-decrease').on('click', function(e) {
        var currentyQty = parseInt($('#qty').attr('value'));
        var qty = (currentyQty > 0 ? currentyQty - 1 : currentyQty);
        $('#qty').attr('value', qty);
    });
    // was a stupid bug in the original theme related to product gallery in product.show
    $('.nav-tabs').on('click', function() {
        $('.tab-pane').removeClass('show');
    });
});