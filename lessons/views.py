from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Lesson
from .serializers import LessonSerializer

class LessonListView(APIView):
    def get(self, request):
        lessons = Lesson.objects.all()
        serializer = LessonSerializer(lessons, many=True)
        return Response(serializer.data)
