export function buildDatabaseUrl(params: {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
}): string {
  return `postgresql://${params.user}:${params.password}@${params.host}:${params.port}/${params.database}?schema=public`;
}
