// src/components/UserForm.tsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetForm, setFormState } from "../features/formSlice";
import { RootState } from "../store";

const UserForm: React.FC = () => {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form.formData);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    // Explicitly cast the e.target to HTMLInputElement to access the checked property
    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    dispatch(setFormState({ [name]: newValue }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can access the complete form state from formState and perform any further actions if needed
    console.log("Form State:", formState);
    dispatch(resetForm());
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <div>
        <label className="block font-medium">
          Name:
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
      </div>
      <div>
        <label className="block font-medium">
          Email:
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
      </div>
      <div>
        <label className="block font-medium">
          Gender:
          <select
            name="gender"
            value={formState.gender}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
      </div>
      <div>
        <label className="block font-medium">
          Newsletter:
          <input
            type="checkbox"
            name="newsletter"
            checked={formState.newsletter}
            onChange={handleChange}
            className="mt-1 rounded"
          />
        </label>
      </div>
      <div>
        <label className="block font-medium">
          Comments:
          <textarea
            name="comments"
            value={formState.comments}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
      </div>
      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm;
