import { useEffect, useState } from "react";
import Card from "../Components/Card";
import axios from "axios";
import { domain } from "../Store";

export default function ProductPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(domain + "/products")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-full h-auto p-5">
      <div className="flex gap-10 flex-wrap justify-center items-center">
        {data.map((el) => (
          <Card key={el.id} el={el} />
        ))}
      </div>
    </div>
  );
}
