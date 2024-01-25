<?php

namespace App\Http\Controllers\Api\Frontend;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    //
    public function index()
    {

        $users = User::all(); //::where()->orderBy()->get();

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'users' => $users],

            200

        );
    }

      public function register(Request $request)
        {
            // $user=DB::table("user")->insert([
            //     "name"=>$request->name,
            //     "email"=>$request->email,
            //     "phone"=>$request->phone,
            //     "address"=>$request->address,
            //     "password"=>$request->password,
            //     "roles"=>$request->role,
            //     "status"=>1
            // ]);
         return response()->json(
                ['success' => true, 'message' => 'Đăng ký thành công', 'user' => $user],
                200
            );
        }
        public function login(Request $request)
           {
            $args = [
                ['email', '=',$request->email],
                ['password', '=',$request->password],
                ['status','=',1]
            ];
            $user = User::where($args) -> count();

            if($user===1){
                return response()->json(
                    [
                        'success' => true,
                        'message' => 'Đăng nhập thành công',
                        'user' => $user
                    ],
                    200
                );
            }else{
                return response()->json(
                    [
                        'success' => false,
                        'message' => 'Đăng nhập không thành công',
                        'user' => $user
                    ],
                    200
                );
            }

    
           }

           
}
