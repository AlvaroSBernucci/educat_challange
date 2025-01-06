from django.urls import path

from .views import LessonListView, LessonDetailView, AddStudentToLessonView

app_name = "lessons"
urlpatterns = [
    path("", LessonListView.as_view(), name="lesson-list"),
    path("<int:pk>/", LessonDetailView.as_view(), name="lesson-detail"),
    path('<int:pk>/add_student/', AddStudentToLessonView.as_view(), name='add-student-to-lesson'),
]
