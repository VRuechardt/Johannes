<?php
/**
 * Created by IntelliJ IDEA.
 * User: Valentin
 * Date: 31/07/2016
 * Time: 16:54
 */

if(isset($_FILES['userfile']) && isset($_FILES['userfile']['name']) && isset($_FILES['userfile']['tmp_name'])) {

    $uploaddir = '../../images/';
    $fpath = time() . '.' . pathinfo(basename($_FILES['userfile']['name']))['extension'];
    $uploadfile = $uploaddir . $fpath;
    $userpath = '/images/' . $fpath;

    if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
        http_response_code(201);
        echo '{"path": "'.$userpath.'"}';
    } else {
        http_response_code(400);
    }


} else {
    http_response_code(400);
}
