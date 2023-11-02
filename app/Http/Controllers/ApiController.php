<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\ContactQueries;
use Illuminate\Support\Facades\Validator;
use JWTAuth;

class ApiController extends Controller
{
    public function api_data(){


        $users = User::all();
        var_dump($users);
        $origin = config('cors.allowed_origins')[0];
        return response()->json($users, 200, [
            'Content-Type' => 'application/json',
            'Access-Control-Allow-Origin' => $origin,
            'Access-Control-Allow-Methods' => 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers' => 'Origin, X-Requested-With, Content-Type, Accept',
            'Content-Length' => strlen(json_encode($users)),
        ]);
    }

    public function contact_queries_api(){

        $contact_queries = ContactQueries::all();
        $origin = config('cors.allowed_origins')[0];
        return response()->json($contact_queries, 200, [
            'Content-Type' => 'application/json',
            'Access-Control-Allow-Origin' => $origin,
            'Access-Control-Allow-Methods' => 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers' => 'Origin, X-Requested-With, Content-Type, Accept',
            'Content-Length' => strlen(json_encode($contact_queries)),
        ]);

    }
    public function receiveData(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:users',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Hash the password before storing it in the database
        $data = [
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
        ];

        // Create a new user record
        $user = User::create($data);

        return response()->json(['message' => 'User registered successfully', 'data' => $user], 201);
    }

    public function all_users()
    {
        $users = User::all();
        return response()->json(['Users' => $users], 201);

    }



}
