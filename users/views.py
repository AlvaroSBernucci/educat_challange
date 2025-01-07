from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import User
from .serializers import UserSerializer

from lessons.models import Lesson
from lessons.serializers import LessonSerializer


class UserListView(APIView):
    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class UserDetailView(APIView):
    def get(self, request, pk):
        user = get_object_or_404(User, pk=pk)
        # user = request.user ativar com o front
        serializer = UserSerializer(user)
        return Response(serializer.data)

    def put(self, request, pk):
        user = get_object_or_404(User, pk=pk)
        # user = request.user ativar com o front
        serializer = UserSerializer(user, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class DashboardView(APIView):
    def get(self, request, pk):
        user = get_object_or_404(User, pk=pk)
        # user = request.user ativar com o front
        if not user.is_teacher:
            return Response({'error': 'Este usuário não é um professor.'}, status=status.HTTP_400_BAD_REQUEST)

        lessons = Lesson.objects.filter(teacher=user)
        serializer = LessonSerializer(lessons, many=True)

        return Response(serializer.data)
