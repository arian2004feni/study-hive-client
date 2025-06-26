import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const CreateAssignment = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <section className="bg-gray-100">
      <div className="min-h-screen max-w-3xl px-6 mx-auto py-24">
        <div className="flex flex-col gap-10 bg-white px-10 py-14 rounded-2xl">
          <div className="font-body my-auto">
            <h3 className="text-4xl font-bold text-heading text-center">
              Create New Assignment
            </h3>
            <p className="text-black/60 mt-6 px-8 text-center">
              Fill out the form below to create a new assignment for your group.
              Add a title, description, due date, and any necessary instructions
              or resources. Once submitted, your friends will be notified and
              can begin working on the assignment right away. Let’s make
              learning collaborative and productive!
            </p>
          </div>
          <div className="w-full">
            <form className="grid grid-cols-2 w-full gap-6">
              <label className="floating-label col-span-2 w-full">
                <span>Title</span>
                <input
                  type="text"
                  placeholder="title"
                  className="input input-lg w-full"
                />
              </label>

              <select defaultValue="Type" className="select select-lg w-full">
                <option disabled={true}>Type</option>
                <option>Crimson</option>
                <option>Amber</option>
                <option>Velvet</option>
              </select>

              <label className="input input-lg w-full">
                <span className="label">Publish date</span>
                {/* <input type="date" /> */}
                <DatePicker
                  isClearable
                  dateFormat="dd/MM/yyyy"
                  withPortal
                  shouldCloseOnSelect={true}
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </label>

              <textarea
                placeholder="Bio"
                className="textarea textarea-lg col-span-2 w-full"
              ></textarea>

              <label className="floating-label w-full">
                <span>Marks</span>
                <input
                  type="number"
                  placeholder="marks"
                  className="input input-lg w-full"
                />
              </label>

              <label className="floating-label w-full">
                <span>Thumbnail</span>
                <input
                  type="url"
                  placeholder="thumbnail url"
                  className="input input-lg w-full"
                />
              </label>
              <input
                type="submit"
                value="Create New Assignment"
                className="btn btn-xl bg-main col-span-2"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateAssignment;
