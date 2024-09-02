"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import scss from "./ItemDetail.module.scss";
import Link from "next/link";

interface TodoType {
  _id?: string;
  title: string;
  url: string;
  want: string;
  description: string;
  isCompleted: boolean;
}

const ItemDetail: React.FC = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const { id } = useParams();

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

  const findProduct = todos.find((el) => el._id == id);
  console.log(findProduct);

  useEffect(() => {
    fechTodo();
  }, []);

  return (
    <>
      <section className={scss.ItemDetail}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.card}>
              <div className={scss.cardImg}>
                <img src={findProduct?.url} alt="" />
              </div>
              <div className={scss.cardText}>
                <div className={scss.tegh1}>
                  <h1>{findProduct?.title}</h1>
                </div>
                <h3>{findProduct?.want}</h3>
                <div className={scss.tegp}>
                  <div className={scss.line}></div>
                  <p>{findProduct?.description}</p>
                  <div className={scss.line}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={scss.TodoList}>
        <div className="container">
          <div className={scss.cards}>
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
    </>
  );
};

export default ItemDetail;
