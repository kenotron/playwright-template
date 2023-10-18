export const generateTestDatabaseUrl = (databaseUrl: string) => {
  if (!databaseUrl) {
    throw new Error("please provide a database url");
  }

  const url = new URL(databaseUrl);
  url.searchParams.delete("schema");
  url.searchParams.append("schema", "test");

  return url.toString();
};
