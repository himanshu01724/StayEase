import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import { useState } from "react";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>filter/sort</p>
      </Row>
      <CabinTable />
      <Button variation="primary" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Close" : "Add Cabins"}
      </Button>
      {showForm && <CreateCabinForm />}
    </>
  );
}

export default Cabins;
