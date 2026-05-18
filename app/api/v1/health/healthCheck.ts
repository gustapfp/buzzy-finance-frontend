import { databaseHealthCheck } from "infra/database";

const healthCheck = async () => {
  const postgreSQLCheck = await databaseHealthCheck();
  return Response.json(
    {
      status: "ok",
      message: {
        nodeServer: "Application running...",
        postgreSQL: postgreSQLCheck.db_response,
      },
    },
    {
      status: postgreSQLCheck.exit_code === 0 ? 200 : 500,
    },
  );
};
export default healthCheck;
