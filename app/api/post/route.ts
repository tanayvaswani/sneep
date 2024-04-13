import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { description, code } = body;

    const post = await prisma.post.create({
      data: {
        author: {
          connect: {
            id: 11,
          },
        },
        description: description,
        code: code,
      },
    });

    return NextResponse.json(post);
  } catch (e) {
    console.error(`Error submitting form from server side: `, e);
  }
}
