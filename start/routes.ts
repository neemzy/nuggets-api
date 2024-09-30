/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from "@adonisjs/core/services/router";
const PostsController = () => import("#controllers/posts_controller");

router
  .group(() => {
    router
      .group(() => {
        router.get("/", [PostsController, "get"]);
      })
      .prefix("/posts");
  })
  .prefix("/api");
