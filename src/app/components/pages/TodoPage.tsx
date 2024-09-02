"use client";
import axios from "axios";
import scss from "./TodoPage.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";

interface TodoType {
  _id?: number;
  title: string;
  url: string;
  isCompleted: boolean;
}

// const UPLOAD_URL = process.env.NEXT_PUBLIC_URL;

const TodoPage = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const fechTodo = async () => {
    try {
      const { data } = await axios.get(
        `https://api.elchocrud.pro/api/v1/5adaaf39ef5d73f6d255d4ed889723a2/mk11`
      );
      setTodos(data);
      console.log(data);
    } catch (error) {
      console.error("product error", error);
    }
  };

  useEffect(() => {
    fechTodo();
  }, []);
  return (
    <>
      <section className={scss.Start}></section>
      <section className={scss.TodoList}>
        <div className="container">
          <div className={scss.TodoText}>
            <h1>Choose Your Fighter</h1>
            <p>New and returning fan-favorite characters</p>
          </div>
          <div className={scss.content}>
            {todos.map((item) => (
              <div key={item._id!} className={scss.card}>
                <Link href={`/item/${item._id}`}>
                  <img src={item.url} alt={item.title} />
                </Link>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={scss.trey}>
        <div className="container">
          <div className={scss.content}>
            <h1>Mortal Kombat 11 Trailer</h1>
            <iframe
              className={scss.video}
              src="https://www.youtube.com/embed/brHz9ldJnNI"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default TodoPage;
