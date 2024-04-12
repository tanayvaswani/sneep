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

export async function POST(request: Request) {
  const body = await request.json();

  const { username, email, password, firstName, lastName } = await body;

  if (!username || !email || !password || !firstName || !lastName) {
    return NextResponse.json({ message: 'All fields are mandatory' });
  }

  const existingUserCheck = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (existingUserCheck) {
    return NextResponse.json({ message: 'Email might already be in use.' });
  }

  const newUser = await prisma.user.create({
    data: {
      username: username,
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    },
  });

  return NextResponse.json(
    { message: 'User Added!', user: newUser },
    { status: 200 },
  );
}
