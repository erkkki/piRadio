<?php
/**
 * Created by PhpStorm.
 * User: erkhe
 * Date: 15.4.2020
 * Time: 0.40
 */

namespace App\Service;

use Symfony\Component\HttpClient\HttpClient;


class RadioBrowserApi
{
    private $httpClient;
    private $host_url = 'http://nl1.api.radio-browser.info/';

    public function __construct()
    {

        $this->httpClient = HttpClient::create();
        $this->stationsByList = array('byuuid','byname','bynameexact','bycodec','bycodecexact','bycountry','bycountryexact',
            'bycountrycodeexact','bystate','bystateexact','bylanguage','bylanguageexact','bytag','bytagexact');
    }

    public function getCountries($format = 'json')
    {
        $response = $this->httpClient->request('GET', $this->host_url . '/'. $format .'/countries');
        $content = $response->getContent();
        return $content;
    }

    public function getStationsBy($by,$searchterm, $format = 'json', $limit = 100, $offset = 0)
    {
        $order = 'votes';
        $response = $this->httpClient->request('GET', $this->host_url . '/'. $format .'/stations/'. $by .'/' . $searchterm .
            '?limit='. $limit . '&offset=' . $offset . '&order=' . $order . '&reverse=true');
        $content = $response->getContent();
        return $content;
    }

    public function getStationsByVote($count = 100, $format = 'json')
    {
        $response = $this->httpClient->request('GET', $this->host_url . '/'. $format .'/stations/topvote/' . $count);
        $content = $response->getContent();
        return $content;
    }

    public function getTags($format = 'json')
    {
        $response = $this->httpClient->request('GET', $this->host_url . '/'. $format .'/tags');
        $content = $response->getContent();
        return $content;
    }
}