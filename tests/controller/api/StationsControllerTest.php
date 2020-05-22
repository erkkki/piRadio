<?php
/**
 * Created by PhpStorm.
 * User: erkhe
 * Date: 22.5.2020
 * Time: 22.00
 */

namespace App\Tests\Controller\Api;


use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class StationControllerTest extends WebTestCase
{
    public function testIndex(): void
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/api/radio/stations');

        $this->assertResponseIsSuccessful();

        $this->assertTrue(
            $client->getResponse()->headers->contains(
                'Content-Type',
                'application/json'
            ),
            'the "Content-Type" header is "application/json"' // optional message shown on failure
        );
    }

    public function testStationsById(): void
    {
        $client = static::createClient();
        $crawler = $client->request('GET','/api/radio/stations/by/country/Finland');

        $this->assertResponseIsSuccessful();

        $this->assertTrue(
            $client->getResponse()->headers->contains(
                'Content-Type',
                'application/json'
            ),
            'the "Content-Type" header is "application/json"' // optional message shown on failure
        );
    }


}