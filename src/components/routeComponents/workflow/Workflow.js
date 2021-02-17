import React, { useContext } from "react";
import { MenuContext } from "../../../contexts/MenuContext";
import { WorkflowWrapper } from "./style";

const Workflow = () => {
  const { open } = useContext(MenuContext);

  return <WorkflowWrapper open={open}>workflow here</WorkflowWrapper>;
};

export default Workflow;
