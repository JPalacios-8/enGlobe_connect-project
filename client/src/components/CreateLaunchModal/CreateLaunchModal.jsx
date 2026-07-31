import "./CreateLaunchModal.css";

import api from "../../services/api";
import LaunchForm from "../LaunchForm/LaunchForm";

function CreateLaunchModal({
  launch,
  initialDate,
  onClose,
  loadLaunches,
}) {

  const isEditing = !!launch;

  async function handleSubmit(formData) {

    try {

      if (isEditing) {

        await api.put(
          `/launches/${launch.id}`,
          formData
        );

      } else {

        await api.post(
          "/launches",
          formData
        );

      }

      await loadLaunches();

      onClose();

    } catch (error) {

      console.error(error);

    }

  }

  return (

    <aside className="create-modal">

      <div className="create-header">

        <h2>

          {isEditing
            ? "Edit Launch"
            : "Create New Launch"}

        </h2>

        <button
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>

      </div>

      <LaunchForm

        initialData={
            launch
                ? launch
                : { launch_date: initialDate }
        }

        onSubmit={handleSubmit}

        onCancel={onClose}

        submitLabel={
          isEditing
            ? "Save Changes"
            : "Create Launch"
        }

      />

    </aside>

  );

}

export default CreateLaunchModal;