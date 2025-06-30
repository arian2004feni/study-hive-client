import { motion, useInView } from "framer-motion";
import React, { use, useRef, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../AuthContext/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const CreateAssignment = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const [startDate, setStartDate] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const handleCreateAsm = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const assignment = Object.fromEntries(formData.entries());
    assignment.email = user.email;
    console.log(assignment);

    axios
      .post("http://localhost:3000/assignments", assignment)
      .then(() => {
        Swal.fire({
          title: "Successful!",
          text: "Your file has been Saved.",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
        setTimeout(() => {
          navigate("/assignment");
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "error!",
          text: "can't save your file.",
          icon: "error",
        });
      });
  };

  return (
    <section className="bg-gray-100">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="min-h-screen max-w-3xl px-6 mx-auto py-12 sm:py-20 md:py-24 "
      >
        <div className="flex flex-col gap-10 bg-white px-10 py-14 rounded-2xl">
          <div className="font-body my-auto">
            <h3 className="text-xl md:text-2xl lg:text-4xl font-bold text-heading text-center">
              Create New Assignment
            </h3>
            <p className="text-black/60 mt-6 text-xs sm:text-sm md:text-base sm:px-8 text-center">
              Fill out the form below to create a new assignment for your group.
              Add a title, description, due date, and any necessary instructions
              or resources. Once submitted, your friends will be notified and
              can begin working on the assignment right away. Let’s make
              learning collaborative and productive!
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
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="input input-sm sm:input-md md:input-lg w-full"
                />
              </label>

              <select
                required
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                name="difficulty"
                className={`select cursor-pointer select-sm sm:select-md md:select-lg w-full ${
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

              <label className="input input-sm sm:input-md md:input-lg w-full cursor-pointer">
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
                className="textarea textarea-sm sm:textarea-md md:textarea-lg col-span-2 w-full"
              ></textarea>

              <label className="floating-label w-full">
                <span>Marks</span>
                <input
                  type="number"
                  name="marks"
                  className="input input-sm sm:input-md md:input-lg"
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
                  type="text"
                  placeholder="Thumbnail url"
                  className="input input-sm sm:input-md md:input-lg w-full"
                />
              </label>
              <input
                type="submit"
                value="Create New Assignment"
                className="btn md:btn-lg lg:btn-xl bg-main col-span-2"
              />
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CreateAssignment;
