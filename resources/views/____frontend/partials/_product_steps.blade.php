<div class="mt-element-step">
    <div class="row step-default">
        <div class="col-md-4 bg-grey mt-step-col {{ Route::currentRouteName() === 'backend.product.create' ? 'active' : null  }}">
            <div class="mt-step-number bg-white font-grey">1</div>
            <div class="mt-step-title uppercase font-grey-cascade">Create Product</div>
            <div class="mt-step-content font-grey-cascade">products</div>
        </div>
        <div class="col-md-4 bg-grey mt-step-col {{ Route::currentRouteName() === 'backend.attribute.create' ? 'active' : null  }}">
            <div class="mt-step-number bg-white font-grey">2</div>
            <div class="mt-step-title uppercase font-grey-cascade">Add Attribute</div>
            <div class="mt-step-content font-grey-cascade">different Colors , Sizes , Qunatities for each product</div>
        </div>
        <div class="col-md-4 bg-grey mt-step-col {{ Route::currentRouteName() === 'backend.gallery.create' ? 'active' : null  }}">
            <div class="mt-step-number bg-white font-grey">3</div>
            <div class="mt-step-title uppercase font-grey-cascade">Create Gallery</div>
            <div class="mt-step-content font-grey-cascade">Create Gallery For Your Product</div>
        </div>
    </div>
    <br/>
    <br/>
</div>
<br>