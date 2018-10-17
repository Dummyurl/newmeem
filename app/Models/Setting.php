<?php

namespace App\Models;


class Setting extends PrimaryModel
{
    protected $localeStrings = ['company','address','country'];
    protected $guarded = [''];
}
