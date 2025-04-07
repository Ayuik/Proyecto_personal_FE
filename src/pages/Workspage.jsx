import WorksCards from "../components/WorksCards";

function WorksPage() {
  /* const [allWorks, setAllWorks] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        
          const data = await getWorks();
          setAllWorks(data);
        
      };
      fetchData();
    }, [getWorks]); */

  const allWorks = [
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
    {
      id_work: 5,
      work_tittle: "Proyecto 2",
      work_link: "",
      work_description: "Descripción del proyecto 2",
      work_tag_id: [
        { id_tag: 3, tag_name: "Tag 3" },
        { id_tag: 4, tag_name: "Tag 4" },
      ],
    },
    {
      id_work: 6,
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
    <>
      <section className="py-20 bg-gradient-to-b from-purple-400 to-purple-600">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Trabajos destacados
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <WorksCards works={allWorks} />
          </div>
        </div>
      </section>
    </>
  );
}

export default WorksPage;
