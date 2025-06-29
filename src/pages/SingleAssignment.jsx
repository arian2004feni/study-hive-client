import { FiEdit } from "react-icons/fi";
import { MdFullscreen } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router";

const SingleAssignment = ({ asm , handleDelete}) => {

  return (
    <div className="card mx-auto bg-base-300 rounded-lg shadow-sm max-w-sm hover-head">
      <figure className="relative">
        <img
          src={asm.thumbnailUrl}
          onError={(e) =>
            (e.target.src = "https://i.ibb.co/3mzCRjmZ/image.png")
          }
          alt={asm.title}
          title={asm.title}
          className="w-full h-52 md:h-44 lg:h-48 xl:h-52"
        />
        <div className="bg-base-100 flex gap-1 absolute bottom-1 right-1 text-3xl p-2 rounded hover-element">
          <Link to={`/assignment/${asm._id}`}>
            <MdFullscreen className="bg-primary text-base-100 rounded p-[2px]" />
          </Link>
          <Link to={`/assignment/${asm._id}/update`}>
            <FiEdit className="bg-info text-white rounded p-1" />
          </Link>
          <RiDeleteBin6Line
            onClick={() => handleDelete(asm)}
            className="bg-warning text-base-100 rounded p-1 cursor-pointer"
          />
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{asm.title}</h2>
        <p>{asm.description}</p>
        <div className="card-actions justify-end">
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
      </div>
    </div>
  );
};

export default SingleAssignment;
