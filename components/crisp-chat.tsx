"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("2f7201a1-af5f-473b-a5dd-f64a141e3cab");
  }, [])

  return null;
}