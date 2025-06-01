export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/click") {
      const getRandomConsequenceStatement = env.DB.prepare(
        "SELECT * FROM consequences ORDER BY RANDOM() LIMIT 1;"
      );

      const response = await getRandomConsequenceStatement.run();

      return Response.json({ consequence: response.results[0].text });
    }

    return new Response(null, { status: 404 });
  },
} satisfies ExportedHandler<Env>;
