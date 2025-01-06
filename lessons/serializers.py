from rest_framework import serializers

from .models import Lesson

class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = ['id', 'lesson_title', 'lesson_description', 'lesson_schedule', 'teacher', 'student_count']

    def get_student_count(self, obj):
        return obj.students.count()
