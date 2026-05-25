import { databaseStatus } from "infra/database";

const healthCheck = async (): Promise<Response> => {
  const postgreSQLCheck = await databaseStatus();
  return Response.json(
    {
      webapp: {
        server_message: "Application running...",
      },
      database: postgreSQLCheck,
      status_message: postgreSQLCheck.exit_code === 0 ? "ok" : "error",
    },
    { status: postgreSQLCheck.exit_code === 0 ? 200 : 500 },
  );
};
export default healthCheck;
