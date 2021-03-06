import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    orm.getMigrator().up();

    // const post = await orm.em.create(Post, {
    //     title: "U fucking stupid moron!!!",
    // });
    // await orm.em.persistAndFlush(post);
    const posts = await orm.em.find(Post, {});
    console.log(posts);
};

main().catch((e) => console.log(e));
