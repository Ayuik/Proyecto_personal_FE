function Courses (){
    const courses = [
        {
            id_course: 1,
          course_title: "Fundamentos de producción musical",
          course_duration: "60mins",
          course_description: "Descripción del curso 1",
          course_videos: 32,
          course_category_id: "Electrónica para musicos",
          course_price: 99.99,
          course_cover_id: "https://placeholder.pics/svg/384x192/DEDEDE/555555/Curso%201",
        },
        {
            id_course: 2,
          course_title: "Técnicas avanzadas de mezcla",
          course_duration: "1200mins",
          course_description: "Descripción del curso 2",
          course_videos: 24,
          course_category_id: "Masterización",
          course_price: 129.99,
          course_cover_id: "https://placeholder.pics/svg/384x192/DEDEDE/555555/Curso%202",
        },
        {
          id_course: 3,
          course_title: "Masterización profesional",
          course_duration: "30mins",
          course_description: "Descripción del curso 3",
          course_videos: 18,
          course_category_id: "Mixing",
          course_price: 149.99,
          course_cover_id: "https://placeholder.pics/svg/384x192/DEDEDE/555555/Curso%203",
        },
      ]

return (
    <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Cursos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id_course} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow bg-white">
                <div className="h-48 bg-gray-200">
                  <img 
                    src={course.course_cover_id || "/placeholder.svg"}
                    alt={course.course_title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-lg">{course.course_title}</h3>
                    <span className="bg-purple-600 text-white px-3 py-1 text-sm rounded-full">
                      {course.course_category_id}
                    </span>
                  </div>
                  <div className="flex justify-between items-start mb-4">{course.course_description}</div>
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>{course.course_videos} videos</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{course.course_duration}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">${course.course_price.toFixed(2)}</span>
                    <button 
                      onClick={() => addToCart(course)}
                      className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-sm"
                    >
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
)
}

export default Courses