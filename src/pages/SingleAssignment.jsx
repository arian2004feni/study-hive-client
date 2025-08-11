import { motion, useInView } from "framer-motion";
import { useRef } from "react";
// import { FiEdit } from "react-icons/fi";
// import { MdFullscreen } from "react-icons/md";
// import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router";

const SingleAssignment = ({ asm, handleDelete }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 150 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="card mx-auto bg-base-100 rounded-lg shadow-lg max-w-sm hover-head"
    >
      <figure>
        <img
          src={asm.thumbnailUrl}
          onError={(e) =>
            (e.target.src = "https://i.ibb.co/3mzCRjmZ/image.png")
          }
          alt={asm.title}
          title={asm.title}
          className="w-full h-52 object-cover object-top"
        />
      </figure>
      <div className="card-body pt-4">
        <div className="card-actions">
          <div
            className={`badge capitalize ${
              asm.difficulty == "easy" && "badge-success text-white"
            } ${asm.difficulty == "medium" && "badge-warning text-white"}  ${
              asm.difficulty == "hard" && "badge-error text-white"
            }`}
          >
            {asm.difficulty}
          </div>
          <div className="badge badge-info badge-soft text-black/60 font-bold">
            <span className="">{asm.marks}</span> Marks
          </div>
        </div>
        <h2 className="card-title line-clamp-1">{asm.title}</h2>
        <p className="line-clamp-2">{asm.description}</p>
        <div className="card-actions mt-4 *:flex-1">
          <Link to={`/assignment/${asm._id}`} className="btn btn-sm btn-primary btn-soft">
            {/* <MdFullscreen className="bg-primary text-base-100 rounded p-[2px]" /> */}
            View
          </Link>
          <Link to={`/assignment/${asm._id}/update`} className="btn btn-sm btn-warning btn-soft">
            {/* <FiEdit className="bg-info text-white rounded p-1" /> */}
            Edit
          </Link>
          <button
            onClick={() => handleDelete(asm)}
            className="btn btn-sm btn-error btn-soft"
          >Delete</button>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleAssignment;
