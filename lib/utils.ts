import bcrypt from 'bcrypt';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import prisma from '@/lib/prisma';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function saltAndHashPassword(password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);

  return hashedPassword;
}

export async function getUserFromDb(email: string, hashedPassword: string) {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (user) {
    const isPasswordRight = await bcrypt.compare()
  }
}
