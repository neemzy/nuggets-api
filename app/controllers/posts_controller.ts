import { errors } from "@adonisjs/core";
import { inject } from "@adonisjs/core";
import db from "@adonisjs/lucid/services/db";
import type { HttpContext, Request } from "@adonisjs/core/http";

const PER_PAGE = 20;

export default class PostsController {
  async get(ctx: HttpContext) {
    const pageParam = ctx.request.qs().page;
    const page = Number.parseInt(pageParam);

    if (![undefined, ""].includes(pageParam) && (Number.isNaN(page) || page < 1)) {
      throw404(ctx.request);
    }

    const posts = await db.from("posts").paginate(page || 1, PER_PAGE);

    if (posts.lastPage < page) {
      throw404(ctx.request);
    }

    return posts;
  }
}

function throw404(request: Request) {
  throw new errors.E_ROUTE_NOT_FOUND([request.method(), request.url()]);
}
