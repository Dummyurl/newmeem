<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Http\Request;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class sendReturnOrder extends Mailable
{
    use Queueable, SerializesModels;
    public $request;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.order-return')->with([
            'name' => $this->request['name'],
            'email' => $this->request['email'],
            'mobile' => $this->request['mobile'],
            'order_no' => $this->request['order_no'],
            'purchase_date' => $this->request['purchase_date'],
            'address' => $this->request['address'],
            'notes' => $this->request['notes'],
        ])->subject('Order Return Request');
    }
}
