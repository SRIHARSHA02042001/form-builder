import { ReactFormBuilder } from "react-form-builder2";
import 'react-form-builder2/dist/app.css';
import {HTML5Backend} from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { useState } from "react";
function App() {
  const [formData, setFormData] = useState(null);

  const handleSave = (data) => {
    setFormData(data);
  };

  return (
    <DndProvider backend={HTML5Backend}>
    <div>
      <h1>Form Builder</h1>
      <ReactFormBuilder
        toolbarPosition="top"
        onSave={handleSave}
        edit
        formData={formData}
      />
      {formData && (
        <div>
          <h2>Preview:</h2>
          <ReactFormBuilder.ReactFormPreview data={formData} />
        </div>
      )}
    </div>
  </DndProvider>
  );
}

export default App;
