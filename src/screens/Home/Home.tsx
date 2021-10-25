import React, { useEffect } from "react";
import { Student } from "../../types/FetchStudents";
import { HomeProps } from ".";

export default function Home({
  handleGetStudents,
  loading,
  students,
}: HomeProps) {
  useEffect(() => {
    handleGetStudents();
  }, [handleGetStudents]);

  if (!loading && !students) {
    return <p>"Error occured"</p>;
  }
  return (
    <div>
      {loading
        ? "loading"
        : students?.map((student: Student) => {
            return <p key={student.id}>{student.company}</p>;
          })}
    </div>
  );
}
