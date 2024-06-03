import { comments } from "../data";
import { redirect } from "next/navigation";

export async function GET(_request, { params }) {
  const { id } = params;
  if (parseInt(id) > comments.length) {
    redirect("/comments");
  }

  const comment = comments.find((comment) => comment.id === parseInt(id));
  if (!comment) return new Response("No comment found with your id");
  return new Response(JSON.stringify(comment));
}

export async function PATCH(request, { params }) {
  const { id } = params;
  const body = await request.json();

  const { text } = body;

  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  comments[index].text = text;

  return Response.json(comments[index]);
}

export async function DELETE(_request, { params }) {
  const { id } = params;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));

  const comment = comments[index];

  comments.splice(index, 1);

  return Response.json(comment);
}
