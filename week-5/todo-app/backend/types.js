const zod = require("zod");

/**
 * The zod types required :
 *
 * For the /todos post endpoint :
 * {
 *    title: string,
 *    description: string
 * }
 *
 * For the /completed put endpoint :
 * {
 *    id: string
 * }
 */

const createTodoSchema = zod.object({
  title: zod.string({ required_error: "Title of Todo required" }),
  description: zod.string({ required_error: "Description of Todo required" }),
});

const updateTodoSchema = zod.object({
  id: zod.string({ required_error: "ID of todo to be completed required" }),
});

module.exports = {
  createTodoSchema: createTodoSchema,
  updateTodoSchema: updateTodoSchema,
};
