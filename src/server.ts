import Fastify from "fastify";

const app = Fastify();

app.get('/', () => {
    return "hellow world";
});

app.listen({
    port: 3333
});