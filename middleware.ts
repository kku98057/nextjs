import { NextRequest, NextResponse } from "next/server";

// 모든경로에서 다 실행
export default function middleWare(request: NextRequest) {
  console.log("미들웨어가 실행중");
  if (request.nextUrl.pathname.startsWith("/products/1004")) {
    console.log("미들웨어가 경로를 리다이렉팅함");

    return NextResponse.redirect(new URL("/products", request.url));
  }
}

// 특정 경로에서의 실행
export const config = {
  matcher: ["/products/468"],
};
