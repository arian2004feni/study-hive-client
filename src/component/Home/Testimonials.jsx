import React from "react";

const Testimonials = () => {
  return (
    <section>
      <div className="xl:max-w-10/12 max-lg:container mx-auto my-16 rounded-lg z-10">
        <h1 className="text-center text-heading">
          &mdash; Testimonials &mdash;
        </h1>
        <h3 className="text-center text-heading text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          What Our Users Say
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          <div className="card card_hover">
            <div className="card-body">
            <p className="p-8 bg-gray-100 rounded-lg shadow">
                "StudyHive has transformed the way I study. The collaborative
                features are amazing!"
                
              </p>
              <div className="flex mt-4 gap-3 items-center">
                <div className="avatar ml-8 relative">
                  <span className="absolute rotate-45 -top-12 left-4 size-8 bg-gray-100 z-1"></span>
                  <div className="size-16 rounded-full">
                    <img src="https://img.daisyui.com/images/profile/demo/distracted3@192.webp" />
                  </div>
                </div>
                <div className="my-auto">
                  <h2 className="card-4 font-medium">Alicia Johnson</h2>
                  <p className="text-sm text-gray-600">
                    North South University
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card card_hover">
            <div className="card-body">
            <p className="p-8 bg-gray-100 rounded-lg shadow">
                "I love the assignment management tools. They keep me organized
                and on track."
                
              </p>
              <div className="flex mt-4 gap-3 ml-8 items-center">
                <div className="avatar relative">
                  <span className="absolute rotate-45 -top-12 size-8 left-4 bg-gray-100 z-1"></span>
                  <div className="size-16 rounded-full">
                    <img src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp" />
                  </div>
                </div>
                <div className="my-auto">
                  <h2 className="card-4 font-medium">Mr. Wick</h2>
                  <p className="text-sm text-gray-600">South East University</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card card_hover">
            <div className="card-body">
            <p className="p-8 bg-gray-100 rounded-lg shadow">
                "The progress tracking feature is a game changer. I can see how
                much I've accomplished."
              </p>
              <div className="flex mt-4 gap-3 ml-8 items-center">
                <div className="avatar relative">
                <span className="absolute rotate-45 -top-12 left-4 size-8 bg-gray-100 z-1"></span>
                  <div className="size-16 rounded-full">
                    <img src="https://img.daisyui.com/images/profile/demo/distracted2@192.webp" />
                  </div>
                </div>
                <div className="my-auto">
                  <h2 className="card-4 font-medium">Alice Johnson</h2>
                  <p className="text-sm text-gray-600">
                    Daffodil International University
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
