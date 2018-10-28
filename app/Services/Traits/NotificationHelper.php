<?php

namespace App\Services\Traits;
/**
 * Created by PhpStorm.
 * User: usama
 * Date: 9/27/18
 * Time: 1:18 PM
 */
trait NotificationHelper
{
    function notify($message, $ids = [], $data = [])
    {
        $content = array(
            "en" => $message,
            'ar' => $message
        );
        $fields = array(
            'app_id' => env('ONE_SIGNAL_APP_ID'),
            'included_segments' => array('Active Users'),
//            'data' => $data,
            'contents' => $content,
        );

        $fields = json_encode($fields);

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "https://onesignal.com/api/v1/notifications");
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json; charset=utf-8',
            'Authorization: Basic ' . env('ONE_SIGNAL_REST_ID')));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
        curl_setopt($ch, CURLOPT_HEADER, FALSE);
        curl_setopt($ch, CURLOPT_POST, TRUE);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);

        $response = curl_exec($ch);
        curl_close($ch);
        return $response;
//        $return["allresponses"] = $response;
//        $return = json_encode($return);
//
//        print("\n\nJSON received:\n");
//        print($return);
//        print("\n");
//        dd('stop here');
    }
}