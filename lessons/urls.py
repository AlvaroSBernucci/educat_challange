from django.urls import path

from .views import LessonListView

app_name = "lessons"
urlpatterns = [
    path("", LessonListView.as_view(), name="lesson-list")
]
