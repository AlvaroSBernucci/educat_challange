from django.conf import settings
from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Lesson

User = get_user_model()  # Obtém o modelo de usuário atual configurado

class LessonSerializer(serializers.ModelSerializer):
    student_count = serializers.SerializerMethodField()
    students = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=User.objects.all(),  # Use o modelo correto
        required=False
    )

    class Meta:
        model = Lesson
        fields = ['id', 'lesson_title', 'lesson_description', 'lesson_schedule', 'teacher', 'students', 'student_count']

    def get_student_count(self, obj):
        return obj.students.count()

class LessonAddStudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = ['students']

    def update(self, instance, validated_data):
        user = self.context['request'].user
        if not user.is_teacher:
            instance.students.add(user)
        return instance
