import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useSWR from "swr";

import { getTodos, addTodo } from "../lib/api";


export default function App() {
  const [text, setText] = useState("");
  const { data, mutate } = useSWR("/api/todos", getTodos);

  return (
    <div>
      <Toaster toastOptions={{ position: "bottom-center" }} />
      <h1 style={{ marginBottom: "2rem"}}>{data}</h1>
      <h3 style={{ marginTop: "1em"}}>Todos </h3>
      <form style={{display: "flex", margin: "8px", gap: "8px"}} onSubmit={(ev) => ev.preventDefault()}>
        <input style={{flex: "1", padding: "6px 5px "}}
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus 
        />
        <button style={{padding: "6px 5px "}}
          type="submit"
          onClick={async () => {
            setText("");

            const newTodo = {
              id: Date.now(),
              text,
            };

            try {
              // Update the local state immediately and fire the
              // request. Since the API will return the updated
              // data, there is no need to start a new revalidation
              // and we can directly populate the cache.
              await mutate(addTodo(newTodo), {
                optimisticData: [...data, newTodo],
                rollbackOnError: true,
                populateCache: true,
                revalidate: false,
              });
              toast.success("Successfully added the new item.");
            } catch (e) {
              // If the API errors, the original data will be
              // rolled back by SWR automatically.
              toast.error("Failed to add the new item.");
            }
          }}
        >
          Add
        </button>
      </form>
      <ul style={{ textAlign: "left", listStyle: "none", padding: "0"}}>
        {data
          ? data.map((todo) => {
              return (
                <li
                  style={{
                    margin: "8px",
                    padding: "10px",
                    borderRadius: "4px",
                    boxShadow:
                      "0 2px 6px rgba(0, 0, 0, 0.12), 0 0 0 1px #ededed",
                  }}
                  key={todo.id}
                >
                  {todo.text}
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
}
