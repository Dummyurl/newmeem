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

Breadcrumbs::for('backend.product.trashed', function ($trail) {
    $trail->parent('backend.product.index');
    $trail->push('trashed', route('backend.product.trashed'));
});


Breadcrumbs::for('backend.product.restore', function ($trail) {
    $trail->parent('backend.product.index');
    $trail->push('restore product', route('backend.product.restore'));
});

Breadcrumbs::for('backend.attribute.index', function ($trail) {
    $trail->parent('backend.product.index');
//    $trail->push('products', route('backend.product.index'));
});

Breadcrumbs::for('backend.category.index', function ($trail) {
    $trail->parent('backend.home');
    $trail->push('categories', route('backend.category.index'));
});

Breadcrumbs::for('backend.tag.index', function ($trail) {
    $trail->parent('backend.home');
    $trail->push('tags', route('backend.tag.index'));
});

Breadcrumbs::for('backend.brand.index', function ($trail) {
    $trail->parent('backend.home');
    $trail->push('brands', route('backend.brand.index'));
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

Breadcrumbs::for('backend.order.show', function ($trail, $element) {
    $trail->parent('backend.order.index');
    $trail->push('order details', route('backend.order.show', $element));
});

Breadcrumbs::for('backend.page.index', function ($trail) {
    $trail->parent('backend.home');
    $trail->push('page', route('backend.page.index'));
});

Breadcrumbs::for('backend.term.index', function ($trail) {
    $trail->parent('backend.home');
    $trail->push('term', route('backend.term.index'));
});

Breadcrumbs::for('backend.faq.index', function ($trail) {
    $trail->parent('backend.home');
    $trail->push('faq', route('backend.faq.index'));
});

Breadcrumbs::for('backend.policy.index', function ($trail) {
    $trail->parent('backend.home');
    $trail->push('policy', route('backend.policy.index'));
});


Breadcrumbs::for('backend.aboutus.index', function ($trail) {
    $trail->parent('backend.home');
    $trail->push('aboutus', route('backend.aboutus.index'));
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



Breadcrumbs::for('backend.attribute.create', function ($trail, $element) {
    $trail->parent('backend.attribute.index');
    $trail->push('create attribute', route('backend.attribute.create', ['id' => $element->id]));
});

Breadcrumbs::for('backend.attribute.edit', function ($trail, $element) {
    $trail->parent('backend.attribute.index');
    $trail->push('edit attribute', route('backend.attribute.edit', $element->id));
});


Breadcrumbs::for('backend.coupon.create', function ($trail) {
    $trail->parent('backend.coupon.index');
    $trail->push('create coupon', route('backend.coupon.create'));
});

Breadcrumbs::for('backend.coupon.edit', function ($trail, $element) {
    $trail->parent('backend.coupon.index');
    $trail->push('edit coupon', route('backend.coupon.edit', $element->id));
});

Breadcrumbs::for('backend.product.create', function ($trail) {
    $trail->parent('backend.product.index');
    $trail->push('create product', route('backend.product.create'));
});

Breadcrumbs::for('backend.product.edit', function ($trail, $element) {
    $trail->parent('backend.product.index');
    $trail->push('edit product', route('backend.product.edit', $element->id));
});

Breadcrumbs::for('backend.setting.edit', function ($trail, $element) {
    $trail->parent('backend.setting.index');
    $trail->push('edit settings', route('backend.setting.edit', $element->id));
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

Breadcrumbs::for('backend.brand.create', function ($trail) {
    $trail->parent('backend.brand.index');
    $trail->push('create brand', route('backend.brand.create'));
});

Breadcrumbs::for('backend.brand.edit', function ($trail, $element) {
    $trail->parent('backend.brand.index');
    $trail->push('edit brand', route('backend.brand.edit', $element->id));
});

Breadcrumbs::for('backend.reset.password', function ($trail) {
    $trail->parent('backend.user.index');
});

Breadcrumbs::for('backend.user.create', function ($trail) {
    $trail->parent('backend.user.index');
    $trail->push('create user', route('backend.user.create'));
});

Breadcrumbs::for('backend.user.edit', function ($trail, $element) {
    $trail->parent('backend.user.index');
    $trail->push('edit user', route('backend.user.edit', $element->id));
});


Breadcrumbs::for('backend.slider.create', function ($trail) {
    $trail->parent('backend.slider.index');
    $trail->push('create slider', route('backend.slider.create'));
});

Breadcrumbs::for('backend.slider.edit', function ($trail, $element) {
    $trail->parent('backend.slider.index');
    $trail->push('edit slider', route('backend.slider.edit', $element->id));
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

Breadcrumbs::for('backend.category.create', function ($trail) {
    $trail->parent('backend.category.index');
    $trail->push('create category', route('backend.category.create'));
});

Breadcrumbs::for('backend.category.edit', function ($trail, $element) {
    $trail->parent('backend.category.index');
    $trail->push('edit category', route('backend.category.edit', $element->id));
});

Breadcrumbs::for('backend.aboutus.create', function ($trail) {
    $trail->parent('backend.aboutus.index');
    $trail->push('create aboutus', route('backend.aboutus.create'));
});

Breadcrumbs::for('backend.aboutus.edit', function ($trail, $element) {
    $trail->parent('backend.aboutus.index');
    $trail->push('edit aboutus', route('backend.aboutus.edit', $element->id));
});

Breadcrumbs::for('backend.page.create', function ($trail) {
    $trail->parent('backend.page.index');
    $trail->push('create page', route('backend.page.create'));
});

Breadcrumbs::for('backend.page.edit', function ($trail, $element) {
    $trail->parent('backend.page.index');
    $trail->push('edit page', route('backend.page.edit', $element->id));
});

Breadcrumbs::for('backend.term.create', function ($trail) {
    $trail->parent('backend.term.index');
    $trail->push('create term', route('backend.term.create'));
});

Breadcrumbs::for('backend.term.edit', function ($trail, $element) {
    $trail->parent('backend.term.index');
    $trail->push('edit term', route('backend.term.edit', $element->id));
});

Breadcrumbs::for('backend.faq.create', function ($trail) {
    $trail->parent('backend.faq.index');
    $trail->push('create faq', route('backend.faq.create'));
});

Breadcrumbs::for('backend.faq.edit', function ($trail, $element) {
    $trail->parent('backend.faq.index');
    $trail->push('edit faq', route('backend.faq.edit', $element->id));
});


Breadcrumbs::for('backend.policy.create', function ($trail) {
    $trail->parent('backend.policy.index');
    $trail->push('create policy', route('backend.policy.create'));
});

Breadcrumbs::for('backend.policy.edit', function ($trail, $element) {
    $trail->parent('backend.policy.index');
    $trail->push('edit policy', route('backend.policy.edit', $element->id));
});


Breadcrumbs::for('backend.currency.create', function ($trail) {
    $trail->parent('backend.currency.index');
    $trail->push('create currency', route('backend.currency.create'));
});

Breadcrumbs::for('backend.currency.edit', function ($trail, $element) {
    $trail->parent('backend.currency.index');
    return $trail->push('edit currency', route('backend.currency.edit', $element->id));
});


Breadcrumbs::for('backend.image.edit', function ($trail, $element) {
    $trail->parent('backend.gallery.edit', $element->gallery);
    return $trail->push('edit image', route('backend.image.edit', $element->id));
});

Breadcrumbs::for('backend.package.index', function ($trail) {
    $trail->parent('backend.home');
    return $trail->push('package index', route('backend.package.index'));
});

Breadcrumbs::for('backend.package.create', function ($trail) {
    $trail->parent('backend.package.index');
    return $trail->push('create package', route('backend.package.create'));
});

Breadcrumbs::for('backend.package.edit', function ($trail, $element) {
    $trail->parent('backend.package.index');
    return $trail->push('edit package', route('backend.package.edit', $element->id));
});

Breadcrumbs::for('backend.branch.index', function ($trail) {
    $trail->parent('backend.home');
    return $trail->push('branch index', route('backend.branch.index'));
});

Breadcrumbs::for('backend.branch.create', function ($trail) {
    $trail->parent('backend.branch.index');
    return $trail->push('create branch', route('backend.branch.create'));
});

Breadcrumbs::for('backend.branch.edit', function ($trail, $element) {
    $trail->parent('backend.branch.index');
    return $trail->push('edit branch', route('backend.branch.edit', $element->id));
});



