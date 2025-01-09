import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { getTeacherLessons } from "../api/users.api";
import { LessonCard } from "../components/LessonCard";

export default function TeacherDashboard() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    async function loadTeacherLessons() {
      const response = await getTeacherLessons();
      setLessons(response.data);
    }
    loadTeacherLessons();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">Dashboard</h2>
      <div className="row gx-3 gy-3">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
}
