<?php
/**
 * Created by PhpStorm.
 * User: erkhe
 * Date: 22.5.2020
 * Time: 21.57
 */

namespace App\Controller\api;

use App\Service\RadioBrowserApi;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;


class StationsController  extends AbstractController
{
    /**
     * @Route("/api/radio/stations", name="api_radio_stations")
     * @param RadioBrowserApi $radioBrowserApi
     * @return JsonResponse
     */
    public function index(RadioBrowserApi $radioBrowserApi)
    {
        try {

            $stations = $radioBrowserApi->getStationsByVote();

        } catch (\Exception $e) {

            return $this->json('Error');

        }

        return $this->json($stations);
    }

    /**
     * @Route("/api/radio/stations/by/{by}/{id}", name="api_radio_stations_by")
     * @param $by
     * @param $id
     * @param RadioBrowserApi $radioBrowserApi
     * @return JsonResponse
     */
    public function stationsById($by, $id, RadioBrowserApi $radioBrowserApi)
    {
        try {

            $stations = $radioBrowserApi->getStationsBy($by,$id);

        } catch (\Exception $e) {

            return $this->json('Error');

        }

        return $this->json($stations);
    }

}