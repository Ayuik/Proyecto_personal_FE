function Testimonials() {
  const testimonials = [
    {
      id_testimonial: "1",
      testimonial_text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem tempora dolores numquam saepe autem natus exercitationem nulla rem eveniet assumenda odio ex velit, possimus repudiandae ducimus eaque nemo. Porro, maiores.",
      testimonial_client_id: {
        id_client: "1",
        client_name: "Mery",
        client_photo: "https://cdn.pixabay.com/photo/2025/03/31/08/17/penguin-9504250_1280.jpg",
      },
    },
    {
      id_testimonial: "2",
      testimonial_text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem tempora dolores numquam saepe autem natus exercitationem nulla rem eveniet assumenda odio ex velit, possimus repudiandae ducimus eaque nemo. Porro, maiores.",
      testimonial_client_id: {
        id_client: "2",
        client_name: "Marlas",
        client_photo: "https://cdn.pixabay.com/photo/2025/03/29/10/59/ryoan-ji-9500830_960_720.jpg",
      },
    },
    {
      id_testimonial: "3",
      testimonial_text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem tempora dolores numquam saepe autem natus exercitationem nulla rem eveniet assumenda odio ex velit, possimus repudiandae ducimus eaque nemo. Porro, maiores.",
      testimonial_client_id: {
        id_client: "3",
        client_name: "Javi",
        client_photo: "https://cdn.pixabay.com/photo/2024/02/25/15/22/daisies-8595971_1280.jpg",
      },
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Lo que dicen mis clientes
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id_testimonial}
            className="bg-black p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <div className="rounded-full overflow-hidden border-4 border-purple-400 shadow-xl w-14 h-14 md:w-30 md:h-30">
                <img
                  src={testimonial.testimonial_client_id.client_photo}
                  alt={testimonial.testimonial_client_id.client_name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="ml-3">
                <h4 className="font-semibold">
                  {testimonial.testimonial_client_id.client_name}
                </h4>
              </div>
            </div>
            <p className="text-gray-300 italic">
              {testimonial.testimonial_text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
