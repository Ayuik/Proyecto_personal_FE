import { useState, useEffect } from "react";
import { getWorks } from "../services/worksapi";
import { Link } from "react-router-dom";
import WorksCards from "./WorksCards";

function Works() {
  /* const [someWorks, setSomeWorks] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        
          const data = await getWorks();
          setSomeWorks(data.slice(0, 3));
        
      };
      fetchData();
    }, [getWorks]); */

  const someWorks = [
    {
      id_work: 1,
      work_tittle: "Proyecto 1",
      work_link: "",
      work_description: "Descripción del proyecto 1",
      work_tag_id: [
        { id_tag: 1, tag_name: "Tag 1" },
        { id_tag: 2, tag_name: "Tag 2" },
      ],
    },
    {
      id_work: 3,
      work_tittle: "Proyecto 2",
      work_link: "",
      work_description: "Descripción del proyecto 2",
      work_tag_id: [
        { id_tag: 3, tag_name: "Tag 3" },
        { id_tag: 4, tag_name: "Tag 4" },
      ],
    },
    {
      id_work: 4,
      work_tittle: "Proyecto 2",
      work_link: "",
      work_description: "Descripción del proyecto 2",
      work_tag_id: [
        { id_tag: 3, tag_name: "Tag 3" },
        { id_tag: 4, tag_name: "Tag 4" },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Trabajos destacados
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <WorksCards works={someWorks} />
      </div>
      <div className="text-center mt-12">
        <Link
          to="/workspage"
          className="px-6 py-3 border border-purple-400 text-purple-400 rounded-md hover:bg-purple-900 hover:bg-opacity-30 transition-colors inline-block"
        >
          Ver todos los trabajos
        </Link>
      </div>
    </div>
  );
}

export default Works;
