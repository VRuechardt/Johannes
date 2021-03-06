<?php
/**
 * Created by IntelliJ IDEA.
 * User: Valentin
 * Date: 31/07/2016
 * Time: 16:00
 */

require('../intern/api/config.php');

if($_SERVER['REQUEST_METHOD'] == 'GET') {

    if(isset($_GET['id']) && is_numeric($_GET['id'])) {

        $id = $_GET['id'];

        // GET one project
        $res = mysqli_query($link, "SELECT projects.id, projects.title, projects.content, projects.index, cover_images.id AS coverID, cover_images.path FROM projects, cover_images WHERE projects.id = cover_images.project AND projects.id = $id");
        $response = array();
        while($row = mysqli_fetch_object($res)) {

            $row->images = array();

            $imgRes = mysqli_query($link, "SELECT * FROM images WHERE images.project = $row->id ORDER BY id ASC");
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

}