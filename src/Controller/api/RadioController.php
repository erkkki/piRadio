<?php
/**
 * Created by PhpStorm.
 * User: erkhe
 * Date: 22.5.2020
 * Time: 21.14
 */

namespace App\Controller\api;

use App\Service\RadioBrowserApi;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class RadioController extends AbstractController
{
    /**
     * @Route("/api/radio", name="api_radio")
     * @return JsonResponse
     */
    public function index()
    {
        return $this->json(true);
    }

    /**
     * @Route("/api/radio/genres", name="api_radio_genres")
     * @param RadioBrowserApi $radioBrowserApi
     * @return JsonResponse
     */
    public function genres(RadioBrowserApi $radioBrowserApi)
    {
        try {

            $genres = $radioBrowserApi->getTags();

        } catch (\Exception $e) {

            return $this->json('Error');

        }

        return $this->json($genres);
    }

    /**
     * @Route("/api/radio/countries", name="api_radio_countries")
     * @param RadioBrowserApi $radioBrowserApi
     * @return JsonResponse
     */
    public function countries(RadioBrowserApi $radioBrowserApi)
    {
        try {

            $countries = $radioBrowserApi->getCountries();

        } catch (\Exception $e) {

            return $this->json('Error');

        }

        return $this->json($countries);
    }
}