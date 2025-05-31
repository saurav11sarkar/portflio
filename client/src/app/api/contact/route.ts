import { NextResponse } from "next/server";

interface IContactRequest {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as IContactRequest;

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }
    return NextResponse.json({ success: true, message: "Success" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
