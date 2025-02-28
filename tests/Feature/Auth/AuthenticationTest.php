<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AuthenticationTest extends TestCase
{
    use RefreshDatabase;

    public function test_login_screen_can_be_rendered(): void
    {
        $this->markTestSkipped("Test skipped due to the fact that the login screen is not included in the release.");
        // since the login screen is not included in the release, 404 should be returned
        $response = $this->get('/login');

        $response->assertStatus(404);
    }

    public function test_users_can_authenticate_using_the_login_screen(): void
    {
        $this->markTestSkipped("Test skipped due to the fact that the login screen is not included in the release.");

        $user = User::factory()->create();

        $response = $this->post('/login', [
            'email' => $user->email,
            'password' => 'password',
        ]);

        $this->assertAuthenticated();
        $response->assertRedirect(route('dashboard', absolute: false));
    }

    public function test_users_can_not_authenticate_with_invalid_password(): void
    {
        $this->markTestSkipped("Test skipped due to the fact that the login screen is not included in the release.");
        $user = User::factory()->create();

        $this->post('/login', [
            'email' => $user->email,
            'password' => 'wrong-password',
        ]);

        $this->assertGuest();
    }

    public function test_users_can_logout(): void
    {
        $this->markTestSkipped("Test skipped due to the fact that the login screen is not included in the release.");
        $user = User::factory()->create();

        $response = $this->actingAs($user)->post('/logout');

        $this->assertGuest();
        $response->assertRedirect('/');
    }
}
