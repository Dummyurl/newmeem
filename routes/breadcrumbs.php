<?php

// Home
Breadcrumbs::for('backend.home', function ($trail) {
    $trail->push('Home', route('backend.home'));
});

Breadcrumbs::for('backend.index', function ($trail) {
    $trail->push('Home', route('backend.home'));
});

// Home > About
Breadcrumbs::for('backend.user.index', function ($trail) {
    $trail->parent('backend.home');
    $trail->push('user', route('backend.user.index'));
});


// Home > Blog
Breadcrumbs::for('backend.product.index', function ($trail) {
    $trail->parent('backend.home');
    $trail->push('products', route('backend.product.index'));
});

Breadcrumbs::for('backend.attribute.index', function ($trail) {
    $trail->parent('backend.product.index');
//    $trail->push('products', route('backend.product.index'));
});


Breadcrumbs::for('backend.tag.index', function ($trail) {
    $trail->parent('backend.home');
    $trail->push('tags', route('backend.tag.index'));
});

Breadcrumbs::for('backend.color.index', function ($trail) {
    $trail->parent('backend.home');
    $trail->push('color', route('backend.color.index'));
});

Breadcrumbs::for('backend.size.index', function ($trail) {
    $trail->parent('backend.home');
    $trail->push('size', route('backend.size.index'));
});

Breadcrumbs::for('backend.country.index', function ($trail) {
    $trail->parent('backend.home');
    $trail->push('country', route('backend.country.index'));
});

Breadcrumbs::for('backend.gallery.index', function ($trail) {
    $trail->parent('backend.home');
    $trail->push('gallery', route('backend.gallery.index'));
});

Breadcrumbs::for('backend.role.index', function ($trail) {
    $trail->parent('backend.home');
    $trail->push('role', route('backend.role.index'));
});

Breadcrumbs::for('backend.setting.index', function ($trail) {
    $trail->parent('backend.home');
    $trail->push('setting', route('backend.setting.index'));
});

Breadcrumbs::for('backend.order.index', function ($trail) {
    $trail->parent('backend.home');
    $trail->push('order', route('backend.order.index'));
});

Breadcrumbs::for('backend.currency.index', function ($trail) {
    $trail->parent('backend.home');
    $trail->push('currency', route('backend.currency.index'));
});

Breadcrumbs::for('backend.coupon.index', function ($trail) {
    $trail->parent('backend.home');
    $trail->push('coupon', route('backend.coupon.index'));
});

Breadcrumbs::for('backend.slider.index', function ($trail) {
    $trail->parent('backend.home');
    $trail->push('slider', route('backend.slider.index'));
});

Breadcrumbs::for('backend.page.index', function ($trail) {
    $trail->parent('backend.home');
    $trail->push('page', route('backend.page.index'));
});



Breadcrumbs::for('backend.attribute.create', function ($trail,$element) {
    $trail->parent('backend.attribute.index');
    $trail->push('create attribute', route('backend.attribute.create',['id' => $element->id]));
});

Breadcrumbs::for('backend.attribute.edit', function ($trail, $element) {
    $trail->parent('backend.attribute.index');
    $trail->push('edit attribute', route('backend.attribute.edit', $element->id));
});

Breadcrumbs::for('backend.product.create', function ($trail) {
    $trail->parent('backend.product.index');
    $trail->push('create product', route('backend.product.create'));
});

Breadcrumbs::for('backend.product.edit', function ($trail, $element) {
    $trail->parent('backend.product.index');
    $trail->push('edit product', route('backend.product.edit', $element->id));
});


Breadcrumbs::for('backend.color.create', function ($trail) {
    $trail->parent('backend.color.index');
    $trail->push('create color', route('backend.color.create'));
});

Breadcrumbs::for('backend.color.edit', function ($trail, $element) {
    $trail->parent('backend.color.index');
    $trail->push('edit color', route('backend.color.edit', $element->id));
});


Breadcrumbs::for('backend.size.create', function ($trail) {
    $trail->parent('backend.size.index');
    $trail->push('create size', route('backend.size.create'));
});

Breadcrumbs::for('backend.size.edit', function ($trail, $element) {
    $trail->parent('backend.size.index');
    $trail->push('edit size', route('backend.size.edit', $element->id));
});

Breadcrumbs::for('backend.country.create', function ($trail) {
    $trail->parent('backend.country.index');
    $trail->push('create country', route('backend.country.create'));
});

Breadcrumbs::for('backend.country.edit', function ($trail, $element) {
    $trail->parent('backend.country.index');
    $trail->push('edit country', route('backend.country.edit', $element->id));
});

Breadcrumbs::for('backend.tag.create', function ($trail) {
    $trail->parent('backend.tag.index');
    $trail->push('create tag', route('backend.tag.create'));
});

Breadcrumbs::for('backend.tag.edit', function ($trail, $element) {
    $trail->parent('backend.tag.index');
    $trail->push('edit tag', route('backend.tag.edit', $element->id));
});

Breadcrumbs::for('backend.user.create', function ($trail) {
    $trail->parent('backend.user.index');
    $trail->push('create user', route('backend.user.create'));
});

Breadcrumbs::for('backend.user.edit', function ($trail, $element) {
    $trail->parent('backend.user.index');
    $trail->push('edit user', route('backend.user.edit', $element->id));
});

Breadcrumbs::for('backend.gallery.create', function ($trail) {
    $trail->parent('backend.gallery.index');
    $trail->push(request()->type, route('backend.' . request()->type . '.index'));
    return $trail->push('create gallery', route('backend.gallery.create', ['type' => request()->type, 'element_id' => request()->element_id]));
});

Breadcrumbs::for('backend.gallery.edit', function ($trail, $element) {
    $trail->parent('backend.gallery.index');
    $className = strtolower(class_basename($element->galleryable));
    $trail->push($className, route('backend.' . $className . '.index'));
    return $trail->push('edit gallery', route('backend.gallery.edit', ['id' => $element->id, 'type' => $className, 'element_id' => $element->galleryable->id]));

});


Breadcrumbs::for('backend.currency.edit', function ($trail, $element) {
    $trail->parent('backend.currency.index');
    return $trail->push('edit currency', route('backend.currency.edit',$element->id));
});




Breadcrumbs::for('backend.image.edit', function ($trail, $element) {
    $trail->parent('backend.gallery.edit', $element->gallery);
    return $trail->push('edit image', route('backend.image.edit', $element->id));
});


// Home > Blog > [Category]
Breadcrumbs::for('category', function ($trail, $category) {
    $trail->parent('blog');
    $trail->push($category->title, route('category', $category->id));
});

// Home > Blog > [Category] > [Post]
Breadcrumbs::for('post', function ($trail, $post) {
    $trail->parent('category', $post->category);
    $trail->push($post->title, route('post', $post->id));
});