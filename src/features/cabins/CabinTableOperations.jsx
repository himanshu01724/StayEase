import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filteredFiled="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "High Discount" },
          { value: "with-discount", label: "Low Discount" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
