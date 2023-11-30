import { Context, Env } from "hono";

const linkMovie = async (context: Context<Env, "/lambda/link-movie", {}>) => {
  const body = await context.req.json();
  console.log(body);

  return context.text("Todo ok...");
};

export { linkMovie };
