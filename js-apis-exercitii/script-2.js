async function getPosts() {
  const response = fetch("https://jsonplaceholder.typicode.com/posts/1");
  //   daca scoatem /1 vom primi mai multe postari
  const post = (await response).json();

  console.log(post);
}

// metoda de a adauga un post

async function addPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      name: "test",
      description: "test",
    }),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await response.json();
  console.log(data);
}

getPosts();
addPost();
