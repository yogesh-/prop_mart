export async function GET() {
  const res = await fetch(
    "https://e5n4y6awknx666s4kp7trhajfu0zhwbh.lambda-url.ap-south-1.on.aws/"
    // "https://qojvk62gs8.execute-api.ap-south-1.amazonaws.com/test/my-fetch-resource"
  );
  const data = await res.json();
  return Response.json({ data });
}
