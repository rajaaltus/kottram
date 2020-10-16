export default function ({ $http, env }, inject) {
  const $hasura = $http.create({
    prefixUrl: env.API_HASURA_URL,
    headers: {
      "x-hasura-admin-secret": "raja98424",
    },
  });

  inject("hasura", $hasura.$post.bind($hasura, ""));
}
