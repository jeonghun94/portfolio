import React, { useEffect } from "react";
import type { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/router";
import useMutation from "../libs/useMutation";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const router = useRouter();
  const [getUser, { loading, data }] = useMutation("/api/user");
  useEffect(() => {
    getUser();
  }, []);

  return loading ? null : (
    <div>
      <h1>Welcome {data?.name}!</h1>
      <h3>Your email is: {data?.email}</h3>
    </div>
  );
};
