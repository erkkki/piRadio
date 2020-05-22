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
use Symfony\Component\Cache\Adapter\MemcachedAdapter;


class RadioBrowserApi
{
    private $httpClient;
    private $cache;
    private $host_url = 'http://nl1.api.radio-browser.info/';
    private $format = 'json';

    public function __construct()
    {
        $this->httpClient = HttpClient::create(['headers' => [
            'User-Agent' => $_SERVER['APP_NAME'].'/'.$_SERVER['APP_VER'],
        ]]);
        try {
            $this->cache = MemcachedAdapter::createConnection(
                'memcached://localhost:11211'
            );
        } catch (\Exception $e) {
            $this->cache = false;
        }

    }

    private function get($url)
    {

        // If all ready in Memcached return cache value

        if($this->cache) {

            $item = $this->cache->get($url);

            if($item) {
                return $item;
            }

        }

        // Else get from api & save to Memcached
        try {
            $response = $this->httpClient->request('GET',$this->host_url . $this->format . "/" . $url);

            // Getting headers to throw exception and make sure it's ok.
            $headers = $response->getHeaders();

        } catch (\Exception $e) {
            return 'Error on connecting to radio api.';
        }

        $content = $response->toArray();

        // Save to Memcached
        if($this->cache) {
            $this->cache->add($url, $content, 60);
        }
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