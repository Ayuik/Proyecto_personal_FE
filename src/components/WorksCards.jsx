function WorksCards({ works }) {
    return ( 
        <>
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
          </>
        );
    }

export default WorksCards