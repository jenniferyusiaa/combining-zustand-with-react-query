import { User } from "../types/user";

export type GetUsersFilters = {
  limit: number;
  page: number;
};

export const getUsers = async (filters?: GetUsersFilters) => {
  // Do something cool with the filters

  console.log(filters);

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [{ id: 1, name: "keyshaard" }] as User[];
};
