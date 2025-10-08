export const MapSection = () => {
  return (
    <section
      id="encuentranos"
      className="bg-gray-50 px-4 py-12 md:px-6 md:py-24 lg:py-32"
    >
      <div className="mb-4 flex flex-col items-center gap-4">
        <span className="inline-block rounded-lg bg-cyan-100 px-3 py-1 text-sm text-cyan-800">
          Ubicanos
        </span>
        <h2 className="text-center text-3xl font-bold tracking-tighter text-cyan-800 sm:text-4xl">
          ¿Dónde puedes encontrarnos?
        </h2>

        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Encuentranos en google maps
        </p>

        <iframe
          className="h-[500px] w-full max-w-6xl rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.926653438446!2d-74.17259299999999!3d4.6071528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9fd87f0e306b%3A0x4924a135813a4a77!2sLuz%20Dent%20-%20Odontolog%C3%ADa%20especializada!5e0!3m2!1sen!2sco!4v1759948436768!5m2!1sen!2sco"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};
