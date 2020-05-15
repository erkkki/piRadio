<?php
/**
 * Created by PhpStorm.
 * User: erkhe
 * Date: 15.4.2020
 * Time: 0.45
 */

namespace App\Controller\api;

use App\Service\RadioBrowserApi;
use PHPUnit\Util\Json;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;


class RadioBrowserController extends AbstractController
{

    /**
     * @Route("/api/radiobrowser/stations/byvote", name="api_radiobrowser_stations_by_vote")
     * @param RadioBrowserApi $radioBrowserApi
     * @return JsonResponse
     */
    public function stationsByVotes(RadioBrowserApi $radioBrowserApi)
    {
        $stations = $radioBrowserApi->getStationsByVote();
        return $this->json($stations);
    }

    /**
     * @Route("/api/radiobrowser/countries", name="api_radiobrowser_countries")
     * @param RadioBrowserApi $radioBrowserApi
     * @return JsonResponse
     */
    public function countries(RadioBrowserApi $radioBrowserApi)
    {
        $countries = $radioBrowserApi->getCountries();
        return $this->json($countries);
    }

    /**
     * @Route("/api/radiobrowser/genres", name="api_radiobrowser_genres")
     * @param RadioBrowserApi $radioBrowserApi
     * @return JsonResponse
     */
    public function genres(RadioBrowserApi $radioBrowserApi)
    {
        $genres = $radioBrowserApi->getTags();
        return $this->json($genres);
    }


    /**
     * @Route("/api/radiobrowser/station/byid/{id}", name="api_radiobrowser_station_by_id")
     * @param $id
     * @param RadioBrowserApi $radioBrowserApi
     * @return JsonResponse
     */
    public function stationById($id, RadioBrowserApi $radioBrowserApi)
    {
        $station = $radioBrowserApi->getStationsBy('byuuid',$id);
        return $this->json($station);
    }

    /**
     * @Route("/api/radiobrowser/stations/bycountry/{country}", name="api_radiobrowser_stations_by_country")
     * @param $country
     * @param RadioBrowserApi $radioBrowserApi
     * @return JsonResponse
     */
    public function stationsByCountry($country, RadioBrowserApi $radioBrowserApi)
    {
        $stations = $radioBrowserApi->getStationsBy('bycountryexact',$country);
        return $this->json($stations);
    }

    /**
     * @Route("/api/radiobrowser/stations/bytag/{tag}", name="api_radiobrowser_stations_by_tag")
     * @param $tag
     * @param RadioBrowserApi $radioBrowserApi
     * @return JsonResponse
     */
    public function stationsByTag($tag, RadioBrowserApi $radioBrowserApi)
    {
        $stations = $radioBrowserApi->getStationsBy('bytag',$tag);
        return $this->json($stations);
    }
}