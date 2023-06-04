import { useState } from "react";
import DynamicFormInput from "./components/DynamicFormInput";
import dbForm from "./lmp_db.json";
import { LMPPostFormInterface } from "./types/PostFormInterface";

function App() {
  const [postData, setPostData] = useState<LMPPostFormInterface>({
    name: "",
    gender: "",
    city: "",
    phone: "",
    note: "",
  })

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(postData)
  }

  return (
    <>
      <div className="flex justify-center py-5">
        <form action="" onSubmit={(e) => onSubmit(e)}>
          {
            dbForm.map(dbInput => {
              return (
                <DynamicFormInput formData={dbInput} setPostData={setPostData} key={dbInput.formName} />
              )
            })
          }
        </form>
      </div>
    </>
  )
}

export default App;
