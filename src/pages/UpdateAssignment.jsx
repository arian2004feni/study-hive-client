import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from "react-router";
import axios from "axios";
import { parse } from "date-fns";

const UpdateAssignment = () => {
  const asm = useLoaderData();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  //   const [startDate, setStartDate] = useState(new Date());
  const [startDate, setStartDate] = useState(() =>
    asm.dueDate ? parse(asm.dueDate, "dd/MM/yyyy", new Date()) : null
  );
  const [difficulty, setDifficulty] = useState(asm.difficulty);

  const handleCreateAsm = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const assignment = Object.fromEntries(formData.entries());
    assignment.email = asm.email;

    axios
      .put(`http://localhost:3000/assignments/${asm._id}`, assignment)
      .then((res) => {
        console.log(res.data);
        if (!res.data.modifiedCount) {
          alert("no doc changes...");
        } else {
          alert("success");
        }
      })
      .catch((err) => alert(err));

    //
    //   alert("Assignment updated successfully!");
    // } catch (error) {
    //   alert("Failed to update assignment.");
    //   console.error(error);
    // }
  };

  return (
    <section className="bg-gray-100">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="min-h-screen max-w-3xl px-6 mx-auto py-24"
      >
        <div className="flex flex-col gap-10 bg-white px-10 py-14 rounded-2xl">
          <div className="font-body my-auto">
            <h3 className="text-4xl font-bold text-heading text-center">
              Update Assignment
            </h3>
            <p className="text-black/60 mt-6 px-8 text-center">
              Please update the details below to modify the existing assignment.
              Make any necessary changes and submit the form to save your
              updates.
            </p>
          </div>
          <div className="w-full">
            <form
              onSubmit={handleCreateAsm}
              className="grid grid-cols-2 w-full gap-6"
            >
              <label className="floating-label col-span-2 w-full">
                <span>Title</span>
                <input
                  required
                  defaultValue={asm.title}
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="input input-lg w-full"
                />
              </label>

              <select
                required
                defaultValue={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                name="difficulty"
                className="select cursor-pointer select-lg w-full text-black"
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
                  shouldCloseOnSelect
                  selected={startDate}
                  placeholderText={asm.dueDate}
                  onChange={(date) => setStartDate(date)}
                  className="cursor-pointer"
                />
              </label>

              <textarea
                required
                defaultValue={asm.description}
                name="description"
                placeholder="Description"
                className="textarea textarea-lg col-span-2 w-full"
              ></textarea>

              <label className="floating-label w-full">
                <span>Marks</span>
                <input
                  type="number"
                  defaultValue={asm.marks}
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
                  defaultValue={asm.thumbnailUrl}
                  name="thumbnailUrl"
                  type="url"
                  placeholder="Thumbnail url"
                  className="input input-lg w-full"
                />
              </label>
              <input
                type="submit"
                value="Update Assignment"
                className="btn btn-xl bg-main col-span-2"
              />
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default UpdateAssignment;
