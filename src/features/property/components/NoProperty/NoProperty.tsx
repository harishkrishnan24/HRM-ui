import { PlusSquare } from "lucide-react";

export const NoProperty = () => {
  return (
    <div className="card w-96 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">No property present</h2>
        <p>Start creating your first property to manage</p>
        <div className="card-actions">
          <button className="btn btn-primary">
            <PlusSquare /> Add New Property
          </button>
        </div>
      </div>
    </div>
  );
};
