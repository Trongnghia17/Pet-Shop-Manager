<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Pet Shop</title>

    <!-- Font-Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <link rel="shortcut icon" href="{{ asset('logo.ico') }}" type="image/x-icon">

    <!-- CSS -->
    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>

<body>
    <div class="app-container">
        <div class="center mt-5">
            <div class="card m-5">
                <div class="card body">
                    <div class="text-center">
                        <img src="https://laravel.com/img/logomark.min.svg" width="200" />
                    </div>
                    <h2 class="mt-3">Pet Shop API</h2>
                    <div class="text-center">
                        <span class="badge badge-info">Laravel 10</span>
                    </div>
                    <hr>
                    <p>API Documentation</p>
                    <div class="card card-body m-2">
                        <div class="row">
                            <div class="col-5">
                                <h4>Authentication Module</h4>
                            </div>
                            <div class="col-7">
                                <ul class="feature-list">
                                    <li>Login API with Token</li>
                                    <li>Authenticated User Profile</li>
                                    <li>Refresh Data</li>
                                    <li>Logout</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="card card-body m-2">
                        <div class="row">
                            <div class="col-5">
                                <h4>Product Module</h4>
                            </div>
                            <div class="col-7">
                                <ul class="feature-list">
                                    <li>Product List</li>
                                    <li>Product List [Public]</li>
                                    <li>Create Product</li>
                                    <li>Edit Product</li>
                                    <li>View Product</li>
                                    <li>Delete Product</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p class="text-center">
                        <a href="{{ route('l5-swagger.default.api') }}" class="btn btn-primary">
                            <i class="fa fa-book"></i>API Documentation
                        </a>
                        <a href="https://github.com/Trongnghia17" target="_blank" class="btn btn-info">
                            <i class="fab fa-github"></i> Github
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
