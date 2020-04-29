<?php
/**
 * Created by PhpStorm.
 * User: erkhe
 * Date: 19.2.2020
 * Time: 1.37
 */

namespace App\Tests\Service;

use App\Entity\Station;
use App\Entity\Genre;
use App\Service\TuneinApi;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;


class TuneinApiTest extends WebTestCase
{
    public function testGetGenres()
    {
        self::bootKernel();
        /** @var TuneinApi $tuneinApi */
        $tuneinApi = self::$container->get('App\Service\TuneinApi');

        $genres = $tuneinApi->getGenres();

        $this->assertIsArray($genres);

        foreach ($genres as $genre){
            $this->assertInstanceOf(Genre::class, $genre);
        }
    }

    public function testGetLocalStations()
    {
        self::bootKernel();
        /** @var TuneinApi $tuneinApi */
        $tuneinApi = self::$container->get('App\Service\TuneinApi');

        $stations = $tuneinApi->getLocalStations();

        $this->assertIsArray($stations);

        foreach ($stations as $station){
            $this->assertInstanceOf(Station::class, $station);
        }
    }

    public function testGetStationsByGenre()
    {
        self::bootKernel();
        /** @var TuneinApi $tuneinApi */
        $tuneinApi = self::$container->get('App\Service\TuneinApi');

        $genres = $tuneinApi->getGenres();
        $stations = $tuneinApi->getStationByGenre($genres[0]->getGuideId(),0);

        $this->assertIsArray($stations);

        foreach ($stations as $station){
            $this->assertInstanceOf(Station::class, $station);
        }
    }
}