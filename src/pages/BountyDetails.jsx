import React from "react";
import { useParams } from "react-router-dom";

export default function BountyDetails() {
  let params = useParams();

  return (
    <div className="flex justify-center items-center h-screen">
        <h1>Bounty Details - {params.id} </h1>
    </div>
  );
}
