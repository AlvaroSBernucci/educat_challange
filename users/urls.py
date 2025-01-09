from django.urls import path

from .views import UserListView, UserDetailView, DashboardView

app_name = "users"
urlpatterns = [
    path("", UserListView.as_view(), name="user-list"),
    path("me/", UserDetailView.as_view(), name="user-detail"),
    path('dashboard/<int:pk>/', DashboardView.as_view(), name='dashboard-view'),
]
