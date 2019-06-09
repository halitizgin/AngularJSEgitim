<?php
$method = $_SERVER['REQUEST_METHOD'];
if ($method == "GET"){
    $get = $_GET;
    $get['method'] = $method;
    print_r($get);
}
else if ($method == "POST"){
    $post = $_POST;
    $post['method'] = $method;
    print_r($post);
}
else if ($method == "PUT"){
    parse_str(file_get_contents('php://input'), $PUT);
    $PUT['method'] = $method;
    print_r($PUT);
}
else if ($method == "DELETE"){
    parse_str(file_get_contents('php://input'), $DELETE);
    $DELETE['method'] = $method;
    print_r($DELETE);
}