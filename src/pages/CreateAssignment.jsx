import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const CreateAssignment = () => {
  const [startDate, setStartDate] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const handleCreateAsm = (e) => {
    e.preventDefault()

    const form = e.target;
    const formData = new FormData(form)

    const assignment = Object.fromEntries(formData.entries());
    // console.log(assignment)

    fetch('http://localhost:3000/assignments', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(assignment)
    })
    .then(req=>req.json())
    .then(res=>alert('successfull-post', res))
  }

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
            <form onSubmit={handleCreateAsm} className="grid grid-cols-2 w-full gap-6">
              <label className="floating-label col-span-2 w-full">
                <span>Title</span>
                <input
                  required
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="input input-lg w-full"
                />
              </label>

              <select
                required
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                name="difficulty"
                className={`select cursor-pointer select-lg w-full ${
                  difficulty == "" ? "text-black/50" : "text-black"
                }`}
              >
                <option value="" disabled={true}>
                  Difficulty:
                </option>
                <option className="text-black" value="easy">
                  Easy
                </option>
                <option className="text-black" value="medium">
                  Medium
                </option>
                <option className="text-black" value="hard">
                  Hard
                </option>
              </select>

              <label className="input input-lg w-full cursor-pointer">
                <span className="label">Due date:</span>
                {/* <input type="date" /> */}
                <DatePicker
                  required
                  name="dueDate"
                  dateFormat="dd/MM/yyyy"
                  withPortal
                  shouldCloseOnSelect
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="cursor-pointer"
                />
              </label>

              <textarea
                required
                name="description"
                placeholder="Description"
                className="textarea textarea-lg col-span-2 w-full"
              ></textarea>

              <label className="floating-label w-full">
                <span>Marks</span>
                <input
                  type="number"
                  name="marks"
                  className="input input-lg"
                  required
                  placeholder="Marks"
                  min="1"
                  max="100"
                  title="Must be between be 1 to 100"
                />
              </label>

              <label className="floating-label w-full">
                <span>Thumbnail URL</span>
                <input
                required
                name="thumbnailUrl"
                  type="url"
                  placeholder="Thumbnail url"
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
