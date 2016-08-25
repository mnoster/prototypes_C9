<?php
session_start();

$username = $_POST['username'];
$password = $_POST['password'];
$encrypted_pass = sha1($password);
$user_info = [
    ['id' => '1', 'username' => 'bellabee', 'password' => sha1('etter')],
    ['id' => '2', 'username' => 'handlerman', 'password' => sha1('quest554')],
    ['id' => '3', 'username' => 'jasperjase', 'password' => sha1('peood')],
    ['id' => '4', 'username' => 'hesterman', 'password' => sha1('fostern')],
    ['id' => '5', 'username' => 'nochyboss', 'password' => sha1('4234')],
];

foreach ($user_info as $user) {
    if ($username != $user['username'] || $encrypted_pass != $user['password']){
        $output = array('success' => false);
        $output_string = json_encode($output);
        print ($output_string);
        return;
    }

    if ($username == $user['username'] && $encrypted_pass == $user['password']) {
        $_SESSION['user_id'] = $user['id'];
        if (!empty($_SESSION['user_id'])) {
            $output = array('success' => true, 'user_id' => $_SESSION['user_id'], 'message' => 'Welcome!');
            $output_string = json_encode($output);
            echo ($output_string);
            return;
        }
    }
}

?>

