import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./api/user";
import { useUserStore } from "./state/userStore";

const App = () => {
  const { filters } = useUserStore();

  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(filters),
  });

  return (
    <div>
      <FilterComponent />
      {data?.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};
export default App;

const FilterComponent = () => {
  const { setFilters } = useUserStore();
  console.log(setFilters);

  return <input type="text" />;
};
