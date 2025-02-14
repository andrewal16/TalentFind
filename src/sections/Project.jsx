import { Textarea } from "@nextui-org/input";
import AddButton from "../components/buttons/AddButton";
import InputForm from "../components/inputs/InputForm";
import NavigationButton from "../components/buttons/NavigationButton";
import BackButton from "../components/buttons/BackButton";
import { Controller } from "react-hook-form";
import { useForm, useFieldArray } from "react-hook-form";
import { BsTrash } from "react-icons/bs";
import TextAreaInput from "../components/inputs/TextAreaInput";

const Project = ({ control, clickNext, clickPrev, project }) => {
  const { handleSubmit } = useForm({
    defaultValues: { project },
    mode: "all",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "projects",
  });

  return (
    <>
      {fields.map((item, index) => (
        <div className="flex flex-col gap-4" key={item.id}>
          {index > 0 && (
            <div className="flex gap-2">
              <h1 className="lg:text-xl md:text-lg font-bold">
                Project {index + 1}
              </h1>
              <button onClick={() => remove(index)}>
                <BsTrash className="hover:text-red-500 font-bold"></BsTrash>
              </button>
            </div>
          )}
          <Controller
            control={control}
            name={`projects.${index}.name`}
            render={({ field: { onChange, onBlur, value, ref } }) => {
              return (
                <InputForm
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  ref={ref}
                  type="text"
                  label="Project Name"
                  placeholder="Enter Project Name"
                  isRequired
                ></InputForm>
              );
            }}
          />
          <Controller
            control={control}
            name={`projects.${index}.description`}
            render={({ field: { onChange, onBlur, value, ref } }) => {
              return (
                <TextAreaInput
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  ref={ref}
                  variant="flat"
                  radius="sm"
                  label="Description"
                  labelPlacement="outside"
                  placeholder="Enter Description"
                  isRequired
                ></TextAreaInput>
              );
            }}
          />
        </div>
      ))}

      <div className="flex">
        <AddButton onClick={() => append()}></AddButton>
        <NavigationButton
          clickNext={clickNext}
          clickPrev={clickPrev}
        ></NavigationButton>
      </div>
    </>
  );
};

export default Project;
