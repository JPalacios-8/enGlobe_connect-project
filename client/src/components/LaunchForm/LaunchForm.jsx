import { useEffect, useState } from "react";
import "./LaunchForm.css";

function LaunchForm({
  initialData,
  onSubmit,
  onCancel,
  submitLabel = "Create Launch",
}) {

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    market: "",
    style: "",
    segment: "",
    launch_date: "",
    end_date: "",
    creator: "",
    assigned_to: "",
    description: "",
  });

  useEffect(() => {

    if (initialData) {

      setFormData({
        name: initialData.name || "",
        category: initialData.category || "",
        market: initialData.market || "",
        style: initialData.style || "",
        segment: initialData.segment || "",
        launch_date: initialData.launch_date || "",
        end_date: initialData.end_date || "",
        creator: initialData.creator || "",
        assigned_to: initialData.assigned_to || "",
        description: initialData.description || "",
      });

    }

  }, [initialData]);

  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  }

  function handleSubmit(e) {

    e.preventDefault();

    onSubmit(formData);

  }

  return (

    <form className="launch-form" onSubmit={handleSubmit}>

      {/* GENERAL INFORMATION */}

      <div className="form-section">

        <h3>General Information</h3>

        <div className="form-group">
          <label>Launch Name *</label>

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Category *</label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select category</option>
            <option>Footwear</option>
            <option>Apparel</option>
            <option>Accessories</option>
          </select>
        </div>

        <div className="form-group">
          <label>Market *</label>

          <select
            name="market"
            value={formData.market}
            onChange={handleChange}
            required
          >
            <option value="">Select market</option>
            <option>Global</option>
            <option>North America</option>
            <option>LATAM</option>
            <option>Europe</option>
            <option>APAC</option>
          </select>
        </div>

        <div className="form-group">
          <label>Style</label>

          <input
            name="style"
            value={formData.style}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Segment *</label>

          <select
            name="segment"
            value={formData.segment}
            onChange={handleChange}
            required
          >
            <option value="">Select segment</option>
            <option>Running</option>
            <option>Football</option>
            <option>Originals</option>
            <option>Training</option>
            <option>Outdoor</option>
          </select>
        </div>

      </div>

      {/* SCHEDULE */}

      <div className="form-section">

        <h3>Schedule</h3>

        <div className="form-group">
          <label>Launch Date *</label>

          <input
            type="date"
            name="launch_date"
            value={formData.launch_date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>End Date</label>

          <input
            type="date"
            name="end_date"
            value={formData.end_date}
            onChange={handleChange}
          />
        </div>

      </div>

      {/* TEAM */}

      <div className="form-section">

        <h3>Team</h3>

        <div className="form-group">
          <label>Creator *</label>

          <select
            name="creator"
            value={formData.creator}
            onChange={handleChange}
            required
          >
            <option value="">Select creator</option>
            <option>Emma Johnson</option>
            <option>Daniel Wilson</option>
            <option>Maria Garcia</option>
            <option>Anders Johnson</option>
          </select>
        </div>

        <div className="form-group">
          <label>Assigned To *</label>

          <select
            name="assigned_to"
            value={formData.assigned_to}
            onChange={handleChange}
            required
          >
            <option value="">Select assignee</option>
            <option>Emma Johnson</option>
            <option>Daniel Wilson</option>
            <option>Maria Garcia</option>
            <option>Anders Johnson</option>
          </select>
        </div>

      </div>

      {/* DESCRIPTION */}

      <div className="form-section">

        <h3>Description</h3>

        <div className="form-group">

          <label>Description</label>

          <textarea
            rows="5"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

        </div>

      </div>

      <div className="form-buttons">

        <button
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>

        <button
          className="primary"
          type="submit"
        >
          {submitLabel}
        </button>

      </div>

    </form>

  );

}

export default LaunchForm;