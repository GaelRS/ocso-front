import deleteEmployee from "@/actions/employees/delete";
import { Button } from "@heroui/react";
import { LuTrash } from "react-icons/lu";

export default function DeleteEmployee({ id }: { id: string }) {
  const DeleteEmployeeById = deleteEmployee.bind(null, id);
  return (
    <form action={DeleteEmployeeById}>
      <Button type="submit" color="danger">
        <LuTrash size="20" />
      </Button>
    </form>
  );
}
