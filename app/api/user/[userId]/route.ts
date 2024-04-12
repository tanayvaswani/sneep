import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { userId: string } },
) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(params.userId),
      },
      include: {
        posts: true,
      },
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found!' });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error('Error fetching user: ', error);
  }
}
