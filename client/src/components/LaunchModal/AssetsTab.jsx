import { useState } from "react";

import "./AssetsTab.css";

function AssetsTab() {

  const [files, setFiles] = useState([]);

  function handleFiles(e) {

    setFiles([...files, ...Array.from(e.target.files)]);

  }

  return (

    <div className="tab-content">

      <h3>Assets</h3>

      <input

        type="file"

        multiple

        onChange={handleFiles}

      />

      <div className="asset-list">

        {files.length === 0 && (

          <p>No assets uploaded.</p>

        )}

        {files.map((file,index)=>(

          <div

            className="asset-item"

            key={index}

          >

            📎 {file.name}

          </div>

        ))}

      </div>

    </div>

  );

}

export default AssetsTab;