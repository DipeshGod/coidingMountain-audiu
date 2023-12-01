import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const uploadedData = await prisma.audioUploads.create({
      data: {
        fileName: data.fileTitle,
        uploadedByUser: data.userId,
        fileUrl: data.uploadedFileUrl,
      },
    });
    return NextResponse.json({
      msg: "created successfully",
      data: uploadedData,
    });
  } catch (err) {
    return new Response(null, {
      status: 500,
      statusText: "something went wrong",
    });
  }
}
