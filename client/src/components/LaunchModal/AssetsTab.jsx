import { useEffect, useState } from "react";
import api from "../../services/api";

import "./AssetsTab.css";

function AssetsTab({ launch }) {

  const [assets, setAssets] = useState([]);

  async function loadAssets() {

    try {

      const response = await api.get(`/assets/${launch.id}`);

      setAssets(response.data);

    } catch (error) {

      console.error(error);

    }

  }

  useEffect(() => {

    loadAssets();

  }, []);

  async function handleUpload(e) {

    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();

    formData.append("file", file);

    try {

      await api.post(

        `/assets/${launch.id}`,

        formData,

        {

          headers: {

            "Content-Type": "multipart/form-data",

          },

        }

      );

      loadAssets();

    } catch (error) {

      console.error(error);

    }

  }

  async function handleDelete(assetId) {

        if (!window.confirm("Delete this asset?")) {

            return;

        }

        try {

            await api.delete(`/assets/${assetId}`);

            loadAssets();

        } catch (error) {

            console.error(error);

        }

    }

  return (

    <div className="tab-content">

      <h3>Assets</h3>

      <input

        type="file"

        onChange={handleUpload}

      />

      <div className="asset-list">

        {assets.length === 0 && (

          <p>No assets uploaded.</p>

        )}

        {assets.map((asset) => (

          <div
            className="asset-item"
            key={asset.id}
        >

            <a

                href={`http://localhost:3000/uploads/${asset.file_path}`}

                target="_blank"

                rel="noreferrer"

            >

                📎 {asset.file_name}

            </a>

            <button

                className="delete-asset"

                onClick={() => handleDelete(asset.id)}

            >

                X

            </button>

        </div>

        ))}

      </div>

    </div>

  );

}

export default AssetsTab;