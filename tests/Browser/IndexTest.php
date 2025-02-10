<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class IndexTest extends DuskTestCase
{

    public function testIndex   (): void
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/')
                    ->assertSee('Szymon Skrzypczyk')
                    ->assertSee('About me')
                    ->assertSee('Experience')
                    ->assertSee('Projects')
                    ->assertSee('Blog')
                    ->assertSee('More posts')
                    ->clickLink('More posts')
                    ->assertPathIs('/posts');
        });
    }
}
