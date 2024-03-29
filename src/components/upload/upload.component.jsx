import React from "react";
import "./upload.style.scss";

const Upload = () => {
  return (
    <div class="container">
      <div class="card">
        <h3>Upload Files</h3>
        <div class="drop_box">
          <header>
            <h4>Select File here</h4>
          </header>
          <p>Files Supported: PDF, TEXT, DOC , DOCX</p>
          <input
            type="file"
            hidden
            accept=".doc,.docx,.pdf"
            id="fileID"
            // style="display:none;"
          />
          <button class="btn">Choose File</button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
