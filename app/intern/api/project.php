<?php
/**
 * Created by IntelliJ IDEA.
 * User: Valentin
 * Date: 31/07/2016
 * Time: 16:00
 */

require('./config.php');


if($_SERVER['REQUEST_METHOD'] == 'POST') {

    // CREATE project
    $json = file_get_contents('php://input');
    $obj = json_decode($json);

    try {

        if($obj->title && $obj->content && $obj->singleImage && count($obj->moreImages) > 0) {

            mysqli_query($link, "INSERT INTO projects (title, content, `index`) VALUES ('$obj->title','$obj->content', $obj->index)");
            $project = mysqli_insert_id($link);

            mysqli_query($link, "INSERT INTO cover_images (path, project) VALUES ('$obj->singleImage', $project)");

            for($i = 0; $i < count($obj->moreImages); $i++) {
                $curr = $obj->moreImages[$i];
                mysqli_query($link, "INSERT INTO images (path, project) VALUES ('$curr', $project)");
            }

            http_response_code(201);

        } else {

            http_response_code(400);

        }

    } catch(Exception $e) {

        http_response_code(400);

    }
    


} else if($_SERVER['REQUEST_METHOD'] == 'GET') {

    if(isset($_GET['id']) && is_numeric($_GET['id'])) {

        $id = $_GET['id'];

        // GET one project
        $res = mysqli_query($link, "SELECT projects.id, projects.title, projects.content, projects.index, cover_images.id AS coverID, cover_images.path FROM projects, cover_images WHERE projects.id = cover_images.project AND projects.id = $id");
        $response = array();
        while($row = mysqli_fetch_object($res)) {

            $row->images = array();

            $imgRes = mysqli_query($link, "SELECT * FROM images WHERE images.project = $row->id");
            while($imgRow = mysqli_fetch_object($imgRes)) {
                array_push($row->images, $imgRow);
            }

            array_push($response, $row);

        }

        echo json_encode($response[0]);
        http_response_code(200);

    } else {

        // GET all projects
        $res = mysqli_query($link, "SELECT projects.id, projects.title, projects.content, projects.index, cover_images.id AS coverID, cover_images.path FROM projects, cover_images WHERE projects.id = cover_images.project ORDER BY projects.index ASC");
        $response = array();
        while($row = mysqli_fetch_object($res)) {

            $row->images = array();

            $imgRes = mysqli_query($link, "SELECT * FROM images WHERE images.project = $row->id");
            while($imgRow = mysqli_fetch_object($imgRes)) {
                array_push($row->images, $imgRow);
            }

            array_push($response, $row);

        }

        echo json_encode($response);
        http_response_code(200);

    }

} else if($_SERVER['REQUEST_METHOD'] == 'PUT') {

    // UPDATE project

    $json = file_get_contents('php://input');
    $obj = json_decode($json);

    try {

        if($obj->title && $obj->content && $obj->path && count($obj->images) > 0 && is_numeric($obj->id)) {

            mysqli_query($link, "UPDATE projects SET title = '$obj->title', content = '$obj->content', `index` = $obj->index WHERE id = $obj->id");

            mysqli_query($link, "DELETE FROM cover_images WHERE project = $obj->id");
            mysqli_query($link, "DELETE FROM images WHERE project = $obj->id");

            mysqli_query($link, "INSERT INTO cover_images (path, project) VALUES ('$obj->path', $obj->id)");

            for($i = 0; $i < count($obj->images); $i++) {
                $curr = $obj->images[$i]->path;
                mysqli_query($link, "INSERT INTO images (path, project) VALUES ('$curr', $obj->id)");
            }

            http_response_code(200);

        } else {

            http_response_code(400);

        }

    } catch(Exception $e) {

        http_response_code(400);

    }


} else if($_SERVER['REQUEST_METHOD'] == 'DELETE') {

    if(is_numeric($_GET["id"])) {

        $id = $_GET["id"];

        mysqli_query($link, "DELETE FROM cover_images WHERE project = $id");
        mysqli_query($link, "DELETE FROM images WHERE project = $id");
        mysqli_query($link, "DELETE FROM projects WHERE id = $id");

        http_response_code(200);

    } else {

        http_response_code(400);

    }

}