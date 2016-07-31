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
        $res = mysqli_query($link, "SELECT hansi.projects.id, hansi.projects.title, hansi.projects.content, hansi.cover_images.id AS coverID, hansi.cover_images.path FROM hansi.projects, hansi.cover_images WHERE hansi.projects.id = hansi.cover_images.project AND hansi.projects.id = $id");
        $response = array();
        while($row = mysqli_fetch_object($res)) {

            $row->images = array();

            $imgRes = mysqli_query($link, "SELECT * FROM hansi.images WHERE hansi.images.project = $row->id");
            while($imgRow = mysqli_fetch_object($imgRes)) {
                array_push($row->images, $imgRow);
            }

            array_push($response, $row);

        }

        echo json_encode($response[0]);
        http_response_code(200);

    } else {

        // GET all projects
        $res = mysqli_query($link, "SELECT hansi.projects.id, hansi.projects.title, hansi.projects.content, hansi.cover_images.id AS coverID, hansi.cover_images.path FROM hansi.projects, hansi.cover_images WHERE hansi.projects.id = hansi.cover_images.project ORDER BY index ASC");
        $response = array();
        while($row = mysqli_fetch_object($res)) {

            $row->images = array();

            $imgRes = mysqli_query($link, "SELECT * FROM hansi.images WHERE hansi.images.project = $row->id");
            while($imgRow = mysqli_fetch_object($imgRes)) {
                array_push($row->images, $imgRow);
            }

            array_push($response, $row);

        }

        echo json_encode($response);
        http_response_code(200);

    }

}