import { useState, useEffect } from "react";
import { getWorks } from "../services/worksapi";
import { Link } from "react-router-dom"; 

function Works() {
/* const [works, setWorks] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        
          const data = await getWorks();
          setWorks(data);
        
      };
      fetchData();
    }, [getWorks]); */

  const works = [
    {
      id_work: 1,
      work_tittle: "Proyecto 1",
      work_link:"",
      work_description: "Descripción del proyecto 1",
      work_tag_id: [
        { id_tag: 1, tag_name: "Tag 1" },
        { id_tag: 2, tag_name: "Tag 2" },
      ],
    },
    {
        id_work: 3,
      work_tittle: "Proyecto 2",
      work_link:"",
      work_description: "Descripción del proyecto 2",
      work_tag_id: [
        { id_tag: 3, tag_name: "Tag 3" },
        { id_tag: 4, tag_name: "Tag 4" },
      ],
    },
    {
        id_work: 4,
        work_tittle: "Proyecto 2",
        work_link:"",
        work_description: "Descripción del proyecto 2",
        work_tag_id: [
          { id_tag: 3, tag_name: "Tag 3" },
          { id_tag: 4, tag_name: "Tag 4" },
        ],
      },
      {
        id_work: 5,
        work_tittle: "Proyecto 2",
        work_link:"",
        work_description: "Descripción del proyecto 2",
        work_tag_id: [
          { id_tag: 3, tag_name: "Tag 3" },
          { id_tag: 4, tag_name: "Tag 4" },
        ],
      },
      {
        id_work: 6,
        work_tittle: "Proyecto 2",
        work_link:"",
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
        {works.map((work) => (
          <div
            key={work.id_work}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">{work.work_tittle}</h3>
              <p className="text-gray-700 mb-4">{work.work_description}</p>
              <a
                href={work.work_link}
                className="px-2 py-1 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors inline-block"
              >
                Ver proyecto
              </a>
              <div className="flex flex-wrap gap-2 mt-2">
                {work.work_tag_id.map((tag) => (
                  <span
                    key={tag.id_tag}
                    className="px-3 py-1 bg-purple-500 text-sm rounded-full"
                  >
                    {tag.tag_name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
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

export default Works
