import prisma from '@/lib/prisma';

const getUsers = async () => {
  const users = await prisma.user.findMany({});

  return users;
};

const UsersPage = async () => {
  const users = await getUsers();

  return (
    <div>
      {users?.map((user, index) => (
        <div key={index}>
          <div>
            {user?.firstName} {user?.lastName}
          </div>
          <div>{user?.email}</div>
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
