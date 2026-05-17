const healthCheck = () => {
  return Response.json({ status: "ok", message: "Aplication running..." }, { status: 200 });
};
export default healthCheck;
