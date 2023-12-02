import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const findAudio = await prisma.audioUploads.findUnique({
      where: { id: Number(data.id) },
    });

    if (!findAudio) {
      return new Response(null, { status: 400, statusText: "audio not found" });
    }

    const updatedAudio = await prisma.audioUploads.update({
      where: {
        id: Number(data.id),
      },
      data: {
        totalNumberOfPlays: findAudio?.totalNumberOfPlays + 1,
      },
    });
    return NextResponse.json({
      msg: "audioplays increased",
      data: updatedAudio,
    });
  } catch (err) {
    return new Response(null, {
      status: 500,
      statusText: "something went wrong",
    });
  }
}
