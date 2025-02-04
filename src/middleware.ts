import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest){

    const cookieStore = cookies();
    const token = (await cookieStore).get('meu-cookie');
    const {pathname, origin} = request.nextUrl;
    
    if(!token){
        return NextResponse.redirect(new URL(origin));
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/admin/:path*',
}