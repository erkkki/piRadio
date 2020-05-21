<?php
/**
 * Created by PhpStorm.
 * User: erkhe
 * Date: 15.4.2020
 * Time: 0.40
 */

namespace App\Service;

use PHPUnit\Exception;
use Symfony\Component\HttpClient\HttpClient;


class RadioBrowserApi
{
    private $httpClient;
    private $host_url = 'http://nl1.api.radio-browser.info/';
    private $format = 'json';

    public function __construct()
    {
        $this->httpClient = HttpClient::create(['headers' => [
            'User-Agent' => $_SERVER['APP_NAME'].'/'.$_SERVER['APP_VER'],
        ]]);
    }

    private function get($url)
    {
        try {
            $response = $this->httpClient->request('GET',$this->host_url . $this->format . "/" . $url);
            $headers = $response->getHeaders();
        } catch (\Exception $e) {
            return 'Error on connecting to radio api.';
        }

        $content = $response->toArray();
        return $content;
    }

    public function getCountries()
    {
        $url = 'countries';
        $countries = $this->get($url);
        return $countries;
    }

    public function getStationsBy($by, $searchterm, $limit = 100, $offset = 0)
    {
        $order = 'votes';
        $url = 'stations/'. $by .'/' . $searchterm . '?limit='. $limit . '&offset=' . $offset . '&order=' . $order . '&reverse=true';
        $stations = $this->get($url);
        return $stations;
    }

    public function getStationsByVote($count = 100)
    {
        $url = 'stations/topvote/' . $count;
        $stations = $this->get($url);
        return $stations;
    }

    public function getTags()
    {
        $url = 'tags';
        $tags = $this->get($url);
        return $tags;
    }
}