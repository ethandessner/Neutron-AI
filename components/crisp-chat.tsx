"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("e6f2edfb-ffc3-415a-8490-329ff4220cfc");
  }, []);

  return null;
};
