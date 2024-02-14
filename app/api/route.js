export async function GET() {
  const res = await fetch(
    "https://e5n4y6awknx666s4kp7trhajfu0zhwbh.lambda-url.ap-south-1.on.aws/"
  );
  const data = await res.json();
  console.log("from data", data);
  return Response.json({ data });
}
