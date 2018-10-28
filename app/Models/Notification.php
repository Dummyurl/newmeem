<?php

namespace App\Models;

class Notification extends PrimaryModel
{
    protected $guarded = [''];

    /**
     * MorphRelation
     * many HasOne Relation
     * reverse
     * @return \Illuminate\Database\Eloquent\Relations\MorphTo
     */
    public function notifiable()
    {
        return $this->morphTo();
    }
}
