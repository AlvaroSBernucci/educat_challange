from django.urls import path



from .views import UserListView, UserDetailView, DashboardView, TeacherDetailView


app_name = "users"

urlpatterns = [
    path("", UserListView.as_view(), name="user-list"),
    path("me/", UserDetailView.as_view(), name="user-detail"),
    path('current-teacher/<int:pk>/', TeacherDetailView.as_view(), name='teacher-view'),
    path('dashboard/', DashboardView.as_view(), name='dashboard-view'),
]
