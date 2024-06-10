import React from "react";
import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  const [isOPenModal, setIsOPenModal] = useState(false);
  return (
    <div>
      <Button variation="primary" onClick={() => setIsOPenModal(!isOPenModal)}>
        {isOPenModal ? "Close" : "Add Cabins"}
      </Button>
      {isOPenModal && (
        <Modal onClose={() => setIsOPenModal(false)}>
          {<CreateCabinForm onClose={() => setIsOPenModal(false)} />}
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
