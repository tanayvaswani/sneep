import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { userId: string } },
) {
  const user = await prisma.user.findUnique({
    where: {
      id: Number(params.userId),
    },
  });

  return NextResponse.json({ user });
}
