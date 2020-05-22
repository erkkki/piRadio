<?php
/**
 * Created by PhpStorm.
 * User: erkhe
 * Date: 22.5.2020
 * Time: 21.01
 */

namespace App\Tests\Controller\Api;


use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class RadioControllerTest extends WebTestCase
{
    public function testIndex(): void
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/api/radio');

        $this->assertResponseIsSuccessful();

        $this->assertTrue(
            $client->getResponse()->headers->contains(
                'Content-Type',
                'application/json'
            ),
            'the "Content-Type" header is "application/json"' // optional message shown on failure
        );
    }

    public function testGenres(): void
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/api/radio/genres');

        $this->assertResponseIsSuccessful();

        $this->assertTrue(
            $client->getResponse()->headers->contains(
                'Content-Type',
                'application/json'
            ),
            'the "Content-Type" header is "application/json"' // optional message shown on failure
        );
    }

    public function testCountries(): void
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/api/radio/countries');

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