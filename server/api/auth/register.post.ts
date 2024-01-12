import bcrypt from "bcrypt";
import { User } from "~/server/models/User";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body.email || !body.username || !body.password) {
    throw createError({
      statusCode: 400,
      statusMessage: "bad Request",
      message: "Missing required Fields",
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hasedPassword = await bcrypt.hash(body.password, salt);

  const user = await User.create({ ...body, password: hasedPassword });
  return { ...user.toObject(), password: undefined };
});
